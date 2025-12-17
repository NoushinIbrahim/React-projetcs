import React, { useEffect, useState } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { IoSearch, IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Nav.css";

function Nav() {
  const cart = useSelector((state) => state.cart);
  const [glass, setGlass] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  useEffect(() => {
    const handleScroll = () => {
      setGlass(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <>
      {/* ===== TOP NAV ===== */}
      <div className="top-nav">
        <div className="logo">
          <Link to="/">
            <span>V-Shop</span>
            <GiShoppingBag />
          </Link>
        </div>

        {/* SEARCH (hide on mobile via CSS) */}
        <form className="search-box">
          <input type="text" placeholder="Search products..." />
          <button type="submit">
            <IoSearch />
          </button>
        </form>

        {/* CART */}
        <div className="cart-box">
          <Link to="/cart">
            <IoCartOutline />
            <span>{cart.length}</span>
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>

      {/* ===== MENU ===== */}
      <nav
        className={`nav-menu ${glass ? "glass" : ""} ${menuOpen ? "open" : ""}`}
      >
        {/* CENTER LINKS */}
        <div className="nav-center">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>

        {/* AUTH BUTTONS */}
        <div className="nav-right">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="auth-btn"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="auth-btn outline"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          ) : (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Nav;
