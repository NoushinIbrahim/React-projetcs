import React, { useState } from "react";
import "./payment.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [method, setMethod] = useState("cod");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!method) {
      alert("Please select payment method");
      return;
    }

    // ✅ Order success
    dispatch(clearCart());
    navigate("/ordersucess");
  };

  return (
    <div className="payment">
      <h2>Payment Method</h2>

      <div className="payment-box">
        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label className="payment-option">
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={(e) => setMethod(e.target.value)}
          />
          Card Payment (Demo)
        </label>

        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Payment;
