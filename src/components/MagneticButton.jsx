import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className = "" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' });
        };

        const handleMouseLeave = () => {
            gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <div ref={ref} className={`inline-block ${className}`}>{children}</div>;
};

export default MagneticButton;