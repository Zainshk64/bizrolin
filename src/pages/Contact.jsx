import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MessageSquare,
  MapPin,
  Mail,
  Phone,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Plus,
  Check,
  X,
  Loader2,
} from "lucide-react";

// Import Reused Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NoiseOverlay from "../components/NoiseOverlay";

// Import Specific Styles
import "../styles/Contact.css";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    privacyConsent: false,
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error

  // FAQ State
  const [activeFaq, setActiveFaq] = useState(null);

  // Refs for animations
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  // Handle Form Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        privacyConsent: false,
      });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".contact-hero-badge",
        { opacity: 0, y: 40, visibility: "visible" },
        { opacity: 1, y: 0, duration: 1.2 },
      )
        .fromTo(
          ".contact-hero-title",
          { opacity: 0, y: 40, visibility: "visible" },
          { opacity: 1, y: 0, duration: 1.4 },
          "-=0.6",
        )
        .fromTo(
          ".contact-hero-subtitle",
          { opacity: 0, y: 40, visibility: "visible" },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=1",
        );

      // Scroll Reveal Animations
      const revealElements = document.querySelectorAll(
        ".revealc-up, .revealc-left, .revealc-right, .revealc-scale",
      );

      revealElements.forEach((el) => {
        let fromVars = { opacity: 0, visibility: "visible" };
        if (el.classList.contains("revealc-up")) fromVars.y = 40;
        else if (el.classList.contains("revealc-left")) fromVars.x = -40;
        else if (el.classList.contains("revealc-right")) fromVars.x = 40;
        else if (el.classList.contains("revealc-scale")) fromVars.scale = 0.95;

        gsap.fromTo(el, fromVars, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // FAQ Data
  const faqs = [
    {
      question: "What industries does Bizrolin Group operate in?",
      answer:
        "Bizrolin Group operates across seven major industries including Technology, Global Trade, Food & Beverage, Entertainment, Chemical Manufacturing, Packaging Solutions, and Infrastructure Development. Our diversified portfolio allows us to leverage synergies across sectors.",
    },
    {
      question: "How can I explore partnership opportunities?",
      answer:
        'We welcome partnership inquiries from businesses worldwide. Please fill out the contact form above selecting "Partnership Opportunity" as the subject, or email us directly at partnerships@Bizrolingroup.com. Our business development team reviews all inquiries within 48 hours.',
    },
    {
      question: "Does Bizrolin Group offer investment opportunities?",
      answer:
        "Yes, we offer various investment opportunities for qualified investors. Please contact our Investor Relations team at investors@Bizrolingroup.com for more information about current opportunities, minimum investment requirements, and our investment philosophy.",
    },
    {
      question: "How can I apply for a job at Bizrolin Group?",
      answer:
        "We're always looking for talented individuals to join our team. Visit our Careers page to view current openings across all our brands and locations. You can also send your CV to careers@Bizrolingroup.com for future opportunities.",
    },
    {
      question: "What is Bizrolin Group's approach to sustainability?",
      answer:
        "Sustainability is core to our operations. We've committed to achieving carbon neutrality by 2030 and have implemented sustainable practices across all our businesses. Our annual sustainability report details our environmental initiatives, social responsibility programs, and governance standards.",
    },
  ];

  return (
    <div className="contact-page-wrapper" ref={containerRef}>
      <NoiseOverlay />
      <Navbar />

      {/* Contact Hero Section */}
      <section className="contact-hero" ref={heroRef}>
        <div className="contact-hero-bg">
          <div className="contact-hero-gradient"></div>
          <div className="contact-hero-grid"></div>
          <div className="contact-shape contact-shape-1"></div>
          <div className="contact-shape contact-shape-2"></div>
        </div>

        <div className="contact-hero-container">
          <div className="contact-hero-badge revealc-up">
            <span className="contact-hero-badge-icon">
              <MessageSquare size={16} strokeWidth={2.5} />
            </span>
            Let's Connect
          </div>
          <h1 className="contact-hero-title revealc-up">
            Get in <span className="contact-hero-title-gradient">Touch</span>
          </h1>
          <p className="contact-hero-subtitle revealc-up">
            Have a question or want to explore partnership opportunities? We'd
            love to hear from you. Our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info Side */}
          <div className="contact-info">
            <div className="contact-info-header revealc-left">
              <div className="contact-info-label">
                <span className="contact-info-label-line"></span>
                Contact Information
              </div>
              <h2 className="contact-info-title">
                We're Here to Help Your Business Grow
              </h2>
              <p className="contact-info-desc">
                Reach out to us through any of the channels below. Our dedicated
                team responds within 24 hours.
              </p>
            </div>

            <div className="contact-cards">
              <div className="contact-card revealc-left">
                <div className="contact-card-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Headquarters</h3>
                  <p>
                    Bizrolin Business Bay
                    <br />
                    Blue Area, Islamabad
                  </p>
                </div>
              </div>

              <div className="contact-card revealc-left">
                <div className="contact-card-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Email Us</h3>
                  <p>
                    General:{" "}
                    <a href="mailto:info@Bizrolingroup.com">
                      info@Bizrolin.com
                    </a>
                    <br />
                    Support:{" "}
                    <a href="mailto:support@Bizrolingroup.com">
                      support@Bizrolin.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-card revealc-left">
                <div className="contact-card-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Call Us</h3>

                  <p>
                    Main:{" "}
                    <a href="https://wa.me/923193595559">+92 319 3595559</a>
                    <br />
                    {/* Toll Free: <a href="tel:800Bizrolin">800-Bizrolin</a> */}
                  </p>
                </div>
              </div>

              <div className="contact-card revealc-left">
                <div className="contact-card-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-card-content">
                  <h3>Business Hours</h3>
                  <p>
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                    <br />
                    Friday - Saturday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-social revealc-left">
              <h4>Follow Us</h4>
              <div className="contact-social-links">
                <a
                  href="https://www.linkedin.com/company/bizrolin/"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bizrolin?igsh=MmUxZXY2OWw4dDBi"
                  className="social-link"
                >
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/923193595559" className="social-link">
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container revealc-right">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    First Name <span className="form-label-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Last Name <span className="form-label-required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="lastName"
                    placeholder="Doe"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Email Address <span className="form-label-required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    name="phone"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-input"
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">
                    Subject <span className="form-label-required">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="investment">Investment Relations</option>
                    <option value="careers">Careers</option>
                    <option value="media">Media & Press</option>
                    <option value="support">Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label className="form-label">
                  Message <span className="form-label-required">*</span>
                </label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell us about your inquiry..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group full-width">
                <div className="form-checkbox-group">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                  />
                  <label
                    className="form-checkbox-label"
                    htmlFor="privacyConsent"
                  >
                    I agree to the <a href="#">Privacy Policy</a> and consent to
                    Bizrolin Group processing my data for the purpose of
                    responding to my inquiry.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? (
                  <>
                    Sending...{" "}
                    <Loader2 className="animate-spin ml-2" size={20} />
                  </>
                ) : (
                  <>
                    Send Message{" "}
                    <ArrowRight className="form-submit-icon ml-2" size={20} />
                  </>
                )}
              </button>

              {formStatus === "success" && (
                <div className="form-status success">
                  <span className="form-status-icon">
                    <Check size={20} />
                  </span>
                  <span className="form-status-text">
                    Message sent successfully! We'll get back to you within 24
                    hours.
                  </span>
                </div>
              )}

              {formStatus === "error" && (
                <div className="form-status error">
                  <span className="form-status-icon">
                    <X size={20} />
                  </span>
                  <span className="form-status-text">
                    Failed to send message. Please try again or contact us
                    directly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <div className="map-header revealc-up">
            <div className="map-label">
              <span className="map-label-line"></span>
              Our Locations
            </div>
            <h2 className="map-title">Global Presence</h2>
            <p className="map-subtitle">
              Visit us at any of our offices around the world
            </p>
          </div>

          <div className="map-wrapper revealc-scale">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13274.607522983046!2d73.06085425044448!3d33.71795577073369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9bc116caa3%3A0x337cd6075e732737!2sBlue%20Area%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1768989391290!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <div className="offices-grid">
                        <div className="office-card revealc-up">
                            <img src="https://flagcdn.com/w80/ae.png" alt="UAE Flag" className="office-card-flag" />
                            <h3>Dubai (HQ)</h3>
                            <div className="office-card-location">United Arab Emirates</div>
                            <p>Bizrolin Tower, Business Bay</p>
                            <p><a href="tel:+97142345678">+971 4 234 5678</a></p>
                            <p><a href="mailto:dubai@Bizrolingroup.com">dubai@Bizrolingroup.com</a></p>
                        </div>

                        <div className="office-card revealc-up">
                            <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" className="office-card-flag" />
                            <h3>London</h3>
                            <div className="office-card-location">United Kingdom</div>
                            <p>30 St Mary Axe, London EC3A 8BF</p>
                            <p><a href="tel:+442071234567">+44 20 7123 4567</a></p>
                            <p><a href="mailto:london@Bizrolingroup.com">london@Bizrolingroup.com</a></p>
                        </div>

                        <div className="office-card revealc-up">
                            <img src="https://flagcdn.com/w80/sg.png" alt="Singapore Flag" className="office-card-flag" />
                            <h3>Singapore</h3>
                            <div className="office-card-location">Singapore</div>
                            <p>Marina Bay Financial Centre</p>
                            <p><a href="tel:+6561234567">+65 6123 4567</a></p>
                            <p><a href="mailto:singapore@Bizrolingroup.com">singapore@Bizrolingroup.com</a></p>
                        </div>
                    </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <div className="faq-label revealc-up">
              <span className="faq-label-line"></span>
              FAQ
            </div>
            <h2 className="faq-title revealc-up">Frequently Asked Questions</h2>
            <p className="faq-subtitle revealc-up">
              Find answers to common questions about Bizrolin Group
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item revealc-up ${activeFaq === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    <Plus size={20} />
                  </span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
