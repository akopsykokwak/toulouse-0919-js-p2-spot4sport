import React from 'react';
import './Footer2.css';
import logoTwitter from './images/logoTwitter.png';
import logoFacebook from './images/logoFacebook.png';

function Footer2() {
  return (
    <div className="footer-container2">
      <a href="https://www.flaticon.com/" target="_blank" className="sourcesDiv">
        Sources
      </a>
      <span>© Wild Code School, 2019.</span>
      <div className="logo-container2">
        <img id="twitter-logo" src={logoTwitter} alt="twitter logo" />
        <img id="facebook-logo" src={logoFacebook} alt="facebook logo" />
      </div>
    </div>
  );
}

export default Footer2;
