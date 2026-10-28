import React from "react";
import { Link } from "react-router-dom";
const OrderSuccess = () => {
  const savedOrder = localStorage.getItem("lastOrder");
  const order = savedOrder ? JSON.parse(savedOrder) : null;
  return (
    <main className="order-success">
      <div className="order-success__card">
        <div className="order-success__icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>
          Thank you for your order. Your order has been placed successfully.
        </p>
        {order && (
          <div className="order-success__details">
            <p>
              <strong>Order ID:</strong> #{order.id}
            </p>

            <p>
              <strong>Total:</strong> ${order.total.toFixed(2)}
            </p>
          </div>
        )}
        <Link to="/products" className="order-success__button">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
};

export default OrderSuccess;
