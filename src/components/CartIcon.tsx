import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export const CartIcon = () => {
  const { totalItems } = useCart();

  return (
    <>
      <Link
        to="/cart"
        className="relative flex items-center text-gray-700 hover:text-blue-600 gap-2"
      >
        <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
        <span
          className="absolute -top-0.5 bg-red-500 text-white
                                 text-[calc(0.5rem)] w-4 h-4 flex items-center justify-center
                                 rounded-full"
        >
          {/* Placeholder for cart item count */}
          {totalItems}
        </span>
        <span> Your Cart</span>
      </Link>
    </>
  );
};
