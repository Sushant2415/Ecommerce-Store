import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

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
                <span>Quantity: {item.quantity}</span>
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
    </main>
  );
}

export default Cart;
