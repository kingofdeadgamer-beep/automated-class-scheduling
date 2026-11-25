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
    'common.back': { th: 'ย้อนกลับ', en: 'Back', zh: '返回' },
    'common.logout': { th: 'ออกจากระบบ', en: 'Log Out', zh: '退出登录' },
    'common.sync': { th: 'ซิงก์ข้อมูล', en: 'Sync Data', zh: '同步数据' },
    'common.settings': { th: 'ตั้งค่า', en: 'Settings', zh: '设置' },
    'common.theme': { th: 'สลับโหมดสี', en: 'Toggle Theme', zh: '切换主题' },
    'common.scale_title': { th: 'ปรับขนาดทั้งหมด (Zoom)', en: 'Overall Zoom Scale', zh: '整体缩放比例' },
    'common.scale_sub': { th: 'เลือกได้ตั้งแต่ 25% ถึง 150%', en: 'Adjustable from 25% to 150%', zh: '可在 25% 至 150% 之间调节' },

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
    'login.forgot_title': { th: 'กู้คืนและรีเซ็ตรหัสผ่าน', en: 'Recover & Reset Password', zh: '找回与重置密码' },
    'login.forgot_teacher_sub': { th: 'สำหรับบัญชีครูผู้สอน (Teacher Account)', en: 'For Teacher Accounts', zh: '适用于教师账号' },
    'login.forgot_student_sub': { th: 'สำหรับบัญชีนักเรียน (Student Account)', en: 'For Student Accounts', zh: '适用于学生账号' },
    'login.forgot_teacher_verify': { th: 'ยืนยันด้วย ชื่อ-นามสกุล หรือ ชื่อโรงเรียน ที่ลงทะเบียนไว้', en: 'Verify with your registered Full Name or School Name', zh: '使用注册时的姓名或学校名称进行验证' },
    'login.forgot_student_verify': { th: 'ยืนยันด้วย ชื่อ-นามสกุล หรือ ชื่อเล่น ที่ลงทะเบียนไว้', en: 'Verify with your registered Full Name or Nickname', zh: '使用注册时的姓名或昵称进行验证' },
    'login.forgot_btn_verify': { th: 'ตรวจสอบบัญชีเพื่อรีเซ็ตรหัสผ่าน', en: 'Verify Account to Reset Password', zh: '验证账号以重置密码' },
    'login.forgot_verified_ok': { th: 'ยืนยันตัวตนสำเร็จ!', en: 'Identity Verified!', zh: '身份验证成功！' },
    'login.forgot_new_pw': { th: 'ตั้งรหัสผ่านใหม่ (New Password)', en: 'New Password', zh: '设置新密码' },
    'login.forgot_confirm_pw': { th: 'ยืนยันรหัสผ่านใหม่ (Confirm Password)', en: 'Confirm New Password', zh: '确认新密码' },
    'login.forgot_save_pw': { th: 'บันทึกรหัสผ่านใหม่', en: 'Save New Password', zh: '保存新密码' },
    'login.reg_teacher_fullname': { th: 'ชื่อ-นามสกุล (ครูผู้สอน)', en: 'Full Name (Teacher)', zh: '教师姓名' },
    'login.reg_teacher_school': { th: 'โรงเรียน / สถานศึกษา', en: 'School / Institution', zh: '学校 / 机构' },
    'login.reg_username': { th: 'ตั้งชื่อผู้ใช้งาน (Username ภาษาอังกฤษ/ตัวเลข)', en: 'Username (Letters/Numbers)', zh: '设置用户名（英文或数字）' },
    'login.reg_password': { th: 'ตั้งรหัสผ่าน (Password)', en: 'Create Password', zh: '设置密码' },
    'login.reg_st_num': { th: 'เลขที่', en: 'No.', zh: '座号' },
    'login.reg_st_nick': { th: 'ชื่อเล่น', en: 'Nickname', zh: '昵称' },
    'login.reg_st_fullname': { th: 'ชื่อ-นามสกุลจริง', en: 'Full Name', zh: '真实姓名' },
    'login.reg_st_class': { th: 'ระดับชั้น / ห้องเรียน', en: 'Grade / Classroom', zh: '年级 / 班级' },
    'login.reg_st_user': { th: 'รหัสนักเรียน / Username', en: 'Student ID / Username', zh: '学号 / 用户名' },

    // --- Student Portal ---
    'st.page_title': { th: 'ระบบสำหรับนักเรียน | Smart Classroom Student', en: 'Student Portal | Smart Classroom', zh: '学生端 | Smart Classroom' },
    'st.default_name': { th: 'นักเรียน', en: 'Student', zh: '学生' },
    'st.not_connected': { th: 'ยังไม่ได้เชื่อมต่อห้องเรียน', en: 'Not connected to a classroom', zh: '尚未加入班级' },
    'st.not_joined': { th: 'ยังไม่ได้เข้าร่วมห้องเรียน', en: 'Not joined a classroom yet', zh: '尚未加入任何班级' },
    'st.connected_pill': { th: 'เชื่อมต่อห้องเรียนแล้ว', en: 'Connected to Classroom', zh: '已连接班级' },
    'st.nav_all': { th: 'ทั้งหมด', en: 'Overview', zh: '全部' },
    'st.nav_scan': { th: 'สแกน QR', en: 'Scan QR', zh: '扫码入班' },
    'st.nav_seat': { th: 'ที่นั่ง & กลุ่ม', en: 'My Seat', zh: '座位与小组' },
    'st.nav_tasks': { th: 'ภารกิจ', en: 'Missions', zh: '作业任务' },
    'st.nav_help': { th: 'ถามครู', en: 'Ask Teacher', zh: '举手提问' },
    'st.greeting_morning': { th: 'สวัสดีตอนเช้า', en: 'Good morning', zh: '早上好' },
    'st.greeting_afternoon': { th: 'สวัสดีตอนบ่าย', en: 'Good afternoon', zh: '下午好' },
    'st.greeting_evening': { th: 'สวัสดีตอนเย็น', en: 'Good evening', zh: '晚上好' },
    'st.hero_motivation': { th: 'พร้อมลุยภารกิจในห้องเรียนวันนี้กันหรือยัง?', en: 'Ready to conquer today’s classroom missions?', zh: '准备好完成今天的课堂任务了吗？' },
    'st.motivation_100': { th: 'สุดยอดมาก! คุณทำภารกิจห้องเรียนวันนี้ครบ 100% แล้ว 🏆✨', en: 'Awesome! You completed 100% of today’s missions 🏆✨', zh: '太棒了！你已 100% 完成今日课堂任务 🏆✨' },
    'st.motivation_checkin': { th: 'แตะปุ่ม "เช็คชื่อเข้าเรียนวันนี้" เพื่อเก็บภารกิจแรกกันเลย!', en: 'Tap "Check In for Today’s Class" below to complete your first mission!', zh: '点击下方“今日课堂签到”按钮，完成你的第一个任务吧！' },
    'st.motivation_remaining': { th: 'เช็คชื่อเรียบร้อย! เหลืองานอีก {n} ชิ้น สู้ๆ นะ 🚀', en: 'Checked in! {n} task(s) left — keep going! 🚀', zh: '签到成功！还剩 {n} 项作业，加油哦 🚀' },
    'st.hero_mission_title': { th: 'ภารกิจวันนี้', en: "Today's Missions", zh: '今日任务' },
    'st.pill_join': { th: '✓ เข้าห้อง', en: '✓ Joined', zh: '✓ 已入班' },
    'st.pill_checkin': { th: '• เช็คชื่อ', en: '• Check-in', zh: '• 签到' },
    'st.pill_checkin_done': { th: '✓ เช็คชื่อแล้ว', en: '✓ Checked In', zh: '✓ 已签到' },
    'st.pill_checkin_wait': { th: '• รอเช็คชื่อ', en: '• Pending', zh: '• 待签到' },
    'st.pill_tasks': { th: '• ส่งงาน', en: '• Tasks', zh: '• 交作业' },
    'st.pill_tasks_count': { th: 'งาน {done}/{total}', en: 'Tasks {done}/{total}', zh: '作业 {done}/{total}' },
    'st.onboarding_title': { th: 'เริ่มต้นใช้งานง่ายๆ ใน 3 ขั้นตอน', en: 'Get Started in 3 Easy Steps', zh: '轻松 3 步开启课堂' },
    'st.onboarding_s1': { th: 'สแกน QR หน้าจอครู หรือพิมพ์ชื่อผู้ใช้ครู', en: 'Scan teacher’s QR or enter teacher username', zh: '扫描老师屏幕二维码或输入教师用户名' },
    'st.onboarding_s2': { th: 'เลือกชื่อของคุณ & ดูตำแหน่งโต๊ะเรียน', en: 'Pick your name & view your seat map', zh: '认领你的名字并查看座位图' },
    'st.onboarding_s3': { th: 'เช็คชื่อ ส่งงาน และยกมือถามครูได้ทันที', en: 'Check in, submit tasks & raise hand anytime', zh: '一键签到、提交作业、随时举手提问' },
    'st.qr_title': { th: 'สแกน QR / เชื่อมต่อห้องเรียน', en: 'Scan QR / Join Classroom', zh: '扫码 / 加入班级' },
    'st.qr_sub': { th: 'สแกน QR หน้าจอครูเพื่อเข้าห้องเรียน หรือสแกน QR ใบงาน', en: 'Scan classroom QR to join or worksheet QR to open', zh: '扫描课堂二维码入班或扫描任务二维码' },
    'st.qr_ready': { th: 'พร้อมสแกน', en: 'Ready', zh: '准备就绪' },
    'st.qr_connected': { th: '✓ เชื่อมต่อแล้ว', en: '✓ Connected', zh: '✓ 已连接' },
    'st.btn_open_cam': { th: 'เปิดกล้องสแกน', en: 'Open Camera', zh: '打开相机扫码' },
    'st.btn_stop_cam': { th: 'ปิดกล้องสแกน', en: 'Stop Camera', zh: '关闭相机' },
    'st.btn_pick_img': { th: 'เลือกรูป QR', en: 'Upload QR Image', zh: '从相册选图' },
    'st.manual_placeholder': { th: 'วางลิงก์ห้องเรียน หรือพิมพ์ Username ครู...', en: 'Paste classroom link or teacher username...', zh: '粘贴班级链接或输入教师用户名...' },
    'st.btn_join': { th: 'เข้าร่วม', en: 'Join', zh: '加入' },
    'st.btn_join_class': { th: 'เข้าห้องนี้', en: 'Join Class', zh: '加入此班' },
    'st.btn_leave': { th: 'ออกห้อง', en: 'Leave', zh: '退出班级' },
    'st.room_online': { th: 'ห้องเรียนออนไลน์', en: 'Online Classroom', zh: '在线课堂' },
    'st.seat_label': { th: 'ตำแหน่งโต๊ะเรียนของคุณ', en: 'Your Assigned Seat', zh: '你的专属座位' },
    'st.seat_coord': { th: 'แถวที่ {r} • คอลัมน์ที่ {c}', en: 'Row {r} • Column {c}', zh: '第 {r} 排 • 第 {c} 列' },
    'st.seat_waiting': { th: 'รอครูจัดโต๊ะบนผัง', en: 'Waiting for teacher to assign seat', zh: '等待老师分配座位' },
    'st.minimap_title': { th: 'แผนผังห้องเรียน (ตำแหน่งของคุณ)', en: 'Classroom Mini-Map (Your Spot)', zh: '教室微缩地图（你的位置）' },
    'st.minimap_board': { th: 'กระดานหน้าห้อง', en: 'Front Board', zh: '讲台 / 黑板' },
    'st.avatar_pick_title': { th: 'เลือกตัวการ์ตูนประจำตัว', en: 'Choose Your Cartoon Character', zh: '选择你的卡通形象' },
    'st.avatar_change': { th: 'เปลี่ยน', en: 'Change', zh: '更换' },
    'st.roster_label': { th: 'ชื่อของคุณในผังที่นั่งห้องนี้:', en: 'Your name on this seating chart:', zh: '你在本班座位表中的名字：' },
    'st.roster_select_default': { th: '-- แตะเพื่อเลือกชื่อของคุณ --', en: '-- Tap to select your name --', zh: '-- 点击选择你的名字 --' },
    'st.roster_count': { th: '-- รายชื่อในห้อง ({n} คน) --', en: '-- Class Roster ({n} students) --', zh: '-- 班级名单（共 {n} 人）--' },
    'st.roster_option': { th: 'เลขที่ {num} • {name}', en: 'No. {num} • {name}', zh: '{num}号 • {name}' },
    'st.checkin_title': { th: 'เช็คชื่อเข้าเรียนวันนี้', en: 'Check In for Today’s Class', zh: '今日课堂签到' },
    'st.checkin_sub': { th: 'แตะเพื่อยืนยันการเข้าเรียนกับครู', en: 'Tap to confirm your attendance with teacher', zh: '点击向老师确认出勤' },
    'st.checkin_sub_done': { th: 'บันทึกการเข้าเรียนวันนี้เรียบร้อยแล้ว ✨', en: 'Today’s attendance has been recorded ✨', zh: '今日出勤已成功记录 ✨' },
    'st.checkin_badge': { th: 'แตะเช็คชื่อ', en: 'Check In', zh: '点击签到' },
    'st.checkin_badge_done': { th: '✓ เช็คชื่อแล้ว', en: '✓ Checked In', zh: '✓ 已签到' },
    'st.help_title': { th: 'ยกมือขอความช่วยเหลือ', en: 'Raise Hand for Help', zh: '举手向老师求助' },
    'st.help_sub': { th: 'โต๊ะของคุณบนหน้าจอครูจะกะพริบแจ้งเตือนทันที', en: 'Your desk will flash on the teacher’s screen right away', zh: '你的座位将在老师屏幕上立即闪烁提醒' },
    'st.help_normal': { th: 'ปกติ', en: 'Idle', zh: '正常' },
    'st.help_waiting': { th: 'กำลังรอคุณครู...', en: 'Waiting for teacher...', zh: '正在等待老师...' },
    'st.help_chip_1': { th: '❓ ไม่เข้าใจโจทย์', en: '❓ Need help with question', zh: '❓ 题目没看懂' },
    'st.help_chip_1_val': { th: 'ไม่เข้าใจโจทย์ข้อนี้ครับ/ค่ะ', en: 'I do not understand this question.', zh: '这道题我不太明白。' },
    'st.help_chip_2': { th: '👀 ช่วยตรวจงานหน่อย', en: '👀 Please check my work', zh: '👀 请帮我检查作业' },
    'st.help_chip_2_val': { th: 'ช่วยตรวจคำตอบให้หน่อยครับ/ค่ะ', en: 'Could you please check my answer?', zh: '老师可以帮我检查一下答案吗？' },
    'st.help_chip_3': { th: '💡 ขอคำแนะนำเพิ่ม', en: '💡 Need more guidance', zh: '💡 需要更多提示' },
    'st.help_chip_3_val': { th: 'ขอคำแนะนำเพิ่มเติมครับ/ค่ะ', en: 'Could I have some extra guidance?', zh: '老师可以给我一些提示吗？' },
    'st.help_placeholder': { th: 'พิมพ์สิ่งที่สงสัยถึงครู หรือแตะปุ่มด่วนด้านบน...', en: 'Type your question or tap a quick chip above...', zh: '输入你的问题或点击上方快捷标签...' },
    'st.help_btn': { th: '🙋 กดยกมือขอความช่วยเหลือ', en: '🙋 Raise Hand Now', zh: '🙋 举手请求帮助' },
    'st.help_btn_cancel': { th: '⏳ ส่งสัญญาณขอความช่วยเหลือแล้ว (แตะเพื่อยกเลิก)', en: '⏳ Help signal sent (Tap to cancel)', zh: '⏳ 已发送求助信号（点击取消）' },
    'st.tasks_title': { th: 'ภารกิจงานที่ได้รับมอบหมาย', en: 'Assigned Missions & Tasks', zh: '课堂作业与任务' },
    'st.tasks_sub': { th: 'ส่งงานแล้วกดยืนยัน สถานะจะซิงก์ไปหน้าจอครูทันที', en: 'Mark done to sync your progress to the teacher', zh: '完成后点击确认，状态将实时同步给老师' },
    'st.tasks_empty_title': { th: 'ยังไม่มีการบ้านหรือใบงานค้างในห้องนี้', en: 'No pending homework or worksheets in this class', zh: '本班暂无待完成的作业或任务' },
    'st.tasks_empty_sub': { th: 'เมื่อครูมอบหมายงานใหม่ รายการจะปรากฏที่นี่อัตโนมัติ', en: 'New tasks assigned by your teacher will appear here automatically.', zh: '老师发布新任务后将自动显示在这里。' },
    'st.task_due': { th: 'กำหนดส่ง:', en: 'Due:', zh: '截止日期：' },
    'st.task_done': { th: '✓ ส่งแล้ว', en: '✓ Submitted', zh: '✓ 已提交' },
    'st.task_pending': { th: 'ยังไม่ส่ง', en: 'Pending', zh: '未提交' },
    'st.task_open': { th: 'เปิดทำใบงาน', en: 'Open Task', zh: '打开作业' },
    'st.task_mark_done': { th: 'แจ้งส่งงานแล้ว', en: 'Mark as Submitted', zh: '标记为已提交' },
    'st.task_mark_edit': { th: 'ส่งแล้ว (แตะแก้ไข)', en: 'Submitted (Tap to undo)', zh: '已提交（点击修改）' },
    'st.group_title': { th: 'กลุ่มที่ {n} ของคุณ', en: 'Your Group #{n}', zh: '你的第 {n} 小组' },
    'st.group_sub': { th: 'สมาชิกทั้งหมด {n} คน • สัดส่วน {ratio}', en: '{n} members • Ratio {ratio}', zh: '共 {n} 名成员 • 比例 {ratio}' },
    'st.group_pill': { th: 'กลุ่ม {n} คน', en: 'Group of {n}', zh: '{n} 人小组' },
    'st.role_label': { th: 'หน้าที่ของคุณในกลุ่มนี้', en: 'Your Role in This Group', zh: '你在小组中的分工' },
    'st.buddy_label': { th: 'คู่บัดดี้ที่ {n} ของคุณ', en: 'Your Buddy Pair #{n}', zh: '你的第 {n} 号学习搭档' },
    'st.buddy_waiting': { th: 'รอจับคู่บัดดี้', en: 'Waiting for buddy match', zh: '等待配对搭档' },
    'st.buddy_pill': { th: 'คู่บัดดี้ {n}', en: 'Buddy {n}', zh: '搭档 {n}' },
    'st.disconnected_idle': { th: 'ยังไม่ได้เข้าร่วมห้องเรียน แตะปุ่ม "เปิดกล้องสแกน" ด้านล่างเพื่อสแกน QR จากหน้าจอครู หรือพิมพ์ Username ครูเพื่อเริ่มใช้งาน ✨', en: 'Not joined a classroom yet. Tap "Open Camera" below to scan your teacher’s QR code or enter their username to start ✨', zh: '尚未加入班级。点击下方“打开相机扫码”扫描老师屏幕上的二维码，或输入教师用户名开始使用 ✨' },
    'st.logout_title': { th: 'ยืนยันการออกจากระบบ?', en: 'Confirm Log Out?', zh: '确认退出登录？' },
    'st.logout_desc': { th: 'คุณต้องการออกจากระบบนักเรียนเพื่อกลับไปหน้าเลือกบทบาทใช่หรือไม่?', en: 'Do you want to log out and return to the role selection screen?', zh: '确定要退出学生账号并返回身份选择页面吗？' },

    // --- Teacher Index Page ---
    'idx.page_title': { th: 'ระบบจัดผังที่นั่งนักเรียนอัจฉริยะ | Smart Seating Chart', en: 'Smart Seating Chart | Teacher Dashboard', zh: '智能座位表系统 | 教师端' },
    'idx.quick_guide': { th: 'คู่มือเริ่มต้นใช้งานด่วน', en: 'Quick Start Guide', zh: '快速上手指南' }
  };

  // Comprehensive phrase map for automatic lossless translation across all pages
  const PHRASE_MAP = [
    // Common & Controls
    ['ระบบสำหรับนักเรียน | Smart Classroom Student', 'Student Portal | Smart Classroom', '学生端 | Smart Classroom'],
    ['ระบบจัดผังที่นั่งนักเรียนอัจฉริยะ | Smart Seating Chart', 'Smart Seating Chart | Teacher Dashboard', '智能座位表系统 | 教师端'],
    ['เข้าสู่ระบบ | Smart Classroom', 'Sign In | Smart Classroom', '登录 | Smart Classroom'],
    ['ภาษาไทย (TH)', 'ภาษาไทย (TH)', 'ภาษาไทย (TH)'],
    ['ภาษา / Language', 'Language', '语言'],
    ['ภาษา', 'Language', '语言'],
    ['ปรับขนาดทั้งหมด (Zoom)', 'Overall Zoom Scale', '整体缩放比例'],
    ['เลือกได้ตั้งแต่ 25% ถึง 150%', 'Adjustable from 25% to 150%', '可在 25% 至 150% 之间调节'],
    ['ลดขนาดลง', 'Zoom Out', '缩小'],
    ['เพิ่มขนาดขึ้น', 'Zoom In', '放大'],
    ['คลิกเพื่อเลือกขนาด 25% - 150%', 'Click to select scale 25% - 150%', '点击选择缩放比例 25% - 150%'],
    ['รีเซ็ตกลับเป็นขนาดปกติ 100%', 'Reset to 100% default scale', '重置为 100% 默认比例'],
    ['ปรับเพิ่ม/ลดขนาดหน้าจอทั้งหมด (25% - 150%)', 'Adjust overall page scale (25% - 150%)', '调节整体页面缩放 (25% - 150%)'],
    ['เปลี่ยนสีพื้นหลัง (ขาว / ดำ)', 'Toggle Light / Dark Theme', '切换浅色 / 深色主题'],
    ['ปรับขนาดไอคอน (M / L / XL)', 'Adjust icon size (M / L / XL)', '调节图标大小 (M / L / XL)'],
    ['ตั้งค่าฟอนต์ ขนาดตัวอักษร สีธีม และภาพพื้นหลัง', 'Font, size, theme color & background settings', '字体、字号、主题色与背景设置'],
    ['ซิงก์ข้อมูลล่าสุดกับระบบครู', 'Sync latest data with teacher', '与教师端同步最新数据'],
    ['โลโก้ห้องเรียน (1:1)', 'Classroom Logo (1:1)', '班级徽标 (1:1)'],

    // Settings Modal (Shared across student.html & index.html)
    ['ตั้งค่าการแสดงผลและธีม (Settings)', 'Display & Theme Settings', '显示与主题设置'],
    ['ปรับฟอนต์ ขนาดตัวอักษร โทนสี UI และภาพพื้นหลังตามต้องการ', 'Customize font, text size, UI accent colors, and background image', '自定义字体、文字大小、界面主题色及背景图片'],
    ['ปรับขนาดหน้าจอทั้งหมด (Overall Scale)', 'Overall Screen Scale', '整体屏幕缩放'],
    ['ปรับย่อ-ขยายทุกองค์ประกอบทั้งหน้าเว็บพร้อมกัน (ปุ่ม การ์ด ตัวอักษร ผังที่นั่ง และหน้าต่างทั้งหมด) • คีย์ลัด Alt + / Alt - / Alt 0', 'Scale every UI element together (buttons, cards, text, seating chart & modals) • Shortcuts: Alt + / Alt - / Alt 0', '同时缩放页面所有元素（按钮、卡片、文字、座位表和弹窗）• 快捷键 Alt + / Alt - / Alt 0'],
    ['ลดขนาดทั้งหมดลง 1 ระดับ', 'Decrease overall scale by 1 step', '缩小整体比例 1 级'],
    ['เพิ่มขนาดทั้งหมดขึ้น 1 ระดับ', 'Increase overall scale by 1 step', '放大整体比例 1 级'],
    ['1. เลือกแบบอักษร (Font Family)', '1. Choose Font Family', '1. 选择字体样式'],
    ['2. ปรับขนาดตัวอักษร (Font Size)', '2. Adjust Font Size', '2. 调整文字大小'],
    ['เล็ก (90%)', 'Small (90%)', '小 (90%)'],
    ['ปกติ (100%)', 'Normal (100%)', '正常 (100%)'],
    ['ใหญ่ (115%)', 'Large (115%)', '大 (115%)'],
    ['ใหญ่มาก (125%)', 'Extra Large (125%)', '超大 (125%)'],
    ['3. ปรับแต่งธีมสี UI (Color Theme)', '3. UI Color Theme', '3. 界面主题配色'],
    ['โหมดสว่าง (Light)', 'Light Mode', '浅色模式'],
    ['โหมดมืด (Dark)', 'Dark Mode', '深色模式'],
    ['เลือกสีหลักของระบบ (Accent Color):', 'Primary Accent Color:', '选择系统主色调：'],
    ['เลือกสีเอง', 'Custom Color', '自定义颜色'],
    ['4. ภาพพื้นหลังแบบกำหนดเอง (Custom Background)', '4. Custom Background', '4. 自定义背景图片'],
    ['ลบภาพพื้นหลัง', 'Remove Background', '移除背景'],
    ['ยังไม่ได้ตั้งภาพพื้นหลัง', 'No background image set', '尚未设置背景图片'],
    ['เลือกรูปภาพจากเครื่องเป็นพื้นหลัง', 'Choose Image from Device', '从本地选择背景图片'],
    ['หรือพื้นหลังสำเร็จรูป:', 'Or preset wallpapers:', '或使用预设背景：'],
    ['ไม่มี', 'None', '无'],
    ['พาสเทลสกาย', 'Pastel Sky', '柔和天空'],
    ['ออโรร่ากลางคืน', 'Midnight Aurora', '极光夜空'],
    ['พระอาทิตย์ตกพาสเทล', 'Pastel Sunset', '柔和日落'],
    ['มิ้นต์สดชื่น', 'Fresh Mint', '清新薄荷'],
    ['ความเข้มชั้นกรองแสง (ช่วยให้ตัวหนังสือชัด)', 'Overlay Dimness (improves text contrast)', '遮罩浓度（提升文字清晰度）'],
    ['ความเบลอพื้นหลัง (Blur)', 'Background Blur', '背景模糊度'],
    ['เปิดเอฟเฟกต์กระจกโปร่งแสง (Glassmorphism) ให้เห็นภาพพื้นหลังทะลุกรอบได้อย่างสวยงาม', 'Enable frosted glass effect (Glassmorphism) over background', '开启毛玻璃透明效果（Glassmorphism）'],
    ['คืนค่าเริ่มต้นทั้งหมด', 'Reset All to Defaults', '全部恢复默认设置'],
    ['บันทึกและปิดหน้าตั้งค่า', 'Save & Close Settings', '保存并关闭设置'],
    ['ฟอนต์หลัก', 'Default Font', '默认字体'],
    ['สุภาพ นุ่มนวล อ่านง่าย (ค่าเริ่มต้น)', 'Clean, soft & easy to read (Default)', '柔和清晰、易于阅读（默认）'],
    ['มาตรฐานราชการไทย คมชัด', 'Crisp standard document font', '标准公文字体，清晰锐利'],
    ['หัวกลมน่ารัก ขี้เล่น สดใส', 'Cute rounded playful style', '圆润可爱的俏皮风格'],
    ['ไทยร่วมสมัย ภูมิฐาน คลาสสิก', 'Contemporary classic serif style', '现代经典衬线风格'],
    ['ทันสมัย กะทัดรัด ชัดเจนบนหน้าจอ', 'Modern, compact & sharp on screen', '现代紧凑，屏幕显示清晰'],
    ['ลายมือเด็กน่ารัก เหมาะกับห้องเรียน', 'Cute handwriting style for classrooms', '可爱的课堂手写风格'],
    ['โมเดิร์น โปร่ง สะอาดตา', 'Modern, airy & clean', '现代通透、简洁大方'],

    // Student Portal
    ['ยังไม่ได้เชื่อมต่อห้องเรียน', 'Not connected to a classroom', '尚未加入班级'],
    ['ยังไม่ได้เข้าร่วมห้องเรียน', 'Not joined a classroom yet', '尚未加入任何班级'],
    ['เชื่อมต่อห้องเรียนแล้ว', 'Connected to Classroom', '已连接班级'],
    ['ทั้งหมด', 'Overview', '全部'],
    ['ที่นั่ง & กลุ่ม', 'My Seat', '座位与小组'],
    ['ภารกิจ', 'Missions', '作业任务'],
    ['ถามครู', 'Ask Teacher', '举手提问'],
    ['สแกน QR', 'Scan QR', '扫码入班'],
    ['ภารกิจวันนี้', "Today's Missions", '今日任务'],
    ['✓ เข้าห้อง', '✓ Joined', '✓ 已入班'],
    ['• เช็คชื่อ', '• Check-in', '• 签到'],
    ['• ส่งงาน', '• Tasks', '• 交作业'],
    ['สแกน QR / เชื่อมต่อห้องเรียน', 'Scan QR / Join Classroom', '扫码 / 加入班级'],
    ['สแกน QR หน้าจอครูเพื่อเข้าห้องเรียน หรือสแกน QR ใบงาน', 'Scan classroom QR to join or worksheet QR to open', '扫描课堂二维码入班或扫描任务二维码'],
    ['พร้อมสแกน', 'Ready', '准备就绪'],
    ['✓ เชื่อมต่อแล้ว', '✓ Connected', '✓ 已连接'],
    ['เปิดกล้องสแกน', 'Open Camera', '打开相机扫码'],
    ['ปิดกล้องสแกน', 'Stop Camera', '关闭相机'],
    ['เลือกรูป QR', 'Upload QR Image', '从相册选图'],
    ['วางลิงก์ห้องเรียน หรือพิมพ์ Username ครู...', 'Paste classroom link or teacher username...', '粘贴班级链接或输入教师用户名...'],
    ['เข้าร่วม', 'Join', '加入'],
    ['เข้าห้องนี้', 'Join Class', '加入此班'],
    ['เข้าร่วมห้องเรียนที่เลือก', 'Join selected classroom', '加入所选班级'],
    ['ออกห้อง', 'Leave', '退出班级'],
    ['ออกจากห้องเรียนนี้', 'Leave this classroom', '退出此班级'],
    ['ห้องเรียนออนไลน์', 'Online Classroom', '在线课堂'],
    ['ตำแหน่งโต๊ะเรียนของคุณ', 'Your Assigned Seat', '你的专属座位'],
    ['แผนผังห้องเรียน (ตำแหน่งของคุณ)', 'Classroom Mini-Map (Your Spot)', '教室微缩地图（你的位置）'],
    ['กระดานหน้าห้อง', 'Front Board', '讲台 / 黑板'],
    ['เลือกตัวการ์ตูนประจำตัว', 'Choose Your Cartoon Character', '选择你的卡通形象'],
    ['เปลี่ยน', 'Change', '更换'],
    ['ชื่อของคุณในผังที่นั่งห้องนี้:', 'Your name on this seating chart:', '你在本班座位表中的名字：'],
    ['-- แตะเพื่อเลือกชื่อของคุณ --', '-- Tap to select your name --', '-- 点击选择你的名字 --'],
    ['เช็คชื่อเข้าเรียนวันนี้', 'Check In for Today’s Class', '今日课堂签到'],
    ['แตะเพื่อยืนยันการเข้าเรียนกับครู', 'Tap to confirm your attendance with teacher', '点击向老师确认出勤'],
    ['แตะเช็คชื่อ', 'Check In', '点击签到'],
    ['✓ เช็คชื่อแล้ว', '✓ Checked In', '✓ 已签到'],
    ['ยกมือขอความช่วยเหลือ', 'Raise Hand for Help', '举手向老师求助'],
    ['โต๊ะของคุณบนหน้าจอครูจะกะพริบแจ้งเตือนทันที', 'Your desk will flash on the teacher’s screen right away', '你的座位将在老师屏幕上立即闪烁提醒'],
    ['ปกติ', 'Idle', '正常'],
    ['กำลังรอคุณครู...', 'Waiting for teacher...', '正在等待老师...'],
    ['❓ ไม่เข้าใจโจทย์', '❓ Need help with question', '❓ 题目没看懂'],
    ['👀 ช่วยตรวจงานหน่อย', '👀 Please check my work', '👀 请帮我检查作业'],
    ['💡 ขอคำแนะนำเพิ่ม', '💡 Need more guidance', '💡 需要更多提示'],
    ['พิมพ์สิ่งที่สงสัยถึงครู หรือแตะปุ่มด่วนด้านบน...', 'Type your question or tap a quick chip above...', '输入你的问题或点击上方快捷标签...'],
    ['🙋 กดยกมือขอความช่วยเหลือ', '🙋 Raise Hand Now', '🙋 举手请求帮助'],
    ['ภารกิจงานที่ได้รับมอบหมาย', 'Assigned Missions & Tasks', '课堂作业与任务'],
    ['ส่งงานแล้วกดยืนยัน สถานะจะซิงก์ไปหน้าจอครูทันที', 'Mark done to sync your progress to the teacher', '完成后点击确认，状态将实时同步给老师'],
    ['สแกนลิงก์จาก QR Code สำเร็จ ✨', 'QR Link Scanned Successfully ✨', '二维码链接扫描成功 ✨'],
    ['เปิดลิงก์', 'Open Link', '打开链接'],
    ['ยืนยันการออกจากระบบ?', 'Confirm Log Out?', '确认退出登录？'],
    ['คุณต้องการออกจากระบบนักเรียนเพื่อกลับไปหน้าเลือกบทบาทใช่หรือไม่?', 'Do you want to log out and return to the role selection screen?', '确定要退出学生账号并返回身份选择页面吗？'],
    ['นักเรียน', 'Student', '学生'],

    // Login Page
    ['ระบบจัดการห้องเรียนอัจฉริยะสำหรับครูและนักเรียน', 'Smart Classroom Management for Teachers & Students', '师生智能课堂管理系统'],
    ['เลือกบทบาทผู้ใช้งาน', 'Choose Your Role', '选择您的身份'],
    ['ครูผู้สอน', 'Teacher', '教师'],
    ['จัดผังที่นั่ง เช็คชื่อ และมอบหมายงาน', 'Seating chart, attendance & tasks', '座位表、考勤与任务管理'],
    ['สแกน QR ดูที่นั่ง เช็คชื่อ ส่งงาน', 'Scan QR, view seat & missions', '扫码入班、查看座位与任务'],
    ['เข้าสู่ระบบ', 'Sign In', '登录'],
    ['สมัครสมาชิกใหม่', 'Create Account', '注册新账号'],
    ['ชื่อผู้ใช้งานครู (Username)', 'Teacher Username', '教师用户名'],
    ['ชื่อผู้ใช้งานนักเรียน (Username)', 'Student Username', '学生用户名'],
    ['กรอกชื่อผู้ใช้งานของคุณ', 'Enter your username', '请输入用户名'],
    ['รหัสผ่าน (Password)', 'Password', '密码'],
    ['กรอกรหัสผ่าน', 'Enter your password', '请输入密码'],
    ['แสดง/ซ่อนรหัสผ่าน', 'Show/Hide password', '显示/隐藏密码'],
    ['ลืมรหัสผ่าน?', 'Forgot password?', '忘记密码？'],
    ['กู้คืนและรีเซ็ตรหัสผ่าน', 'Recover & Reset Password', '找回与重置密码'],
    ['กลับ', 'Back', '返回'],
    ['เลขที่ (Student Number)', 'Student Number', '学号 / 座号'],
    ['กรอกชื่อผู้ใช้งานที่ลืมรหัสผ่าน', 'Enter your username', '请输入忘记密码的用户名'],
    ['กรอกเลขที่ที่ลงทะเบียนไว้', 'Enter your registered number', '请输入注册时的座号'],
    ['ตรวจสอบบัญชีเพื่อรีเซ็ตรหัสผ่าน', 'Verify Account to Reset Password', '验证账号以重置密码'],
    ['ยืนยันตัวตนสำเร็จ!', 'Identity Verified!', '身份验证成功！'],
    ['ตั้งรหัสผ่านใหม่ (New Password)', 'New Password', '设置新密码'],
    ['อย่างน้อย 4 ตัวอักษร', 'At least 4 characters', '至少 4 个字符'],
    ['ยืนยันรหัสผ่านใหม่ (Confirm Password)', 'Confirm New Password', '确认新密码'],
    ['กรอกรหัสผ่านใหม่อีกครั้ง', 'Re-enter new password', '请再次输入新密码'],
    ['ย้อนกลับ', 'Back', '返回'],
    ['บันทึกรหัสผ่านใหม่', 'Save New Password', '保存新密码'],
    ['ชื่อ-นามสกุล (ครูผู้สอน)', 'Full Name (Teacher)', '教师姓名'],
    ['เช่น นายนวชล ประตา', 'e.g., John Doe', '例如：张老师'],
    ['โรงเรียน / สถานศึกษา', 'School / Institution', '学校 / 机构'],
    ['เช่น โรงเรียนมอสวนขิงพิทยาสรรพ์', 'e.g., Sunnyvale High School', '例如：阳光中学'],
    ['ตั้งชื่อผู้ใช้งาน (Username ภาษาอังกฤษ/ตัวเลข)', 'Username (Letters/Numbers)', '设置用户名（英文或数字）'],
    ['อย่างน้อย 3 ตัวอักษร (เช่น teacher_k)', 'At least 3 characters (e.g., teacher_k)', '至少 3 个字符（如 teacher_k）'],
    ['ตั้งรหัสผ่าน (Password)', 'Create Password', '设置密码'],
    ['สมัครสมาชิกครูผู้สอน', 'Register Teacher Account', '注册教师账号'],
    ['เลขที่', 'No.', '座号'],
    ['ชื่อเล่น', 'Nickname', '昵称'],
    ['เช่น น้องกิต / แพรว', 'e.g., Alex / Mia', '例如：小明 / 小红'],
    ['ชื่อ-นามสกุลจริง', 'Full Name', '真实姓名'],
    ['เช่น ด.ช. กิตติพงศ์ ทองดี', 'e.g., Alex Morgan', '例如：李明'],
    ['ระดับชั้น / ห้องเรียน', 'Grade / Classroom', '年级 / 班级'],
    ['เช่น ม.1/1', 'e.g., Grade 8/1', '例如：初一(1)班'],
    ['รหัสนักเรียน / Username', 'Student ID / Username', '学号 / 用户名'],
    ['ภาษาอังกฤษหรือตัวเลข 3-20 ตัว', '3-20 letters or numbers', '3-20 位英文字母或数字'],
    ['สมัครสมาชิกนักเรียน', 'Register Student Account', '注册学生账号'],

    // Teacher Dashboard (index.html)
    ['มุมมองนักเรียน', 'Student View', '学生视角'],
    ['พื้นหลังดำ', 'Dark Mode', '深色背景'],
    ['โหมดกลางคืน', 'Dark Mode', '深色模式'],
    ['โหมดสว่าง', 'Light Mode', '浅色模式'],
    ['คู่มือเริ่มต้นใช้งานด่วน', 'Quick Start Guide', '快速上手指南'],
    ['จัดการรายชื่อนักเรียน (Roster)', 'Manage Student Roster', '管理学生名单'],
    ['เพิ่มนักเรียน หรือนำเข้าจาก Excel/PDF ที่แถบด้านซ้าย พร้อมเลือกรูปการ์ตูนน่ารักๆ ได้ทันที', 'Add students or import from Excel/PDF in the left sidebar and pick cute cartoon avatars.', '在左侧栏添加学生或从 Excel/PDF 导入名单，并随时选择卡通头像。'],
    ['จัดผังที่นั่งอัตโนมัติ / ลากวาง', 'Auto-Assign & Drag-and-Drop', '智能排座 / 拖拽调整'],
    ['ลากชื่อนักเรียนลงโต๊ะ หรือกดปุ่ม', 'Drag students onto desks or click', '将学生名字拖至座位，或点击'],
    ['จัดที่นั่งอัตโนมัติ และ', 'Smart Auto-Assign and', '智能排座 与'],
    ['จัดกลุ่มคละความสามารถ', 'Mixed-Ability Groups', '混合能力分组'],
    ['แชร์ QR ให้นักเรียนเข้าห้อง', 'Share QR for Students to Join', '分享课堂二维码'],
    ['กดปุ่ม', 'Click', '点击按钮'],
    ['เพื่อให้นักเรียนสแกนดูที่นั่ง เช็คชื่อ ส่งงาน และยกมือถามได้แบบเรียลไทม์', 'so students can scan to view seats, check in, submit tasks, and raise hands in real time.', '让学生扫码查看座位、签到、提交作业并实时举手提问。'],
    ['🙋 ช่วยเหลือ', '🙋 Help Requests', '🙋 求助提醒'],
    ['✅ มาเรียน', '✅ Present', '✅ 出勤'],
    ['❌ ขาด/ลา/สาย', '❌ Absent/Late', '❌ 缺勤/请假/迟到'],
    ['⏳ ค้างส่งงาน', '⏳ Pending Tasks', '⏳ 未交作业'],
    ['📄 ส่งงานแล้ว', '📄 Submitted', '📄 已交作业'],
    ['รอจัดโต๊ะ', 'Unassigned', '待排座'],
    ['👑 ตำแหน่ง', '👑 Roles', '👑 班委职务'],
    ['🟢 เก่ง (16-20)', '🟢 High (16-20)', '🟢 优秀 (16-20)'],
    ['🔵 ปานกลาง (11-15)', '🔵 Mid (11-15)', '🔵 中等 (11-15)'],
    ['🔴 กำลังพัฒนา (0-10)', '🔴 Developing (0-10)', '🔴 待提高 (0-10)'],
    ['👓 หน้าห้อง', '👓 Front Row', '👓 前排就座'],
    ['💬 แยกคุย', '💬 Separate Chatty', '💬 分开就座'],
    ['แนะนำ: หมุนจอเป็นแนวนอน หรือกดปรับพอดีจอเพื่อดูผังครบทุกโต๊ะ', 'Tip: Rotate to landscape or tap Fit Screen to view all desks.', '提示：横屏浏览或点击“适应屏幕”可查看全部座位。'],
    ['โหมดแนวนอน', 'Landscape Mode', '横屏模式'],
    ['โหมดแสดงผลหน้าห้องเรียน (Projector View)', 'Projector / Classroom Display Mode', '教室投影展示模式'],
    ['👓 = นั่งแถวหน้า | 💬 = ควรแยกนั่งห่างกัน | 🔒 = ล็อกที่นั่ง', '👓 = Front Row | 💬 = Keep Apart | 🔒 = Locked Seat', '👓 = 前排就座 | 💬 = 需分开就座 | 🔒 = 锁定座位'],
    ['มุมมองนักเรียน (กระดานอยู่ด้านบน)', 'Student View (Board at Top)', '学生视角（黑板在上方）'],
    ['หน้าห้องเรียน (Front of Classroom)', 'Front of Classroom', '教室前方'],
    ['กระดานดำ / จอโปรเจกเตอร์ & โต๊ะครู', 'Blackboard / Projector & Teacher Desk', '黑板 / 投影仪与讲台'],
    ['ประตูหน้าห้อง', 'Front Door', '教室前门'],
    ['มุมมองครูผู้สอนยืนหน้าห้อง (Teacher\'s Perspective)', 'Teacher View (Standing at Front)', '教师视角（站在讲台面向学生）'],
    ['กระดานดำ / โต๊ะครู (แถวที่ติดกับส่วนนี้คือแถวหน้าสุด)', 'Blackboard / Teacher Desk (Nearest row is the front row)', '黑板 / 讲台（靠近此侧为最前排）'],
    ['มองจากหน้าห้องไปหลังห้อง', 'Looking from front to back', '从教室前方望向后方'],
    ['นำเข้ารายชื่อพร้อมคะแนนนักเรียน (Excel / PDF / ข้อความ)', 'Import Roster & Scores (Excel / PDF / Text)', '导入学生名单与成绩（Excel / PDF / 文本）'],
    ['อัปโหลดไฟล์ .xlsx, .xls, .csv, .pdf หรือวางรายชื่อพร้อมคะแนนได้ในครั้งเดียว', 'Upload .xlsx, .xls, .csv, .pdf or paste names with scores at once.', '上传 .xlsx、.xls、.csv、.pdf 文件或直接粘贴名单与成绩。'],
    ['คลิกเพื่อเลือกไฟล์ หรือลากไฟล์รายชื่อ+คะแนนมาวางที่นี่', 'Click to select a file or drag & drop roster file here', '点击选择文件或将名单文件拖拽到此处'],
    ['อ่านไฟล์สำเร็จ', 'File read successfully', '文件读取成功'],
    ['เกณฑ์คะแนนเต็มที่นำเข้า:', 'Import Max Score Scale:', '导入成绩满分标准：'],
    ['เต็ม 20 คะแนน (ตรงตามระบบจัดกลุ่ม)', 'Max 20 pts (Matches grouping scale)', '满分 20 分（与分组系统一致）'],
    ['เต็ม 10 คะแนน (แปลงเป็นเต็ม 20 อัตโนมัติ)', 'Max 10 pts (Auto-scaled to 20)', '满分 10 分（自动换算为 20 分制）'],
    ['เต็ม 30 คะแนน (แปลงเป็นเต็ม 20 อัตโนมัติ)', 'Max 30 pts (Auto-scaled to 20)', '满分 30 分（自动换算为 20 分制）'],
    ['เต็ม 50 คะแนน (แปลงเป็นเต็ม 20 อัตโนมัติ)', 'Max 50 pts (Auto-scaled to 20)', '满分 50 分（自动换算为 20 分制）'],
    ['เต็ม 100 คะแนน (แปลงเป็นเต็ม 20 อัตโนมัติ)', 'Max 100 pts (Auto-scaled to 20)', '满分 100 分（自动换算为 20 分制）'],
    ['ตรวจสอบ/แก้ไขรายชื่อและคะแนน (บรรทัดละ 1 คน):', 'Review/Edit Roster & Scores (1 per line):', '检查/编辑名单与成绩（每行 1 人）：'],
    ['ล้างช่องข้อความ', 'Clear Text', '清空文本'],
    ['แทนที่รายชื่อเดิมทั้งหมด (ล้างผังเดิม)', 'Replace existing roster (clears current chart)', '替换现有全部名单（清空当前座位）'],
    ['นำเข้ารายชื่อและคะแนนทันที', 'Import Roster & Scores Now', '立即导入名单与成绩'],
    ['ผู้โชคดีจากการสุ่มเรียกชื่อ', 'Randomly Picked Student', '随机点名幸运学生'],
    ['สุ่มคนต่อไป', 'Pick Another', '再抽一位'],
    ['ตกลง', 'OK', '确定'],
    ['ตั้งค่ารูปหน้าตานักเรียน', 'Student Avatar / Photo Settings', '设置学生头像/照片'],
    ['กดถ่ายรูป', 'Capture', '拍照'],
    ['อัปโหลดรูปถ่าย', 'Upload Photo', '上传照片'],
    ['ถ่ายจากกล้อง', 'Take Photo', '相机拍照'],
    ['ลบรูป', 'Remove Photo', '删除照片'],
    ['หรือเลือกหน้าตาการ์ตูนนักเรียน:', 'Or choose a cartoon avatar:', '或选择卡通头像：'],
    ['คลิกเลือกได้ทันที', 'Click to select', '点击即可选择'],
    ['เสร็จสิ้น', 'Done', '完成'],
    ['ระบบเช็คชื่อนักเรียนเข้าเรียน', 'Student Attendance Check-In', '学生课堂考勤系统'],
    ['บันทึกการมาเรียนรายวัน พร้อมสรุปยอดอัตโนมัติ', 'Record daily attendance with automatic summary', '记录每日出勤并自动统计'],
    ['วันที่เช็คชื่อ:', 'Attendance Date:', '考勤日期：'],
    ['มาเรียนทั้งหมด', 'Mark All Present', '全部设为出勤'],
    ['ส่งออก CSV', 'Export CSV', '导出 CSV'],
    ['* สามารถคลิกที่โต๊ะบนผัง (ในโหมดเช็คชื่อด่วน) เพื่อสลับสถานะได้ทันที', '* You can also click any desk in Quick Attendance mode to toggle status.', '* 也可在快速考勤模式下直接点击座位切换出勤状态'],
    ['บันทึกและปิดหน้าต่าง', 'Save & Close', '保存并关闭'],
    ['ระบบมอบหมายงาน QR Code & ตรวจสถานะการส่งงาน', 'QR Code Tasks & Submission Tracker', '二维码作业布置与提交追踪'],
    ['สร้าง QR Code ให้นักเรียนสแกนส่งงาน/ทำใบงาน และติดตามสถานะรายคน', 'Create QR codes for worksheets and track individual student submissions', '生成作业二维码并实时追踪每位学生的提交状态'],
    ['สร้างรายการงานใหม่พร้อม QR Code', 'Create New Task with QR Code', '创建新任务并生成二维码'],
    ['สร้าง QR งาน', 'Create Task QR', '生成任务二维码'],
    ['สแกน QR Code เพื่อเข้าทำ/ส่งงาน', 'Scan QR Code to Open/Submit Task', '扫描二维码打开/提交作业'],
    ['ยังไม่มีรายการงาน', 'No tasks yet', '暂无作业任务'],
    ['เพิ่มงานด้านบนเพื่อสร้าง QR', 'Add a task above to generate QR', '在上方添加任务以生成二维码'],
    ['ขยาย QR ขึ้นจอหน้าห้อง', 'Expand QR Fullscreen', '全屏展示二维码'],
    ['เลือกงาน:', 'Select Task:', '选择任务：'],
    ['ส่งครบทุกคน', 'Mark All Submitted', '全部设为已提交'],
    ['ความคืบหน้าการส่งงานของห้อง:', 'Class Submission Progress:', '班级提交进度：'],
    ['ซิงก์สถานะส่งงานอัตโนมัติ', 'Auto-Sync Submissions', '自动同步提交状态'],
    ['ตรวจอัตโนมัติจากเลขที่/ไฟล์', 'Auto-Match by Number/File', '按学号/文件自动匹配'],
    ['อัปเดตอัตโนมัติทุก 12 วิ', 'Auto-updates every 12s', '每 12 秒自动更新'],
    ['ตรวจทันที', 'Check Now', '立即检查'],
    ['สแกนเพื่อเข้าทำ / ส่งงาน', 'Scan to Open / Submit Task', '扫码打开 / 提交作业'],
    ['ชื่องาน', 'Task Title', '任务名称'],
    ['บันทึกภาพ QR', 'Save QR Image', '保存二维码图片'],
    ['ปิดหน้าต่างขยาย', 'Close Fullscreen', '关闭全屏'],
    ['จัดการชั้นเรียน / ห้องเรียนทั้งหมด', 'Manage All Classrooms', '管理所有班级'],
    ['เพิ่มห้องเรียนใหม่ แยกข้อมูลนักเรียน ผังที่นั่ง และงานแต่ละห้องอิสระ', 'Add new classes with independent rosters, seating charts, and tasks', '添加新班级，独立管理各班名单、座位表与任务'],
    ['สร้างชั้นเรียน / ห้องเรียนใหม่', 'Create New Classroom', '创建新班级'],
    ['สร้างชั้นเรียนใหม่และสลับไปใช้งานทันที', 'Create Classroom & Switch Now', '创建并立即切换'],
    ['รายการชั้นเรียนของคุณ:', 'Your Classrooms:', '您的班级列表：'],
    ['นักเรียนสแกนเพื่อเข้าห้องเรียน', 'Students Scan to Join Classroom', '学生扫码加入班级'],
    ['สแกน QR Code นี้เพื่อเช็คชื่อเข้าเรียน ดูผังที่นั่ง ส่งงาน และกดขอความช่วยเหลือจากครู', 'Scan this QR code to check in, view your seat, submit tasks, and ask the teacher for help.', '扫描此二维码即可签到、查看座位、提交作业及向老师举手求助。'],
    ['คัดลอกลิงก์', 'Copy Link', '复制链接'],
    ['โหลด QR', 'Download QR', '下载二维码'],
    ['ทดลองหน้าจอนักเรียน', 'Preview Student View', '预览学生界面'],
    ['นักเรียนที่ต้องการความช่วยเหลือ', 'Students Requesting Help', '举手求助学生列表'],
    ['เรียงตามลำดับการกดยกมือขอความช่วยเหลือจากโต๊ะเรียน', 'Ordered by the time each student raised their hand', '按学生举手求助的时间顺序排列'],
    ['เคลียร์รายการทั้งหมด', 'Clear All', '清空全部'],
    ['ปิดหน้าต่าง', 'Close', '关闭'],
    ['กลับหน้าครูผู้สอน', 'Back to Teacher View', '返回教师端'],
    ['เลือกชื่อและเลขที่ของคุณ:', 'Select your name & number:', '选择你的姓名与座号：'],
    ['-- แตะเพื่อเลือกชื่อนักเรียน --', '-- Tap to select student name --', '-- 点击选择学生姓名 --'],
    ['ตำแหน่งที่นั่งของคุณในห้องนี้', 'Your Seat in This Classroom', '你在本班的座位位置'],
    ['แตะเพื่อลงชื่อเข้าเรียนทันที', 'Tap to check in now', '点击立即签到'],
    ['ต้องการความช่วยเหลือจากครูผู้สอน', 'Need Help from Teacher', '需要老师帮助'],
    ['งานที่ได้รับมอบหมายล่าสุด', 'Latest Assigned Tasks', '最新布置的作业'],
    ['ยังไม่ส่ง', 'Pending', '未提交'],
    ['เปิดลิงก์ทำใบงาน', 'Open Worksheet Link', '打开作业链接'],
    ['แจ้งส่งงานแล้ว', 'Mark as Submitted', '标记为已提交'],
    ['จัดกลุ่มคละความสามารถอัจฉริยะ (4 / 5 / 6 คน • คะแนนเต็ม 20)', 'Smart Mixed-Ability Grouping (4 / 5 / 6 per group • Max 20 pts)', '智能混合能力分组（4 / 5 / 6 人 • 满分 20 分）'],
    ['เลือกขนาดกลุ่มและสัดส่วนเอง หรือให้ระบบวิเคราะห์และจัดอัตราส่วนที่เหมาะสมที่สุดอัตโนมัติ', 'Choose group size & ratio manually, or let the system auto-balance.', '手动选择小组人数与比例，或由系统自动分析最佳配比。'],
    ['คะแนนรายบุคคล (เต็ม 20)', 'Individual Scores (Max 20)', '个人成绩（满分 20）'],
    ['นำเข้าไฟล์', 'Import File', '导入文件'],
    ['วางคะแนน', 'Paste Scores', '粘贴成绩'],
    ['นำเข้าคะแนน', 'Import Scores', '导入成绩'],
    ['แนะนำอัตโนมัติ (Auto)', 'Auto Recommended', '智能推荐 (Auto)'],
    ['กำหนดเอง (Manual)', 'Manual Ratio', '手动设置 (Manual)'],
    ['เศษแยกเป็นกลุ่มสุดท้าย', 'Separate remainder group', '余数单独成组'],
    ['กระจายเศษเข้ากลุ่มเดิม', 'Distribute remainder', '余数分配到现有小组'],
    ['กลุ่ม 4 คน', '4 per Group', '4 人小组'],
    ['เน้นสมดุล • Jigsaw', 'Balanced • Jigsaw', '均衡 • 拼图法'],
    ['กลุ่ม 5 คน', '5 per Group', '5 人小组'],
    ['5 หน้าที่', '5 Roles', '5 项分工'],
    ['เน้นงาน • แบ่งหน้าที่', 'Task-focused • Roles', '任务导向 • 明确分工'],
    ['กลุ่ม 6 คน', '6 per Group', '6 人小组'],
    ['3 คู่บัดดี้', '3 Buddy Pairs', '3 组搭档'],
    ['จับคู่ย่อย • ลดกินแรง', 'Sub-pairs • Equal effort', '结对互助 • 防止搭便车'],
    ['สุ่มหน้าที่', 'Shuffle Roles', '随机分配职务'],
    ['สมดุลคะแนน', 'Balance Scores', '平衡成绩'],
    ['สุ่มใหม่', 'Re-Shuffle', '重新随机'],
    ['เก่ง (16–20)', 'High (16–20)', '优秀 (16–20)'],
    ['ปานกลาง (11–15)', 'Mid (11–15)', '中等 (11–15)'],
    ['กำลังพัฒนา (0–10)', 'Developing (0–10)', '待提高 (0–10)'],
    ['จัดลงผังที่นั่งกลุ่ม 4 คนทันที', 'Apply 4-Person Groups to Chart', '立即按 4 人小组排座'],
    ['เปลี่ยนโลโก้มุมซ้ายบน (สัดส่วน 1:1)', 'Change Top-Left Logo (1:1)', '更换左上角徽标（1:1 比例）'],
    ['อัปโหลดรูปโลโก้ 1:1 ครอบภาพอัตโนมัติ หรือเลือกไอคอนแทนเก้าอี้', 'Upload a 1:1 logo image or choose an icon', '上传 1:1 徽标图片或选择预设图标'],
    ['รูปแบบกรอบ 1:1:', '1:1 Frame Fit:', '1:1 边框适配：'],
    ['ครอบเต็ม 1:1', 'Fill 1:1', '填满 1:1'],
    ['พอดีกรอบ 1:1', 'Fit 1:1', '适应 1:1'],
    ['ซูม:', 'Zoom:', '缩放：'],
    ['อัปโหลดโลโก้ (1:1)', 'Upload Logo (1:1)', '上传徽标 (1:1)'],
    ['คืนค่าเดิม', 'Reset Default', '恢复默认'],
    ['หรือเลือกไอคอน 1:1 สำเร็จรูป:', 'Or choose a preset 1:1 icon:', '或选择预设 1:1 图标：'],
    ['เลือกโทนสีพื้นหลังโลโก้:', 'Logo Background Color:', '选择徽标背景颜色：'],
    ['ลบนักเรียนทั้งหมดในห้อง', 'Delete All Students in Class', '清空本班所有学生'],
    ['ขั้นตอน 1 / 2', 'Step 1 / 2', '第 1 / 2 步'],
    ['ห้องเรียนปัจจุบัน', 'Current Classroom', '当前班级'],
    ['คำเตือน: การลบนี้ไม่สามารถย้อนกลับได้', 'Warning: This action cannot be undone', '警告：此操作不可撤销'],
    ['ล้างรายชื่อนักเรียนและที่นั่งบนผังทั้งหมดให้ว่าง', 'Clear all student names and empty all desks', '清空全部学生名单并重置所有座位'],
    ['ตัดการเชื่อมต่อนักเรียนทุกคนออกจากห้องเรียนนี้ทันที', 'Disconnect all students from this classroom immediately', '立即断开所有学生与本班的连接'],
    ['ล้างรายการขอความช่วยเหลือและสถานะส่งงานของนักเรียนที่ถูกลบ', 'Clear help requests and submission records of removed students', '清除已删除学生的求助与作业提交记录'],
    ['ดำเนินการต่อ', 'Continue', '继续'],
    ['ยืนยันขั้นสุดท้าย (Final Confirmation)', 'Final Confirmation', '最终确认'],
    ['ย้อนกลับ', 'Back', '返回'],
    ['ยืนยันลบนักเรียนทั้งหมด', 'Confirm Delete All Students', '确认删除全部学生'],
    ['ยืนยันการดำเนินการ', 'Confirm Action', '确认操作'],
    ['คุณแน่ใจหรือไม่ว่าต้องการดำเนินการนี้?', 'Are you sure you want to proceed?', '确定要执行此操作吗？'],
    ['ยืนยัน', 'Confirm', '确认'],
    ['บันทึก', 'Save', '保存'],
    ['ยกเลิก', 'Cancel', '取消'],
    ['ปิด', 'Close', '关闭'],
    ['ออกจากระบบ', 'Log Out', '退出登录'],
    ['ตั้งค่าการแสดงผลและปรับแต่งหน้าจอ', 'Display & Appearance Settings', '显示与外观设置'],
    ['รายชื่อนักเรียน', 'Student Roster', '学生名单'],
    ['เพิ่มนักเรียน', 'Add Student', '添加学生'],
    ['นำเข้ารายชื่อ', 'Import Roster', '导入名单'],
    ['สุ่มเรียกชื่อ', 'Random Picker', '随机点名'],
    ['จัดที่นั่งอัตโนมัติ', 'Smart Auto-Assign', '智能排座'],
    ['นั่งแล้ว', 'Seated', '已入座'],
    ['ยังไม่นั่ง', 'Unassigned', '未入座'],
    ['มาเรียน', 'Present', '出勤'],
    ['ส่งงานแล้ว', 'Submitted', '已提交']
  ];

  const EXACT_PHRASE_MAP = new Map();
  PHRASE_MAP.forEach((row) => {
    if (row && row[0]) EXACT_PHRASE_MAP.set(row[0].trim(), row);
  });

  const ORIG_TEXT_MAP = new WeakMap();
  let isApplying = false;
  let observer = null;

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
    if (lang === 'th') return text;
    const trimmed = text.trim();
    if (!trimmed) return text;
    const idx = lang === 'en' ? 1 : lang === 'zh' ? 2 : 0;

    // 1. Exact match
    const exact = EXACT_PHRASE_MAP.get(trimmed);
    if (exact) {
      return text.replace(trimmed, exact[idx]);
    }

    // 2. Dynamic pattern matches for common Thai UI fragments
    let m;
    if ((m = trimmed.match(/^เลขที่\s*(\d+)$/))) {
      const rep = lang === 'en' ? `No. ${m[1]}` : `${m[1]}号`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^แถวที่\s*(\d+)\s*[•·]?\s*คอลัมน์ที่\s*(\d+)$/))) {
      const rep = lang === 'en' ? `Row ${m[1]} • Col ${m[2]}` : `第 ${m[1]} 排 • 第 ${m[2]} 列`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^แถวที่\s*(\d+)\s*โต๊ะที่\s*(\d+)$/))) {
      const rep = lang === 'en' ? `Row ${m[1]} Desk ${m[2]}` : `第 ${m[1]} 排 第 ${m[2]} 桌`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^กลุ่มที่\s*(\d+)$/))) {
      const rep = lang === 'en' ? `Group ${m[1]}` : `第 ${m[1]} 组`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^กลุ่ม\s*(\d+)\s*คน$/))) {
      const rep = lang === 'en' ? `Group of ${m[1]}` : `${m[1]} 人小组`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^ชื่อเล่น:\s*(.+)$/))) {
      const rep = lang === 'en' ? `Nickname: ${m[1]}` : `昵称：${m[1]}`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^ห้องเรียน:\s*(.+)$/))) {
      const rep = lang === 'en' ? `Class: ${m[1]}` : `班级：${m[1]}`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^(\d+)\s*\/\s*(\d+)\s*คน\s*\((\d+)%\)$/))) {
      const rep = lang === 'en' ? `${m[1]} / ${m[2]} (${m[3]}%)` : `${m[1]} / ${m[2]} 人 (${m[3]}%)`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^(\d+)\s*คน$/))) {
      const rep = lang === 'en' ? `${m[1]} students` : `${m[1]} 人`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^ผังที่นั่งนักเรียน:\s*(.+)$/))) {
      const rep = lang === 'en' ? `Seating Chart: ${m[1]}` : `座位表：${m[1]}`;
      return text.replace(trimmed, rep);
    }
    if ((m = trimmed.match(/^จำนวนนักเรียนทั้งหมด\s*(\d+)\s*คน\s*\|\s*พิมพ์เมื่อวันที่$/))) {
      const rep = lang === 'en' ? `Total ${m[1]} students | Printed on` : `共 ${m[1]} 名学生 | 打印日期`;
      return text.replace(trimmed, rep);
    }

    return text;
  }

  function shouldSkipElement(el) {
    if (!el || el.nodeType !== 1) return true;
    const tag = el.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT' || tag === 'TEXTAREA' || tag === 'CODE' || tag === 'PRE') {
      return true;
    }
    if (el.hasAttribute('data-i18n') || el.hasAttribute('data-i18n-html') || el.hasAttribute('data-no-i18n')) {
      return true;
    }
    if (el.classList && el.classList.contains('smart-lang-dropdown')) {
      return true;
    }
    return false;
  }

  function translateTextNodes(rootNode, lang) {
    if (!rootNode || typeof document === 'undefined' || !document.createTreeWalker) return;
    const walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT;
          // Also skip if any ancestor is marked data-no-i18n or is a lang dropdown
          if (parent.closest && parent.closest('[data-no-i18n], .smart-lang-dropdown, [data-i18n], [data-i18n-html]')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];
    let current;
    while ((current = walker.nextNode())) {
      nodes.push(current);
    }

    nodes.forEach((node) => {
      if (!ORIG_TEXT_MAP.has(node)) {
        // Only record original if it contains Thai or is not yet translated
        ORIG_TEXT_MAP.set(node, node.nodeValue);
      }
      const orig = ORIG_TEXT_MAP.get(node);
      if (lang === 'th') {
        if (node.nodeValue !== orig) node.nodeValue = orig;
      } else {
        const translated = translatePhrase(orig, lang);
        if (translated !== orig && node.nodeValue !== translated) {
          node.nodeValue = translated;
        }
      }
    });
  }

  function applyTranslations(root) {
    if (isApplying) return;
    isApplying = true;
    try {
      const lang = getLang();
      const scope = root || document;
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
      }

      // 0. Translate document.title if not already handled by page script
      if (typeof document !== 'undefined' && document.title) {
        if (!document.documentElement.dataset.i18nOrigDocTitle) {
          document.documentElement.dataset.i18nOrigDocTitle = document.title;
        }
        const origTitle = document.documentElement.dataset.i18nOrigDocTitle;
        const nextTitle = lang === 'th' ? origTitle : translatePhrase(origTitle, lang);
        if (document.title !== nextTitle) document.title = nextTitle;
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

      // 2. Lossless phrase translation for elements with title/placeholder/aria-label not using data-i18n
      scope.querySelectorAll('[title]').forEach((el) => {
        if (el.hasAttribute('data-i18n-title')) return;
        if (!el.dataset.i18nOrigTitle) {
          el.dataset.i18nOrigTitle = el.getAttribute('title') || '';
        }
        const orig = el.dataset.i18nOrigTitle;
        el.setAttribute('title', lang === 'th' ? orig : translatePhrase(orig, lang));
      });
      scope.querySelectorAll('[placeholder]').forEach((el) => {
        if (el.hasAttribute('data-i18n-placeholder')) return;
        if (!el.dataset.i18nOrigPlaceholder) {
          el.dataset.i18nOrigPlaceholder = el.getAttribute('placeholder') || '';
        }
        const orig = el.dataset.i18nOrigPlaceholder;
        el.setAttribute('placeholder', lang === 'th' ? orig : translatePhrase(orig, lang));
      });
      scope.querySelectorAll('[aria-label]').forEach((el) => {
        if (!el.dataset.i18nOrigAria) {
          el.dataset.i18nOrigAria = el.getAttribute('aria-label') || '';
        }
        const orig = el.dataset.i18nOrigAria;
        el.setAttribute('aria-label', lang === 'th' ? orig : translatePhrase(orig, lang));
      });

      // 3. Automatic lossless translation for any remaining text nodes
      const textRoot = scope === document ? document.body : scope;
      if (textRoot) {
        translateTextNodes(textRoot, lang);
      }

      // 4. Update any mounted language switcher badges
      updateSwitcherBadges(lang);
    } finally {
      isApplying = false;
    }
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

  function setupMutationObserver() {
    if (typeof MutationObserver === 'undefined' || !document.body || observer) return;
    let scheduled = false;
    observer = new MutationObserver(() => {
      if (isApplying || getLang() === 'th' || scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        applyTranslations(document);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Close dropdown on outside click & initialize translations + observer
  if (typeof document !== 'undefined') {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.smart-lang-switcher-wrap')) {
        document.querySelectorAll('.smart-lang-dropdown').forEach((d) => d.classList.add('hidden'));
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
      applyTranslations(document);
      setupMutationObserver();
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
    translatePhrase,
    applyTranslations
  };
  global.t = t;
})(window);
