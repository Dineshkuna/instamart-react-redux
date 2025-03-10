// import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import CheckOut from "./components/checkout/CheckOut";
import { useState } from "react";
import Orders from "./components/orders/Orders";
import FilterData from "./components/filterData/FilterData";
import ProductDetail from "./components/productDetail/ProductDetail";
import './App.css'


function App() {
  const[order, setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop/>} ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
        <Route path="/checkout" element = {<CheckOut setOrder={setOrder}/>}></Route>
        <Route path="/order-confirmation" element = {<Orders order={order}/>}></Route>
        <Route path="/filter-data" element = {<FilterData/>}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;


