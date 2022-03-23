import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Details(props) {
  const { category, id } = useParams();

  return <div>This is the details page for item: {`${id}`}</div>;
}

export default Details;
