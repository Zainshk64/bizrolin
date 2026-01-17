// src/components/CTA.jsx
import { useEffect } from 'react';
import { initScrollAnimations } from '../lib/scrollAnime';
const CTA = () => {
    useEffect(() => {
            // Initialize reveal animations
            initScrollAnimations();
        }, []);
    return (
        <section className="py-32 md:py-40 px-8 md:px-16 bg-gradient-to-br from-primary-600 via-primary-800 to-darker relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05)_0%,transparent_40%)]" />

            {/* Decorative Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-[500px] h-[500px] border border-white/10 rounded-full -top-64 -right-40 animate-float-1" />
                <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full -bottom-52 -left-40 animate-float-2" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white mb-9 backdrop-blur-sm reveal-up">
                    ✦ Ready to Transform Your Business?
                </div>

                {/* Title */}
                <h2 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight reveal-up">
                    Partner with{' '}
                    <span className="bg-gradient-to-br from-blue-300 via-teal-300 to-purple-300 bg-clip-text text-transparent">
                        Excellence
                    </span>
                </h2>

                {/* Subtitle */}
                <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto leading-relaxed reveal-up">
                    {/* Join the Panorama family and be part of a legacy that's shaping the future of global business. */}
                    fast-growing recruitment company powered by professionals with deep, hands-on experience in global hiring.                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <a href="#" className="btn-white group ">
                        Get in Touch
                        <span className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary-200">
                            →
                        </span>
                    </a>
                    <a href="#" className="btn-outline-white">
                        Explore Opportunities
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;