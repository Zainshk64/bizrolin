// src/components/About.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Leaf, Handshake } from 'lucide-react';
import { initScrollAnimations } from '../lib/scrollAnime';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);


    useEffect(() => {
        // Initialize reveal animations
        initScrollAnimations();
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Text
            gsap.to(textRef.current, {
                xPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });

            // Reveal Cards
            gsap.from('.about-card', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.about-grid',
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-16 bg-dbldarkest relative overflow-hidden">
            <div
                ref={textRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 pointer-events-none select-none z-0"
                style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "25vw",
                    fontWeight: "bold",
                    opacity: 0.5,
                    color: "white",
                    WebkitTextStroke: "2px rgba(59, 130, 246, 0.1)",
                    whiteSpace: "nowrap"
                }}
            >
                BIZROLIN
            </div>

            <div className="max-w-7xl mb-50 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
                    <div className='flex-3'>
                        <div className="section-label"><span className="section-label-line"></span>About Bizrolin</div>
                        <h2 className="section-title">Building Global Teams Through Pakistani Talent </h2>
                    </div>
                    <div className='flex-2'></div>
                    <div className="flex-3 max-w-md text-slate-400 text-lg leading-relaxed pt-4">
                        <p>Founded as a modern recruitment startup, we bring years of real-world hiring experience into a new, focused approach to global talent solutions. We help international companies access Pakistan’s top professionals efficiently, transparently, and at scale. </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Cards here (Same as before) */}
                    {[
                        { icon: Target, title: "Mission Driven", desc: "Purpose-led innovation." },
                        { icon: Leaf, title: "Sustainable", desc: "Eco-conscious operations." },
                        { icon: Handshake, title: "People First", desc: "United by shared values." }
                    ].map((item, i) => (
                        <div key={i} className="about-card reveal-up glass-bg p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/5">
                            <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 text-white"><item.icon /></div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;