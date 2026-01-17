// src/components/Marquee.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe2, Computer, Utensils, Film, TestTube, Package, Building2, UserCheck, Laptop, Briefcase, Lightbulb, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const marqueeItems = [
  { icon: Globe2, text: "Global Talent Sourcing" },              // 🌍 global reach
  { icon: UserCheck, text: "Pre-Vetted Recruitment" },          // ✅ verified candidates
  { icon: Laptop, text: "Remote & Offshore Hiring" },           // 💻 remote work
  { icon: Briefcase, text: "Permanent & Contract Placement" },  // 💼 jobs & contracts
  { icon: Lightbulb, text: "Hiring Strategy & Support" },       // 💡 strategy
  { icon: Layers, text: "End-to-End Recruitment Management" },  // 🧩 full process
];

const Marquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        if (!marqueeRef.current) return;

        // Create a sticky effect for the marquee
        ScrollTrigger.create({
            trigger: marqueeRef.current,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
            onUpdate: (self) => {
                // Scale effect as it approaches
                const scale = 1 + (self.progress * 0.05);
                gsap.set(marqueeRef.current, {
                    scale: scale,
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(st => {
                if (st.trigger === marqueeRef.current) {
                    st.kill();
                }
            });
        };
    }, []);

    return (
        <section
            ref={marqueeRef}
            className="marquee-section py-6 bg-darker border-y border-slate-700/10 overflow-hidden relative z-20"
        >
            <div className="flex animate-marquee">
                {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-12 sm:gap-16 px-6 sm:px-8 flex-shrink-0">
                        {marqueeItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 glass-bg rounded-xl flex items-center justify-center">
                                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-slate-400">{item.text}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Marquee;