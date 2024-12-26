import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p> Copyright &copy; 2024 Arpit Patel. All rights reserved.</p>
                    <ul className="footer-links">
                        <li>
                            <a href="#">Terms of Services</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Connect with me</a>
                        </li>
                    </ul>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/i_m_arpit_7s/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arpitpatel7s" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://x.com/Arpit7s?t=RzRgSAa59P2nuSSCMFkXHg&s=08" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="https://github.com/arpit7s" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
