import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Award, Users } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1657498023828-1e0181449d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQyNjUwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Bakery interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-white">Our Story</h2>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-8">
        <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-[#1a1a1a] mb-4">Về Bonpas</h3>
          <p className="text-gray-700 mb-4">
            Tự hào là mô hình đầu tiên tại Đà Nẵng sẽ mang đến
            cho bạn những trải nghiệm thú vị với hương vị bánh
            tươi mới đầy cuốn hút từ các sản phẩm bánh mì truyền
            thống, bánh mì mềm, bánh lớp pastries, sandwichs,
            pizza và bánh kem cùng nhiều loại thức uống hấp dẫn.
            Hãy đến và thưởng thức, BonPas Bakery & Coffee rất
            hân hạnh được phục vụ các bạn!
          </p>
        </div>

        {/* Values */}
        <h3 className="text-[#1a1a1a] mb-4">Giá trị cốt lõi</h3>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
              <Heart className="w-6 h-6 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-2">Passion</h4>
              <p className="text-gray-600 text-sm">
                Tạo ra sản phẩm tươi, mới, chất lượng và tốt cho
                sức khỏe.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
              <Award className="w-6 h-6 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-2">Quality</h4>
              <p className="text-gray-600 text-sm">
                Tạo được mối quan hệ lâu dài và bền vững với
                những fan yêu thích Bon Pas. Phản hồi nhanh
                những mong muốn của fan. Lắng nghe để thấu hiểu
                nhận xét từ fan.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
            <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
              <Users className="w-6 h-6 text-[#1a1a1a]" />
            </div>
            <div>
              <h4 className="text-[#1a1a1a] mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                Xây dựng văn hóa đội ngũ nhân viên đầy năng
                lượng, nhiệt tình và sáng tạo.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-[#fdcd00] text-[#1a1a1a] rounded-lg p-6 shadow-sm">
          <h3 className="mb-3">Meet Our Bakers</h3>
          <p className="text-[#1a1a1a]/80 mb-4">
            Our team of passionate bakers brings decades of
            combined experience to create the perfect baked
            goods every single day.
          </p>
          <p className="text-[#1a1a1a]/80">
            Led by Master Baker Marie Laurent, who trained in
            France and brings authentic European techniques to
            every creation.
          </p>
        </div>
      </div>
    </div>
  );
}