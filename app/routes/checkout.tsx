import { useState } from "react";
import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { useCart } from "~/context/CartContext";

// This is a mock component to simulate the ExemptionIqClient behavior
// In a real implementation, you would import this from 'exemption-iq'
export default function Checkout() {
  const { state, clearCart } = useCart();
  const [exemptionComplete, setExemptionComplete] = useState(false);

  // Calculate tax (assuming a general tax rate of 8%)
  const taxRate = 0.08;
  const subtotal = state.total;
  const tax = exemptionComplete ? 0 : subtotal * taxRate;
  const total = subtotal + tax;

  // Customer information for the exemption certificate
  const customerInfo = {
    name: "Acme Corporation",
    emailAddress: "purchasing@acmecorp.example",
    addressLine1: "123 Business Ave",
    phoneNumber: "555-123-4567",
    city: "Orlando",
    country: "USA",
    postalCode: "32801",
    region: "FL",
  };

  const handlePlaceOrder = () => {
    // In a real application, you would send the order to your backend
    alert("Order placed successfully!");
    clearCart();
    // Redirect to a thank you page or order confirmation
  };

  const handleExemptionComplete = (status: boolean) => {
    setExemptionComplete(status);
    return true;
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              You cannot proceed to checkout with an empty cart.
            </p>
            <div className="mt-6">
              <Link to="/products" className="btn btn-primary">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          <Link
            to="/cart"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Cart
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Shipping Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    defaultValue={customerInfo.name}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={customerInfo.addressLine1}
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      defaultValue={customerInfo.city}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      defaultValue="Florida"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      name="postal-code"
                      defaultValue={customerInfo.postalCode}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    defaultValue={customerInfo.emailAddress}
                    className="form-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    defaultValue={customerInfo.phoneNumber}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            {/* This is where the ExemptionIqClient component would normally go */}
            {/* We're using a mock component for demonstration purposes */}
          </div>

          <div className="mt-10 lg:mt-0 lg:col-span-5">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    {state.items.map((item) => (
                      <li key={item.id} className="py-4 flex">
                        <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-center object-cover"
                          />
                        </div>

                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-sm font-medium text-gray-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <p className="text-gray-500">Qty {item.quantity}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <div className="flex items-center">
                      <p>Tax {exemptionComplete ? "(Exempt)" : "(8%)"}</p>
                      {exemptionComplete && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Exemption Applied
                        </span>
                      )}
                    </div>
                    <p>${tax.toFixed(2)}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="w-full btn btn-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
