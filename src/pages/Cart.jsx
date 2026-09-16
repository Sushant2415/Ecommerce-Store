import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
        </div>
      </main>
    );
  }
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cartItems.map((item) => (
          <article className="cart-item" key={item.id}>
            <div className="cart-item__image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="cart-item__image"
              />
            </div>

            <div className="cart-item__content">
              <p className="cart-item__category">{item.category}</p>

              <h2 className="cart-item__title">{item.title}</h2>

              <p className="cart-item__price">${item.price}</p>

              <div className="cart-item__quantity">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-item__total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              type="button"
              className="cart-item__remove"
              onClick={() => removeFromCart(item.id)}
            >
              {" "}
              Remove
            </button>
          </article>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>

        <div className="cart-summary__row">
          <span>Subtotal</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>

        <div className="cart-summary__row cart-summary__total">
          <span>Total</span>
          <span>${subTotal.toFixed(2)}</span>
        </div>

        <Link to="/checkout" className="checkout-button">
          Proceed to Checkout
        </Link>
      </div>
    </main>
  );
}

export default Cart;
