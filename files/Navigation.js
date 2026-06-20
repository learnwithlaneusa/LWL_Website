import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="Learn with Lane" className="logo-img" />
          <span className="logo-text">Learn with Lane</span>
        </Link>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/services-scheduling" onClick={() => setMenuOpen(false)}>
              Services & Scheduling
            </Link>
          </li>
          <li>
            <Link to="/learning-games" onClick={() => setMenuOpen(false)}>
              Learning Games
            </Link>
          </li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
