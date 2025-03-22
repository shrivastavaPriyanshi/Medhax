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

        <div className="club-card">
          <h3>GeeksForGeeks</h3>
          <p>Empowering communities through technology and fostering innovation for a better tomorrow</p>
        </div>

        <div className="club-card">
          <h3>CodeSoft</h3>
          <p>Innovating through code and shaping the future with technology-driven solutions.</p>
        </div>

        <div className="club-card">
          <h3>CodeChef</h3>
          <p>Nurturing coding talent and promoting competitive programming excellence</p>
        </div>

      </div>
    </div>
  );
};

export default Clubs;
