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
      <div className="item-details-name">
        <h2>{specificItem.name}</h2>
      </div>
      <div className="item-details-image">
        <img src={specificItem.image} alt={specificItem.name} />
      </div>
      <div className="item-details-description-and-price">
        <p className="item-details-description">{specificItem.description}</p>
        <p className="item-details-price">{specificItem.price}</p>
      </div>
      <button className="add-item-to-cart-button">Add to Cart</button>
    </div>
  );
}

export default Details;
