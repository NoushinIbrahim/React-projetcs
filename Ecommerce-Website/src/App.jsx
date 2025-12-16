import React from 'react'
import Home from './Pages/home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/footer/Footer'
import Nav from './Components/nav/Nav'
import Shop from './Pages/shop/Shop'
import Cart from './Pages/cart/Cart'
import ContactComponent from "./pages/contact/Contact.jsx";



function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
