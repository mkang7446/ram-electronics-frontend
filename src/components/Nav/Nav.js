import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Modal from './Modal';

import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const BUTTON_WRAPPER_STYLES = {
    backgroundColor: 'white',
    position: 'absoulte',
    zIndex: 1,
  };

  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px',
  };

  return (
    <div className='nav'>
      <nav id='nav-bar'>
        <div id='nav-first-line'>
          <div style={BUTTON_WRAPPER_STYLES}>
            <button id='modal-open-button' onClick={() => setIsOpen(true)}>
              <i id='sidebar__activator' className='fas fa-bars'></i>
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
          </div>
          <Link to='/cart' className='links-cart'>
            <i className='fa-solid fa-cart-shopping'></i>
          </Link>
        </div>
        <div id='logo-name'>
          <Link id='logo-name-link' to='/'>
            <div id="logo-wrapper">
              <img src="/RAM_fromLEFT.svg" alt="RAM logo of ram" />
            </div>
            <h1 id='logo-name-h1'>RAM electronics</h1>
          </Link>
        </div>

        <div className='nav-categories'>
          <div id='nav-appliance'>
            <Link className='nav-category-container' to={`/Appliance`}>
              Appliances
            </Link>
          </div>
          <div id='nav-tv'>
            <Link className='nav-category-container' to={`/tv`}>
              TVs
            </Link>
          </div>
          <div id='nav-computers'>
            <Link className='nav-category-container' to={`/computers`}>
              Computers and Tablets
            </Link>
          </div>
          <div id='nav-smarts'>
            <Link className='nav-category-container' to={`/smart`}>
              Smart Phones and Wearables
            </Link>
          </div>
          <div id='nav-gaming'>
            <Link className='nav-category-container' to={`/game`}>
              Gaming
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
