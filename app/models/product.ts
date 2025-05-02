export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Business Laptop Pro",
    description: "High-performance laptop ideal for business applications and productivity.",
    price: 1299.99,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Office Desk Chair",
    description: "Ergonomic office chair with lumbar support and adjustable height.",
    price: 249.99,
    image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Furniture"
  },
  {
    id: "3",
    name: "Professional Printer",
    description: "High-capacity printer for business documents with wireless connectivity.",
    price: 399.99,
    image: "https://images.pexels.com/photos/7203788/pexels-photo-7203788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  },
  {
    id: "4",
    name: "Conference Table",
    description: "Large conference table suitable for business meetings and collaborative work.",
    price: 899.99,
    image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Furniture"
  },
  {
    id: "5",
    name: "Whiteboard",
    description: "Large magnetic whiteboard for presentations and brainstorming sessions.",
    price: 149.99,
    image: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Office Supplies"
  },
  {
    id: "6",
    name: "Document Scanner",
    description: "High-speed document scanner for digitizing business documents.",
    price: 299.99,
    image: "https://images.pexels.com/photos/7462601/pexels-photo-7462601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Electronics"
  }
];

export function getProducts(): Product[] {
  return products;
}

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id);
}