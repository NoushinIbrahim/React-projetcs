 import React, { use } from 'react'
import './Cart.css'
import CartCard from '../../Components/CartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from '../../assestss/emptycart.png'

function Cart() {
    let item = useSelector(state=>state)
  return (
    <div className="cart">
      {item.cart.length <= 0 ? (
        <div className="emptycart">
          <img src={ec} alt="" />
          <h1>emptycart</h1>
        </div>
      ) : <div className='cartcart-section'>
        {item.cart.map((item)=>(
            <CartCard name={item.name} price={item.price} image={item.image} id={item.id} />
        ))}
      </div>
        
      }
      
    </div>
  );
}

export default Cart