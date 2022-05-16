import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from './../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>{' '}
        </li>
        <li className="p__opensans">
          <a href="/">About</a>
        </li>
        <li className="p__opensans">
          <a href="/">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="/">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="/">Contact Us</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a className="p__opensans" href="/">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Reservation
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          style={{ cursor: 'pointer' }}
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <div className="app__navbar-smallscreen-login">
              <a className="p__opensans" href="/">
                Log In / Register
              </a>
            </div>
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="app__navbar-smallscreen_overlay-close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="/">Home</a>
              </li>
              <li className="p__opensans">
                <a href="/">About</a>
              </li>
              <li className="p__opensans">
                <a href="/">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="/">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="/">Contact Us</a>
              </li>
              <li className="p__opensans p__opensans-reservation">
                <a href="/">Reservation</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
