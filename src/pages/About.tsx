import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
          We are a passionate team dedicated to providing the best online
          shopping experience. Our mission is to offer a wide range of
          high-quality products at competitive prices, along with exceptional
          customer service. We believe in building lasting relationships with
          our customers and strive to exceed their expectations every day.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};
