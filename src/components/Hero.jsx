import React from 'react';
import './Hero.css';
import eventoImage from '../assets/evento image.jpg';  // Import the image

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1><em>EVENTO</em></h1>
        <h2>Welcome to Techno Clubs Portal –</h2>
        <h3><em>The Future of Student-Led Tech Communities!</em></h3>
        <p>
          Be Part of the Tech Revolution! <br />
          Join a thriving student tech community where collaboration meets automation. <br />
          Whether you're a student looking to develop skills, a mentor guiding young innovators, or an admin managing multi-chapter clubs—this is your ultimate digital hub. <br />
          Sign in with your institute email & discover your perfect club today!
        </p>
      </div>

      <div className="hero-image">
        <img src={eventoImage} alt="Techno Clubs" />
      </div>
    </div>
  );
};

export default Hero;
