

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
            title: "Global Talent Sourcing",
            desc: "We identify and connect top-tier Pakistani professionals with international companies across multiple industries."
        },
        {
            icon: <Lightbulb size={40} strokeWidth={1.5} />,
            title: "Pre-Vetted Recruitment",
            desc: "Every candidate is carefully screened for skills, experience, and cultural fit to ensure quality from day one"
        },
        {
            icon: <Star size={40} strokeWidth={1.5} />,
            title: "Remote & Offshore Hiring",
            desc: "We help businesses build reliable remote teams with flexible hiring models tailored to their needs."
        },
        {
            icon: <Globe size={40} strokeWidth={1.5} />,
            title: "Permanent & Contract Placement",
            desc: "From long-term roles to project-based hiring, we deliver talent that aligns with business goals."
        },
        {
            icon: <Users size={40} strokeWidth={1.5} />,
            title: "Hiring Strategy & Support",
            desc: "We guide companies through the hiring process, offering insights that simplify and accelerate global recruitment."
        },
        {
            icon: <Handshake size={40} strokeWidth={1.5} />,
            title: "End-to-End Recruitment Management",
            desc: "From sourcing to onboarding, we manage the process so clients can focus on growth."
        }
    ];

    const team = [
        {
            name: "Zohaib Ejaz",
            role: "Founder & CEO",
            img: "./founder-image.jpeg"
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
        { year: "1995", title: "Foundation", desc: "Bizrolin Group was founded as a small trading company in Dubai." },
        { year: "2002", title: "Global Expansion", desc: "Expanded operations to Europe with the establishment of Global Resources UK." },
        { year: "2008", title: "Diversification", desc: "Entered the technology sector with the launch of System Technologies." },
        { year: "2015", title: "Food & Entertainment", desc: "Launched Bizrolin Foods and Bizrolin Entertainment divisions." },
        { year: "2023", title: "$10B Revenue", desc: "Achieved $10 billion in annual revenue with operations in 45 countries." }
    ];

    const stats = [
        { label: "Countries", value: "15+" },
        { label: "Employees", value: "50+" },
        { label: "Industries", value: "7" },
        { label: "Revenue", value: "$5M+" }
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
                        <span className="page-tag">About Bizrolin</span>
                        <h1 data-scroll data-scroll-speed="1">
                            Building a <span className="text-gradient">Better Tomorrow</span>
                        </h1>
                        <p data-scroll data-scroll-speed="0.5">
BizRolin is an all-in-one business ecosystem delivering smart, scalable solutions through innovation, strategy, and expert ventures, helping brands grow faster, operate smarter, and reach globally.                        </p>
                    </div>
                    <div className="about-hero-image-container" data-scroll data-scroll-speed="2">
                        <img
                            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
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
                            <p>BizRolin is an all-in-one business ecosystem delivering smart, scalable solutions through innovation, strategy, and expert ventures, helping brands grow faster, operate smarter, and reach globally.</p>
                            <p>BizRolin is an all-in-one business ecosystem delivering smart, scalable solutions through innovation, strategy, and expert ventures, helping brands grow faster, operate smarter, and reach globally.</p>
                           
                        </div>
                        <div className="story-image-wrapper" data-scroll data-scroll-speed="2">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern corporate headquarters representing growth"
                                style={{ borderRadius: '30px', width: '100%', height: '500px', objectFit: 'cover' }}
                            />
                            <div className="story-year">2023</div>
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
                {/* <section className="timeline-section" data-scroll-section>
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
                </section> */}

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