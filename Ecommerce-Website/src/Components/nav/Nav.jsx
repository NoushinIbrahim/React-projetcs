import React from 'react'
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import './Nav.css'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'




function Nav() {
  let dispatch = useDispatch()
  let items = useSelector(state =>state

  )
  return (
    <div className="nav">
      <div className="top-nav">
        <Link to="/">
          <div className="logo">
            <span>V-Shop</span>
            <GiShoppingBag />
          </div>
        </Link>
        <form className="search-box">
          <input type="text" placeholder="search items.." />
          <button>
            <IoSearch />
          </button>
        </form>
        <Link to='/cart'>
        <div  className="cart-box">
          <IoCartOutline />
          <span>{items.cart.length}</span>
        </div>
        </Link>
      </div>
      <div className="bottom-nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shope</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
        <Link to="/contect">
          <li>Contect</li>
        </Link>
      </div>
    </div>
  );
}

export default Nav