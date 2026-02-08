import { CartItemRow } from "@/components/CartItemRow";
import { EmptyCart } from "@/components/EmptyCart";
import { useCart } from "@/hooks/useCart";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const { cartItems, onIncrease, onDecrease, onRemove, totalPrices } =
    useCart();

  const hasItems = cartItems.length > 0; // Use for show Continue Shopping link
  const canCheckout = hasItems; // Use for enable/disable Checkout button

  return (
    <div className="relative p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Your Shopping Cart
      </h1>

      {/* Continue Shopping Link */}
      {hasItems && (
        <Link
          to="/products"
          className="text-blue-600 text-xl hover:underline mb-4 inline-block"
        >
          &larr; Continue Shopping
        </Link>
      )}

      {/* Checkout Button */}
      {hasItems && (
        <button
          type="button"
          disabled={!canCheckout}
          aria-label="Proceed to Checkout"
          className="absolute top-6 right-6 bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          Proceed to Checkout
        </button>
      )}

      {hasItems ? (
        <>
          {/* Header Row */}
          <div className="grid grid-cols-5 gap-4 px-4 py-3 border-b-2 mt-4 font-semibold text-gray-500">
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

          {/* Total Price here */}

          <div className="flex justify-end mt-6">
            <div className="text-right text-xl mr-4 mt-6">
              <strong>Total</strong>: ${totalPrices.toFixed(2)}
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
