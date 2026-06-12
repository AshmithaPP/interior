import "./HowWeSimplify.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HowWeSimplify() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Consultation & Discovery",
      description: "We begin with an in-depth consultation to understand your vision, preferences, and requirements. Our experts analyze your space and suggest tailored solutions that blend aesthetics with functionality."
    },
    {
      id: 2,
      number: "02",
      title: "Design & Customization",
      description: "Our design team creates detailed 3D renders and mood boards. You get to visualize every corner before production begins, ensuring perfection at every step."
    },
    {
      id: 3,
      number: "03",
      title: "Procurement & Quality Control",
      description: "We source premium materials from trusted partners. Each piece undergoes rigorous quality checks to meet our exacting standards before installation."
    },
    {
      id: 4,
      number: "04",
      title: "Installation & Setup",
      description: "Our professional team handles the complete installation with precision and care. We ensure minimal disruption and flawless execution."
    },
    {
      id: 5,
      number: "05",
      title: "After-Sales Support and Maintenance",
      description: "Our commitment to your satisfaction extends beyond the final installation. We conduct a thorough final walkthrough to ensure your satisfaction, and also offer comprehensive after-sales support for warranty claims, maintenance, and care instructions."
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(4); // Start with card 5
  const [isAnimating, setIsAnimating] = useState(false);
  const [showStacked, setShowStacked] = useState(true);
  const animationTimerRef = useRef(null);
  const sequenceTimerRef = useRef(null);

  // Auto-start animation after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setShowStacked(false);
      startSequentialAnimation();
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearAllTimeouts();
    };
  }, []);

  const clearAllTimeouts = () => {
    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
    }
    if (sequenceTimerRef.current) {
      clearTimeout(sequenceTimerRef.current);
    }
  };

  const startSequentialAnimation = () => {
    const order = [4, 3, 2, 1, 0]; // 5 → 4 → 3 → 2 → 1
    let i = 0;

    const showCard = () => {
      if (i < order.length) {
        setActiveCardIndex(order[i]);
        i++;

        if (i < order.length) {
          sequenceTimerRef.current = setTimeout(() => {
            setActiveCardIndex(-1); // Trigger exit
            sequenceTimerRef.current = setTimeout(showCard, 650);
          }, 2800);
        } else {
          animationTimerRef.current = setTimeout(() => setIsAnimating(false), 2800);
        }
      }
    };

    showCard();
  };

  const replayAnimation = () => {
    // Clear all existing timers to prevent conflicts
    clearAllTimeouts();
    
    // Reset states in correct order
    setActiveCardIndex(-1); // First hide any active card
    
    // Short delay to ensure exit animation completes
    setTimeout(() => {
      setShowStacked(true); // Show stacked cards preview
      setIsAnimating(false); // Reset animation flag
      setActiveCardIndex(4); // Set to last card (hidden behind stacked view)
      
      // Allow time for stacked cards to render, then start animation
      setTimeout(() => {
        setShowStacked(false); // Hide stacked cards
        setIsAnimating(true); // Start animation mode
        startSequentialAnimation(); // Begin sequence
      }, 150);
    }, 100);
  };

  const currentStep = activeCardIndex >= 0 ? steps[activeCardIndex] : null;

  return (
    <section id="how-we-simplify" className="simplify-section">
      <div className="simplify-container">
        {/* Title - Exact match */}
        <div className="simplify-title-wrapper">
          <h2 className="simplify-title">How We Simplify Your Furnishing Experience</h2>
        </div>

        <div className="simplify-content">
          {/* Left: Cards Area */}
          <div className="simplify-card-area">
            {/* Stacked Preview (initially visible) */}
            {showStacked && (
              <div className="stacked-cards-preview">
                {steps.slice().reverse().map((step, idx) => (
                  <div
                    key={step.id}
                    className={`stacked-card stacked-card-${idx + 1}`}
                  >
                    <span className="stacked-number">{step.number}</span>
                    <span className="stacked-title">{step.title}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Active Animated Card */}
            <AnimatePresence mode="wait">
              {currentStep && !showStacked && (
                <motion.div
                  key={currentStep.id}
                  className="simplify-card"
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 80, scale: 0.95 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="card-number">{currentStep.number}</div>
                  <h3 className="card-title">{currentStep.title}</h3>
                  <p className="card-description">{currentStep.description}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Replay Button */}
            <button className="replay-btn" onClick={replayAnimation}>
              ↻ Replay Sequence
            </button>
          </div>

          {/* Right: Static Image (Exact match to your attachment) */}
          <div className="simplify-image-wrapper">
            <div className="image-container">
              <img
                src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Luxury modern hotel lobby interior"
                className="interior-image"
              />
              <div className="image-watermark">iStock</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}