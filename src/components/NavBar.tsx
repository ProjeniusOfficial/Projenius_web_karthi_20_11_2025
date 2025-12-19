import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/circle_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span>
            <span style={{ color: '#00fff2' }}>Pro</span>
            <span style={{ color: '#ffffff' }}>Jenius</span>
          </span>
        </div>

        {/* Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About us</Link></li>

          {/* Services Dropdown */}
          <li
            className="services-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="services-link">
              <Link to="/services" onClick={closeMenu}>Service</Link>
              <span className="arrow">▾</span>
            </div>

            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <li>
                <Link to="/Courses" onClick={closeMenu}>Courses</Link>
              </li>
              <li>
                <Link to="/Workshops" onClick={closeMenu}>Workshops</Link>
              </li>
            </ul>
          </li>

          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
