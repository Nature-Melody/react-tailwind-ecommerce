import { Link, useLocation } from "react-router-dom";
import { CartIcon } from "./CartIcon";
import { ShopNowButton } from "./ShopNowButton";

export const Header = () => {
  const { pathname } = useLocation(); // Get current path

  const isShopPage = pathname.startsWith("/products");

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            MyStore
          </Link>

          {/* Navigation + CTA */}
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Products
                </Link>
              </li>
            </ul>

            {/* CTA */}
            {!isShopPage ? <ShopNowButton /> : <CartIcon />}
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.whyDidYouRender = true; // Use for tracking re-render of this component
