import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { removeitem } from "../../redux/cartSlice";

function CartCard({ name, price, image, id }) {
  const dispatch = useDispatch();

  return (
    <div className="cartcard">
      {/* LEFT */}
      <div className="left-card">
        <div className="img-box">
          <img src={image} alt={name} />
        </div>

        <div className="name-price">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">Rs {price}</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right-card">
        <button className="remove-btn" onClick={() => dispatch(removeitem(id))}>
          <MdOutlineDeleteOutline />
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;
