import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <main className="home-main">
     <section className="seasonal-ad">
        <Link to={`/game`}>Fun for the whole family!</Link>
        {/* <img src="/RAM_fromLEFT.svg" alt="" /> */}
{/* ABOVE IS EXAMPLE OF HOW TO IMPORT THE RAM LOGO*/}
        <img src="https://images.ctfassets.net/p0qf7j048i0q/3Mht6zhJpCu12MDLivCVyv/85e9cca8656dadad5fef365e424ff531/G1015133478.jpg" alt="" />
      </section>
      <div className="home-categories-container">
        <div className="category-container" id="consoles-container">
          <Link to={`/Appliance`}>Appliances</Link>
          <img src="https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
        <div className="category-container" id="tvs-container">
          <Link to={`/tv`}>TVs</Link>
          <img src="https://cdn.pixabay.com/photo/2020/12/16/21/58/tv-5837826_960_720.jpg" alt="" />
        </div>
        <div className="category-container" id="tablets-container">
          <Link to ={`/computers`}>Computers and Tablets</Link>
          <img src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg" alt="" />
        </div>
        <div className="category-container" id="smart-watches-container">
          <Link to={`/smart`}>Smart Phones and Wearables</Link>
          <img src="https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg" alt="" />
        </div>
        <div className="category-container" id="laptops-container">
          <Link to={`/game`}>Gaming</Link>
          <img src="https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Home;
