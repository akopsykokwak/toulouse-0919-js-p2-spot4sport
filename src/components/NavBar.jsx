import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import logo from './images/logomap.png';

function NavBar() {
  return (
    <div>
      <div id="anchor-sport" className="navContainer">
        <div className="burger">
          <BurgerMenu />
        </div>
        <div className="navbar-desktop">
          <NavLink exact activeClassName="active" to="/" className="navlink-desktop">
            HOME
          </NavLink>
          <NavLink to="/sports" className="navlink-desktop">
            SPORT
          </NavLink>
          <NavLink to="/map" className="navlink-desktop">
            SPOT
          </NavLink>
          <NavLink to="/aboutus" className="navlink-desktop">
            ABOUT
          </NavLink>
          <NavLink to="/help" className="navlink-desktop">
            HELP
          </NavLink>
          <NavLink to="/contactus" className="navlink-desktop">
            CONTACT US
          </NavLink>
        </div>
        <h1 className="navbar-app-name">
          <NavLink to="/" className="logoLink" activeClassName="active">
            SPOT
            <span className="navFour">4</span>
            SPORT
          </NavLink>
        </h1>
        <img className="navLogo" src={logo} alt="logo" />
      </div>
      <hr className="desktop-line" />
    </div>
  );
}

export default NavBar;
