import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details(props) {
  const { itemCategory, itemID } = useParams();

  useEffect(() => {
    const paramInfo = [];

    paramInfo.push(itemCategory);
    paramInfo.push(itemID);

    console.log(paramInfo);
  }, []);

  return <div>This is the details page for item: {`${itemID}`}</div>;
}

export default Details;
