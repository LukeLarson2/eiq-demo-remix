import { Outlet } from "@remix-run/react";
import { CartProvider } from "~/context/CartContext";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default function ProductsLayout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}