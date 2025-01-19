import React from 'react';
import './CompanyInfo.css'; 

function CompanyInfo() {
  return (
    <div className="about-container">
        <div>
        <p>Open Source Theme and UI Components</p>
        <h1>Geaux Astro helps you<br></br> craft beautiful websites<br></br> efficiently</h1>
        </div>
      <div className="about-content">
        <div className="features-container">
        <div className="feature">
          <div><img src={require('../Assets/medal.png')} alt="Medal" /></div>
          <div className="feature-text">
          <h2>Certificate Distribution</h2>
          <p>We offer certificates to validate and recognize<br></br> your achievement.</p>
          </div>
        </div>
        <div className="feature">
          <div><img src={require('../Assets/thought.png')} alt="Thought" /></div>
          <div className="feature-text">
          <h2>Knowledge</h2>
          <p>We deliver transformative knowledge that<br></br> empowers and inspires.</p>
          </div>
        </div>
        <div className="feature">
          <div><img src={require('../Assets/training.png')} alt="Training" /></div>
          <div className="feature-text">
          <h2>Hands-on Experience</h2>
          <p>We provide hands-on experience for real-<br></br>world learning. You learn best by doing.</p>
          </div>
        </div>
      </div>
      <div className="dashboard-image-container">
        <img src={require('../Assets/AboutDash.png')} alt="Dashboard" />
      </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
