import "./BlogSection.css";
import { motion } from "framer-motion";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Simple Kitchen Ideas: Smart Layouts for Modern Homes",
      author: "Elixir",
      date: "Apr 09, 2026",
      category: "MODERN KITCHEN IDEAS 2026",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Wardrobe Design Ideas: Modern Storage Solutions for Stylish Homes",
      author: "Elixir",
      date: "Apr 09, 2026",
      category: "WARDROBE DESIGN IDEAS",
      image: "https://images.unsplash.com/photo-1595425970379-7c5de5e9b8f0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Wooden Door Colour Ideas: Modern & Classic Choices for Your Home",
      author: "Elixir",
      date: "Apr 08, 2026",
      category: "INTERIOR DESIGN IDEAS",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    "MODERN KITCHEN IDEAS 2026",
    "WARDROBE DESIGN IDEAS",
    "INTERIOR DESIGN IDEAS"
  ];

  return (
    <section id="blog-section" className="blog-section">
      <div className="blog-container">
        {/* Logo / Brand - cOmpatto */}
        <motion.div
          className="blog-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="logo-text">cOmpatto</span>
        </motion.div>

        {/* Navigation Links Row */}
        <motion.div
          className="blog-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        >
          <div className="nav-links">
            <button className="nav-link">Who we are</button>
            <button className="nav-link">The challenges</button>
            <button className="nav-link">Our process</button>
          </div>
        </motion.div>

        {/* Stay in the know - Newsletter Section */}
        <motion.div
          className="newsletter-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay in the know</h3>
            <div className="newsletter-input-group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="newsletter-input"
              />
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </motion.div>

        {/* Categories Row */}
        <motion.div
          className="categories-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="categories-list">
            {categories.map((category, index) => (
              <button key={index} className="category-btn">
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid - 3 columns matching design */}
        <div className="blog-posts-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-post-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Category Tag */}
              <div className="post-category">{post.category}</div>
              
              {/* Post Image */}
              <div className="post-image-wrapper">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="post-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
              </div>
              
              {/* Post Title */}
              <h4 className="post-title">{post.title}</h4>
              
              {/* Post Meta - Author & Date */}
              <div className="post-meta">
                <span className="post-author">{post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          className="view-all-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="view-all-btn">
            View all posts
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}