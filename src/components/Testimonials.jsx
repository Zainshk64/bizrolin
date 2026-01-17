// src/components/Testimonials.jsx
import { useEffect, useState } from 'react';
import { initScrollAnimations } from '../lib/scrollAnime';
import gsap from 'gsap';

const testimonials = [
    {
        text: "Panorama Group represents the gold standard in diversified business excellence. Their commitment to innovation and sustainable growth sets them apart in today's global marketplace.",
        author: "James Davidson",
        role: "CEO, Global Investments Corp",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop"
    },
    {
        text: "Working with Panorama has transformed our supply chain operations. Their expertise and global reach have been instrumental in our expansion across three continents.",
        author: "Sarah Mitchell",
        role: "COO, TechVentures International",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop"
    },
    {
        text: "The level of professionalism and innovation at Panorama Group is unmatched. They don't just meet expectations – they consistently exceed them in every partnership.",
        author: "Michael Chen",
        role: "Director, Asia Pacific Holdings",
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialData, setTestimonialData] = useState(testimonials[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        // Initialize reveal animations
        initScrollAnimations();
    }, []);

    useEffect(() => {
        gsap.to('.testimonial-content', {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => {
                setTestimonialData(testimonials[currentIndex]);
                gsap.to('.testimonial-content', {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    }, [currentIndex]);

    return (
        <section className="py-32 md:py-40 px-8 md:px-16 bg-gradient-to-b from-darker to-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Header */}
                <div className="section-label justify-center reveal-up">
                    <span className="section-label-line" />
                    Testimonials
                </div>
                <h2 className="section-title text-center mx-auto mb-16 max-w-full reveal-up">What Leaders Say</h2>

                {/* Testimonial */}
                <div className="relative reveal-up">
                    {/* Quote Mark */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 font-serif text-[15rem] text-primary-500/[0.06] leading-none pointer-events-none">
                        "
                    </div>

                    <div className="testimonial-content relative z-10">
                        <p className="font-serif text-3xl md:text-4xl text-white leading-relaxed mb-12">
                            {testimonialData.text}
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg shadow-primary-500/35">
                                <img
                                    src={testimonialData.image}
                                    className="w-full h-full object-cover"
                                    alt={testimonialData.author}
                                />
                            </div>
                            <div className="text-left">
                                <h4 className="text-lg font-semibold text-white mb-1">{testimonialData.author}</h4>
                                <p className="text-sm text-slate-400">{testimonialData.role}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-400 ease-premium ${currentIndex === index
                                ? 'bg-gradient-to-br from-primary-500 to-primary-600 scale-125 shadow-lg shadow-primary-500/40'
                                : 'bg-primary-500/20 hover:bg-primary-500/40'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;