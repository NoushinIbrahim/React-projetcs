import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/footer/Footer'
import Nav from './Components/nav/Nav'
import Shop from './Pages/shop/Shop'
import Cart from './Pages/cart/Cart'
import ContactComponent from "./pages/contact/Contact.jsx";
import Checkout from "./Pages/checkout/Checkout";
import Ordersuccess from './Pages/ordersucess/Ordersuccess.jsx'
import Login from './Pages/auth/Login.jsx'
import Register from './Pages/auth/Register.jsx'
import Payment from './Pages/payment/Payment.jsx'




function App() {
  return (
    <>
      {/* <BrowserRouter basename="/React-projetcs/Ecommerce-Website"> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/ordersucess" element={<Ordersuccess />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <Footer />
      {/* </BrowserRouter> */}
    </>
  );
}

export default App
