import { Link } from "@remix-run/react";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ExemptionIqClient } from "vendor/exemption-iq/dist";
import { ClientOnly } from "~/components/ClientOnly";
import { useCart } from "~/context/CartContext";

export default function Cart() {
  const { state, updateQuantity, removeItem } = useCart();
  const [exemptionComplete, setExemptionComplete] = useState(false);

  // Calculate tax (assuming a general tax rate of 8%)
  const taxRate = 0.08;
  const subtotal = state.total;
  const tax = exemptionComplete ? 0 : subtotal * taxRate;
  const total = subtotal + tax;
  const handleExemptionComplete = (status: boolean) => {
    setExemptionComplete(status);
    return true;
  };
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

  const buttonStyles = JSON.stringify({
    width: "100%",
    height: "fit",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center mt-2 md:mt-0"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold text-gray-900">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added any products to your cart yet.
            </p>
            <div className="mt-6">
              <Link to="/products" className="btn btn-primary">
                View Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-8">
              <div className="border-t border-gray-200 divide-y divide-gray-200">
                {state.items.map((item) => (
                  <div key={item.id} className="py-6 flex animate-fade-in">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>

                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="text-gray-500 p-1 border border-gray-300 rounded"
                          >
                            -
                          </button>

                          <span className="text-gray-800 font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="text-gray-500 p-1 border border-gray-300 rounded"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-500 inline-flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 lg:mt-0 lg:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Order Summary
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Tax ({exemptionComplete ? "0%" : "8%"})</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <ClientOnly>
                    <ExemptionIqClient
                      customerCode="ACME001"
                      customerInfo={customerInfo}
                      state="Florida"
                      primaryColor="#2966B1"
                      onComplete={handleExemptionComplete}
                      framework="remix"
                      buttonStyles={buttonStyles}
                      manualValidation={false}
                      showDownload={true}
                    />
                  </ClientOnly>

                  <Link to="/checkout" className="w-full btn btn-primary">
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
