import React from 'react';
import { Sprout, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUp />
      </button>

      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Sprout className="logo-icon" />
              <span>AgroSmart Systems</span>
            </div>
            <p>Revolutionizing agriculture through intelligent monitoring and automation. Making precision farming accessible to all.</p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook /></a>
              <a href="#" className="social-link"><Twitter /></a>
              <a href="#" className="social-link"><Instagram /></a>
              <a href="#" className="social-link"><Linkedin /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Smart Irrigation</a></li>
              <li><a href="#">Crop Monitoring</a></li>
              <li><a href="#">Weather Forecasting</a></li>
              <li><a href="#">Data Analytics</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} AgroSmart Systems. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;