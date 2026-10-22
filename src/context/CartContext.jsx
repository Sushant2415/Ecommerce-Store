import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
const CartContext = createContext();
export function CartProvider({ children }) {
  const { user } = useAuth();

  const cartKey = user?.email
    ? `cart_${user.email.trim().toLowerCase()}`
    : null;

  const [cartItems, setCartItems] = useState([]);
  const [loadedCartKey, setLoadedCartKey] = useState(null);

  useEffect(() => {
    if (!cartKey) {
      setCartItems([]);
      setLoadedCartKey(null);
      return;
    }

    const savedCart = localStorage.getItem(cartKey);

    try {
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
    } catch {
      setCartItems([]);
    }

    setLoadedCartKey(cartKey);
  }, [cartKey]);

  useEffect(() => {
    if (!cartKey || loadedCartKey !== cartKey) {
      return;
    }
    localStorage.setItem(cartKey, JSON.stringify(cartItems));
  }, [cartItems, cartKey, loadedCartKey]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: Math.max(1, newQuantity),
            }
          : item,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
