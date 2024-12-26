// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src="/images/facebook-icon.png" alt="Facebook" />
      </a>
      <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <img src="/images/twitter-icon.png" alt="Twitter" />
      </a>
      {/* Add more social links here as needed */}
    </div>
  );
};

export default Footer;
