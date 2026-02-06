import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
          If you have any questions, feedback, or need assistance, please don't
          hesitate to reach out to us. We are here to help and ensure you have
          the best shopping experience possible. You can contact us through the
          following methods:
        </p>
        <ul className="text-lg text-gray-700 mb-8 max-w-2xl text-center">
          <li>Email: support@example.com</li>
          <li>Phone: +1 (555) 123-4567</li>
          <li>Address: 123 Main Street, Anytown, USA</li>
        </ul>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
};
