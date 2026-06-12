import "./BetterHome.css";
import { motion } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";

export default function BetterHome() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0–100
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // Calculate position from mouse/touch event
  const getPos = useCallback((clientX) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = (x / rect.width) * 100;
    return Math.max(0, Math.min(100, pct));
  }, []);

  // Pointer handlers
  const onPointerDown = useCallback((e) => {
    isDragging.current = true;
    setSliderPos(getPos(e.clientX));
    e.preventDefault();
  }, [getPos]);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    setSliderPos(getPos(e.clientX));
  }, [getPos]);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Attach global move/up so dragging works outside the container
  useEffect(() => {
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [onPointerMove, onPointerUp]);

  return (
    <>
      <section id="better-home" className="betterhome-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="betterhome-container"
        >
          {/* Heading */}
          <h2 className="betterhome-heading">A Better Version of Your Home</h2>
          <p className="betterhome-subtitle">
            Premium finishes. Smart upgrades. No premium price.
          </p>

          {/* Before / After image comparison slider */}
          <div
            className="comparison-wrapper"
            ref={containerRef}
            onPointerDown={onPointerDown}
          >
            {/* AFTER image (full width, sits behind) */}
            <div className="comparison-after">
              <img
                src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
                alt="After renovation — modern bedroom with cane wardrobe and warm lighting"
                draggable="false"
              />
            </div>

            {/* BEFORE image (clipped to sliderPos) */}
            <div
              className="comparison-before"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Before renovation — plain room with bare walls"
                draggable="false"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.offsetWidth}px`
                    : "100%",
                }}
              />
            </div>

            {/* Divider line */}
            <div
              className="comparison-divider"
              style={{ left: `${sliderPos}%` }}
            />

            {/* Draggable handle */}
            <div
              className="comparison-handle"
              style={{ left: `${sliderPos}%` }}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
                <polyline points="9 18 15 12 9 6" transform="translate(6,0)" />
              </svg>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="betterhome-cta-row">
            {/* Talk to our designer */}
            <button className="cta-talk">
              Talk to our designer
              {/* small headset icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </button>

            {/* Get free quote */}
            <button className="cta-quote">
              Get free quote
              <span className="arrow-circle">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>

          {/* "takes 2 minutes" note */}
          <p className="betterhome-note">
            {/* clock icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            takes 2 minutes
          </p>
        </motion.div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.744 3.054 9.378L1.058 31.14l5.966-1.966A15.907 15.907 0 0 0 16.004 32C24.826 32 32 24.824 32 16.004 32 7.176 24.826 0 16.004 0zm9.342 22.616c-.39 1.1-1.932 2.014-3.164 2.28-.846.18-1.948.324-5.664-1.218-4.756-1.97-7.816-6.8-8.052-7.114-.226-.316-1.9-2.53-1.9-4.828s1.204-3.428 1.63-3.896c.39-.426 1.02-.638 1.626-.638.196 0 .372.01.53.018.468.02.702.048 1.012.782.388.916 1.332 3.248 1.448 3.484.118.236.236.556.076.872-.148.326-.278.47-.514.74-.236.27-.46.476-.696.768-.216.254-.46.526-.196.994.264.46 1.172 1.934 2.518 3.134 1.732 1.544 3.192 2.024 3.644 2.248.338.168.742.138 1.018-.158.348-.378.778-.998 1.216-1.612.31-.438.702-.494 1.078-.334.382.148 2.418 1.14 2.832 1.348.414.206.69.31.792.48.1.17.1.978-.29 2.078z" />
        </svg>
      </a>
    </>
  );
}
