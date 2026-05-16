/* GSAP Micro-interactions & Scroll Effects */

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero Entrance
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    heroTl.from("nav", { y: -20, opacity: 0, duration: 1 })
          .from("h1", { y: 30, opacity: 0, duration: 1 }, "-=0.5")
          .from("h2", { y: 20, opacity: 0, duration: 0.8 }, "-=0.7")
          .from(".hero-text", { opacity: 0, duration: 1 }, "-=0.5")
          .from(".cta-box", { scale: 0.9, opacity: 0, duration: 0.6 }, "-=0.4");

    // Scroll Fade-in Sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Case Study Image Parallax/Hover
    const caseCards = document.querySelectorAll('.case-study-card');
    caseCards.forEach(card => {
        const img = card.querySelector('img');
        if (img) {
            card.addEventListener('mouseenter', () => {
                gsap.to(img, { scale: 1.05, duration: 0.8, ease: "power2.out" });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
            });
        }
    });

    // Sticky Nav Shadow on Scroll
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('bg-white/80', 'dark:bg-luxury-dark/80', 'backdrop-blur-lg', 'shadow-sm');
        } else {
            nav.classList.remove('bg-white/80', 'dark:bg-luxury-dark/80', 'backdrop-blur-lg', 'shadow-sm');
        }
    });

    // Process Steps Stagger
    gsap.from(".process-step", {
        scrollTrigger: {
            trigger: "#process",
            start: "top 80%"
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
    });

    // Experience Timeline Stagger
    gsap.from(".timeline-item", {
        scrollTrigger: {
            trigger: "#experience",
            start: "top 70%"
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    });

    // Highlights Stat Reveal
    gsap.from(".highlight-pill", {
        scrollTrigger: {
            trigger: ".highlights-bar",
            start: "top 85%"
        },
        opacity: 0,
        scale: 0.9,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
    });
});

