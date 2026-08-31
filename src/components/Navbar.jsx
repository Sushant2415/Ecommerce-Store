import React from "react";

const Navbar = ({ storeName,cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        {storeName}
      </div>
      <div className="navbar_links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/cart">Cart ({cartCount})</a>
      </div>
    </nav>
  );
};

export default Navbar;
