import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Details.css";

function Details(props) {
  const { category, id } = useParams();
  const [specificItem, setSpecificItem] = useState({});
  const [updatedItem, setUpdatedItem] = useState({});
  const [cartAPIData, setCartAPIData] = useState([]);

  const cart = {
    item: [],
  };

  const updatedCart = {
    item: [],
  };

  // const editItemQuantity = {
  //   quantity: 1,
  // };

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

  const handleClick = (event) => {
    event.preventDefault();
    // update individual item then put to /:cartId/:itemId
    // http://localhost:4000/api/carts/623cf5523ed7514870b6c633/11
    // do not need a req body
    console.log(specificItem._id);
    fetch(
      `http://thawing-mountain-85716.herokuapp.com/api/carts/623cfceabf21be8483a4b201/${specificItem._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  // const handleClick = (event) => {
  //   event.preventDefault();

  //   if (specificItem.quantity === 0) {
  //     specificItem.quantity += 1;
  //     cart.item[0] = specificItem;

  //     // post item to cart api
  //     fetch("https://thawing-mountain-85716.herokuapp.com/api/carts/", {
  //       // if the method isn't get it must be specified
  //       method: "POST",
  //       // turn the JS object into JSON
  //       body: JSON.stringify(cart),
  //       // let the backend know what type of data it's about to receive
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //     });

  //     fetch(
  //       `https://thawing-mountain-85716.herokuapp.com/api/items/${"_id"}}`,
  //       {
  //         // if the method isn't get it must be specified
  //         method: "PUT",
  //         // turn the JS object into JSON
  //         body: JSON.stringify(cart.item[0]),
  //         // let the backend know what type of data it's about to receive
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then((res) => {
  //       console.log(res);
  //     });
  //   } else if (specificItem.quantity >= 1) {
  //     console.log("specific item: " + specificItem);
  //     console.log(specificItem);
  //     console.log("specific item quantity before: " + specificItem.quantity);
  //     specificItem.quantity += 1;
  //     console.log("specific item quantity after: " + specificItem.quantity);
  //     cart.item[0] = specificItem;

  //     fetch(`https://thawing-mountain-85716.herokuapp.com/api/carts/${_id}`, {
  //       // if the method isn't get it must be specified
  //       method: "PUT",
  //       // turn the JS object into JSON
  //       body: JSON.stringify({
  //         item: specificItem,
  //       }),
  //       // let the backend know what type of data it's about to receive
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       console.log(res);
  //     });
  //   }
  // };

  //add item to cart API
  // const handleClick = async (event) => {
  //   event.preventDefault();
  //   console.log("you clicked");

  //   // update individual item then put to /:cartId/:itemId

  //   // specificItem.quantity = cart.quantity;
  //   if (specificItem.quantity === 0) {
  //     specificItem.quantity += 1;
  //     cart.item[0] = specificItem;
  //     // http://localhost:4000/api/carts/623cf5523ed7514870b6c633/11
  //     // do not need a req body
  //     // post item to cart api
  //     fetch("https://thawing-mountain-85716.herokuapp.com/api/carts/", {
  //       // if the method isn't get it must be specified
  //       method: "POST",
  //       // turn the JS object into JSON
  //       body: JSON.stringify(cart),
  //       // let the backend know what type of data it's about to receive
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       // console.log(res);
  //     });

  //     // put to item API
  //     fetch(
  //       `https://thawing-mountain-85716.herokuapp.com/api/items/${specificItem["_id"]}`,
  //       {
  //         // if the method isn't get it must be specified
  //         method: "PUT",
  //         // turn the JS object into JSON
  //         body: JSON.stringify(specificItem),
  //         // let the backend know what type of data it's about to receive
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then((res) => {
  //       // console.log(res);
  //     });
  //   } else if (specificItem.quantity > 0) {
  //     // console.log("current item quant: " + specificItem.quantity);

  //     specificItem.quantity += 1;

  //     // console.log("updated item quant: " + specificItem.quantity);

  //     // updatedCart.item.quantity = specificItem.quantity;
  //     //put item in item api
  //     // put to item API
  //     fetch(
  //       `https://thawing-mountain-85716.herokuapp.com/api/items/${specificItem["_id"]}`,
  //       {
  //         // if the method isn't get it must be specified
  //         method: "PUT",
  //         // turn the JS object into JSON
  //         body: JSON.stringify(specificItem),
  //         // let the backend know what type of data it's about to receive
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         return res.json();
  //         // console.log(res);
  //       })
  //       .then((data) => {
  //         console.log("UPDATED DATA: ");
  //         console.log(data);
  //         setUpdatedItem(data);

  //         cart.item[0] = data;

  //         fetch(
  //           `https://thawing-mountain-85716.herokuapp.com/api/carts/${specificItem["_id"]}`,
  //           {
  //             // if the method isn't get it must be specified
  //             method: "PUT",
  //             // turn the JS object into JSON
  //             body: JSON.stringify(cart),
  //             // let the backend know what type of data it's about to receive
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         )
  //           .then((res) => {
  //             return res.json();
  //           })
  //           .then((data) => {
  //             console.log(data);
  //           });
  //       });

  // get from item api again to update item

  // get all items from the cart to grab the cart element's id
  // console.log("FETCHING ALL CART DATA: ");
  // fetch("https://thawing-mountain-85716.herokuapp.com/api/carts")
  //   .then((res) => res.json)
  //   .then((data) => {
  //     setCartAPIData(data);
  //     console.log(data);
  //   });

  // put item in cart api
  // fetch(
  //   `https://thawing-mountain-85716.herokuapp.com/api/carts/${specificItem["_id"]}`,
  //   {
  //     // if the method isn't get it must be specified
  //     method: "PUT",
  //     // turn the JS object into JSON
  //     body: JSON.stringify(cart),
  //     // let the backend know what type of data it's about to receive
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // ).then((res) => {
  //   console.log(res);
  // });
  //   }
  // };

  return (
    <div className="item-details-container">
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
        <button className="add-item-to-cart-button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
      <div className="item-reviews-box">Reviews Here</div>
    </div>
  );
}

export default Details;
