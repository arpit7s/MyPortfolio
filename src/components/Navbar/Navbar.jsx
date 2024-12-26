import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const offset = 80; 

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
     
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <AnchorLink
            href="#home"
            offset={offset}
            onClick={() => handleLinkClick('home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#about"
            offset={offset}
            onClick={() => handleLinkClick('about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About Me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#services"
            offset={offset}
            onClick={() => handleLinkClick('services')}
            className={activeSection === 'services' ? 'active' : ''}
          >
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#portfolio"
            offset={offset}
            onClick={() => handleLinkClick('portfolio')}
            className={activeSection === 'portfolio' ? 'active' : ''}
          >
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            offset={offset}
            onClick={() => handleLinkClick('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      
      <div className="connect-button">
        <AnchorLink
          href="#contact"
          offset={offset}
          onClick={() => handleLinkClick('contact')}
          className="btn-connect"
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
}

export default Navbar;
