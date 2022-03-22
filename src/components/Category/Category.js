import React from "react";
import { useParams } from "react-router-dom";

function Category(props) {
  const { category } = useParams();
  return (
    <main className="main-item-card-container">
      <p>Hello from {`${category}`} Page</p>
    </main>
  );
}

export default Category;
