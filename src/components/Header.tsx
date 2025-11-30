import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Cart } from "./Cart";

export function Header() {
  const { getCartItemsCount } = useCart();
  const itemCount = getCartItemsCount();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-[#fdcd00]/30 sticky top-0 z-40">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex-1">
            <img 
              src="http://bonpasbakery.com/image/data/logo/logo_bonpas_fa_newc.png" 
              alt="BonPas Bakery" 
              className="h-12"
            />
          </Link>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-[#fdcd00]/10 rounded-full transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-[#1a1a1a]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fdcd00] text-[#1a1a1a] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
