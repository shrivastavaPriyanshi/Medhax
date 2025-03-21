import React from 'react';
import './Contacts.css';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <div className="social-links">
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://wa.me/1234567890"><FaWhatsapp /></a>
        <a href="https://facebook.com"><FaFacebook /></a>
      </div>
    </div>
  );
};

export default Contact;
