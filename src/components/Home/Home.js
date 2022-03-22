import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <main className="home-main">
      <section className="seasonal-ad">
        <Link to={`/consoles`}>Seasonal Header</Link>
      </section>
      <div className="home-categories-container">
        <div className="category-container" id="consoles-container">
          <Link to={`/consoles`}>Consoles</Link>
        </div>
        <div className="category-container" id="tvs-container">
          <Link to={`/tvs`}>TVs</Link>
        </div>
        <div className="category-container" id="tablets-container">
          <Link to={`/tablets`}>Tablets</Link>
        </div>
        <div className="category-container" id="smart-watches-container">
          <Link to={`/smart-watches`}>Smart Watches</Link>
        </div>
        <div className="category-container" id="laptops-container">
          <Link to={`/laptops`}>Laptops</Link>
        </div>
        <div className="category-container" id="desktops-container">
          <Link to={`/desktops`}>Desktops</Link>
        </div>
        <div className="category-container" id="parts-container">
          <Link to={`/parts`}>PC Parts</Link>
        </div>
        <div className="category-container" id="music-container">
          <Link to={`/music`}>Music</Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
