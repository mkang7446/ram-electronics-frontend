import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import items from "../Details/items.json";

import "./Category.css";

function Category(props) {
  const { category } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [specificItems, setSpecificItems] = useState([]);

  const url = "https://thawing-mountain-85716.herokuapp.com/api/items";

  useEffect(() => {
    const specificItemList = [];

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          if (item.category === category) {
            specificItemList.push(item);
          }
        });

        setAllItems(data);
        setSpecificItems(specificItemList);
      })
      .catch((err) => console.log("oops error"));
  }, []);

  return (
    <main className="main-item-card-container">
      {specificItems.map((item) => (
        <Link to={`/${category}/${item["_id"]}`} key={item["_id"]}>
          <div className="card">
            <div className="card-image">
              <img src={item.image} alt={item.name} />
              <div className="card-title">
                <h3>{item.name}</h3>
              </div>
            </div>
            
          </div>
        </Link>
      ))}
    </main>
  );
}

export default Category;
