// src/components/Footer/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Fake News Detection</h3>
          <p>Fighting misinformation with AI technology</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Fake News Detection. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
