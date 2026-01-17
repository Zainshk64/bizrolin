// src/pages/Index.jsx

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee'; // Moved up
import ChairmanQuote from '../components/ChairmanQuote';
import About from '../components/About';
import Brands from '../components/Brands';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import NoiseOverlay from '../components/NoiseOverlay';

const Index = () => {
    return (
        <>
            <NoiseOverlay />
            <Navbar />
            <Hero />

            <div className="relative z-20 bg-darker">
                <Marquee />
            </div>

            <ChairmanQuote />
            <About />
            <Brands />
            <Stats />
            <Testimonials />
            <CTA />
            <Footer />
            <BackToTop />
        </>
    );
};

export default Index;