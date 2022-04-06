import React from 'react';
// import { useState } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './homepage-img.png';

function Home(props) {
  return (
    <main className='home-main'>
      <section className='seasonal-ad'>
        <img src={logo} alt='Welcome Image' />
      </section>
      <div className='just-arrived'>Just Arrived</div>
      <div className='justarrived-img-section'>
        <Link className='justarrived-link' to={`/game/23`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
            alt='Console'
          />
          <p id='justarrived-name'>Console</p>
        </Link>
        <Link className='justarrived-link' to={`/game/26`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1542729716-6d1890d980ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='gaming desktop'
          />
          <p id='justarrived-name'>Gaming Desktop</p>
        </Link>
        <Link className='justarrived-link' to={`/Appliance/3`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1608354580875-30bd4168b351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='Coffee Maker'
          />
          <p id='justarrived-name'>Coffee Maker</p>
        </Link>
        <Link className='justarrived-link' to={`/copmuters/15`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1632488507420-64f41ca8dd59?ixlib=rb-1.2.1&  ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
            alt='memory card'
          />
          <p id='justarrived-name'>Memory Card</p>
        </Link>
      </div>
      <div className='just-arrived'>Best Sellers</div>
      <div className='justarrived-img-section'>
        <Link className='justarrived-link' to={`/Appliance/6`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1577979749830-f1d742b96791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt='tv'
          />
          <p id='justarrived-name'>TV</p>
        </Link>
        <Link className='justarrived-link' to={`/smart/19`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1585692614093-62dab82e9d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt='smartphone'
          />
          <p id='justarrived-name'>Smart Phone</p>
        </Link>
        <Link className='justarrived-link' to={`/Appliance/2`}>
          <img
            id='justarrived-img'
            src='https://images.unsplash.com/photo-1623114112815-74a4b9fe505d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
            alt='oven'
          />
          <p id='justarrived-name'>Oven</p>
        </Link>
        <Link className='justarrived-link' to={`/smart/21`}>
          <img
            id='justarrived-img'
            src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='wireless earbuds'
          />
          <p id='justarrived-name'>Wireless earbuds</p>
        </Link>
      </div>
      {/* <div className='home-categories-container'>
        <div className='category-container' id='consoles-container'>
          <Link to={`/Appliance`}>Appliances</Link>
          <img
            src='https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='Refrigerator in kitchen'
          />
        </div>
        <div className='category-container' id='tvs-container'>
          <Link to={`/tv`}>TVs</Link>
          <img
            src='https://cdn.pixabay.com/photo/2020/12/16/21/58/tv-5837826_960_720.jpg'
            alt='Person watching television'
          />
        </div>
        <div className='category-container' id='tablets-container'>
          <Link to={`/computers`}>Computers and Tablets</Link>
          <img
            src='https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg'
            alt='Laptop in front of monitor'
          />
        </div>
        <div className='category-container' id='smart-watches-container'>
          <Link to={`/smart`}>Smart Phones and Wearables</Link>
          <img
            src='https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg'
            alt='Two smart phones'
          />
        </div>
        <div className='category-container' id='laptops-container'>
          <Link to={`/game`}>Gaming</Link>
          <img
            src='https://images.unsplash.com/photo-1629429408209-1f912961dbd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='Gaming mouse'
          />
        </div>
      </div> */}
      <section className='seasonal-ad'>
        <img
          src='https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='Welcome Image'
        />
      </section>
    </main>
  );
}

export default Home;
