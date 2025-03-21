import React from 'react';
import './Clubs.css';

const Clubs = () => {
  return (
    <div id="clubs" className="clubs-section">
      <h2>Partnered Clubs</h2>
      <div className="club-cards">

        <div className="club-card">
          <h3>IEEE</h3>
          <p>Empowering innovation and advancing technology.</p>
        </div>

        <div className="club-card">
          <h3>Toastmasters International</h3>
          <p>Improving communication and leadership skills globally.</p>
        </div>

        <div className="club-card">
          <h3>AWS</h3>
          <p>Cloud computing solutions and certifications.</p>
        </div>

        <div className="club-card">
          <h3>GDG</h3>
          <p>Google Developer Group - Learn and build with Google technologies.</p>
        </div>

        <div className="club-card">
          <h3>Rotary International</h3>
          <p>Providing humanitarian services and promoting goodwill.</p>
        </div>

      </div>
    </div>
  );
};

export default Clubs;
