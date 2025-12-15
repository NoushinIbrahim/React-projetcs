import React, { useState } from "react";
import Nav from "../../Components/nav/Nav";
import bg from "../../assestss/bg0.gif";
import Product from "../../Components/product/Product";
import "./Home.css";
import { category } from "../../category";
import { dummydata } from "../../dummydata";
import Footer from "../../Components/footer/Footer";

function Home() {
  let [cate, setCate] = useState(dummydata)

  function filterProducts(category) {
    const updateData = dummydata.filter((item) => {
      return item.category.toLowerCase() === category.toLowerCase();
    });

    setCate(updateData);
  }
  return (
    <div>
      <Nav />
      <div className="hero-bg">
        <img src={bg} alt="background" />
      </div>
      <div className="category-section">

      {category.slice(0,5).map((item)=>(
        <div className="categorycard" onClick={()=>{
          filterProducts(item.name)
        }}>

          <img src={item.image} alt="" />
          <span>{item.name}</span>
        </div>
        
      ))}
      </div>
      <h1>Trending Products</h1>
      <div className="product-section">
        {cate.slice(0, 7).map((item)=>(
          <Product name={item.name} price={item.price} image={item.image} id={item.id}/>
        ))}
      </div>
      
    </div>
  );
}

export default Home;
