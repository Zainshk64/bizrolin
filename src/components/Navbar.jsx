// src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={`fixed top-0 left-0 w-full px-8 md:px-16 py-6 flex justify-between items-center z-[1000] transition-all duration-500 ease-premium ${isScrolled
                    ? 'bg-black/85 backdrop-blur-xl py-4 shadow-lg shadow-black/30 border-b border-slate-700/10'
                    : ''
                }`}
        >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
                <span className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary-500/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/50 group-hover:-translate-y-0.5 animate-logo-float">
                    BR
                </span>
                <span className="font-serif text-2xl font-bold text-white">BizRolin</span>
                {/* <img src="./logonew.png" alt="BizRolin Logo" classname="h" /> */}
            </Link>

            {/* Nav Links */}
            <ul
                className={`flex gap-11 list-none max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:w-full max-lg:h-screen max-lg:bg-darker max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-9 max-lg:transition-all max-lg:duration-500 max-lg:ease-premium ${isMenuOpen ? 'max-lg:translate-x-0' : 'max-lg:translate-x-full'
                    }`}
            >
                {['Home', 'About', 'Our Brands', 'Contact'].map((item, index) => {
                    const paths = ['/', '/about', '/brands', '/contact'];
                    const isActive = window.location.pathname === paths[index];
                    return (
                        <li key={item}>
                            <Link
                                to={paths[index]}
                                className={`relative py-2.5 font-medium text-sm transition-all duration-300 ease-premium max-lg:text-xl max-lg:text-white ${isActive ? 'text-primary-400' : 'text-slate-400 hover:text-white'
                                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-400 after:to-teal-light after:rounded after:transition-all after:duration-300 after:ease-premium ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* CTA Button */}
            <Link
                to="/contact"
                className="hidden lg:inline-flex items-center px-8 py-3.5 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-primary-500/30 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-500/50 relative overflow-hidden group"
            >
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:left-full" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
                className={`hidden max-lg:flex flex-col gap-1.5 cursor-pointer z-[1001] p-2.5 ${isMenuOpen ? 'active' : ''
                    }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span
                    className={`w-7 h-0.5 bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                />
                <span
                    className={`w-7 h-0.5 bg-white rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0 -translate-x-5' : ''
                        }`}
                />
                <span
                    className={`w-7 h-0.5 bg-white rounded transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                />
            </button>
        </nav>
    );
};

export default Navbar;