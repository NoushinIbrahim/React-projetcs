import React, { useEffect, useState } from "react";
import "./Shop.css";
import { category } from "../../category";
import { dummydata } from "../../dummydata";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import Product from "../../Components/product/Product";

/* 🔥 INLINE SKELETON COMPONENT */
const ProductSkeleton = () => {
  return (
    <div className="product skeleton">
      <div className="skeleton-img"></div>
      <div className="skeleton-text"></div>
      <div className="skeleton-text short"></div>
      <div className="skeleton-btn"></div>
    </div>
  );
};

function Shop() {
  const [products, setProducts] = useState(dummydata);
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(100000);
  const [loading, setLoading] = useState(false);

  function applyFilters(cat, searchText, maxPrice) {
    setLoading(true);

    setTimeout(() => {
      let filtered = dummydata;

      if (cat !== "all") {
        filtered = filtered.filter(
          (item) => item.category.toLowerCase() === cat.toLowerCase()
        );
      }

      if (searchText) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      filtered = filtered.filter((item) => item.price <= maxPrice);

      setProducts(filtered);
      setLoading(false);
    }, 600);
  }

  useEffect(() => {
    applyFilters(active, search, price);
  }, [active, search, price]);

  return (
    <div className="shop">
      {/* HEADING */}
      <div className="shop-heading">
        <GiShoppingBag />
        <span>Shop Products</span>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="price-filter">
          <span>Max Price: Rs {price}</span>
          <input
            type="range"
            min="1000"
            max="100000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="shop-categories">
        <button
          className={active === "all" ? "active" : ""}
          onClick={() => setActive("all")}
        >
          All
        </button>

        {category.map((item) => (
          <button
            key={item.name}
            className={active === item.name ? "active" : ""}
            onClick={() => setActive(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div className="shop-products">
        {loading ? (
          [...Array(8)].map((_, i) => <ProductSkeleton key={i} />)
        ) : products.length > 0 ? (
          products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-product">No products found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
