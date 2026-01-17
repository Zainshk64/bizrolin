// src/components/BackToTop.jsx
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`fixed bottom-10 right-10 w-14 h-14 glass-bg rounded-full flex items-center justify-center text-primary-400 text-xl cursor-pointer z-[100] shadow-lg shadow-black/40 transition-all duration-400 ease-premium ${isVisible
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible translate-y-5'
                } hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/40`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ChevronUp className="w-6 h-6" />
        </button>
    );
};

export default BackToTop;