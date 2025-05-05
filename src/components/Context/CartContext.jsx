import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { isAuthenticated } = useAuth();

  const addToCart = (product) => {
    if (!isAuthenticated) {
      // Redirect to login page or show a message
      window.location.href = '/login';
      return;
    }
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    if (!isAuthenticated) {
      window.location.href = '/login';
      return;
    }
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
