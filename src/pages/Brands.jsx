



import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Globe,
    Code2,
    ArrowUpRight,
    MapPin,
    Cpu,
    Utensils,
    Film,
    Building,
    HeartPulse,
    ArrowRight,
    Headphones,
    Palette,
    PenTool
} from 'lucide-react';

// Reused Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoiseOverlay from '../components/NoiseOverlay';

// Styles
import '../styles/Brands.css';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.fromTo('.brands-hero h1',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
            );

            gsap.fromTo('.brands-hero p',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
            );

            // Cards Animation
            const cards = document.querySelectorAll('.brandp-card');
            cards.forEach((card, index) => {
                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    delay: index * 0.1
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Brand Data
    const brands = [
        {
            id: 'Devrolin',
            name: 'Devrolin',
            description: 'Partnered with BizRolin to deliver innovative tech solutions for business growth.',
            icon: <Code2 size={42} strokeWidth={1.5} />,
            fullWidth: true,
            stats: [
                { value: '40+', label: 'Countries' },
                { value: '$5M', label: 'Revenue' },
                { value: '200+', label: 'Employees' }
            ],
            tags: ['Commodities', 'Trading', 'Logistics'],
            // Ship/Port image
            image: "https://media.licdn.com/dms/image/v2/D4D0BAQHWY9H8s2Mdpg/company-logo_200_200/company-logo_200_200/0/1720938799238/devrolin_logo?e=2147483647&v=beta&t=0Pfm5rtgbkq-BG5ZL37b-cr-hrK1fgRr5rR1O03D2IY"
        },
        {
            id: 'CallRolin',
            name: 'CallRolin',
            description: 'Partnered with BizRolin to deliver innovative tech solutions for business growth.',
            icon: <Headphones size={42} strokeWidth={1.5} />,
            fullWidth: false,
            stats: [
                { value: '8', label: 'EU Countries' },
                { value: '$5M+', label: 'Revenue' }
            ]
        },
        {
            id: 'Wingsols',
            name: 'Wingsols',
            description: 'Collaborates with BizRolin to provide cutting-edge digital and software services.',
            icon: <Cpu size={42} strokeWidth={1.5} />,
            fullWidth: false,
            stats: [
                { value: '500+', label: 'Projects' },
                { value: '200+', label: 'Clients' }
            ]
        },
        {
            id: 'Zobil',
            name: 'Zobil',
            description: 'Works alongside BizRolin to offer creative design and branding solutions.',
            icon: <Palette size={42} strokeWidth={1.5} />,
            fullWidth: false,
            stats: [
                { value: '50+', label: 'Products' },
                { value: '10M', label: 'Customers' }
            ]
        },
        {
            id: 'Edit Bureau',
            name: 'Edit Bureau',
            description: 'Assists BizRolin with content, editing, and media solutions for professional outreach.',
            icon: <PenTool size={42} strokeWidth={1.5} />,
            fullWidth: false,
            stats: [
                { value: '100+', label: 'Productions' },
                { value: '50M', label: 'Viewers' }
            ]
        },
        // {
        //     id: 'BizRolin-real-estate',
        //     name: 'BizRolin Real Estate',
        //     description: 'Premium property development and management creating iconic residential and commercial spaces in prime locations.',
        //     icon: <Building size={42} strokeWidth={1.5} />,
        //     fullWidth: false,
        //     stats: [
        //         { value: '25+', label: 'Projects' },
        //         { value: '$1.2B', label: 'Portfolio' }
        //     ]
        // },
        // {
        //     id: 'BizRolin-healthcare',
        //     name: 'BizRolin Healthcare',
        //     description: 'Comprehensive healthcare solutions provider operating hospitals, clinics, and pharmaceutical distribution networks. Committed to improving lives through accessible and quality healthcare services.',
        //     icon: <HeartPulse size={42} strokeWidth={1.5} />,
        //     fullWidth: true,
        //     stats: [
        //         { value: '15', label: 'Hospitals' },
        //         { value: '100+', label: 'Clinics' },
        //         { value: '2M+', label: 'Patients/Year' }
        //     ],
        //     tags: ['Healthcare', 'Pharmaceuticals', 'Medical'],
        //     // Modern Hospital image
        //     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop"
        // }
    ];

    return (
        <div className="brands-page-wrapper" ref={containerRef}>
            <NoiseOverlay />

            {/* Background Animation Layers */}
            <div className="bg-animation"></div>
            <div className="particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="particle"></div>
                ))}
            </div>

            <Navbar />

            <div className="main-content">

                {/* Hero Section */}
                <section className="brands-hero">
                    <div className="brands-hero-content">
                        <h1>Our <span className="text-gradient">Brands</span></h1>
                        <p>A diverse portfolio of excellence spanning seven industries and 45 countries worldwide.</p>
                    </div>
                </section>

                {/* Brands Grid */}
                <section className="brands-section">
                    <div className="brands-grid">
                        {brands.map((brand) => (
                            <div
                                key={brand.id}
                                className={`brandp-card ${brand.fullWidth ? 'full-width' : ''}`}
                            >
                                <div className="brandp-content">
                                    <div className="brandp-header">
                                        <div className="brandp-logo">
                                            {brand.icon}
                                        </div>
                                        <div className="brandp-arrow">
                                            <ArrowUpRight size={28} />
                                        </div>
                                    </div>
                                    <div className="brandp-info">
                                        <h2>{brand.name}</h2>
                                        <p>{brand.description}</p>

                                        <div className="brandp-stats">
                                            {brand.stats.map((stat, index) => (
                                                <div key={index} className="brandp-stat">
                                                    <h4>{stat.value}</h4>
                                                    <p>{stat.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {brand.tags && (
                                            <div className="brandp-tags">
                                                {brand.tags.map((tag, index) => (
                                                    <span key={index} className="brandp-tag">{tag}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {brand.fullWidth && brand.image && (
                                    <div className="brandp-visual">
                                        <img src={brand.image} alt={brand.name} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="brands-cta">
                    <h2>Ready to <span className="text-gradient">Partner</span> With Us?</h2>
                    <p>Join our growing family of world-class brands and unlock new possibilities.</p>
                    <Link to="/contact" className="cta-btn">
                        Start a Conversation
                        <ArrowRight size={20} />
                    </Link>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Brands;