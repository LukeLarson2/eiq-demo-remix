import { Link } from "@remix-run/react";
import { ShoppingCart } from "lucide-react";
import { Product } from "~/models/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card animate-fade-in" style={{animationDelay: `${parseInt(product.id) * 100}ms`}}>
      <Link to={`/products/${product.id}`}>
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">${product.price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}