import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";
import { createContext, useState } from "react";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // Initial empty cart

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { product, quantity: 1 }];
    });
  };

  const onIncrease = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const onDecrease = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const onRemove = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, onIncrease, onDecrease, onRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
