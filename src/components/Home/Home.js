import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <main className="home-main">
      <section className="seasonal-ad">
        <Link to={`/game`}>Seasonal Header</Link>
      </section>
      <div className="home-categories-container">
        <div className="category-container" id="consoles-container">
          <Link to={`/Appliance`}>Appliances</Link>
        </div>
        <div className="category-container" id="tvs-container">
          <Link to={`/tv`}>TVs</Link>
        </div>
        <div className="category-container" id="tablets-container">
          <Link to={`/computers`}>Computers and Tablets</Link>
        </div>
        <div className="category-container" id="smart-watches-container">
          <Link to={`/smart`}>Smart Phones and Wearables</Link>
        </div>
        <div className="category-container" id="laptops-container">
          <Link to={`/game`}>Gaming</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
