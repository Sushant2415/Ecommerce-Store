import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MyOrders = () => {
  const { user } = useAuth();

  const ordersKey = user.email
    ? `orders_${user.email.trim().toLowerCase()}`
    : null;

  let orders = [];
  try {
    const savedOrders = ordersKey ? localStorage.getItem(ordersKey) : null;

    orders = savedOrders ? JSON.parse(savedOrders) : [];

    if (!Array.isArray(orders)) {
      orders = [];
    }
  } catch {
    orders = [];
  }
  const sortedOrders = [...orders].sort((a, b) => b.id - a.id);
  return (
    <main className="my-orders">
      <div className="my-orders__header">
        <p className="my-orders__eyebrow">YOUR ACCOUNT</p>
        <h1>My Orders</h1>
        <p>Track your purchases and revisit your order details.</p>
      </div>

      {sortedOrders.length === 0 ? (
        <section className="my-orders__empty">
          <h2>No orders yet</h2>
          <p>Your placed orders will appear here.</p>
          <Link to="/products" className="my-orders__button">
            Start Shopping
          </Link>
        </section>
      ) : (
        <section className="my-orders__list">
          {sortedOrders.map((order) => (
            <article className="my-order-card" key={order.id}>
              <div className="my-order-card__header">
                <div>
                  <p className="my-order-card__label">ORDER ID</p>
                  <h2>#{order.id}</h2>
                </div>

                <span className="my-order-card__status">Order Placed</span>
              </div>

              <p className="my-order-card__date">
                Placed on {new Date(order.createdAt).toLocaleDateString()}
              </p>

              <div className="my-order-card__items">
                {(Array.isArray(order.items) ? order.items : []).map((item) => (
                  <div className="my-order-item" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="my-order-item__image"
                    />

                    <div className="my-order-item__info">
                      <h3>{item.title}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-order-card__footer">
                <span>Total Paid</span>
                <strong>${Number(order.total).toFixed(2)}</strong>
              </div>

              {order.shipping && (
                <div className="my-order-card__shipping">
                  <h3>Shipping Details</h3>
                  <p>{order.shipping.name}</p>
                  <p>{order.shipping.address}</p>
                  <p>
                    {order.shipping.city} - {order.shipping.pincode}
                  </p>
                </div>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default MyOrders;
