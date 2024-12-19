import React from 'react';
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Aniqa Gora</h3> {/* Replace with your website name */}
        <p>Professional website developer specializing in modern, responsive designs </p><br /> {/* Replace with your description */}
      </div>
      
      <div className="footer-section">
        <h3>Pages</h3>
        <p>
          <Link to="/about">About</Link><br />
          <Link to="/skills">Skills</Link><br />
          <Link to="/contact">Contact</Link>
        </p>
      </div>

      <div className="footer-section">
        <h3>Follow Me</h3>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a><br />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a><br />
         <a href="https://www.linkedin.com/in/aniqa-noor-9ab77a2b4" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </p>
      </div>
      
      <div className="footer-section">
      <h3>Email</h3>
      <p>aniqanoor1023@gmail.com</p> {/* Replace with your email */}<br />
        <h3>Contact</h3>
        <p>0322 9627500</p> {/* Replace with your contact number */}
      </div>
      
    </footer>
  );
};

export default Footer;
