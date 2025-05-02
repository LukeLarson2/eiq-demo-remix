import { useState } from "react";
import { useCart } from "~/context/CartContext";
import { getProducts, Product } from "~/models/product";
import ProductCard from "~/components/ProductCard";

export default function ProductsIndex() {
  const { addItem } = useCart();
  const products = getProducts();
  const [filter, setFilter] = useState<string>("");
  
  const filteredProducts = filter 
    ? products.filter(product => product.category === filter)
    : products;

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Filter by:</span>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="form-input"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={() => addItem(product)} 
          />
        ))}
      </div>
    </div>
  );
}