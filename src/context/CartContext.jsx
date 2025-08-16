import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const normalizedItem = {
      ...item,
      selectedWeight: item.selectedWeight || "1 KG", 
      quantity: item.quantity || 1,     
    };

    setCart((prev) => {
      const existing = prev.find(
        (p) =>
          p.id === normalizedItem.id &&
          p.selectedWeight === normalizedItem.selectedWeight
      );

      if (existing) {
        return prev.map((p) =>
          p.id === normalizedItem.id &&
          p.selectedWeight === normalizedItem.selectedWeight
            ? { ...p, quantity: p.quantity + normalizedItem.quantity }
            : p
        );
      }

      return [...prev, normalizedItem];
    });
  };

  const removeFromCart = (id, weight) => {
    setCart((prev) =>
      prev.filter((p) => !(p.id === id && p.selectedWeight === weight))
    );
  };

  const clearCart = () => setCart([]);


  const updateQuantity = (id, weight, quantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedWeight === weight
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

 
  const updateWeight = (id, oldWeight, newWeight) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) => item.id === id && item.selectedWeight === newWeight
      );

      if (exists) {

        return prev
          .map((item) =>
            item.id === id && item.selectedWeight === oldWeight
              ? { ...exists, quantity: exists.quantity + item.quantity }
              : item
          )
          .filter(
            (item) => !(item.id === id && item.selectedWeight === oldWeight)
          );
      }

      return prev.map((item) =>
        item.id === id && item.selectedWeight === oldWeight
          ? { ...item, selectedWeight: newWeight }
          : item
      );
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        updateWeight,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
