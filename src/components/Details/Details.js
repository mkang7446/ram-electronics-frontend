import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import items from "../Details/items.json";

import "./Details.css";

function Details(props) {
  const { category, id } = useParams();
  const [specificItem, setSpecificItem] = useState({});

  const url = "https://thawing-mountain-85716.herokuapp.com/api/items";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let detailsItem;
        data.map((item) => {
          if (item["_id"] === parseInt(id)) {
            detailsItem = item;
          }
        });
        setSpecificItem(detailsItem);
      })
      .catch((err) => console.log("oops error"));
  }, []);

  return (
    <div className="item-details-container">
      {console.log(specificItem)}
      <div className="item-image-box">
        <img src={specificItem.image} alt={specificItem.name} />
      </div>
      <div className="item-details-box">
        <h2>{specificItem.name}</h2>
        <div className="item-details-description-and-price">
          <p className="item-details-price">{specificItem.price}</p>
          <p className="item-details-description">{specificItem.description}</p>
        </div>
      </div>
      <div className="add-to-cart-box">
        {" "}
        <button className="add-item-to-cart-button">Add to Cart</button>
      </div>
      <div className="item-reviews-box">Reviews Here</div>
    </div>
  );
}

export default Details;
