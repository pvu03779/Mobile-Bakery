import React from "react";
import { Product } from "../types";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-green-600">
            {product.price} VNĐ
          </span>
          <span className="text-xs text-gray-500">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};