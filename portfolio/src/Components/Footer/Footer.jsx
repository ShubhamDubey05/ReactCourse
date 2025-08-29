import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Shubham Dubey. All rights reserved.</p>
      
      <div className="footer-links">
        <a href="mailto:shubhamdubey05092001@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/shubham-dubey" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/shubhamdubey" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/terms-of-service" className="footer-policy">Terms of Service</a>
        <a href="/privacy-policy" className="footer-policy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
