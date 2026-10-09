import React, { use } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ storeName }) => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const { user, logoutUser } = useAuth();
  console.log("Current User : ", user);
  return (
    <nav className="navbar">
      <div className="navbar_logo">{storeName}</div>
      <div className="navbar_links">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart({totalItems})</Link>
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button
              onClick={() => {
                (logoutUser(), navigate("/login", { replace: true }));
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
