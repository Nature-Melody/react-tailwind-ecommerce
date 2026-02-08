import { useContext, useMemo } from "react";
import { CartContext } from "@/context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  // Calculate total items in the cart

  const totalItems = useMemo(() => {
    return context.cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [context.cartItems]);

  // Calculate total price of items in the cart
  const totalPrices = useMemo(() => {
    return context.cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    );
  }, [context.cartItems]);
  return {
    ...context,
    totalPrices,
    totalItems,
  };
};
