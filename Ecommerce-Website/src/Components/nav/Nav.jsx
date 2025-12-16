import React, { useEffect, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

function Nav() {
  const cart = useSelector((state) => state.cart);
  const [glass, setGlass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setGlass(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="top-nav">
        <div className="logo">
          <span>V-Shop</span>
          <Link to="/" className="">
            <GiShoppingBag />
          </Link>
        </div>
        <form className="search-box">
          <input type="text" placeholder="Search products..." />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
        <div className="cart-box">
          <Link to="/cart">
            <IoCartOutline />
            <span>{cart.length}</span>
          </Link>
        </div>
      </div>
      {/* TOP SECTION */}

      <form className="search"></form>

      {/* STICKY MENU */}
      <nav className={`nav-menu ${glass ? "glass" : ""}`}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Nav;
