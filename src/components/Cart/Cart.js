import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Cart.css";

function Cart(props) {
  const [cart, setCart] = useState([]);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [cartPrices, setCartPrices] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  const url =
    "https://thawing-mountain-85716.herokuapp.com/api/carts/623cfceabf21be8483a4b201";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.item);
        setCart(data.item);

        if (data.item.length > 0) {
          setCartEmpty(false);
        }
      })
      .catch((err) => console.log("oops error"));
  }, []);

  const handleRemove = async (event) => {
    // Write your DELETE fetch() or axios() request here
    const confirm = window.confirm(
      "Are you sure you want to remove this item from your cart?"
    );
    if (confirm) {
      try {
        const response = await axios.delete(`${url}/${event.currentTarget.id}`);
        // if operation was successful navigate back to home
        if (response.status === 200) {
          console.log("status => 200");
        }
      } catch (error) {
        // more error handling
        console.log(error);
      }
      window.location.reload(false);
      // navigate('/cart');
    }
  };

  // const handleRemove = (event) => {
  //   event.currentTarget.id
  // };

  useEffect(() => {
    let totalSum = 0;
    cart.map((itemInCart) => {
      console.log("you have an item in your cart");
      console.log(itemInCart.price.split("$")[1]);
      let itemPrice = parseInt(itemInCart.price.split("$")[1]);
      totalSum += itemPrice;
    });
    setCartTotal(totalSum);
  }, [cart]);

  return (
    <div className="cart">
      <div className="cart-grid">
        {/* {cartList()} */}
        {!cartEmpty ? (
          cart.map((itemToBuy, idx) => {
            console.log(itemToBuy);

            return (
              <div className="cart-mapping" key={idx}>
                <div className="cart-item-image">
                  <img src={itemToBuy.image} alt="" />
                </div>
                <div className="cart-item-details">
                  <div className="item-price-in-cart">
                    Item Price: {itemToBuy.price}
                  </div>
                  <div className="item-cart-quantity">Limit 1 per customer</div>
                  <div className="remove-from-cart">
                    <button onClick={handleRemove} id={itemToBuy["_id"]}>
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>

      <footer className="cart-total">
        <p>
          Total: $<span>{cartTotal}</span>
        </p>
      </footer>
    </div>
  );
}

export default Cart;
