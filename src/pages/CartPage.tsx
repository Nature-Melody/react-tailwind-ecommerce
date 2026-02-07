import { CartItemRow } from "@/components/CartItemRow";
import { useCart } from "@/hooks/useCart";

export const CartPage = () => {
  const { cartItems, onIncrease, onDecrease, onRemove } = useCart();

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Your Shopping Cart
      </h1>

      {/* Header Row */}
      <div className="grid grid-cols-5 gap-4 px-4 py-3 border-b-2 font-semibold text-gray-500">
        <span>Product</span>
        <span>Name</span>
        <span className="text-center">Price</span>
        <span className="text-center">Qty</span>
        <span className="text-center">Actions</span>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col">
        {cartItems.map((item) => (
          <CartItemRow
            key={item.product.id}
            item={item}
            onIncrease={() => onIncrease(item.product.id)}
            onDecrease={() => onDecrease(item.product.id)}
            onRemove={() => onRemove(item.product.id)}
          />
        ))}
      </div>
    </div>
  );
};
