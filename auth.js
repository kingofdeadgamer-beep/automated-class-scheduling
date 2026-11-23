// 1. Verify Teacher authentication immediately when opening index.html
const currentUserRaw = localStorage.getItem(APP_CONFIG.SESSION_KEY);
if (!currentUserRaw) {
  window.location.href = 'login.html?role=teacher';
}
const CURRENT_USER = JSON.parse(currentUserRaw || '{}');

// Global sync state flags to prevent polling race conditions during teacher edits/deletions
window.isSyncingToCloud = false;
window.lastCloudSaveCompletedAt = 0;

// 2. Bind teacher info & sync tooltip to the top bar status icon
window.addEventListener('DOMContentLoaded', () => {
  const statusEl = document.getElementById('cloud-sync-status');
  if (statusEl && CURRENT_USER.fullname) {
    statusEl.title = `${CURRENT_USER.fullname} • ออนไลน์ (คลิกเพื่อซิงก์ข้อมูลจากนักเรียน)`;
    statusEl.innerHTML = '<i class="fa-solid fa-cloud-check text-emerald-600"></i>';
  }
});

// 3. Logout handler -> routes back to unified role-selection login page
function performLogout() {
  localStorage.removeItem(APP_CONFIG.SESSION_KEY);
  localStorage.removeItem('SMART_SEATING_CHART_STATE_V2');
  window.location.href = 'login.html?role=teacher&switch=1';
}

function logoutUser() {
  if (typeof confirmLogout === 'function') {
    confirmLogout();
  } else if (window.confirm('คุณต้องการออกจากระบบใช่หรือไม่?')) {
    performLogout();
  }
}

// 4. Auto-sync classroom state to Google Sheets (debounced 1.2s, or immediate for deletions)
let syncTimeout = null;
function syncStateToCloud(stateObj, immediate = false) {
  const statusEl = document.getElementById('cloud-sync-status');
  const teacherLabel = CURRENT_USER.fullname ? `${CURRENT_USER.fullname} • ` : '';

  if (statusEl) {
    statusEl.innerHTML = '<i class="fa-solid fa-arrows-rotate fa-spin text-amber-500"></i>';
    statusEl.title = `${teacherLabel}กำลังบันทึกข้อมูลขึ้น Cloud...`;
  }

  const doPush = async () => {
    window.isSyncingToCloud = true;
    try {
      await fetch(APP_CONFIG.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'saveState',
          username: CURRENT_USER.username,
          stateJson: JSON.stringify(stateObj)
        })
      });
      window.lastCloudSaveCompletedAt = Date.now();
      if (statusEl) {
        statusEl.innerHTML = '<i class="fa-solid fa-cloud-check text-emerald-600"></i>';
        statusEl.title = `${teacherLabel}บันทึกข้อมูลบน Cloud แล้ว (คลิกเพื่อซิงก์ล่าสุด)`;
      }
    } catch (e) {
      if (statusEl) {
        statusEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-rose-500"></i>';
        statusEl.title = `${teacherLabel}ออฟไลน์ (บันทึกไว้ในเครื่องชั่วคราว)`;
      }
    } finally {
      window.isSyncingToCloud = false;
    }
  };

  clearTimeout(syncTimeout);
  if (immediate) {
    doPush();
  } else {
    syncTimeout = setTimeout(doPush, 1200);
  }
}
