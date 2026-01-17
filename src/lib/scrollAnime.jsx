import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
    // Clear existing triggers to prevent duplicates on mobile orientation change
    ScrollTrigger.getAll().forEach(t => {
        // Only kill the ones we manage via these classes
        if (t.vars.trigger && typeof t.vars.trigger === 'string' && t.vars.trigger.includes('reveal')) {
            t.kill();
        }
    });

    const animations = [
        { class: '.reveal-up', x: 0, y: 40 }, // Smaller distance for mobile
        { class: '.reveal-down', x: 0, y: -40 },
        { class: '.reveal-left', x: 40, y: 0 },
        { class: '.reveal-right', x: -40, y: 0 },
    ];

    animations.forEach((anim) => {
        const targets = gsap.utils.toArray(anim.class);
        if (targets.length > 0) {
            targets.forEach((element) => {
                gsap.fromTo(
                    element,
                    {
                        opacity: 0,
                        x: anim.x,
                        y: anim.y
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: element,
                            // Start slightly later on mobile to ensure element is visible
                            start: 'top 92%',
                            end: 'bottom 8%',
                            toggleActions: 'play reverse play reverse',
                            // Crucial for mobile height changes:
                            invalidateOnRefresh: true,
                            // Prevents element being "stuck" invisible if scroll is too fast
                            fastScrollEnd: true,
                        }
                    }
                );
            });
        }
    });
};