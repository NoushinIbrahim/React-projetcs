import React, { useEffect } from "react";
import "./checkout.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  // 🔐 Login check (CORRECT WAY)
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // ✅ Correct total
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    navigate("/payment");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleCheckout}>
          <h3>Billing Details</h3>

          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />

          <button type="submit">Continue to Payment</button>
        </form>

        <div className="order-summary">
          <h3>Your Order</h3>

          {cart.map((item) => (
            <div key={item.id} className="summary-item">
              <p>
                {item.name} × {item.quantity}
              </p>
              <p>Rs {item.price * item.quantity}</p>
            </div>
          ))}

          <hr />
          <h4>Total: Rs {total}</h4>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
