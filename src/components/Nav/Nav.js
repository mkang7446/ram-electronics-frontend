import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1>RAM electronics 📀🐏📀</h1>
      <nav>
        <Link to="/" className="links">
          Home
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
