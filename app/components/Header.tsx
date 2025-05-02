import { Link } from "@remix-run/react";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "~/context/CartContext";

export default function Header() {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">
                TaxSmart Shop
              </span>
            </Link>
          </div>

          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500"
            >
              Products
            </Link>
            <Link
              to="/customer/account"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-blue-500"
            >
              My Account
            </Link>
          </nav>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="relative p-2 text-gray-400 hover:text-gray-500"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-medium text-white">
                  {state.itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
