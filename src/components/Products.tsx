import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { ProductDetails } from "./ProductDetails";
import { Product } from "../types";

export function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    { id: "all", label: "All" },
    { id: "bread", label: "Bread" },
    { id: "pastries", label: "Pastries" },
    { id: "cookies", label: "Cookies" },
    { id: "cakes", label: "Cakes" },
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Sourdough Loaf",
      category: "bread",
      price: 70000,
      image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWR8ZW58MXx8fHwxNzY0MjQzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Bột chua truyền thống với lớp vỏ giòn và hương vị thơm. Được làm bằng món khai vị 100 năm tuổi của chúng tôi để mang lại hương vị đích thực.",
      rating: 4.9
    },
    {
      id: "2",
      name: "Baguette",
      category: "bread",
      price: 45000,
      image: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5fGVufDF8fHx8MTc2NDIzMzc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Bánh mì baguette cổ điển của Pháp với lớp vỏ vàng và bên trong mềm. Hoàn hảo cho bánh sandwich hoặc bữa tối.",
      rating: 4.7
    },
    {
      id: "3",
      name: "Butter Croissant",
      category: "pastries",
      price: 35000,
      image: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQyNjY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Sự hoàn hảo như bơ, mịn màng với nhiều lớp tinh tế. Một món ăn cổ điển của Pháp tan chảy trong miệng bạn.",
      rating: 4.8
    },
    {
      id: "4",
      name: "Almond Croissant",
      category: "pastries",
      price: 42000,
      image: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQyNjY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Nhân kem hạnh nhân béo ngậy và phủ hạnh nhân cắt lát lên trên. Một sự thay đổi thú vị về cổ điển.",
      rating: 4.6
    },
    {
      id: "5",
      name: "Chocolate Chip Cookies",
      category: "cookies",
      price: 120000,
      image: "https://images.unsplash.com/photo-1611945007935-925b09ddcf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb29raWVzfGVufDF8fHx8MTc2NDMxMjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Hàng chục chiếc bánh quy mới nướng chứa đầy sô-cô-la chip cao cấp. Mềm, dai và không thể cưỡng lại được.",
      rating: 4.7
    },
    {
      id: "6",
      name: "Assorted Cookies",
      category: "cookies",
      price: 150000,
      image: "https://images.unsplash.com/photo-1611945007935-925b09ddcf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb29raWVzfGVufDF8fHx8MTc2NDMxMjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Kết hợp các loại bánh quy ngon nhất của chúng tôi bao gồm sô-cô-la chip, nho khô bột yến mạch và bánh quy đường. Gói đa dạng hoàn hảo.",
      rating: 4.8
    },
    {
      id: "7",
      name: "Birthday Cake",
      category: "cakes",
      price: 350000,
      image: "https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjQyNDQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Được thiết kế tùy chỉnh cho lễ kỷ niệm của bạn với sự lựa chọn của bạn về hương vị và trang trí. Giá khởi điểm hiển thị.",
      rating: 4.9
    },
    {
      id: "8",
      name: "Wedding Cake",
      category: "cakes",
      price: 150000,
      image: "https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjQyNDQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Những chiếc bánh nhiều tầng trang nhã được thiết kế riêng cho ngày đặc biệt của bạn. Liên hệ với chúng tôi để được tư vấn và báo giá tùy chỉnh.",
      rating: 5.0
    },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Handle productId from URL query parameter
  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
      }
    }
  }, [searchParams]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSearchParams({ productId: product.id });
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setSearchParams({});
  };

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={handleBackToProducts}
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#fdcd00] text-[#1a1a1a] px-4 py-8">
        <h2 className="mb-2">Our Products</h2>
        <p className="text-[#1a1a1a]/80">
          Fresh baked goods made daily with care
        </p>
      </div>

      {/* Category Filter */}
      <div className="sticky top-[73px] bg-white border-b border-[#fdcd00]/30 z-40">
        <div className="px-4 py-3 flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? "bg-[#fdcd00] text-[#1a1a1a]"
                  : "bg-[#fffef5] text-[#1a1a1a] hover:bg-[#fdcd00]/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm flex cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleProductClick(product)}
            >
              <div className="w-32 h-32 flex-shrink-0">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="text-[#1a1a1a] mb-1">{product.name}</h4>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                <p className="text-[#1a1a1a]">{product.price} VNĐ</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found in this category
          </div>
        )}
      </div>
    </div>
  );
}
