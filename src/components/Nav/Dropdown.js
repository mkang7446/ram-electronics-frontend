import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Dropdown(props) {
  const [displayNav, setDisplayNav] = useState(false);

  const expandNav = (event) => {
    event.preventDefault();

    setDisplayNav(!displayNav);
  };

  return (
    <div>
      {displayNav ? (
        <nav className="collapsible-nav">
          <ul className="category-links">
            <li>
              <Link to={`/Appliance`}>Appliances</Link>
            </li>
            <li>
              {" "}
              <Link to={`/tv`}>TVs</Link>
            </li>
            <li>
              <Link to={`/computers`}>Computers and Tablets</Link>
            </li>
            <li>
              <Link to={`/smart`}>Smart Phones and Wearables</Link>
            </li>
            <li>
              {" "}
              <Link to={`/game`}>Gaming</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Dropdown;
