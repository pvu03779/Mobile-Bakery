import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock } from "lucide-react";

export function News() {
  const newsItems = [
    {
      id: 1,
      title: "BONPAS MIỄN PHÍ GIAO HÀNG CHO HÓA ĐƠN TỪ 69K TRỞ LÊN",
      date: "24/03/2020",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjQyNDQ4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Từ ngày 24/03/2020, BonPas sẽ mang đến chương trình GIAO HÀNG MIỄN PHÍ cho hóa đơn từ 69K trở lên!",
      category: "Events"
    },
    {
      id: 2,
      title: "CHƯƠNG TRÌNH “FREE COMBO FREE SHIP” – TẶNG COMBO BÁNH VÀ NƯỚC THỨ HAI HÀNG TUẦN",
      date: "16/03/2020",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1657498023828-1e0181449d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQyNjUwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Từ ngày 16/03/2020, BonPas sẽ chính thức mang đến chương trình tặng combo mỗi sáng thứ hai hàng tuần “Free Combo Free Ship",
      category: "Events"
    },
    {
      id: 3,
      title: "NHẬN NGAY ƯU ĐÃI 30.000 VNĐ KHI ĐĂNG KÝ THÀNH VIÊN BONPAS",
      date: "19/11/2019",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1555932450-31a8aec2adf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwYmFrZXJ5fGVufDF8fHx8MTc2NDIzMzc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Khi đăng ký thành viên tại BonPas Bakery and Coffee, bạn sẽ được nhận ngay 30,000đ và rất nhiều chương trình ưu đãi giá trị khác",
      category: "Announcement"
    },
    {
      id: 4,
      title: "CUỘC THI: THỬ LÀM BIÊN KỊCH CÙNG BONPAS",
      date: "23/04/2019",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cmllc3xlbnwxfHx8fDE3NjQyNjY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Những câu chuyện thuở học trò luôn là nguồn cảm hứng bất tận. Ai đi qua những ngày tháng đó rồi sẽ hiều.",
      category: "Team"
    },
    {
      id: 5,
      title: "BONPAS TUYỂN DỤNG THÁNG 11",
      date: "07/11/2019",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1534620808146-d33bb39128b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWR8ZW58MXx8fHwxNzY0MjQzOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Hệ thống BonPas cần tuyển các vị trí sau",
      category: "Recruitment"
    },
    {
      id: 6,
      title: "TUYỂN DỤNG THÁNG 9-10/2019",
      date: "05/08/2019",
      readTime: "1 min read",
      image: "https://images.unsplash.com/photo-1611945007935-925b09ddcf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjb29raWVzfGVufDF8fHx8MTc2NDMxMjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      excerpt: "Hệ thống BonPas cần tuyển các vị trí sau",
      category: "Recruitment"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#fdcd00] text-[#1a1a1a] px-4 py-8">
        <h2 className="mb-2">News & Updates</h2>
        <p className="text-[#1a1a1a]/80">
          Luôn cập nhật những thông tin mới nhất từ ​​tiệm bánh của chúng tôi
        </p>
      </div>

      {/* News Feed */}
      <div className="px-4 py-6">
        <div className="space-y-4">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#fdcd00]/20 text-[#1a1a1a] rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
