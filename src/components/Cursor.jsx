
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        // Hide default cursor on desktop only
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursor = cursorRef.current;
            const cursorDot = cursorDotRef.current;

            const moveCursor = (e) => {
                gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' });
                gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
            };

            const hoverElements = document.querySelectorAll('a, button, .hover-trigger');
            const onEnter = () => cursor?.classList.add('scale-150', 'bg-blue-500/10', 'border-blue-400');
            const onLeave = () => cursor?.classList.remove('scale-150', 'bg-blue-500/10', 'border-blue-400');

            document.addEventListener('mousemove', moveCursor);
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);
            });

            return () => {
                document.removeEventListener('mousemove', moveCursor);
                hoverElements.forEach(el => {
                    el.removeEventListener('mouseenter', onEnter);
                    el.removeEventListener('mouseleave', onLeave);
                });
            };
        }
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed w-10 h-10 border border-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform hidden md:block mix-blend-difference" />
            <div ref={cursorDotRef} className="fixed w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
        </>
    );
};

export default CustomCursor;