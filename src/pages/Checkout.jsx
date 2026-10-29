import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [shippingData, setShippingData] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const handleChange = (event) => {
    const { id, value } = event.target;

    setShippingData((currentData) => ({
      ...currentData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      id: Date.now(),
      userEmail: user?.email,
      items: cartItems,
      shipping: shippingData,
      total: subTotal,
      createdAt: new Date().toISOString(),
    };

    const ordersKey = `orders_${user.email.trim().toLowerCase()}`;
    const savedOrders = localStorage.getItem(ordersKey);

    let orders = [];

    try {
      orders = savedOrders ? JSON.parse(savedOrders) : [];
    } catch {
      orders = [];
    }
    orders.push(order);
    localStorage.setItem(ordersKey, JSON.stringify(orders));

    clearCart();

    navigate("/order-success");
  };

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-summary">
        <h2>Order Summary</h2>

        {cartItems.map((item) => (
          <div className="checkout-item" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="checkout-item__image"
            />

            <div className="checkout-item__info">
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}

        <h3>Total: ${subTotal.toFixed(2)}</h3>
      </div>

      <div className="checkout-form">
        <h2>Shipping Details</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              type="text"
              id="name"
              value={shippingData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>

            <textarea
              id="address"
              value={shippingData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>

            <textarea
              id="city"
              value={shippingData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>

            <input
              type="text"
              id="pincode"
              value={shippingData.pincode}
              onChange={handleChange}
              placeholder="Enter your pincode"
              pattern="[0-9]{6}"
              maxLength={6}
              required
            />
          </div>

          <button type="submit">Place Order</button>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
