gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // If reduced motion is preferred, ensure elements are visible and skip animation
        gsap.set('.badge, h1, .subtext, .cta-row, .visual-card', { opacity: 1, y: 0 });
        gsap.set('.trust-row, .stat-item', { opacity: 1, y: 0 });
        gsap.set('.templates-head, .template-card', { opacity: 1, y: 0 });
        return;
    }

    // GSAP MatchMedia for responsive animations
    let mm = gsap.matchMedia();

    mm.add({
        // Desktop
        isDesktop: "(min-width: 769px)",
        // Mobile
        isMobile: "(max-width: 768px)"
    }, (context) => {
        let { isDesktop, isMobile } = context.conditions;

        // ============================================
        // PHASE 1: HERO SECTION
        // ============================================
        gsap.set('.badge, h1, .subtext, .cta-row', { opacity: 0, y: isMobile ? 8 : 16 });
        gsap.set('.visual-card', { opacity: 0, y: isMobile ? 6 : 12 });

        const heroDurationFactor = isMobile ? 0.8 : 1; // Reduce duration by 20% on mobile
        const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        // Timeline sequence
        heroTl.to('.badge', { duration: 0.35 * heroDurationFactor, opacity: 1, y: 0 }, 0)
              .to('h1', { duration: 0.45 * heroDurationFactor, opacity: 1, y: 0 }, 0.05 * heroDurationFactor)
              .to('.subtext', { duration: 0.40 * heroDurationFactor, opacity: 1, y: 0 }, 0.10 * heroDurationFactor)
              .to('.visual-card', { duration: 0.55 * heroDurationFactor, opacity: 1, y: 0 }, isMobile ? 0.10 * heroDurationFactor : 0.18 * heroDurationFactor)
              .to('.cta-row', { duration: 0.40 * heroDurationFactor, opacity: 1, y: 0 }, 0.22 * heroDurationFactor);


        // ============================================
        // PHASE 2: PROOF & STATS SECTION
        // ============================================
        const statOffset = isMobile ? 10 : 18;
        const statDurationFactor = isMobile ? 0.8 : 1;

        gsap.set('.trust-row, .stat-item', { opacity: 0, y: statOffset });

        const statsTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.stats',
                start: 'top 75%',
                once: true
            }
        });

        statsTl.to('.trust-row', {
            duration: 0.4 * statDurationFactor,
            ease: 'power2.out',
            opacity: 1,
            y: 0
        })
        .to('.stat-item', {
            duration: 0.4 * statDurationFactor,
            ease: 'power2.out',
            opacity: 1,
            y: 0,
            stagger: 0.14 * statDurationFactor // Mid-point of 0.12-0.16s
        }, "-=0.2"); // Overlap slightly with trust-row


        // ============================================
        // PHASE 2: TEMPLATES / CARDS SECTION
        // ============================================
        const templateOffsetHead = isMobile ? 8 : 14;
        const templateOffsetCard = isMobile ? 10 : 18;
        const templateDurationFactor = isMobile ? 0.8 : 1;

        // Find all sections that should act as "Template Galleries" 
        const templateSections = document.querySelectorAll('.templates');

        templateSections.forEach((section) => {
            const head = section.querySelector('.templates-head');
            const cards = section.querySelectorAll('.template-card');

            if (head) gsap.set(head, { opacity: 0, y: templateOffsetHead });
            if (cards.length > 0) gsap.set(cards, { opacity: 0, y: templateOffsetCard });

            const tplTl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    once: true
                }
            });

            if (head) {
                tplTl.to(head, {
                    duration: 0.4 * templateDurationFactor,
                    ease: 'power2.out',
                    opacity: 1,
                    y: 0
                });
            }

            if (cards.length > 0) {
                tplTl.to(cards, {
                    duration: 0.38 * templateDurationFactor, // Mid-point of 0.35-0.4s
                    ease: 'power2.out',
                    opacity: 1,
                    y: 0,
                    stagger: 0.08 * templateDurationFactor
                }, head ? "-=0.2" : 0); // Overlap with head reveal if head exists
            }
        });

    });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", (event) => {
    initAnimations();
});
