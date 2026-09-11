import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
const Navbar = ({ storeName}) => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  return (
    <nav className="navbar">
      <div className="navbar_logo">{storeName}</div>
      <div className="navbar_links">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
