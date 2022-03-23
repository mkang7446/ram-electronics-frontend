import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import items from "../Details/items.json";

import "./Details.css";

function Details(props) {
  const { category, id } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [specificItem, setSpecificItem] = useState({});

  useEffect(() => {
    setAllItems(items);
    allItems.map((item) => {
      if (item["_id"] === parseInt(id)) {
        setSpecificItem(item);
      }
    });
  }, []);

  return (
    <div className="item-details-container">{console.log(specificItem)}</div>
  );
}

export default Details;
