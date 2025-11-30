import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRewards } from "../context/RewardsContext";
import { useAuth } from "../context/AuthContext";
import {
  Minus,
  Plus,
  Trash2,
  X,
  ShoppingBag,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalCost,
    clearCart,
  } = useCart();
  const { addPoints } = useRewards();
  const { user } = useAuth();
  const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  if (!isOpen) return null;

  const totalAmount = getTotalCost() * 1.1;
  const rewardPoints = Math.round(totalAmount * 0.1);

  const handleCheckout = () => {
    if (user) {
      setEarnedPoints(rewardPoints);
      addPoints(rewardPoints);
      setShowCheckoutDialog(true);
      clearCart();
    } else {
      alert("Please login to checkout");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-[94dvh] w-full md:w-[450px] bg-white shadow-2xl z-50 flex flex-col max-h-screen">
        <div className="flex items-center justify-between p-6 border-b border-[#fdcd00]/30 flex-shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[#1a1a1a]" />
            <h2 className="text-[#1a1a1a]">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#fdcd00]/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-[#1a1a1a]" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-center p-6">
            <div>
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-400">
                Add some delicious items to get started!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 min-h-0">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 bg-[#fffef5] rounded-lg p-4"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="mb-1 text-sm text-[#1a1a1a]">
                        {item.product.name}
                      </h3>
                      <p className="text-[#1a1a1a] mb-3 text-sm">
                        {item.product.price} VNĐ
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                              )
                            }
                            className="w-8 h-8 rounded-full border border-[#fdcd00] flex items-center justify-center hover:bg-[#fdcd00] hover:text-[#1a1a1a] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                              )
                            }
                            className="w-8 h-8 rounded-full border border-[#fdcd00] flex items-center justify-center hover:bg-[#fdcd00] hover:text-[#1a1a1a] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.product.id)
                          }
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="w-full mt-6 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <div className="border-t border-[#fdcd00]/30 p-6 bg-[#fffef5] flex-shrink-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Subtotal:
                  </span>
                  <span className="text-[#1a1a1a]">
                    {getTotalCost()} VNĐ
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    Tax (10%):
                  </span>
                  <span className="text-[#1a1a1a]">
                    {(getTotalCost() * 0.1)} VNĐ
                  </span>
                </div>
                <div className="border-t border-[#fdcd00]/30 pt-3 flex items-center justify-between">
                  <span className="text-[#1a1a1a]">Total:</span>
                  <span className="text-[#1a1a1a]">
                    {totalAmount} VNĐ
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm pt-2">
                  <span className="text-[#fdcd00]">
                    Reward Points:
                  </span>
                  <span className="text-[#fdcd00]">
                    {rewardPoints} points
                  </span>
                </div>
              </div>

              <button 
                onClick={handleCheckout}
                className="w-full bg-[#fdcd00] text-[#1a1a1a] py-4 rounded-lg hover:bg-[#e6b900] transition-colors"
              >
                Thanh toán
              </button>
            </div>
          </>
        )}
      </div>

      <Dialog open={showCheckoutDialog} onOpenChange={setShowCheckoutDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#1a1a1a]">
              Đơn hàng đã được xác nhận!
            </DialogTitle>
            <DialogDescription className="text-gray-600 pt-4">
              Cảm ơn quý khách đã mua hàng! Quý khách đã tích được {earnedPoints} điểm. Chi tiết đơn hàng đã được hệ thống tự động gửi tới email của quý khách.
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => {
              setShowCheckoutDialog(false);
              onClose();
            }}
            className="w-full bg-[#fdcd00] text-[#1a1a1a] py-3 rounded-lg hover:bg-[#e6b900] transition-colors"
          >
            Tiếp tục mua sắm
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};