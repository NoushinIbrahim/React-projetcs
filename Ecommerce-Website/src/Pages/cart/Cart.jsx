import React from "react";
import "./Cart.css";
import CartCard from "../../Components/CartCard/CartCard";
import { useSelector } from "react-redux";
import ec from "../../assestss/emptycart.png";
import { Link } from "react-router-dom";


function Cart() {
  const state = useSelector((state) => state);
  const cartItems = state.cart;

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="emptycart fade-in">
          <img src={ec} alt="Empty Cart" />
          <h1>Your cart is empty 🛒</h1>
          <p>Looks like you haven’t added anything yet</p>
        </div>
      ) : (
        <div className="cartcart-section">
          <h2 className="cart-title">Your Shopping Cart</h2>

          <div className="cart-items">
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>

          <div className="price-section slide-up">
            <div>
              <span>Total Products:</span>
              <strong>{cartItems.length}</strong>
            </div>
            <div>
              <span>Total Price:</span>
              <strong>Rs {totalPrice}</strong>
            </div>
          </div>
          <div className="checkout-btn-wrapper">
            <Link to="/checkout" className="checkout-btn  btn-check">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
