// import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop/>} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
        <Route path="/checkout" element = {<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
