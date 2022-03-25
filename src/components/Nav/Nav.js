import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './Nav.css';

const Nav = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const expandNav = (event) => {
    event.preventDefault();

    setDisplayNav(!displayNav);
  };

  // if pixel is below 650 ? hide nav bar

  return (
    // <OutsideClickHandler
    //   onOutsideClick={() => {
    //     setDisplayNav(false);
    //   }}
    // >
    <div className='nav'>
      <nav id='nav-bar'>
        <Link to='/cart' className='links-cart'>
          Cart
        </Link>
        {/* <button onClick={expandNav}>≡</button> */}
        <div id='logo-name'>
          <Link id='logo-name-link' to='/'>
            <div id='hamburger-bar'>
              <i id='sidebar__activator' class='fas fa-bars'></i>
            </div>
            <h1 id='logo-name-h1'>RAM electronics 📀🐏📀</h1>
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

      {/* <nav className='collapsible-nav'>
        <ul className='category-links'>
          <li>
            <Link to={`/Appliance`}>Appliances</Link>
          </li>
          <li>
            {' '}
            <Link to={`/tv`}>TVs</Link>
          </li>
          <li>
            <Link to={`/computers`}>Computers and Tablets</Link>
          </li>
          <li>
            <Link to={`/smart`}>Smart Phones and Wearables</Link>
          </li>
          <li>
            {' '}
            <Link to={`/game`}>Gaming</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Nav;
