import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        // 1. Lenis Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. Custom Cursor Logic
        const moveCursor = (e) => {
            if (cursorRef.current && cursorDotRef.current) {
                gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
                gsap.to(cursorDotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
            }
        };

        // 3. Hover Effects
        const handleHover = () => cursorRef.current?.classList.add('scale-150', 'bg-blue-500/10', 'border-blue-400');
        const handleLeave = () => cursorRef.current?.classList.remove('scale-150', 'bg-blue-500/10', 'border-blue-400');

        document.addEventListener('mousemove', moveCursor);

        // Attach hover listeners to interactive elements
        const targets = document.querySelectorAll('a, button, .interactive');
        targets.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            lenis.destroy();
            document.removeEventListener('mousemove', moveCursor);
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="noise-overlay" />

            {/* Custom Cursor Elements */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 mix-blend-difference" />
            <div ref={cursorDotRef} className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />

            <main className="relative w-full overflow-hidden">
                {children}
            </main>
        </>
    );
};

export default Layout;