import "./PackageOffers.css";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function PackageOffers() {
  // Package data with multiple images for each package
  const packageData = [
    {
      id: 1,
      title: "ELEGANZA PLUS",
      price: "15.84",
      unit: "Lakhs",
      description: "DETAILED WOODWORK FOR A 3BHK",
      ctaText: "View Package",
      coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "ELEGANZA",
      price: "11.41",
      unit: "Lakhs",
      description: "DETAILED WOODWORK FOR A 3BHK",
      ctaText: "View Package",
      coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      title: "ELEGANZA PLUS",
      price: "24.03",
      unit: "Lakhs",
      description: "WOODWORK & BEAUTIFICATIONS FOR A 3BHK",
      ctaText: "View Package",
      coverImage: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
      sliderImages: [
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  return (
    <section id="package-offers" className="packageoffers-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="packageoffers-container"
      >
        {/* Heading with Shimmer Effect */}
        <div className="packageoffers-header">
          <h2 className="packageoffers-heading shimmer-text">
            Package <span className="heading-accent">Offers</span>
          </h2>
          <p className="packageoffers-subtitle">
            Curated packages crafted with precision, elegance, and uncompromising quality.<br />
            Choose the perfect plan for your dream space.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="packageoffers-grid">
          {packageData.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Individual Package Card Component with Hover Slider - Immediate image change
function PackageCard({ pkg, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Start auto-sliding immediately when hovered
  useEffect(() => {
    if (isHovered) {
      // Immediately change to first slider image (index 1) for instant dynamic effect
      setCurrentImageIndex(1);
      
      // Set interval to continue sliding every 1.5 seconds
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          // Start from index 1 because index 0 is cover image
          // We want to cycle through slider images (indices 1 to length-1)
          const nextIndex = prevIndex + 1;
          if (nextIndex >= pkg.sliderImages.length) {
            return 1; // Reset to first slider image (not cover)
          }
          return nextIndex;
        });
      }, 1500);
    } else {
      // Clear interval and reset to cover image (index 0)
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, pkg.sliderImages.length]);

  // Handle manual navigation dots (accessibility)
  const goToImage = (index) => {
    setCurrentImageIndex(index);
    // Reset timer when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= pkg.sliderImages.length) {
            return 1;
          }
          return nextIndex;
        });
      }, 1500);
    }
  };

  // Format price in Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(pkg.price) * 100000);

  return (
    <motion.div
      className="package-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Package: ${pkg.title}`}
    >
      {/* Image Area with Slider Effect */}
      <div className="package-image-wrapper">
        {pkg.sliderImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${pkg.title} preview ${idx + 1}`}
            className={`package-image ${currentImageIndex === idx ? 'active' : ''}`}
            loading="lazy"
          />
        ))}
        
        {/* Gradient Overlay for better text readability */}
        <div className="image-gradient-overlay"></div>
        
        {/* Slider Navigation Dots (appear on hover for better UX) */}
        {isHovered && pkg.sliderImages.length > 1 && (
          <div className="slider-dots" role="tablist" aria-label="Image slider navigation">
            {pkg.sliderImages.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${currentImageIndex === idx ? 'active' : ''}`}
                onClick={() => goToImage(idx)}
                aria-label={`View image ${idx + 1}`}
                aria-current={currentImageIndex === idx ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
        
        {/* Offer Badge - adds premium feel */}
        <div className="offer-badge">
          <span>OFFER</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="package-content">
        <h3 className="package-title">{pkg.title}</h3>
        <div className="package-price-wrapper">
          <span className="price-label">OFFER</span>
          <div className="price-group">
            <span className="package-price">{formattedPrice}</span>
            <span className="package-unit">{pkg.unit}</span>
          </div>
        </div>
        <p className="package-description">{pkg.description}</p>
        <button className="package-cta">
          {pkg.ctaText}
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </motion.div>
  );
}