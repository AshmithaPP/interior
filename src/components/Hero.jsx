import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Background image — warm Japandi room */}
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      
      {/* Soft gradient overlay */}
      <div className="hero-overlay" />

      {/* Content Container */}
      <div className="hero-container">
        
        {/* LEFT COLUMN: Main Heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hero-left"
        >
          <h1 className="hero-title">
            <span className="title-large">
              Bringing Simplicity
            </span>
            <span className="title-sub">
              In The Furnishing Market
            </span>
          </h1>
        </motion.div>

        {/* RIGHT COLUMN: Description & Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="hero-right"
        >
          <p className="hero-desc">
            Compatto simplifies the complex process of furnishing all-inclusive,
            boutique &amp; high-end hotels, and luxury residences in Greece &amp;
            Cyprus.
          </p>
          
          <button className="hero-btn">
            Start Your Furnishing Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
}
