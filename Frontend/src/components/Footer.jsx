import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Brand/About */}
        <div className="footer-column">
          <h2 className="footer-logo">Traveler Planner</h2>
          <p className="footer-description">
            Plan. Explore. Discover. Your journey begins with us. We simplify travel so you can focus on adventure.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/yourpage" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/vishalmeena._" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/vishal.meena._" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/planner">Trip Planner</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Travel Blog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt className="icon" /> Jaipur, Rajasthan, India</li>
            <li><FaPhoneAlt className="icon" /><a href="tel:+918529336632">+91 85293 36632</a></li>
            <li><FaEnvelope className="icon" /><a href="mailto:vm46830289@gmail.com">vm46830289@gmail.com</a></li>
            <li><strong>Mon–Fri:</strong> 9:00 AM – 6:00 PM IST</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for travel tips, deals, and updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" required aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Traveler Planner. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>

      <button className="scroll-top" onClick={scrollToTop} aria-label="Back to Top">↑</button>
    </footer>
  );
};

export default Footer;
