const translations = {
    en: {
        nav_home: "Home",
        nav_solutions: "Solutions",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title_2: "Transform your business into full automation with LeadFlow TH Architecture",
        hero_subtitle: "From BMW → Real Estate → SME Automation, we built systems that capture leads across all channels → deliver context to sales teams → reduce CAC to just ฿45",
        hero_btn_primary: "Explore Solutions",
        hero_btn_secondary: "See Real Client Cases →",
        status_working: "Open for Work",
        home_teaser_sol_desc: "Automation + Tech Stack",
        home_teaser_proj_desc: "ROI + Case Studies",
        home_teaser_exp_desc: "Timeline + Skills",
        home_teaser_about_desc: "Storytelling + Philosophy",
        home_teaser_contact_desc: "Contact Channels & Form",
        final_cta_title: "Ready to transform your business? Book a free 20-minute audit to see how many leads you’re missing",
        final_cta_btn: "Start Free Audit Now",
        footer_copy: "© 2026 Sirawith Kaewsee – Enterprise Architect | LeadFlow TH"
    },
    th: {
        nav_home: "หน้าหลัก",
        nav_solutions: "โซลูชัน",
        nav_projects: "ผลงาน",
        nav_experience: "ประสบการณ์",
        nav_about: "เกี่ยวกับ",
        nav_contact: "ติดต่อ",
        hero_title_2: "เปลี่ยนระบบธุรกิจให้ทำงานอัตโนมัติ ด้วยสถาปัตยกรรม LeadFlow TH",
        hero_subtitle: "จาก BMW → อสังหา → SME Automation เราสร้างระบบที่เก็บลีดทุกช่องทาง → ส่งทีมขายพร้อมบริบท → ลด CAC เหลือเพียง ฿45",
        hero_btn_primary: "ดูโซลูชันทั้งหมด",
        hero_btn_secondary: "ดูเคสจริงลูกค้า →",
        status_working: "สถานะ: พร้อมรับงาน",
        home_teaser_sol_desc: "Automation + Tech Stack",
        home_teaser_proj_desc: "ROI + Case Studies",
        home_teaser_exp_desc: "Timeline + Skills",
        home_teaser_about_desc: "Storytelling + Philosophy",
        home_teaser_contact_desc: "ช่องทางติดต่อและฟอร์ม",
        final_cta_title: "พร้อมเปลี่ยนระบบธุรกิจของคุณ? จอง Audit ฟรี 20 นาที ดูว่าคุณพลาดลีดไปเท่าไหร่",
        final_cta_btn: "เริ่ม Audit ฟรีตอนนี้",
        footer_copy: "© 2026 Sirawith Kaewsee – Enterprise Architect | LeadFlow TH"
    }
};

const preserveTerms = [
    "LeadFlow TH",
    "Make.com",
    "FlutterFlow",
    "Sirawith.K",
    "BMW",
    "Origin Property",
    "AI",
    "CAC",
    "MQLs"
];

function translate(key, lang) {
  let text = translations[lang][key] || key;
  preserveTerms.forEach(term => {
    if (text.includes(term)) {
      text = text.replace(term, term); // คงไว้
    }
  });
  return text;
}

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const glider = document.querySelector('.lang-glider');
    
    // Check stored language
    const currentLang = localStorage.getItem('lang') || 'en';
    updateLanguage(currentLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-val');
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        // Update UI
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-val') === lang);
        });

        if (glider) {
            if (lang === 'th') {
                glider.style.transform = 'translateX(100%)';
            } else {
                glider.style.transform = 'translateX(0)';
            }
        }

        // Save preference
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('lang', lang);

        // Update Text Content
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            // Prioritize data-en/data-th attributes if they exist for immediate switching
            if (el.hasAttribute(`data-${lang}`)) {
                el.textContent = el.getAttribute(`data-${lang}`);
            } else {
                el.textContent = translate(key, lang);
            }
        });
        
        // Also update elements that ONLY have data-en/data-th but no data-lang (if any)
        document.querySelectorAll('[data-en][data-th]:not([data-lang])').forEach(el => {
             el.textContent = el.getAttribute(`data-${lang}`);
        });
    }
});