import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Who we are", href: "#who-we-are" },
    { label: "The challenges", href: "#challenges" },
    { label: "Our process", href: "#process" },
    { label: "Why choose us", href: "#why-choose-us" },
  ];

  const scrollToSection = (href) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-container">
      <div className={`nav-pill ${scrolled ? "scrolled" : ""}`}>
        {/* LOGO */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="nav-logo"
        >
          <span>c</span>
          <span className="logo-o">
            <span className="logo-o-line"></span>
          </span>
          <span className="logo-text-after">mpatto</span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="nav-links">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="nav-link-btn"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="nav-contact-btn"
          >
            Contact us
          </button>
        </div>

        {/* HAMBURGER FOR MOBILE */}
        <button
          className={`hamburger-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mobile-menu"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
              >
                {link.label}
              </button>
            ))}
            <hr className="mobile-divider" />
            <button
              onClick={() => scrollToSection("#contact")}
              className="mobile-contact-btn"
            >
              Contact us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
