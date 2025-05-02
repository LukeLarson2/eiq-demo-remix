import { Link } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">TaxSmart Shop</h1>
            <Link 
              to="/products" 
              className="btn btn-primary"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to TaxSmart Shop
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              Shop with confidence using our integrated tax exemption certificate management system.
            </p>
            <div className="mt-10">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Browse Products
              </Link>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-lg font-medium text-gray-900">Simple Shopping</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Browse products and add them to your cart with just a few clicks.
                  </p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-lg font-medium text-gray-900">Tax Exemption Management</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Easily manage your tax exemption certificates during checkout.
                  </p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h4 className="text-lg font-medium text-gray-900">Secure Checkout</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Complete your purchase with confidence using our secure checkout process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; 2025 TaxSmart Shop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}