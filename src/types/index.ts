export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
