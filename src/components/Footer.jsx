import React from 'react';
import './Footer.css';
import logoTwitter from './images/logoTwitter.png';
import logoFacebook from './images/logoFacebook.png';

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.flaticon.com/" target="_blank" className="sourcesDiv">
        Sources
      </a>
      <span>© Wild Code School, 2019.</span>
      <div className="logo-container">
        <img id="twitter-logo" src={logoTwitter} alt="twitter logo" />
        <img id="facebook-logo" src={logoFacebook} alt="facebook logo" />
      </div>
    </div>
  );
}

export default Footer;
