import { Link, useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight } from "lucide-react";
import { Slideshow } from "./Slideshow";

export function Home() {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: "3",
      name: "Artisan Croissants",
      image:
        "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQyNjY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "35,000 VNĐ",
    },
    {
      id: "1",
      name: "Sourdough Bread",
      image:
        "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWR8ZW58MXx8fHwxNzY0MjQzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "70,000 VNĐ",
    },
    {
      id: "5",
      name: "Chocolate Cookies",
      image:
        "https://images.unsplash.com/photo-1611945007935-925b09ddcf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb29raWVzfGVufDF8fHx8MTc2NDMxMjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "120,000 VNĐ",
    },
    {
      id: "7",
      name: "Custom Cakes",
      image:
        "https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjQyNDQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "25,000 VNĐ",
    },
  ];

  const handleProductClick = (productId: string) => {
    navigate(`/products?productId=${productId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Slideshow Section */}
      <Slideshow />

      {/* Featured Products */}
      <section className="px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#1a1a1a]">Sản phẩm</h3>
          <Link
            to="/products"
            className="text-[#1a1a1a] hover:text-[#fdcd00] flex items-center gap-1 transition-colors"
          >
            Tất cả
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h4 className="text-[#1a1a1a] mb-1">
                  {product.name}
                </h4>
                <p className="text-[#1a1a1a]/70">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}