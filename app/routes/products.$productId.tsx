import { useLoaderData } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "@remix-run/react";
import { getProduct } from "~/models/product";
import { useCart } from "~/context/CartContext";

interface LoaderData {
  product: ReturnType<typeof getProduct>;
}

export const loader: LoaderFunction = async ({ params }) => {
  const productId = params.productId as string;
  const product = getProduct(productId);
  
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  
  return json<LoaderData>({ product });
};

export default function ProductDetail() {
  const { product } = useLoaderData<LoaderData>();
  const { addItem } = useCart();
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/products" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Products
      </Link>
      
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-center object-cover w-full h-full"
          />
        </div>
        
        <div className="mt-10 px-4 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
          
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>
          
          <div className="mt-8 flex">
            <button
              onClick={() => addItem(product)}
              className="btn btn-primary flex-1"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
          </div>
          
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-4 border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                <div className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Category</dt>
                  <dd className="text-sm text-gray-900 text-right">{product.category}</dd>
                </div>
                <div className="py-3 flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">SKU</dt>
                  <dd className="text-sm text-gray-900 text-right">SKU-{product.id}-{product.category.slice(0, 3).toUpperCase()}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}