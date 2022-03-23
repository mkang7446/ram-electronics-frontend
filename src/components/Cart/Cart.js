import React from "react";

import "./Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart-grid">
        {/* map over items in cart here */}
        <div className="cart-item-image">image here</div>
        <div className="item-price-in-cart">price here</div>
        <div className="item-cart-quantity">quantity dropdown here</div>
        <div className="remove-from-cart">
          <button>Remove Item</button>
        </div>
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
