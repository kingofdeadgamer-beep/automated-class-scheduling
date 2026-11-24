/**
 * Shared Redesigned Cartoon Character Avatars (Kawaii 2.5D Vector Style)
 * Preserves legacy IDs (boy1..boy5, girl1..girl5) and adds boy6, girl6.
 */
(function (global) {
  const RAW_AVATAR_PRESETS = [
    {
      id: 'boy1',
      gender: 'M',
      label: 'หนุ่มน้อยยิ้มใส',
      labelEn: 'Sunny Smile',
      labelZh: '阳光少年',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#e0f2fe"/><stop offset="55%" stop-color="#7dd3fc"/><stop offset="100%" stop-color="#38bdf8"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff5e6"/><stop offset="65%" stop-color="#fcd5a4"/><stop offset="100%" stop-color="#e5a365"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.65"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="16" cy="18" r="5" fill="#fff" opacity="0.5"/><circle cx="84" cy="22" r="3.5" fill="#fff" opacity="0.65"/>
        <path d="M80 70 l2 4 4 2 -4 2 -2 4 -2-4 -4-2 4-2z" fill="#fef08a" opacity="0.9"/>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M36 74 Q50 86 64 74 L60 88 L50 82 L40 88 Z" fill="#ffffff" opacity="0.95"/>
        <path d="M46 80 L54 80 L52 94 L50 97 L48 94 Z" fill="#f59e0b"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5a365"/>
        <circle cx="23" cy="54" r="6.8" fill="#f3bd82"/><circle cx="23" cy="54" r="3.2" fill="#e59b5c" opacity="0.45"/>
        <circle cx="77" cy="54" r="6.8" fill="#f3bd82"/><circle cx="77" cy="54" r="3.2" fill="#e59b5c" opacity="0.45"/>
        <circle cx="50" cy="51" r="27" fill="url(#sk)"/>
        <path d="M20 49 C18 20 40 11 56 14 C74 16 83 28 80 49 C74 35 64 29 53 34 C45 26 31 30 20 49 Z" fill="url(#hr)"/>
        <path d="M44 15 Q50 8 56 14 Q50 18 44 15 Z" fill="#1e293b"/>
        <path d="M31 24 Q46 17 61 23" stroke="#94a3b8" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="0.55"/>
        <ellipse cx="33" cy="59" rx="6.8" ry="4" fill="url(#bl)"/><ellipse cx="67" cy="59" rx="6.8" ry="4" fill="url(#bl)"/>
        <ellipse cx="39" cy="52" rx="4.6" ry="5" fill="#0f172a"/><ellipse cx="61" cy="52" rx="4.6" ry="5" fill="#0f172a"/>
        <circle cx="40.6" cy="50" r="1.9" fill="#fff"/><circle cx="62.6" cy="50" r="1.9" fill="#fff"/>
        <circle cx="37.5" cy="54" r="0.9" fill="#fff" opacity="0.85"/><circle cx="59.5" cy="54" r="0.9" fill="#fff" opacity="0.85"/>
        <path d="M34 43.5 Q39 40.5 44 43.5" stroke="#334155" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M56 43.5 Q61 40.5 66 43.5" stroke="#334155" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M42 62 Q50 71 58 62 Z" fill="#fb7185" stroke="#9a3412" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M44 63 L56 63" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'boy2',
      gender: 'M',
      label: 'หนุ่มแว่นเนิร์ด',
      labelEn: 'Smart Glasses',
      labelZh: '学霸眼镜',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#ede9fe"/><stop offset="60%" stop-color="#c7d2fe"/><stop offset="100%" stop-color="#818cf8"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff6e8"/><stop offset="68%" stop-color="#fde0b2"/><stop offset="100%" stop-color="#eab676"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#3730a3"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f472b6" stop-opacity="0.58"/><stop offset="100%" stop-color="#f472b6" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="18" cy="20" r="4" fill="#fff" opacity="0.6"/><circle cx="84" cy="18" r="5" fill="#fff" opacity="0.45"/>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M39 74 L50 88 L61 74 Z" fill="#fff"/>
        <path d="M44 79 L50 83 L56 79 L54 85 L50 83 L46 85 Z" fill="#f59e0b"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5ae73"/>
        <circle cx="23" cy="54" r="6.5" fill="#f4c58e"/><circle cx="77" cy="54" r="6.5" fill="#f4c58e"/>
        <circle cx="50" cy="51" r="27" fill="url(#sk)"/>
        <path d="M19 50 C19 18 48 11 63 15 C77 18 83 31 80 50 C71 34 58 32 46 29 C35 35 27 37 19 50 Z" fill="url(#hr)"/>
        <path d="M33 22 Q50 16 66 23" stroke="#cbd5e1" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.5"/>
        <ellipse cx="33" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/><ellipse cx="67" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39" cy="52" rx="4.2" ry="4.5" fill="#0f172a"/><ellipse cx="61" cy="52" rx="4.2" ry="4.5" fill="#0f172a"/>
        <circle cx="40.4" cy="50.4" r="1.6" fill="#fff"/><circle cx="62.4" cy="50.4" r="1.6" fill="#fff"/>
        <rect x="28.5" y="44" width="19" height="15" rx="6" fill="#ffffff" fill-opacity="0.25" stroke="#1e293b" stroke-width="2.8"/>
        <rect x="52.5" y="44" width="19" height="15" rx="6" fill="#ffffff" fill-opacity="0.25" stroke="#1e293b" stroke-width="2.8"/>
        <line x1="47.5" y1="51" x2="52.5" y2="51" stroke="#1e293b" stroke-width="2.8"/>
        <line x1="31" y1="47" x2="36" y2="52" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
        <line x1="55" y1="47" x2="60" y2="52" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
        <path d="M44 63.5 Q50 69 56 63.5" stroke="#9a3412" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'boy3',
      gender: 'M',
      label: 'หนุ่มหยักศกขี้เล่น',
      labelEn: 'Playful Curly',
      labelZh: '活力卷发',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="60%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#fb923c"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#ffe9ce"/><stop offset="68%" stop-color="#f5be82"/><stop offset="100%" stop-color="#dd9857"/></radialGradient>
          <radialGradient id="hr" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#57534e"/><stop offset="100%" stop-color="#1c1917"/></radialGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#c2410c"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f43f5e" stop-opacity="0.55"/><stop offset="100%" stop-color="#f43f5e" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="16" cy="22" r="4" fill="#fff" opacity="0.55"/><circle cx="84" cy="20" r="3" fill="#fff" opacity="0.65"/>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M35 75 Q50 86 65 75" stroke="#ffedd5" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#d99456"/>
        <circle cx="23" cy="54" r="6.5" fill="#ebaf72"/><circle cx="77" cy="54" r="6.5" fill="#ebaf72"/>
        <circle cx="50" cy="53" r="26.5" fill="url(#sk)"/>
        <g fill="url(#hr)">
          <circle cx="26" cy="35" r="10.5"/><circle cx="37" cy="25" r="11.5"/><circle cx="51" cy="23" r="12.5"/>
          <circle cx="65" cy="26" r="11.5"/><circle cx="75" cy="36" r="10"/><circle cx="33" cy="35" r="8"/>
          <circle cx="50" cy="32" r="8.5"/><circle cx="67" cy="35" r="8"/>
        </g>
        <ellipse cx="33.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53" rx="4.5" ry="4.8" fill="#1c1917"/>
        <circle cx="41" cy="51.2" r="1.7" fill="#fff"/>
        <path d="M55.5 53.5 Q60.5 48 65.5 53.5" stroke="#1c1917" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path d="M40.5 62.5 Q50 73 59.5 62.5 Z" fill="#991b1b"/>
        <path d="M44 68.5 Q50 72 56 68.5 Q50 65 44 68.5 Z" fill="#fb7185"/>
        <path d="M42.5 63.2 L57.5 63.2" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'boy4',
      gender: 'M',
      label: 'หนุ่มหมวกแก๊ปสปอร์ต',
      labelEn: 'Sporty Cap',
      labelZh: '运动帽少年',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#ccfbf1"/><stop offset="60%" stop-color="#5eead4"/><stop offset="100%" stop-color="#14b8a6"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="35%" r="68%"><stop offset="0%" stop-color="#fff2dd"/><stop offset="68%" stop-color="#fbd39b"/><stop offset="100%" stop-color="#e5a668"/></radialGradient>
          <linearGradient id="cap" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#0f766e"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.58"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="15" cy="72" r="4" fill="#fff" opacity="0.5"/><circle cx="84" cy="24" r="4.5" fill="#fff" opacity="0.6"/>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M38 74 Q50 85 62 74" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e2a365"/>
        <circle cx="23" cy="55" r="6.5" fill="#f3be83"/><circle cx="77" cy="55" r="6.5" fill="#f3be83"/>
        <circle cx="50" cy="53" r="26.5" fill="url(#sk)"/>
        <path d="M22 43 C25 16 75 16 78 43 Z" fill="url(#cap)"/>
        <path d="M18 41 Q52 33 88 42 Q74 49 52 45 Q31 44 18 41 Z" fill="#075985"/>
        <circle cx="50" cy="28" r="5" fill="#fef08a"/><path d="M50 24 L51.5 27 L54.5 27.5 L52 29.5 L52.8 32.5 L50 31 L47.2 32.5 L48 29.5 L45.5 27.5 L48.5 27 Z" fill="#f59e0b"/>
        <ellipse cx="33.5" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53.5" rx="4.4" ry="4.7" fill="#0f172a"/><ellipse cx="60.5" cy="53.5" rx="4.4" ry="4.7" fill="#0f172a"/>
        <circle cx="41" cy="51.8" r="1.7" fill="#fff"/><circle cx="62" cy="51.8" r="1.7" fill="#fff"/>
        <path d="M40.5 63 Q50 73 59.5 63 Z" fill="#fff" stroke="#0f172a" stroke-width="2" stroke-linejoin="round"/>
      </svg>`
    },
    {
      id: 'boy5',
      gender: 'M',
      label: 'หนุ่มผมตั้งสุดเท่',
      labelEn: 'Cool Spiky',
      labelZh: '酷炫刺猬头',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#dcfce7"/><stop offset="60%" stop-color="#86efac"/><stop offset="100%" stop-color="#22c55e"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff2e0"/><stop offset="68%" stop-color="#fbd39b"/><stop offset="100%" stop-color="#e5a668"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#78350f"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.58"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <path d="M82 15 L84 20 L89 22 L84 24 L82 29 L80 24 L75 22 L80 20 Z" fill="#fef08a"/>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M39 74 L50 86 L61 74 Z" fill="#ecfdf5"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e3a466"/>
        <circle cx="23" cy="54" r="6.5" fill="#f2bd83"/><circle cx="77" cy="54" r="6.5" fill="#f2bd83"/>
        <circle cx="50" cy="52" r="26.5" fill="url(#sk)"/>
        <path d="M21 47 L23 29 L33 33 L42 15 L52 26 L64 14 L70 29 L80 27 L79 47 C68 35 32 35 21 47 Z" fill="url(#hr)"/>
        <ellipse cx="33.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53" rx="4.5" ry="4.8" fill="#1e293b"/><ellipse cx="60.5" cy="53" rx="4.5" ry="4.8" fill="#1e293b"/>
        <circle cx="41" cy="51.2" r="1.7" fill="#fff"/><circle cx="62" cy="51.2" r="1.7" fill="#fff"/>
        <path d="M34 45 L44 43" stroke="#451a03" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M56 43 L66 45" stroke="#451a03" stroke-width="2.2" stroke-linecap="round"/>
        <path d="M43 63.5 Q51 70 58 62.5" stroke="#9a3412" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'boy6',
      gender: 'M',
      label: 'หนุ่มหูฟังดนตรี',
      labelEn: 'Music Beat',
      labelZh: '音乐耳机',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#e0e7ff"/><stop offset="60%" stop-color="#a5b4fc"/><stop offset="100%" stop-color="#6366f1"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff4e4"/><stop offset="68%" stop-color="#fbd39b"/><stop offset="100%" stop-color="#e5a668"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5cf6"/><stop offset="100%" stop-color="#5b21b6"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.58"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <text x="14" y="24" font-size="11" fill="#fff" opacity="0.8">♪</text><text x="80" y="26" font-size="12" fill="#fde047" opacity="0.9">♫</text>
        <path d="M20 100 C22 77 35 73 50 73 C65 73 78 77 80 100 Z" fill="url(#sh)"/>
        <path d="M36 74 Q50 85 64 74" stroke="#ede9fe" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5a668"/>
        <circle cx="50" cy="52" r="26.5" fill="url(#sk)"/>
        <path d="M21 50 C20 22 42 15 56 17 C72 19 80 30 79 50 C70 36 58 34 45 38 C36 33 27 37 21 50 Z" fill="url(#hr)"/>
        <path d="M20 50 C20 20 80 20 80 50" stroke="#0ea5e9" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <rect x="15" y="45" width="9" height="18" rx="4.5" fill="#0284c7" stroke="#fff" stroke-width="1.5"/>
        <rect x="76" y="45" width="9" height="18" rx="4.5" fill="#0284c7" stroke="#fff" stroke-width="1.5"/>
        <ellipse cx="34" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/><ellipse cx="66" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53" rx="4.3" ry="4.6" fill="#0f172a"/><ellipse cx="60.5" cy="53" rx="4.3" ry="4.6" fill="#0f172a"/>
        <circle cx="41" cy="51.2" r="1.6" fill="#fff"/><circle cx="62" cy="51.2" r="1.6" fill="#fff"/>
        <path d="M43 63.5 Q50 69.5 57 63.5" stroke="#9a3412" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'girl1',
      gender: 'F',
      label: 'สาวน้อยมัดแกละ',
      labelEn: 'Twin Pigtails',
      labelZh: '可爱双马尾',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#fdf2f8"/><stop offset="60%" stop-color="#fbcfe8"/><stop offset="100%" stop-color="#f472b6"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff5e8"/><stop offset="68%" stop-color="#fde0b8"/><stop offset="100%" stop-color="#ebb478"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4c1d95"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ec4899"/><stop offset="100%" stop-color="#be185d"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.68"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="15" cy="18" r="4" fill="#fff" opacity="0.7"/><circle cx="85" cy="20" r="4" fill="#fff" opacity="0.65"/>
        <circle cx="16" cy="48" r="13" fill="url(#hr)"/><circle cx="84" cy="48" r="13" fill="url(#hr)"/>
        <circle cx="24" cy="42" r="4.5" fill="#fb7185" stroke="#fff" stroke-width="1"/><circle cx="76" cy="42" r="4.5" fill="#fb7185" stroke="#fff" stroke-width="1"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M35 75 Q43 85 50 79 Q57 85 65 75" fill="#fff"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e6ae74"/>
        <circle cx="50" cy="52" r="26.5" fill="url(#sk)"/>
        <path d="M21 49 C21 18 79 18 79 49 C70 35 58 33 50 38 C42 33 30 35 21 49 Z" fill="url(#hr)"/>
        <path d="M32 25 Q50 18 68 25" stroke="#c4b5fd" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.55"/>
        <ellipse cx="32.5" cy="59.5" rx="6.8" ry="4" fill="url(#bl)"/><ellipse cx="67.5" cy="59.5" rx="6.8" ry="4" fill="url(#bl)"/>
        <ellipse cx="39" cy="52.5" rx="4.7" ry="5.1" fill="#1e1b4b"/><ellipse cx="61" cy="52.5" rx="4.7" ry="5.1" fill="#1e1b4b"/>
        <circle cx="40.6" cy="50.5" r="1.9" fill="#fff"/><circle cx="62.6" cy="50.5" r="1.9" fill="#fff"/>
        <circle cx="37.5" cy="54.5" r="1" fill="#fff"/><circle cx="59.5" cy="54.5" r="1" fill="#fff"/>
        <path d="M43.5 63 Q50 70 56.5 63" stroke="#be123c" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'girl2',
      gender: 'F',
      label: 'สาวผมบ็อบติดกิ๊บ',
      labelEn: 'Bob & Hairpin',
      labelZh: '俏皮波波头',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#fff1f2"/><stop offset="60%" stop-color="#fecdd3"/><stop offset="100%" stop-color="#fb7185"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff4e4"/><stop offset="68%" stop-color="#fcdab0"/><stop offset="100%" stop-color="#e8ae72"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#581c87"/><stop offset="100%" stop-color="#2e1065"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f43f5e"/><stop offset="100%" stop-color="#be123c"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.62"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <path d="M17 55 C17 17 83 17 83 55 L85 75 C77 79 68 79 65 73 L35 73 C32 79 23 79 15 75 Z" fill="url(#hr)"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M39 74 L50 86 L61 74 Z" fill="#fff1f2"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5ac72"/>
        <circle cx="50" cy="53" r="25.5" fill="url(#sk)"/>
        <path d="M22 46 C25 22 75 22 78 46 L68 42 L62 46 L52 40 L42 46 L34 41 Z" fill="url(#hr)"/>
        <rect x="60" y="33" width="12" height="5" rx="2.5" transform="rotate(14 66 35)" fill="#fde047" stroke="#f59e0b" stroke-width="1"/>
        <ellipse cx="33.5" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53.5" rx="4.5" ry="4.8" fill="#1e1b4b"/><ellipse cx="60.5" cy="53.5" rx="4.5" ry="4.8" fill="#1e1b4b"/>
        <circle cx="41" cy="51.6" r="1.8" fill="#fff"/><circle cx="62" cy="51.6" r="1.8" fill="#fff"/>
        <path d="M43 63.5 Q50 70.5 57 63.5" stroke="#be123c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'girl3',
      gender: 'F',
      label: 'สาวแว่นน่ารัก',
      labelEn: 'Cute Glasses',
      labelZh: '萌系眼镜娘',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#f3e8ff"/><stop offset="60%" stop-color="#e9d5ff"/><stop offset="100%" stop-color="#c084fc"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff5e6"/><stop offset="68%" stop-color="#fde0b8"/><stop offset="100%" stop-color="#eab477"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6b21a8"/><stop offset="100%" stop-color="#3b0764"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#7e22ce"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f472b6" stop-opacity="0.6"/><stop offset="100%" stop-color="#f472b6" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <path d="M17 57 C17 17 83 17 83 57 L81 87 L19 87 Z" fill="url(#hr)"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M39 74 L50 85 L61 74 Z" fill="#fff"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e6ae74"/>
        <circle cx="50" cy="52" r="25.5" fill="url(#sk)"/>
        <path d="M23 46 C26 22 74 22 77 46 C65 34 35 34 23 46 Z" fill="url(#hr)"/>
        <ellipse cx="33" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/><ellipse cx="67" cy="60" rx="6.2" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39" cy="53" rx="4.2" ry="4.5" fill="#1e1b4b"/><ellipse cx="61" cy="53" rx="4.2" ry="4.5" fill="#1e1b4b"/>
        <circle cx="40.4" cy="51.4" r="1.6" fill="#fff"/><circle cx="62.4" cy="51.4" r="1.6" fill="#fff"/>
        <circle cx="39" cy="53" r="9" fill="#ffffff" fill-opacity="0.24" stroke="#ec4899" stroke-width="2.6"/>
        <circle cx="61" cy="53" r="9" fill="#ffffff" fill-opacity="0.24" stroke="#ec4899" stroke-width="2.6"/>
        <line x1="48" y1="53" x2="52" y2="53" stroke="#ec4899" stroke-width="2.6"/>
        <path d="M44.5 64 Q50 69.5 55.5 64" stroke="#be185d" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'girl4',
      gender: 'F',
      label: 'สาวดังโงะติดโบว์',
      labelEn: 'Ribbon Bun',
      labelZh: '蝴蝶结丸子头',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#fae8ff"/><stop offset="60%" stop-color="#f5d0fe"/><stop offset="100%" stop-color="#e879f9"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff5e6"/><stop offset="68%" stop-color="#fde0b8"/><stop offset="100%" stop-color="#ebb478"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d946ef"/><stop offset="100%" stop-color="#a21caf"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.65"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <circle cx="16" cy="22" r="3.5" fill="#fff" opacity="0.75"/><circle cx="84" cy="24" r="4" fill="#fff" opacity="0.65"/>
        <circle cx="50" cy="20" r="12.5" fill="url(#hr)"/>
        <path d="M34 22 L50 28.5 L34 35 C32 31 32 26 34 22 Z" fill="#f43f5e"/>
        <path d="M66 22 L50 28.5 L66 35 C68 31 68 26 66 22 Z" fill="#f43f5e"/>
        <circle cx="50" cy="28.5" r="3.8" fill="#ffe4e6"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M37 75 Q50 86 63 75" stroke="#fae8ff" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5ad73"/>
        <circle cx="50" cy="53" r="25.5" fill="url(#sk)"/>
        <path d="M23 49 C23 24 77 24 77 49 C64 35 36 35 23 49 Z" fill="url(#hr)"/>
        <ellipse cx="33.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/>
        <path d="M34.5 53.5 Q39.5 48 44.5 53.5" stroke="#0f172a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path d="M55.5 53.5 Q60.5 48 65.5 53.5" stroke="#0f172a" stroke-width="3.2" fill="none" stroke-linecap="round"/>
        <path d="M42.5 63 Q50 71.5 57.5 63 Z" fill="#fb7185" stroke="#be123c" stroke-width="1.8" stroke-linejoin="round"/>
      </svg>`
    },
    {
      id: 'girl5',
      gender: 'F',
      label: 'สาวผมยาวติดดาว',
      labelEn: 'Starry Locks',
      labelZh: '星星长发',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#ecfdf5"/><stop offset="60%" stop-color="#a7f3d0"/><stop offset="100%" stop-color="#34d399"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff4e4"/><stop offset="68%" stop-color="#fbd39b"/><stop offset="100%" stop-color="#e5a668"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#92400e"/><stop offset="100%" stop-color="#451a03"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.6"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <path d="M15 55 C15 16 85 16 85 55 L88 91 L12 91 Z" fill="url(#hr)"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M38 74 L50 86 L62 74 Z" fill="#ecfdf5"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5a76a"/>
        <circle cx="50" cy="53" r="25.5" fill="url(#sk)"/>
        <path d="M22 47 C27 23 73 23 78 47 C65 35 53 34 45 40 C38 34 27 37 22 47 Z" fill="url(#hr)"/>
        <path d="M29 31 L31 35.5 L36 36 L32.5 39 L33.5 43.5 L29 41 L24.5 43.5 L25.5 39 L22 36 L27 35.5 Z" fill="#fde047" stroke="#eab308" stroke-width="0.8"/>
        <ellipse cx="33.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53.5" rx="4.5" ry="4.8" fill="#291509"/><ellipse cx="60.5" cy="53.5" rx="4.5" ry="4.8" fill="#291509"/>
        <circle cx="41" cy="51.6" r="1.7" fill="#fff"/><circle cx="62" cy="51.6" r="1.7" fill="#fff"/>
        <circle cx="38" cy="55" r="0.9" fill="#fff"/><circle cx="59" cy="55" r="0.9" fill="#fff"/>
        <path d="M43 63.5 Q50 70 57 63.5" stroke="#9a3412" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`
    },
    {
      id: 'girl6',
      gender: 'F',
      label: 'สาวน้อยหูแมว',
      labelEn: 'Kitty Headband',
      labelZh: '萌猫发箍',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="bg" cx="30%" cy="22%" r="80%"><stop offset="0%" stop-color="#fef9c3"/><stop offset="60%" stop-color="#fde68a"/><stop offset="100%" stop-color="#f59e0b"/></radialGradient>
          <radialGradient id="sk" cx="42%" cy="32%" r="68%"><stop offset="0%" stop-color="#fff5e6"/><stop offset="68%" stop-color="#fde0b8"/><stop offset="100%" stop-color="#ebb478"/></radialGradient>
          <linearGradient id="hr" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
          <linearGradient id="sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f43f5e"/><stop offset="100%" stop-color="#be123c"/></linearGradient>
          <radialGradient id="bl" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#fb7185" stop-opacity="0.65"/><stop offset="100%" stop-color="#fb7185" stop-opacity="0"/></radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg)"/>
        <path d="M26 30 L32 14 L42 26 Z" fill="#fb7185" stroke="#be123c" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M74 30 L68 14 L58 26 Z" fill="#fb7185" stroke="#be123c" stroke-width="1.5" stroke-linejoin="round"/>
        <path d="M29 27 L32.5 18 L38.5 25 Z" fill="#ffe4e6"/>
        <path d="M71 27 L67.5 18 L61.5 25 Z" fill="#ffe4e6"/>
        <path d="M17 55 C17 20 83 20 83 55 L81 84 L19 84 Z" fill="url(#hr)"/>
        <path d="M21 100 C23 77 35 73 50 73 C65 73 77 77 79 100 Z" fill="url(#sh)"/>
        <path d="M38 75 Q50 86 62 75" stroke="#ffe4e6" stroke-width="3" fill="none" stroke-linecap="round"/>
        <rect x="44" y="67" width="12" height="10" rx="5" fill="#e5ad73"/>
        <circle cx="50" cy="53" r="25.5" fill="url(#sk)"/>
        <path d="M23 48 C25 25 75 25 77 48 C65 36 35 36 23 48 Z" fill="url(#hr)"/>
        <ellipse cx="33.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/><ellipse cx="66.5" cy="60" rx="6.5" ry="3.8" fill="url(#bl)"/>
        <ellipse cx="39.5" cy="53" rx="4.5" ry="4.8" fill="#0f172a"/><ellipse cx="60.5" cy="53" rx="4.5" ry="4.8" fill="#0f172a"/>
        <circle cx="41" cy="51.2" r="1.7" fill="#fff"/><circle cx="62" cy="51.2" r="1.7" fill="#fff"/>
        <path d="M44 63 Q47 66.5 50 63 Q53 66.5 56 63" stroke="#be123c" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      </svg>`
    }
  ];

  const AVATAR_PRESETS = RAW_AVATAR_PRESETS.map((item) => ({
    ...item,
    dataUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(item.svg)
  }));

  function getAvatarLabel(preset, lang) {
    if (!preset) return '';
    const l = lang || (typeof localStorage !== 'undefined' && localStorage.getItem('SMART_SEATING_LANG')) || 'th';
    if (l === 'en') return preset.labelEn || preset.label;
    if (l === 'zh') return preset.labelZh || preset.labelEn || preset.label;
    return preset.label;
  }

  function getDefaultAvatarForStudent(st) {
    if (st && st.photo) return st.photo;
    const boys = AVATAR_PRESETS.filter((p) => p.gender === 'M');
    const girls = AVATAR_PRESETS.filter((p) => p.gender === 'F');
    const pool = st && st.gender === 'F' ? girls : boys;
    const idx = Math.abs(Number((st && st.number) || 1)) % pool.length;
    return pool[idx].dataUrl;
  }

  global.SMART_AVATARS = {
    PRESETS: AVATAR_PRESETS,
    getAvatarLabel,
    getDefaultAvatarForStudent
  };
  global.AVATAR_PRESETS = AVATAR_PRESETS;
})(window);
