import React from "react";

function Home(props) {
  return (
    <main className="home-main">
      <section className="seasonal-ad">Get in the Game</section>
      <div className="home-categories-container">
        <div className="category-container" id="consoles-container">
          Consoles
        </div>
        <div className="category-container" id="parts-container">
          PC Parts
        </div>
        <div className="category-container" id="music-container">
          Music
        </div>
      </div>
    </main>
  );
}

export default Home;
