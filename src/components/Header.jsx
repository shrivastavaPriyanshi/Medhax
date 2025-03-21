import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header fixed-header">   {/* Added fixed-header class */}
      <nav className="navbar">
        <div className="logo">EVENTO</div>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/help">HELP</Link></li>
          <li><Link to="/signin">SIGN IN / SIGN UP</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
