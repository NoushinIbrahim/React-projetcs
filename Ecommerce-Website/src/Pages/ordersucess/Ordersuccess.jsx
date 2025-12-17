import React from 'react'
import './order.css'
import { useNavigate } from 'react-router-dom';

function Ordersuccess() {
 const navigate = useNavigate();

  return (
    <div className="order-success">
      <h1>🎉 Order Placed Successfully</h1>
      <p>Thank you for shopping with V-Shop</p>

      <button onClick={() => navigate("/")}>
        Continue Shopping
      </button>
    </div>
  );
  }

export default Ordersuccess