import React, { useEffect, useState } from "react";
import { FaHeart, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <span>© {new Date().getFullYear()} V-Shop</span>
          <span className="divider">|</span>
          <span>
            Crafted with <FaHeart /> by Noushin ibrahim
          </span>
        </div>
      </footer>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Footer;
