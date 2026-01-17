

// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoiseOverlay from '../components/NoiseOverlay';
import '../styles/About.css';
import { Target, Lightbulb, Star, Globe, Users, Handshake } from 'lucide-react';

const About = () => {

    // Data for sections
    const values = [
        {
            icon: <Target size={40} strokeWidth={1.5} />,
            title: "Integrity",
            desc: "We do what's right, even when no one is watching. Honesty and transparency are the foundation of all our relationships."
        },
        {
            icon: <Lightbulb size={40} strokeWidth={1.5} />,
            title: "Innovation",
            desc: "We constantly push boundaries and challenge the status quo to find better solutions for tomorrow's challenges."
        },
        {
            icon: <Star size={40} strokeWidth={1.5} />,
            title: "Excellence",
            desc: "We strive for the highest standards in everything we do, never settling for anything less than our best."
        },
        {
            icon: <Globe size={40} strokeWidth={1.5} />,
            title: "Sustainability",
            desc: "We're committed to creating value that lasts, protecting our planet for future generations."
        },
        {
            icon: <Users size={40} strokeWidth={1.5} />,
            title: "People First",
            desc: "Our people are our greatest asset. We invest in their growth and create an environment where they can thrive."
        },
        {
            icon: <Handshake size={40} strokeWidth={1.5} />,
            title: "Collaboration",
            desc: "We believe in the power of working together, both within our organization and with our partners."
        }
    ];

    const team = [
        {
            name: "Ahmed Al-Rashid",
            role: "Chairman & CEO",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop"
        },
        {
            name: "Sarah Mitchell",
            role: "Chief Operating Officer",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop"
        },
        {
            name: "Michael Chen",
            role: "Chief Financial Officer",
            img: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1470&auto=format&fit=crop"
        },
        {
            name: "Fatima Hassan",
            role: "Chief Strategy Officer",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop"
        }
    ];

    const timeline = [
        { year: "1995", title: "Foundation", desc: "Panorama Group was founded as a small trading company in Dubai." },
        { year: "2002", title: "Global Expansion", desc: "Expanded operations to Europe with the establishment of Global Resources UK." },
        { year: "2008", title: "Diversification", desc: "Entered the technology sector with the launch of System Technologies." },
        { year: "2015", title: "Food & Entertainment", desc: "Launched Panorama Foods and Panorama Entertainment divisions." },
        { year: "2023", title: "$10B Revenue", desc: "Achieved $10 billion in annual revenue with operations in 45 countries." }
    ];

    const stats = [
        { label: "Countries", value: "45+" },
        { label: "Employees", value: "15,000+" },
        { label: "Industries", value: "7" },
        { label: "Revenue", value: "$10B+" }
    ];

    return (
        <div className="about-page-container">
            <NoiseOverlay />
            <Navbar />

            {/* Background Animation Elements */}
            <div className="bg-animation"></div>
            <div className="particles">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${(i + 1) * 10 - 5}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${15 + i}s`
                        }}
                    />
                ))}
            </div>

            <main data-scroll-container>

                {/* Hero Section */}
                <section className="about-hero" data-scroll-section>
                    <div className="about-hero-content">
                        <span className="page-tag">About Panorama</span>
                        <h1 data-scroll data-scroll-speed="1">
                            Building a <span className="text-gradient">Better Tomorrow</span>
                        </h1>
                        <p data-scroll data-scroll-speed="0.5">
                            For over 25 years, we've been pioneering innovation across industries. From humble beginnings to a global conglomerate, our journey is defined by excellence, integrity, and an unwavering commitment to creating value.
                        </p>
                    </div>
                    <div className="about-hero-image-container" data-scroll data-scroll-speed="2">
                        <img
                            src="https://images.unsplash.com/photo-1766391374856-eccaa085b661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Modern corporate architecture"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </section>

                {/* Story Section */}
                <section className="story-section" data-scroll-section>
                    <div className="story-grid">
                        <div className="story-content" data-scroll data-scroll-speed="1">
                            <h2>Our <span className="text-gradient">Story</span></h2>
                            <p>What started as a small trading company in 1974 has grown into a diversified conglomerate spanning seven industries across 45 countries.</p>
                            <p>Our founder's vision was simple: create businesses that not only generate profit but also contribute positively to society and the environment. This vision continues to guide us today.</p>
                            <p>Through strategic acquisitions, organic growth, and a relentless focus on innovation, we've built a family of companies that are leaders in their respective fields.</p>
                        </div>
                        <div className="story-image-wrapper" data-scroll data-scroll-speed="2">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern corporate headquarters representing growth"
                                style={{ borderRadius: '30px', width: '100%', height: '500px', objectFit: 'cover' }}
                            />
                            <div className="story-year">1974</div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section" data-scroll-section>
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Values</span></h2>
                        <p>The principles that guide every decision we make</p>
                    </div>
                    <div className="values-grid">
                        {values.map((val, index) => (
                            <div key={index} className="value-card hover-trigger" data-scroll data-scroll-speed={index % 2 === 0 ? "1" : "1.5"}>
                                <div className="value-icon">
                                    {val.icon}
                                </div>
                                <h3>{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section" data-scroll-section>
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Journey</span></h2>
                        <p>Key milestones in our growth story</p>
                    </div>
                    <div className="timeline">
                        {timeline.map((item, index) => (
                            <div key={index} className="timeline-item" data-scroll data-scroll-speed="0.5">
                                <div className="timeline-content hover-trigger">
                                    <div className="timeline-year">{item.year}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="team-section" data-scroll-section>
                    <div className="section-header">
                        <h2>Leadership <span className="text-gradient">Team</span></h2>
                        <p>Meet the visionaries guiding our journey</p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card hover-trigger" data-scroll data-scroll-speed={(1 + (index * 0.2)).toString()}>
                                <div className="team-image-wrapper">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="statsp-section" data-scroll-section>
                    <div className="statsp-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <h3 data-scroll data-scroll-speed="1">{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default About;