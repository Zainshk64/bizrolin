// src/components/Stats.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScrollAnimations } from '../lib/scrollAnime';
import { Globe2, Users, Briefcase, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    // { icon: Globe2, value: 45, suffix: '+', label: 'Countries' },
    { icon: Users, value: "50", suffix: '', label: 'Employees' },
    { icon: Briefcase, value: 5, suffix: '+', label: 'Industries' },
    { icon: TrendingUp, value: 55, prefix: '$', suffix: 'M+', label: 'Revenue' },
];

const Stats = () => {
    const statsRef = useRef([]);

    useEffect(() => {
        // Initialize reveal animations
        initScrollAnimations();
    }, []);

    useEffect(() => {
        statsRef.current.forEach((stat, index) => {
            if (!stat) return;

            const target = parseInt(stat.getAttribute('data-target') || '0');
            if (!target) return;

            ScrollTrigger.create({
                trigger: stat,
                start: 'top 85%',
                onEnter: () => {
                    let current = 0;
                    const increment = target / 60;

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            stat.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.textContent = target;
                        }
                    };
                    updateCounter();
                },
                once: true
            });
        });
    }, []);

    return (
        <section className="py-28 md:py-32 px-8 md:px-16 bg-darkest relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(20,184,166,0.04)_0%,transparent_50%)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="stats-grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card text-center p-12 glass-bg rounded-3xl relative overflow-hidden group card-hover reveal-up"
                        >
                            {/* Top Border on Hover */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-0.5 bg-gradient-to-r from-primary-500 to-teal-light scale-x-0 transition-transform duration-500 group-hover:scale-x-100 rounded-b" />

                            {/* Icon */}
                            <div className="w-16 h-16 bg-primary-500/10 border border-slate-700/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-400 group-hover:scale-110 group-hover:bg-primary-500/15 group-hover:border-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                                <stat.icon className="w-8 h-8 text-primary-400" strokeWidth={1.5} />
                            </div>

                            {/* Number */}
                            <div className="font-serif text-6xl font-semibold text-white leading-none mb-3">
                                {stat.prefix && stat.prefix}
                                <span
                                    ref={el => statsRef.current[index] = el}
                                    data-target={stat.value}
                                    className="stat-number"
                                >
                                    0
                                </span>
                                {stat.suffix && <span className="text-primary-400">{stat.suffix}</span>}
                            </div>

                            {/* Label */}
                            <div className="text-sm text-slate-400 font-medium uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;