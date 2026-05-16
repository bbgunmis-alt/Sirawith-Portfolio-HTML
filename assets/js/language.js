const translations = {
    en: {
        // Nav
        nav_home: "Home",
        nav_solutions: "Solutions",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_about: "About",
        nav_contact: "Contact",

        // Hero
        hero_name: "Sirawith Kaewsee",
        hero_title: "Luxury Real Estate & Investment Consultant",
        hero_sub: "Bangkok-based SME LeadFlow Architect | Ex-UNIQLO / BMW / Origin",
        hero_value: "I design automation systems that save time, reduce manual work, and improve lead conversion.",
        cta_book: "Book a Strategy Session",
        signal_1: "Systems Delivered",
        signal_2: "Admin Time Saved",
        signal_3: "SME Focus",

        // KPI Status Labels
        status_verified: "Verified",
        status_estimated: "Estimated",
        status_pilot: "Pilot Phase",

        // About
        about_title: "The Logic Behind the Flow",
        about_content: `
            <p>I specialize in building "LeadFlow" ecosystems—systems that treat data like a factory line. With a background in operations at <strong>UNIQLO</strong> and customer experience at <strong>BMW</strong>, I understand that automation is only valuable if it feels human and scales reliably.</p>
            <p>Today, I help SME teams in Bangkok leverage <strong>n8n</strong> and <strong>AI Prompt Engineering</strong> to cut manual drudgery. Whether it's a RAG-powered chatbot for a sticker business or a high-volume ticketing engine for a festival, my focus is always on <em>evidence-led results</em>.</p>
        `,

        // Projects Section
        projects_title: "Evidence-Led Projects",
        projects_sub: "Solving complex bottlenecks with clean, scalable automation architecture.",
        
        // P1: PATSTICKER
        p1_name: "PATSTICKER AI Chatbot",
        p1_one: "LINE OA → n8n RAG Agent → Sheets Quote Gen | 80% admin save",
        p1_ctx: "High-volume sticker installation business managing leads primarily through LINE OA.",
        p1_pain: "Slow response times, manual price calculations, and lost leads during peak hours.",
        p1_auto: "Autonomous FAQ agent with dynamic price estimation and auto-handoff to human experts.",
        p1_kpi: "80% reduction in manual admin, 2x increase in conversion rate via instant replies.",
        p1_rel: "Duplicate lead protection, automatic error logging, and seamless handoff fallback.",
        p1_caption: "Processing: AI analyzing customer intent and calculating custom price in real-time.",

        // P2: Tickets
        p2_name: "มัน แฉะ มาก 2026 Tickets",
        p2_one: "Multi-channel Webhook → PromptPay QR → Auto-Ticket Slides | 24/7 Funnel",
        p2_ctx: "Large-scale music festival requiring rapid, error-free ticket distribution.",
        p2_pain: "Manual slip verification and ticket generation led to long wait times and entry errors.",
        p2_auto: "Fully automated payment validation using PromptPay webhooks and dynamic PDF generation.",
        p2_kpi: "Instant ticket delivery (sub-60s), zero manual verification errors, and real-time sales dashboard.",
        p2_rel: "Checksum verification, retry logic for PDF generation, and automated cloud backups.",
        p2_caption: "Dashboard: Real-time tracking of ticket distribution and PromptPay validation status.",

        // P3: Notion Restaurant
        p3_name: "Notion Restaurant Sales Automation",
        p3_one: "LINE Orders → Notion DB Sync + Analytics Dashboard | 90% manual cut",
        p3_ctx: "Busy Bangkok cafe with data scattered across delivery apps and LINE.",
        p3_pain: "No unified view of sales, manual data entry at end-of-shift, and inaccurate reporting.",
        p3_auto: "Syncing all order sources into a relational Notion database with automated daily summaries.",
        p3_kpi: "90% reduction in reporting time, 100% data accuracy, and instant profit/loss visibility.",
        p3_rel: "Format normalization, duplicate entry filtering, and weekly auto-audits.",
        p3_caption: "Output: Unified sales view with automated profit margins calculated daily.",

        // Services
        services_title: "Consulting Tiers",
        services_sub: "Transparent investment levels designed for operational scalability.",
        tier1_name: "SME Starter",
        tier1_price: "10k",
        tier1_f1: "n8n Core Workflow",
        tier1_f2: "Single API Integration",
        tier1_f3: "Basic Error Handling",
        tier1_cta: "Request Quote",
        tier2_name: "SME Pro",
        tier2_price: "50k",
        tier2_f1: "Full LeadFlow™ System",
        tier2_f2: "Multi-platform Orchestration",
        tier2_f3: "Custom AI RAG Integration",
        tier2_f4: "Enterprise Reliability Layer",
        tier2_cta: "Start Project",
        tier3_name: "Enterprise",
        tier3_price: "Custom",
        tier3_f1: "Complex Ecosystem Sync",
        tier3_f2: "Internal AI Model Tuning",
        tier3_f3: "Managed Operations & SLA",
        tier3_cta: "Contact for Quote",

        // Process
        process_title: "The Automation Factory",
        process_sub: "Systematic, evidence-led deployment from diagnostic to scaling.",
        step1_title: "Discover",
        step1_desc: "Mapping your current bottlenecks and data leakage points.",
        step2_title: "Design",
        step2_desc: "Architecting the logic flow and choosing the right tools.",
        step3_title: "Build",
        step3_desc: "Developing n8n workflows and AI prompt templates.",
        step4_title: "Deploy",
        step4_desc: "Rigorous testing and live system implementation.",
        step5_title: "Scale",
        step5_desc: "Handover and ongoing ecosystem optimization.",

        // Footer
        footer_note: "Designed for fast, evidence-led automation consulting.",
        footer_copy: "© 2026 Sirawich Kaewsri. All rights reserved.",
        footer_contact: "Contact",
        footer_social: "Social",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
    },
    th: {
        // Nav
        nav_home: "หน้าแรก",
        nav_solutions: "โซลูชัน",
        nav_projects: "ผลงาน",
        nav_experience: "ประสบการณ์",
        nav_about: "เกี่ยวกับ",
        nav_contact: "ติดต่อ",

        // Hero
        hero_name: "ศิรวิชญ์ แก้วศรี",
        hero_title: "ที่ปรึกษาการลงทุนและอสังหาริมทรัพย์ระดับลักชัวรี",
        hero_sub: "ผู้ออกแบบระบบ LeadFlow สำหรับ SME | ประสบการณ์จาก UNIQLO / BMW / Origin",
        hero_value: "ผมออกแบบระบบอัตโนมัติที่ช่วยประหยัดเวลา ลดงานแมนนวล และเพิ่มอัตราการเปลี่ยนเป็นลูกค้า (Lead Conversion)",
        cta_book: "จองเวลาปรึกษาเพื่อวางแผนระบบ",
        signal_1: "ระบบที่ส่งมอบแล้ว",
        signal_2: "ประหยัดเวลาแอดมิน",
        signal_3: "เน้นกลุ่ม SME",

        // KPI Status Labels
        status_verified: "ตรวจสอบแล้ว",
        status_estimated: "ประมาณการ",
        status_pilot: "ช่วงทดลอง",

        // About
        about_title: "ตรรกะเบื้องหลังการไหลของข้อมูล",
        about_content: `
            <p>ผมเชี่ยวชาญในการสร้างระบบนิเวศ "LeadFlow" หรือการจัดการข้อมูลให้เหมือนสายพานในโรงงาน ด้วยประสบการณ์ด้าน Operations จาก <strong>UNIQLO</strong> และ Customer Experience จาก <strong>BMW</strong> ผมเชื่อว่าระบบอัตโนมัติจะมีค่าก็ต่อเมื่อมันยังคงความรู้สึกเป็นมนุษย์และทำงานได้อย่างเสถียร</p>
            <p>ปัจจุบัน ผมช่วยทีม SME ในกรุงเทพฯ ใช้ประโยชน์จาก <strong>n8n</strong> และ <strong>AI Prompt Engineering</strong> เพื่อตัดงานที่ซ้ำซ้อน ไม่ว่าจะเป็นแชทบอท RAG สำหรับธุรกิจสติกเกอร์ หรือระบบขายตั๋วคอนเสิร์ตจำนวนมาก งานของผมเน้นที่ <em>ผลลัพธ์ที่พิสูจน์ได้จริง</em> เสมอ</p>
        `,

        // Projects
        projects_title: "ผลงานที่พิสูจน์ด้วยตัวเลข",
        projects_sub: "แก้ปัญหาคอขวดที่ซับซ้อนด้วยสถาปัตยกรรมที่สะอาดและขยายต่อได้",

        // P1: PATSTICKER
        p1_name: "แชทบอท AI สำหรับ PATSTICKER",
        p1_one: "LINE OA → n8n RAG Agent → ระบบเสนอราคาอัตโนมัติ | ประหยัดงานแอดมิน 80%",
        p1_ctx: "ธุรกิจติดตั้งสติกเกอร์และฟิล์มที่มีลูกค้าทักทาง LINE OA จำนวนมาก",
        p1_pain: "ตอบคำถามช้า, คำนวณราคาด้วยมือ, และเสียโอกาสการขายในช่วงที่แอดมินไม่ว่าง",
        p1_auto: "ระบบตอบคำถามอัตโนมัติพร้อมประเมินราคา และส่งต่อให้ผู้เชี่ยวชาญเมื่อจำเป็น",
        p1_kpi: "ลดงานแอดมิน 80%, เพิ่มโอกาสปิดการขายได้ 2 เท่าจากการตอบโต้ที่รวดเร็ว",
        p1_rel: "ระบบป้องกันการบันทึกลีดซ้ำ, ระบบบันทึกข้อผิดพลาดอัตโนมัติ และการส่งต่องานอย่างไร้รอยต่อ",
        p1_caption: "การประมวลผล: AI วิเคราะห์ความต้องการของลูกค้าและคำนวณราคาแบบเรียลไทม์",

        // P2: Tickets
        p2_name: "ระบบขายตั๋ว มัน แฉะ มาก 2026",
        p2_one: "Webhook หลายช่องทาง → PromptPay QR → ออกตั๋วอัตโนมัติ | ทำงาน 24/7",
        p2_ctx: "เทศกาลดนตรีขนาดใหญ่ที่ต้องการความรวดเร็วและความแม่นยำในการส่งตั๋ว",
        p2_pain: "การเช็คสลิปและออกตั๋วด้วยมือทำให้คิวยาวและมีความเสี่ยงเรื่องความผิดพลาด",
        p2_auto: "ระบบตรวจสอบยอดเงินอัตโนมัติผ่าน PromptPay และสร้างตั๋ว PDF แบบ Dynamic",
        p2_kpi: "ส่งตั๋วได้ทันที (ใน 60 วินาที), ความผิดพลาดเป็นศูนย์, และมี Dashboard ดูยอดขายแบบ Real-time",
        p2_rel: "ระบบตรวจสอบ Checksum ของยอดโอน, ระบบ Retry เมื่อสร้างไฟล์พลาด และการสำรองข้อมูลบน Cloud",
        p2_caption: "แดชบอร์ด: ติดตามสถานะการส่งตั๋วและการตรวจสอบยอดเงิน PromptPay แบบเรียลไทม์",

        // P3: Notion Restaurant
        p3_name: "ระบบจัดการยอดขายร้านอาหารผ่าน Notion",
        p3_one: "LINE Orders → Notion DB Sync + Analytics Dashboard | ลดงานแมนนวล 90%",
        p3_ctx: "ร้านกาแฟในกรุงเทพฯ ที่มีข้อมูลกระจัดกระจายอยู่ตามแอปฯ Delivery และ LINE",
        p3_pain: "ไม่มีภาพรวมยอดขายที่ชัดเจน, ต้องคีย์ข้อมูลลงตารางตอนปิดร้าน และรายงานคลาดเคลื่อน",
        p3_auto: "เชื่อมโยงออเดอร์จากทุกช่องทางลงใน Notion Database พร้อมสรุปยอดรายวันอัตโนมัติ",
        p3_kpi: "ลดเวลาทำรายงาน 90%, ข้อมูลแม่นยำ 100%, และเห็นกำไร/ขาดทุนได้ทันที",
        p3_rel: "ระบบปรับฟอร์แมตข้อมูลให้ตรงกัน, ตัวกรองข้อมูลซ้ำ และระบบตรวจสอบความถูกต้องรายสัปดาห์",
        p3_caption: "ผลลัพธ์: มุมมองยอดขายที่รวมทุกช่องทาง พร้อมคำนวณกำไรรายวันอัตโนมัติ",

        // Services
        services_title: "ระดับการลงทุน",
        services_sub: "ราคาที่โปร่งใส ออกแบบมาเพื่อการขยายตัวของธุรกิจคุณ",
        tier1_name: "SME Starter",
        tier1_price: "10k",
        tier1_f1: "เวิร์กโฟลว์ n8n พื้นฐาน",
        tier1_f2: "การเชื่อมต่อ 1 ระบบ (API)",
        tier1_f3: "ระบบจัดการข้อผิดพลาดเบื้องต้น",
        tier1_cta: "ขอใบเสนอราคา",
        tier2_name: "SME Pro",
        tier2_price: "50k",
        tier2_f1: "ระบบ LeadFlow™ เต็มรูปแบบ",
        tier2_f2: "การเชื่อมต่อหลายแพลตฟอร์ม",
        tier2_f3: "ระบบ AI RAG เฉพาะธุรกิจ",
        tier2_f4: "ระบบความเสถียรระดับองค์กร",
        tier2_cta: "เริ่มโปรเจกต์",
        tier3_name: "องค์กรขนาดใหญ่",
        tier3_price: "ตามตกลง",
        tier3_f1: "ระบบนิเวศน์ที่ซับซ้อน",
        tier3_f2: "การเทรน AI Model ภายใน",
        tier3_f3: "การดูแลระบบและ SLA",
        tier3_cta: "ติดต่อสอบถามราคา",

        // Process
        process_title: "โรงงานผลิต Automation",
        process_sub: "กระบวนการติดตั้งที่เป็นระบบและพิสูจน์ได้จริง",
        step1_title: "Discover",
        step1_desc: "ค้นหาคอขวดและจุดที่ข้อมูลรั่วไหลในระบบปัจจุบันของคุณ",
        step2_title: "Design",
        step2_desc: "ออกแบบโครงสร้างตรรกะและเลือกเครื่องมือที่เหมาะสมที่สุด",
        step3_title: "Build",
        step3_desc: "พัฒนาระบบ n8n และเทมเพลต AI Prompt สำหรับธุรกิจคุณ",
        step4_title: "Deploy",
        step4_desc: "ทดสอบระบบอย่างเข้มงวดและติดตั้งใช้งานจริง",
        step5_title: "Scale",
        step5_desc: "ส่งมอบงานและดูแลปรับจูนระบบให้เติบโตไปพร้อมกับคุณ",

        // Footer
        footer_note: "ออกแบบมาเพื่อการปรึกษาด้าน Automation ที่รวดเร็วและพิสูจน์ได้ด้วยผลลัพธ์",
        footer_copy: "© 2026 ศิรวิชญ์ แก้วศรี. สงวนลิขสิทธิ์",
        footer_contact: "ช่องทางการติดต่อ",
        footer_social: "โซเชียลมีเดีย",
        privacy: "นโยบายความเป็นส่วนตัว",
        terms: "ข้อกำหนดการให้บริการ"
    }
};

function setLanguage(lang) {
    const dictionaryElements = document.querySelectorAll('[data-lang]');
    const bilingualElements = document.querySelectorAll('[data-en][data-th]');
    
    // GSAP Fade Animation
    if (typeof gsap !== 'undefined') {
        gsap.to('body', { opacity: 0, duration: 0.1, onComplete: () => {
            // Handle dictionary translations
            dictionaryElements.forEach(el => {
                const key = el.getAttribute('data-lang');
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });

            // Handle direct bilingual attributes
            bilingualElements.forEach(el => {
                const content = el.getAttribute(`data-${lang}`);
                if (content) el.innerHTML = content;
            });
            
            document.querySelectorAll('.lang-text').forEach(el => el.innerText = lang.toUpperCase());
            document.documentElement.lang = lang;
            localStorage.setItem('lang', lang);

            // Update active state for buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang-val') === lang);
            });
            
            gsap.to('body', { opacity: 1, duration: 0.2 });
        }});
    } else {
        dictionaryElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        bilingualElements.forEach(el => {
            const content = el.getAttribute(`data-${lang}`);
            if (content) el.innerHTML = content;
        });
        document.querySelectorAll('.lang-text').forEach(el => el.innerText = lang.toUpperCase());
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang-val') === lang);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    function toggleMobileMenu(show) {
        if (show) {
            mobileMenu.classList.remove('translate-x-full');
        } else {
            mobileMenu.classList.add('translate-x-full');
        }
    }

    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    mobileMenuClose.addEventListener('click', () => toggleMobileMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMobileMenu(false)));

    // Language Toggles (Single ID or Multiple Buttons)
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem('lang') || 'en';
            setLanguage(currentLang === 'en' ? 'th' : 'en');
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.getAttribute('data-lang-val');
            if (selectedLang) setLanguage(selectedLang);
        });
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun');
    const moonIcon = themeToggle.querySelector('.moon');
    
    function updateTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    updateTheme(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateTheme(isDark);
    });
});
