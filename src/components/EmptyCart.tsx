import emptyCart from "@/assets/images/empty_cart.png";
import { ShopNowButton } from "./ShopNowButton";

export const EmptyCart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <img src={emptyCart} alt="Empty Cart" className="w-64 h-64 mb-6 mr-5" />
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <ShopNowButton />
      </div>
    </>
  );
};
