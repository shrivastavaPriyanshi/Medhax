import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header fixed-header">
      <nav className="navbar">
        <div className="logo">EVENTO</div>
        <ul className="nav-links">
          <li><a href="#" onClick={() => scrollToSection('clubs')}>ABOUT</a></li>
          <li><a href="#" onClick={() => scrollToSection('contact')}>HELP</a></li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/signin">SIGN IN / SIGN UP</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
