import React, { useState } from 'react';
import { Product } from '../types';
import { Star, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handlePlaceOrder = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-[#fffef5]">
      <div className="px-4 py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#fdcd00] mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#fdcd00]/20 text-[#1a1a1a] rounded-full text-sm mb-3">
                  {product.category}
                </span>
                <h2 className="mb-3 text-[#1a1a1a]">{product.name}</h2>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : index < product.rating
                          ? 'fill-yellow-200 text-yellow-200'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating} out of 5
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-gray-600">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="w-10 h-10 rounded-full border-2 border-[#fdcd00] flex items-center justify-center hover:bg-[#fdcd00] hover:text-[#1a1a1a] transition-colors disabled:opacity-50 disabled:hover:bg-transparent"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="w-10 h-10 rounded-full border-2 border-[#fdcd00] flex items-center justify-center hover:bg-[#fdcd00] hover:text-[#1a1a1a] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span className="text-gray-600">Price per item:</span>
                    <span className="text-[#1a1a1a]">{product.price} VNĐ</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total:</span>
                    <span className="text-[#1a1a1a]">{totalPrice} VNĐ</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-[#fdcd00] text-[#1a1a1a] py-4 rounded-lg hover:bg-[#e6b900] transition-colors"
                >
                  Add to Cart
                </button>

                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center text-sm">
                    Added to cart successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
