import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import './CartCard.css'
import image1 from '../../assestss/image1.jpg'


function CartCard({name, price, image, id}) {
  return (
    <div className="cartcard">
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>RS {price}</span>
        </div>
      </div>
      <div className="right-card">
        <button>
          Remove <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
}

export default CartCard