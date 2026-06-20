import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Learn with Lane</h3>
            <p>Expert, patient instruction for ESL learners and students needing reading remediation.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services-scheduling">Services & Scheduling</a></li>
              <li><a href="/learning-games">Learning Games</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:david@learnwithlane.com">david@learnwithlane.com</a></p>
              <p><strong>Text:</strong> 405-459-7176</p>
              <p><strong>Line ID:</strong> lwldavid</p>
              <p><strong>WeChat:</strong> RealDeeLane</p>
              <p><strong>KaKao Talk:</strong> RealDeeLane</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Learn with Lane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
