import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';   // ✅ Import social icons

const Footer = () => {
  return (
    <footer className="footer">

      {/* ✅ Contact Section with ID for navigation */}
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Reach out to us through social media or send us an email!</p>

        {/* ✅ Social Media Icons */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        <p>Email: contact@technoclubs.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* ✅ Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Techno Clubs Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
