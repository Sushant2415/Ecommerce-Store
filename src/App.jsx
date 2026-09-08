import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar storeName="Shopora" cartCount={0} userName="Guest" />

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/products/:id" element={<ProductDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
