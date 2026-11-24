/**
 * Seamless Multi-Language Switcher (TH / EN / ZH)
 * Lossless switching across login.html, student.html, and index.html
 */
(function (global) {
  const LANG_STORAGE_KEY = 'SMART_SEATING_LANG';
  const SUPPORTED_LANGS = ['th', 'en', 'zh'];

  const LANG_META = {
    th: { code: 'th', short: 'TH', flag: '🇹🇭', name: 'ภาษาไทย', native: 'ไทย' },
    en: { code: 'en', short: 'EN', flag: '🇺🇸', name: 'English', native: 'English' },
    zh: { code: 'zh', short: 'ZH', flag: '🇨🇳', name: '中文', native: '中文' }
  };

  // Key-based translations for explicit data-i18n & t() calls
  const DICT = {
    // --- Common ---
    'app.brand': { th: 'Smart Classroom Cloud', en: 'Smart Classroom Cloud', zh: 'Smart Classroom Cloud' },
    'common.language': { th: 'ภาษา', en: 'Language', zh: '语言' },
    'common.cancel': { th: 'ยกเลิก', en: 'Cancel', zh: '取消' },
    'common.save': { th: 'บันทึก', en: 'Save', zh: '保存' },
    'common.close': { th: 'ปิด', en: 'Close', zh: '关闭' },
    'common.confirm': { th: 'ยืนยัน', en: 'Confirm', zh: '确认' },
    'common.logout': { th: 'ออกจากระบบ', en: 'Log Out', zh: '退出登录' },
    'common.sync': { th: 'ซิงก์ข้อมูล', en: 'Sync Data', zh: '同步数据' },
    'common.settings': { th: 'ตั้งค่า', en: 'Settings', zh: '设置' },
    'common.theme': { th: 'สลับโหมดสี', en: 'Toggle Theme', zh: '切换主题' },

    // --- Login Page ---
    'login.title': { th: 'เข้าสู่ระบบ | Smart Classroom', en: 'Sign In | Smart Classroom', zh: '登录 | Smart Classroom' },
    'login.subtitle': { th: 'ระบบจัดการห้องเรียนอัจฉริยะสำหรับครูและนักเรียน', en: 'Smart Classroom Management for Teachers & Students', zh: '师生智能课堂管理系统' },
    'login.select_role': { th: 'เลือกบทบาทผู้ใช้งาน', en: 'Choose Your Role', zh: '选择您的身份' },
    'login.role_teacher': { th: 'ครูผู้สอน', en: 'Teacher', zh: '教师' },
    'login.role_teacher_desc': { th: 'จัดผังที่นั่ง เช็คชื่อ และมอบหมายงาน', en: 'Seating chart, attendance & tasks', zh: '座位表、考勤与任务管理' },
    'login.role_student': { th: 'นักเรียน', en: 'Student', zh: '学生' },
    'login.role_student_desc': { th: 'สแกน QR ดูที่นั่ง เช็คชื่อ ส่งงาน', en: 'Scan QR, view seat & missions', zh: '扫码入班、查看座位与任务' },
    'login.tab_login': { th: 'เข้าสู่ระบบ', en: 'Sign In', zh: '登录' },
    'login.tab_register': { th: 'สมัครสมาชิกใหม่', en: 'Create Account', zh: '注册新账号' },
    'login.teacher_user_label': { th: 'ชื่อผู้ใช้งานครู (Username)', en: 'Teacher Username', zh: '教师用户名' },
    'login.student_user_label': { th: 'ชื่อผู้ใช้งานนักเรียน (Username)', en: 'Student Username', zh: '学生用户名' },
    'login.user_placeholder': { th: 'กรอกชื่อผู้ใช้งานของคุณ', en: 'Enter your username', zh: '请输入用户名' },
    'login.password_label': { th: 'รหัสผ่าน (Password)', en: 'Password', zh: '密码' },
    'login.password_placeholder': { th: 'กรอกรหัสผ่าน', en: 'Enter your password', zh: '请输入密码' },
    'login.forgot_password': { th: 'ลืมรหัสผ่าน?', en: 'Forgot password?', zh: '忘记密码？' },
    'login.btn_login': { th: 'เข้าสู่ระบบ', en: 'Sign In', zh: '立即登录' },
    'login.btn_register_teacher': { th: 'สมัครสมาชิกครูผู้สอน', en: 'Register Teacher Account', zh: '注册教师账号' },
    'login.btn_register_student': { th: 'สมัครสมาชิกนักเรียน', en: 'Register Student Account', zh: '注册学生账号' },
    'login.back_to_login': { th: 'กลับไปหน้าเข้าสู่ระบบ', en: 'Back to Sign In', zh: '返回登录' },
    'login.quick_tip_teacher': { th: 'เคล็ดลับ: หลังเข้าสู่ระบบ สามารถแชร์ QR ให้เด็กสแกนเข้าห้องได้ทันที', en: 'Tip: Once signed in, share a QR code for students to join instantly.', zh: '提示：登录后可生成二维码，让学生扫码快速加入班级。' },
    'login.quick_tip_student': { th: 'เคล็ดลับ: สมัครครั้งเดียว ใช้สแกน QR เข้าได้ทุกวิชา', en: 'Tip: Register once and scan any teacher’s QR code to join.', zh: '提示：一次注册，即可扫码加入任意老师的课堂。' },

    // --- Student Portal ---
    'st.page_title': { th: 'ระบบสำหรับนักเรียน | Smart Classroom Student', en: 'Student Portal | Smart Classroom', zh: '学生端 | Smart Classroom' },
    'st.not_connected': { th: 'ยังไม่ได้เชื่อมต่อห้องเรียน', en: 'Not connected to a classroom', zh: '尚未加入班级' },
    'st.connected_pill': { th: 'เชื่อมต่อห้องเรียนแล้ว', en: 'Connected to Classroom', zh: '已连接班级' },
    'st.nav_all': { th: 'ทั้งหมด', en: 'Overview', zh: '全部' },
    'st.nav_scan': { th: 'สแกน QR', en: 'Scan QR', zh: '扫码入班' },
    'st.nav_seat': { th: 'ที่นั่ง & กลุ่ม', en: 'My Seat', zh: '座位与小组' },
    'st.nav_tasks': { th: 'ภารกิจ', en: 'Missions', zh: '作业任务' },
    'st.nav_help': { th: 'ถามครู', en: 'Ask Teacher', zh: '举手提问' },
    'st.hero_motivation': { th: 'พร้อมลุยภารกิจในห้องเรียนวันนี้กันหรือยัง?', en: 'Ready to conquer today’s classroom missions?', zh: '准备好完成今天的课堂任务了吗？' },
    'st.hero_mission_title': { th: 'ภารกิจวันนี้', en: "Today's Missions", zh: '今日任务' },
    'st.pill_join': { th: '✓ เข้าห้อง', en: '✓ Joined', zh: '✓ 已入班' },
    'st.pill_checkin': { th: '• เช็คชื่อ', en: '• Check-in', zh: '• 签到' },
    'st.pill_tasks': { th: '• ส่งงาน', en: '• Tasks', zh: '• 交作业' },
    'st.onboarding_title': { th: 'เริ่มต้นใช้งานง่ายๆ ใน 3 ขั้นตอน', en: 'Get Started in 3 Easy Steps', zh: '轻松 3 步开启课堂' },
    'st.onboarding_s1': { th: 'สแกน QR หน้าจอครู หรือพิมพ์ชื่อผู้ใช้ครู', en: 'Scan teacher’s QR or enter teacher username', zh: '扫描老师屏幕二维码或输入教师用户名' },
    'st.onboarding_s2': { th: 'เลือกชื่อของคุณ & ดูตำแหน่งโต๊ะเรียน', en: 'Pick your name & view your seat map', zh: '认领你的名字并查看座位图' },
    'st.onboarding_s3': { th: 'เช็คชื่อ ส่งงาน และยกมือถามครูได้ทันที', en: 'Check in, submit tasks & raise hand anytime', zh: '一键签到、提交作业、随时举手提问' },
    'st.qr_title': { th: 'สแกน QR / เชื่อมต่อห้องเรียน', en: 'Scan QR / Join Classroom', zh: '扫码 / 加入班级' },
    'st.qr_sub': { th: 'สแกน QR หน้าจอครูเพื่อเข้าห้องเรียน หรือสแกน QR ใบงาน', en: 'Scan classroom QR to join or worksheet QR to open', zh: '扫描课堂二维码入班或扫描任务二维码' },
    'st.qr_ready': { th: 'พร้อมสแกน', en: 'Ready', zh: '准备就绪' },
    'st.btn_open_cam': { th: 'เปิดกล้องสแกน', en: 'Open Camera', zh: '打开相机扫码' },
    'st.btn_pick_img': { th: 'เลือกรูป QR', en: 'Upload QR Image', zh: '从相册选图' },
    'st.manual_placeholder': { th: 'วางลิงก์ห้องเรียน หรือพิมพ์ Username ครู...', en: 'Paste classroom link or teacher username...', zh: '粘贴班级链接或输入教师用户名...' },
    'st.btn_join': { th: 'เข้าร่วม', en: 'Join', zh: '加入' },
    'st.btn_leave': { th: 'ออกห้อง', en: 'Leave', zh: '退出班级' },
    'st.seat_label': { th: 'ตำแหน่งโต๊ะเรียนของคุณ', en: 'Your Assigned Seat', zh: '你的专属座位' },
    'st.minimap_title': { th: 'แผนผังห้องเรียน (ตำแหน่งของคุณ)', en: 'Classroom Mini-Map (Your Spot)', zh: '教室微缩地图（你的位置）' },
    'st.minimap_board': { th: 'กระดานหน้าห้อง', en: 'Front Board', zh: '讲台 / 黑板' },
    'st.avatar_pick_title': { th: 'เลือกตัวการ์ตูนประจำตัว', en: 'Choose Your Cartoon Character', zh: '选择你的卡通形象' },
    'st.roster_label': { th: 'ชื่อของคุณในผังที่นั่งห้องนี้:', en: 'Your name on this seating chart:', zh: '你在本班座位表中的名字：' },
    'st.checkin_title': { th: 'เช็คชื่อเข้าเรียนวันนี้', en: 'Check In for Today’s Class', zh: '今日课堂签到' },
    'st.checkin_sub': { th: 'แตะเพื่อยืนยันการเข้าเรียนกับครู', en: 'Tap to confirm your attendance with teacher', zh: '点击向老师确认出勤' },
    'st.checkin_badge': { th: 'แตะเช็คชื่อ', en: 'Check In', zh: '点击签到' },
    'st.help_title': { th: 'ยกมือขอความช่วยเหลือ', en: 'Raise Hand for Help', zh: '举手向老师求助' },
    'st.help_sub': { th: 'โต๊ะของคุณบนหน้าจอครูจะกะพริบแจ้งเตือนทันที', en: 'Your desk will flash on the teacher’s screen right away', zh: '你的座位将在老师屏幕上立即闪烁提醒' },
    'st.help_normal': { th: 'ปกติ', en: 'Idle', zh: '正常' },
    'st.help_placeholder': { th: 'พิมพ์สิ่งที่สงสัยถึงครู หรือแตะปุ่มด่วนด้านบน...', en: 'Type your question or tap a quick chip above...', zh: '输入你的问题或点击上方快捷标签...' },
    'st.help_btn': { th: '🙋 กดยกมือขอความช่วยเหลือ', en: '🙋 Raise Hand Now', zh: '🙋 举手请求帮助' },
    'st.tasks_title': { th: 'ภารกิจงานที่ได้รับมอบหมาย', en: 'Assigned Missions & Tasks', zh: '课堂作业与任务' },
    'st.tasks_sub': { th: 'ส่งงานแล้วกดยืนยัน สถานะจะซิงก์ไปหน้าจอครูทันที', en: 'Mark done to sync your progress to the teacher', zh: '完成后点击确认，状态将实时同步给老师' },
    'st.logout_title': { th: 'ยืนยันการออกจากระบบ?', en: 'Confirm Log Out?', zh: '确认退出登录？' },
    'st.logout_desc': { th: 'คุณต้องการออกจากระบบนักเรียนเพื่อกลับไปหน้าเลือกบทบาทใช่หรือไม่?', en: 'Do you want to log out and return to the role selection screen?', zh: '确定要退出学生账号并返回身份选择页面吗？' },

    // --- Teacher Index Page ---
    'idx.page_title': { th: 'ระบบจัดผังที่นั่งนักเรียนอัจฉริยะ | Smart Seating Chart', en: 'Smart Seating Chart | Teacher Dashboard', zh: '智能座位表系统 | 教师端' },
    'idx.quick_guide': { th: 'คู่มือเริ่มต้นใช้งานด่วน', en: 'Quick Start Guide', zh: '快速上手指南' }
  };

  // Seamless phrase map for auto-translating existing Thai UI text in index.html / student.html / login.html
  const PHRASE_MAP = [
    ['ยังไม่ได้เชื่อมต่อห้องเรียน', 'Not connected to a classroom', '尚未加入班级'],
    ['เชื่อมต่อห้องเรียนแล้ว', 'Connected to Classroom', '已连接班级'],
    ['สแกน QR / เชื่อมต่อห้องเรียน', 'Scan QR / Join Classroom', '扫码 / 加入班级'],
    ['เปิดกล้องสแกน', 'Open Camera', '打开相机扫码'],
    ['เลือกรูป QR', 'Upload QR Image', '选择二维码图片'],
    ['เข้าร่วม', 'Join', '加入'],
    ['ออกห้อง', 'Leave', '退出'],
    ['ตำแหน่งโต๊ะเรียนของคุณ', 'Your Assigned Seat', '你的专属座位'],
    ['เช็คชื่อเข้าเรียนวันนี้', 'Check In for Today’s Class', '今日课堂签到'],
    ['แตะเช็คชื่อ', 'Check In', '点击签到'],
    ['ยกมือขอความช่วยเหลือ', 'Raise Hand for Help', '举手求助'],
    ['ภารกิจงานที่ได้รับมอบหมาย', 'Assigned Missions & Tasks', '课堂作业任务'],
    ['เข้าสู่ระบบ', 'Sign In', '登录'],
    ['สมัครสมาชิกใหม่', 'Register', '注册新账号'],
    ['ออกจากระบบ', 'Log Out', '退出登录'],
    ['ตั้งค่าการแสดงผลและปรับแต่งหน้าจอ', 'Display & Appearance Settings', '显示与外观设置'],
    ['รายชื่อนักเรียน', 'Student Roster', '学生名单'],
    ['เพิ่มนักเรียน', 'Add Student', '添加学生'],
    ['นำเข้ารายชื่อ', 'Import Roster', '导入名单'],
    ['สุ่มเรียกชื่อ', 'Random Picker', '随机点名'],
    ['จัดที่นั่งอัตโนมัติ', 'Smart Auto-Assign', '智能排座'],
    ['จัดกลุ่มคละความสามารถ', 'Mixed-Ability Groups', '混合能力分组'],
    ['กระดานหน้าห้อง', 'Front Board', '讲台 / 黑板'],
    ['หน้าห้องเรียน', 'Front of Classroom', '教室前方'],
    ['หลังห้องเรียน', 'Back of Classroom', '教室后方'],
    ['นั่งแล้ว', 'Seated', '已入座'],
    ['ยังไม่นั่ง', 'Unassigned', '未入座'],
    ['มาเรียน', 'Present', '出勤'],
    ['ส่งงานแล้ว', 'Submitted', '已提交'],
    ['บันทึก', 'Save', '保存'],
    ['ยกเลิก', 'Cancel', '取消'],
    ['ปิด', 'Close', '关闭'],
    ['ยืนยัน', 'Confirm', '确认'],
    ['โหมดกลางคืน', 'Dark Mode', '深色模式'],
    ['โหมดสว่าง', 'Light Mode', '浅色模式']
  ];

  function getLang() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      return SUPPORTED_LANGS.includes(saved) ? saved : 'th';
    } catch (e) {
      return 'th';
    }
  }

  function t(key, vars) {
    const lang = getLang();
    const entry = DICT[key];
    let str = entry ? (entry[lang] || entry.th || key) : key;
    if (vars && typeof vars === 'object') {
      Object.keys(vars).forEach((k) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(vars[k]));
      });
    }
    return str;
  }

  function translatePhrase(text, lang) {
    if (!text || typeof text !== 'string') return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    const idx = lang === 'en' ? 1 : lang === 'zh' ? 2 : 0;
    for (let i = 0; i < PHRASE_MAP.length; i++) {
      if (trimmed === PHRASE_MAP[i][0]) {
        return text.replace(trimmed, PHRASE_MAP[i][idx]);
      }
    }
    return text;
  }

  function applyTranslations(root) {
    const lang = getLang();
    const scope = root || document;
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    }

    // 1. Explicit data-i18n attributes
    scope.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && DICT[key]) {
        el.textContent = t(key);
      }
    });
    scope.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (key && DICT[key]) {
        el.innerHTML = t(key);
      }
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && DICT[key]) {
        el.setAttribute('placeholder', t(key));
      }
    });
    scope.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (key && DICT[key]) {
        el.setAttribute('title', t(key));
      }
    });

    // 2. Lossless phrase translation for elements with title/placeholder not using data-i18n
    scope.querySelectorAll('[title]').forEach((el) => {
      if (el.hasAttribute('data-i18n-title')) return;
      if (!el.dataset.i18nOrigTitle) {
        el.dataset.i18nOrigTitle = el.getAttribute('title') || '';
      }
      const orig = el.dataset.i18nOrigTitle;
      el.setAttribute('title', lang === 'th' ? orig : translatePhrase(orig, lang));
    });

    // 3. Update any mounted language switcher badges
    updateSwitcherBadges(lang);
  }

  function updateSwitcherBadges(lang) {
    const meta = LANG_META[lang] || LANG_META.th;
    document.querySelectorAll('[data-lang-badge]').forEach((el) => {
      el.textContent = meta.short;
    });
    document.querySelectorAll('[data-lang-flag]').forEach((el) => {
      el.textContent = meta.flag;
    });
    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      const code = btn.getAttribute('data-lang-option');
      if (code === lang) {
        btn.classList.add('bg-indigo-600', 'text-white', 'font-extrabold');
        btn.classList.remove('text-slate-800', 'hover:bg-slate-100');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white', 'font-extrabold');
        btn.classList.add('text-slate-800', 'hover:bg-slate-100');
      }
    });
  }

  function setLang(lang) {
    const next = SUPPORTED_LANGS.includes(lang) ? lang : 'th';
    try {
      localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch (e) {}
    applyTranslations(document);
    // Close any open language dropdowns
    document.querySelectorAll('.smart-lang-dropdown').forEach((d) => d.classList.add('hidden'));
    try {
      window.dispatchEvent(new CustomEvent('smart-lang-change', { detail: { lang: next } }));
    } catch (e) {}
  }

  function cycleLang() {
    const cur = getLang();
    const next = SUPPORTED_LANGS[(SUPPORTED_LANGS.indexOf(cur) + 1) % SUPPORTED_LANGS.length];
    setLang(next);
  }

  function toggleLangDropdown(event, dropdownId) {
    if (event) event.stopPropagation();
    const el = document.getElementById(dropdownId || 'smart-lang-dropdown');
    if (!el) {
      cycleLang();
      return;
    }
    el.classList.toggle('hidden');
  }

  // Close dropdown on outside click
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.smart-lang-switcher-wrap')) {
        document.querySelectorAll('.smart-lang-dropdown').forEach((d) => d.classList.add('hidden'));
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations(document);
    });
  }

  global.SmartI18n = {
    LANG_META,
    SUPPORTED_LANGS,
    getLang,
    setLang,
    cycleLang,
    toggleLangDropdown,
    t,
    applyTranslations
  };
  global.t = t;
})(window);
