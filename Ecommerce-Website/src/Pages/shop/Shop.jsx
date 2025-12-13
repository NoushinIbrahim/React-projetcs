import React, {useState} from 'react'
import './Shop.css'
import { category } from '../../category'
import { dummydata } from '../../dummydata';
import { GiShoppingBag } from "react-icons/gi";

import Product from '../../Components/product/Product';

function Shop() {
    let [cate, setCate] = useState(dummydata)
    
      function filterProducts(category) {
        if (category === 'all') {
            setCate(dummydata)
        }else{
                const updateData = dummydata.filter((item) => {
                  return item.category.toLowerCase() === category.toLowerCase();
                });
                setCate(updateData);
        }
        
    
      }
  return (
    <div className="shop">
        <div className="heading">
            <span>Shop</span>
            <GiShoppingBag />

        </div>
      <div className="category-section">
        {category.map((item) => (
          <div
            className="categorycard"
            onClick={() => {
              filterProducts(item.name);
            }}
          >
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="product-section">
        {cate.map((item) => (
          <Product name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}

export default Shop