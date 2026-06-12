import "./WhoWeAre.css";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="whoweare-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="whoweare-card"
      >
        {/* LEFT: Stats Card - now with smooth slide-from-left animation */}
        <motion.div
          className="whoweare-stats-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          {/* Top label */}
          <div className="stats-card-top">
            <p className="stats-label">OUR COMPANY<br />IN NUMBERS</p>
            {/* Decorative brush strokes icon */}
            <svg className="stats-icon" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 60 C25 30, 35 15, 50 10" stroke="rgba(255,255,255,0.35)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M28 62 C32 35, 42 20, 55 15" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M36 62 C38 42, 48 28, 60 22" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          {/* Bottom stats row with modern numbers */}
          <div className="stats-card-bottom">
            <div className="stat-item">
              <span className="stat-number modern-number">150+</span>
              <span className="stat-desc">Furniture Suppliers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number modern-number">15+</span>
              <span className="stat-desc">Years of Industry Experience</span>
            </div>
          </div>
        </motion.div>

        {/* CENTER: Text Content */}
        <div className="whoweare-text">
          <h2 className="whoweare-heading">
            Who <em>We</em> Are
          </h2>
          <p className="whoweare-para">
            At Compatto, we understand the challenges of creating exceptional
            spaces that blend elegance, quality, and functionality.
          </p>
          <p className="whoweare-para">
            As Greece's premier furniture solutions provider, we've made it our
            mission to simplify the furnishing process, ensuring that every
            project is executed flawlessly from initial consultation to final
            installation.
          </p>
        </div>

        {/* RIGHT: Image with subtle fade-in */}
        <motion.div
          className="whoweare-image-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
            alt="Team collaborating on design materials"
            className="whoweare-image"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}