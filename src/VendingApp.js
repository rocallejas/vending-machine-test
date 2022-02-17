import React from 'react'
import NavBar from './components/layouts/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";

function VendingApp() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  )
}

export default VendingApp