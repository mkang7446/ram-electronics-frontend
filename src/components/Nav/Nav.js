import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <nav id="nav-bar">
        <span id="button-and-name">
          <button>≡</button>
          <h1>RAM electronics 📀🐏📀</h1>
        </span>
        <span id="home-and-cart-links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/cart" className="links">
            🛒
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Nav;
