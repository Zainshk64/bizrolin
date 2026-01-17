
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Cpu, Utensils, Film, FlaskConical, PackageSearch, ArrowRight, Headphones, Code2, Palette, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
const brands = [
  {
    icon: <Globe size={40} />,
    name: "Global Recruitment",
    description: "Partnered with Bizrolin to deliver innovative tech solutions for business growth.",
  },
  {
    icon: <Headphones size={40} />,
    name: "Callrolin",
    description:
      "Supports Bizrolin in enhancing communication and customer engagement strategies.",
  },
  {
    icon: <Code2 size={40} />,
    name: "Wingsols",
    description:
      "Collaborates with Bizrolin to provide cutting-edge digital and software services.",
  },
  {
    icon: <Palette size={40} />,
    name: "Zobil",
    description:
      "Works alongside Bizrolin to offer creative design and branding solutions.",
  },
  {
    icon: <PenTool size={40} />,
    name: "Edit Bureau",
    description:
      "Assists Bizrolin with content, editing, and media solutions for professional outreach.",
  },
];

const Brands = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        // 1. Create a context for easy cleanup
        let ctx = gsap.context(() => {
            const track = trackRef.current;
            const cards = track.querySelectorAll('.brand-card');
            if (!cards.length) return;

            const firstCard = cards[0];

            // Use a function for width so it re-calculates correctly on refresh
            const getTrackWidth = () => track.scrollWidth;
            const getCenterXOffset = () => (window.innerWidth / 2) - (firstCard.offsetWidth / 2);

            // Set initial position
            gsap.set(track, { x: getCenterXOffset() });

            gsap.to(track, {
                x: () => {
                    const centerOffset = getCenterXOffset();
                    return -(track.scrollWidth - centerOffset - firstCard.offsetWidth);
                },
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${track.scrollWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-svh w-full bg-gradient-to-b from-darker to-black overflow-hidden flex flex-col pt-24 md:pt-32 pb-10"
        >
            {/* Header - Centered on mobile, aligned on desktop */}
            <div className="w-full px-8 md:px-16 flex-shrink-0">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <div className="section-label mb-4 flex items-center justify-center md:justify-start gap-3">
                            <span className="section-label-line"></span>
                            Our Portfolio
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                           Focused Approach to   <br className="hidden md:block" />
                            <span className="text-primary-500">Global Recruitment</span>
                        </h2>
                    </div>

                    <div className="w-full md:w-auto flex justify-center md:justify-end pb-2">
                        <a href="/brands" className="btn-primary group flex items-center gap-4 w-fit">
                            Explore All
                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all group-hover:bg-primary-500">
                                <ArrowRight size={18} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className="flex-grow flex items-center">
                <div
                    ref={trackRef}
                    /* will-change-transform is crucial for smooth GSAP performance */
                    className="flex gap-6 md:gap-10 items-center will-change-transform py-10"
                >
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="brand-card w-[300px] md:w-[450px] aspect-[4/5] md:aspect-auto md:h-[500px] glass-bg rounded-3xl p-8 md:p-10 flex flex-col justify-between group hover:border-primary-500/50 transition-all border border-white/5 shadow-2xl shrink-0"
                        >
                            <div>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 rounded-2xl flex items-center justify-center text-primary-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {brand.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">{brand.name}</h3>
                                <p className="text-slate-400 text-sm md:text-lg leading-relaxed">
                                    {brand.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold group-hover:text-primary-400 transition-colors">
                                    View Details
                                </span>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Indicator */}
            <div className="flex-shrink-0 w-full flex items-center justify-center gap-2 text-slate-500 text-[10px] tracking-[0.3em] uppercase pt-4">
                <div className="w-12 h-px bg-slate-800"></div>
                <span className="animate-pulse">Scroll to explore</span>
                <div className="w-12 h-px bg-slate-800"></div>
            </div>
        </section>
    );
};

export default Brands;