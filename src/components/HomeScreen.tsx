import React from 'react';
import { Slideshow } from './Slideshow';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { products } from '../data/products';

interface HomeScreenProps {
  onProductClick: (product: Product) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onProductClick }) => {
  return (
    <div>
      <Slideshow />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="mb-8">Our Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
