import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Burger.css';
import { NavLink } from 'react-router-dom';

const Burger = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>MENU</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/" className="burgerLink">
            HOME
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/map" className="burgerLink">
            MAP
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/sports" className="burgerLink">
            SPORT
          </NavLink>
        </DropdownItem>
        <DropdownItem>ABOUT</DropdownItem>
        <DropdownItem>HELP</DropdownItem>
        <DropdownItem>
          <NavLink to="/contact" className="burgerLink">
            CONTACT US
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Burger;
