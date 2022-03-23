import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import "./Cart.css";

function Cart(props) {
  const [cart, setCart] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);

  const url = "https://thawing-mountain-85716.herokuapp.com/api/carts";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);

        if (data.length > 0) {
          setCartEmpty(false);
        }

        console.log(data);
      })
      .catch((err) => console.log("oops error"));
  }, []);

  const handleRemove = (event) => {
    event.preventDefault();
    console.log("you clicked");

    axios
      .delete("http://thawing-mountain-85716.herokuapp.com/api/carts/", cart)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="cart">
      <div className="cart-grid">
        {/* {cart.map((itemToBuy) => {
          <>
            <div className="cart-item-image">
              <img src={itemToBuy.item[0].image} alt="" />
            </div>
            <div className="item-price-in-cart">{itemToBuy.item[0].price}</div>
            <div className="item-cart-quantity">quantity dropdown here</div>
            <div className="remove-from-cart">
              <button onClick="handleRemove">Remove Item</button>
            </div>
          </>;
        })} */}
        {console.log(cart)}
        {!cartEmpty ? (
          <>
            {" "}
            <div className="cart-item-image">
              <img src={cart[0].item[0].image} alt="" />
            </div>
            <div className="item-price-in-cart">{cart[0].item[0].price}</div>
            <div className="item-cart-quantity">quantity dropdown here</div>
            <div className="remove-from-cart">
              <button onClick="handleRemove">Remove Item</button>
            </div>{" "}
          </>
        ) : (
          <p>Your Cart Is Empty!</p>
        )}
      </div>

      <footer className="cart-total">
        <p>
          Total: <span>price sum here</span>
        </p>
      </footer>
    </div>
  );
}

export default Cart;
