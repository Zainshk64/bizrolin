// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Brands", href: "/brands" },
    { name: "Contact", href: "/contact" },
  ],
  brands: [
    { name: "Global Resources", href: "#" },
    { name: "System Technologies", href: "#" },
    { name: "Vision Chemtech", href: "#" },
  ],
  company: [
    { name: "Leadership", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Investors", href: "#" },
  ],
  contact: [
    { name: "Blue Area ,Islamabad", href: "#" },
    { name: "info@bizrolon.com", href: "mailto:info@bizrolin.com" },
    { name: "+92 30303030", href: "tel:+92303030" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-darkest pt-24 pb-10 px-8 md:px-16 border-t border-slate-700/10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary-500/40">
                BR
              </span>
              <span className="font-serif text-2xl font-bold text-white">
                BizRolin
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-xs">
              We help global companies hire top-tier Pakistani talent through
              trusted, streamlined recruitment solutions. By focusing on
              quality, alignment, and long-term value, we turn skilled
              professionals into high-performing global teams.
              {/* A global conglomerate connecting innovation across industries. Building tomorrow's world today through sustainable practices and exceptional excellence. */}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-11 h-11 bg-white/[0.03] border border-slate-700/10 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/35"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-7">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-slate-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-7">
              Our Brands
            </h4>
            <ul className="space-y-4">
              {footerLinks.brands.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-7">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-7">
              Contact
            </h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-sm">
            © 2026 Bizrolin Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-slate-500 text-sm transition-colors duration-300 hover:text-primary-400"
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
