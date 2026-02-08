import { Link } from "react-router-dom";

export const ShopNowButton = () => {
  return (
    <>
      <Link
        to="/products"
        className="inline-flex items-center px-4 py-2 rounded-md
                         bg-blue-600 text-white font-medium
                         hover:bg-blue-700 transition"
      >
        Shop Now
      </Link>
    </>
  );
};
