import "./SatisfiedCustomers.css";
import { motion } from "framer-motion";

const customers = [
  {
    name: "Mr. Surendra N M & Family",
    testimonial: "We are extremely satisfied with the service...",
    photo: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Kiran Nair & Family",
    testimonial: "Proper communication was maintained by DLIFE team..",
    photo: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Azeem C & Family",
    testimonial: "Very professional interior designers. The team was...",
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ms. Honey Rose",
    testimonial: "Finding a passionate professional to craft my...",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Prannoy HS",
    testimonial: "Structured, organized and pleasant to deal with...",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Mr. Johnson Daniel",
    testimonial: "Dear DLIFE team, we are well pleased...",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80",
  },
];

export default function SatisfiedCustomers() {
  return (
    <section className="customers-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="customers-container"
      >
        {/* Heading */}
        <h2 className="customers-heading">
          <span className="count">14000+</span> SATISFIED CUSTOMERS
        </h2>

        {/* Customer cards track */}
        <div className="customers-track">
          {customers.map((c, i) => (
            <motion.div
              key={i}
              className="customer-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Circular photo with gradient border */}
              <div className="customer-photo-wrap">
                <img
                  src={c.photo}
                  alt={c.name}
                  className="customer-photo"
                  loading="lazy"
                />
                {/* Quote badge */}
                <span className="quote-badge">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c0-2.21-1.79-4-4-4S2 5.79 2 8c0 1.66.96 3.08 2.35 3.73C4.13 13.54 3 15.61 3 18h2c0-2.76 2.24-5 5-5v-5zm12 0c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 1.66.96 3.08 2.35 3.73C16.13 13.54 15 15.61 15 18h2c0-2.76 2.24-5 5-5v-5z" />
                  </svg>
                </span>
              </div>

              <p className="customer-name">{c.name}</p>
              <p className="customer-testimonial">{c.testimonial}</p>
            </motion.div>
          ))}
        </div>

        {/* Dot pagination */}
        <div className="customers-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </motion.div>
    </section>
  );
}
