// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left panel — warm light section */}
      <div className="footer__left">
        <div className="footer__logo">FIELDO</div>

        <div className="footer__info">
          <div className="footer__col">
            <p className="footer__col-title">Visit Us</p>
            <p className="footer__col-text">DLF Cyber City, Tower 9</p>
            <p className="footer__col-text">Gurugram, Haryana 122002</p>
            <p className="footer__col-text">India</p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Contact</p>
            <p className="footer__col-text">hello@fieldo.in</p>
            <p className="footer__col-text">+91 98765 43210</p>
            <p className="footer__col-text">+91 124 456 7890</p>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Follow us</p>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg className="footer__icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <svg className="footer__icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg className="footer__icon" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Additional bottom text for more height */}
        <div className="footer__bottom-note">
          <p>© 2025 FIELDO — Premium rural estates & country living</p>
        </div>
      </div>

      {/* Right panel — dark sophisticated section */}
      <div className="footer__right">
        <div className="footer__right-top">
          <h2 className="footer__tagline">
            Country living<br />begins with FIELDO
          </h2>
          <p className="footer__description">
            Discover handpicked farmhouses, sustainable homes,<br />
            and premium land parcels across India's finest landscapes.
          </p>
        </div>

        <div className="footer__form">
          <div className="footer__input-row">
            <input
              type="email"
              className="footer__input"
              placeholder="YOUR E-MAIL"
            />
            <button className="footer__arrow" aria-label="Subscribe">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H22M16 2L22 8L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <label className="footer__checkbox-label">
            <input type="checkbox" className="footer__checkbox" defaultChecked />
            <span className="footer__checkbox-text">
              I agree to the{" "}
              <span className="footer__checkbox-link">privacy policy</span> and
              consent to processing of personal data.
            </span>
          </label>
        </div>

        {/* Social contact row for extra height */}
        <div className="footer__contact-row">
          <div className="footer__contact-item">
            <span className="footer__contact-emoji">📞</span>
            <span>24/7 Support</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-emoji">🏡</span>
            <span>200+ Properties</span>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-emoji">⭐</span>
            <span>4.9 Rating</span>
          </div>
        </div>
      </div>
    </footer>
  );
}