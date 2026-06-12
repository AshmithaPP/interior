import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import PackageOffers from "./components/PackageOffers";
import HowWeSimplify from "./components/HowWeSimplify";
import BetterHome from "./components/BetterHome";
import SatisfiedCustomers from "./components/SatisfiedCustomers";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

// ─── PLACEHOLDER SECTIONS ─────────────────────────────────────────────────────
function PlaceholderSection({ id, title, bg }) {
  return (
    <section id={id} className={`section-placeholder ${bg}`}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="placeholder-container"
      >
        <p className="placeholder-tag">Section</p>
        <h2 className="placeholder-title">{title}</h2>
        <p className="placeholder-text">
          This section is a placeholder to demonstrate the sticky navbar staying
          visible as you scroll through the page content.
        </p>
      </motion.div>
    </section>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app-wrapper">
      <div className="app-canvas">
        <Navbar />
        <Hero />
        <WhoWeAre />   
         <PackageOffers/>
        <HowWeSimplify/>
        <BetterHome/>
        <SatisfiedCustomers/>
        <BlogSection/>
        <Footer/>
      </div>
    </div>
  );
}