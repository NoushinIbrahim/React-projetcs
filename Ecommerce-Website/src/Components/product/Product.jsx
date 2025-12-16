import React, { useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

function Product({ name, image, price, id }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const handleAdd = () => {
    dispatch(addItem({ name, image, price, id }));
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div className="product">
        <div className="product-img" onClick={() => setOpen(true)}>
          <img src={image} alt={name} />
        </div>

        <div className="product-details">
          <h3>{name}</h3>
          <p>Rs {price}</p>

          <button onClick={handleAdd}>Add +</button>
        </div>
      </div>

      {/* QUICK VIEW MODAL */}
      {open && (
        <div className="quickview-overlay" onClick={() => setOpen(false)}>
          <div className="quickview-box" onClick={(e) => e.stopPropagation()}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Rs {price}</p>

            <button
              onClick={() => {
                handleAdd();
                setOpen(false);
              }}
            >
              Add to Cart
            </button>

            <span className="close" onClick={() => setOpen(false)}>
              ✕
            </span>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="toast">Added to cart 🛒</div>}
    </>
  );
}

export default Product;
