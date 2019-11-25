import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <Menu>
      <NavLink to="/" className="burgerLink">
        HOME
      </NavLink>

      <NavLink to="/sports" className="burgerLink">
        SPORT
      </NavLink>

      <NavLink to="/map" className="burgerLink">
        SPOT
      </NavLink>

      <NavLink to="/aboutus" className="burgerLink">
        ABOUT US
      </NavLink>

      <NavLink to="/help" className="burgerLink">
        HELP
      </NavLink>

      <NavLink to="/contactus" className="burgerLink">
        CONTACT US
      </NavLink>
    </Menu>
  );
}

export default BurgerMenu;
