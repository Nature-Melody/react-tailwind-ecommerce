import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Store</h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover a wide range of products at unbeatable prices.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </>
  );
};
