import React, { useState } from "react";
import bg from "../../assestss/bg0.gif";
import Product from "../../Components/product/Product";
import "./Home.css";
import { category } from "../../category";
import { dummydata } from "../../dummydata";

function Home() {
  const [cate, setCate] = useState(dummydata);

  function filterProducts(categoryName) {
    const updateData = dummydata.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase()
    );
    setCate(updateData);
  }

  return (
    <section className="home">
      {/* HERO SECTION */}
      <div className="hero-bg">
        <img src={bg} alt="Fashion banner" />
      </div>

      {/* CATEGORY SECTION */}
      <div className="category-section">
        {category.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => filterProducts(item.name)}
          >
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* PRODUCTS */}
      <h1 className="section-title">Trending Products</h1>

      <div className="product-section">
        {cate.slice(0, 8).map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
