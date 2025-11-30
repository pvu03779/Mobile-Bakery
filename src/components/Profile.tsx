import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Heart,
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  LogOut,
  Star,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRewards } from "../context/RewardsContext";
import { useNavigate } from "react-router";

export function Profile() {
  const { user, logout } = useAuth();
  const { totalPoints } = useRewards();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<
    "about" | "contact"
  >("about");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your message! We'll get back to you soon.",
    );
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      {/* User Info Section */}
      {user && (
        <div className="bg-[#fdcd00] text-[#1a1a1a] px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                <User className="w-8 h-8 text-[#1a1a1a]" />
              </div>
              <div>
                <h3 className="text-[#1a1a1a]">{user.name}</h3>
                <p className="text-[#1a1a1a]/70 text-sm">
                  {user.email}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <LogOut className="w-5 h-5 text-[#1a1a1a]" />
            </button>
          </div>
          
          {/* Reward Points Display */}
          <div className="bg-white/20 rounded-lg p-4 flex items-center gap-3">
            <div className="bg-white/30 p-2 rounded-full">
              <Star className="w-5 h-5 text-[#1a1a1a]" />
            </div>
            <div>
              <p className="text-[#1a1a1a]/70 text-sm">Total Reward Points</p>
              <p className="text-[#1a1a1a]">{totalPoints} points</p>
            </div>
          </div>
        </div>
      )}

      {!user && (
        <div className="bg-[#fdcd00] text-[#1a1a1a] px-4 py-6">
          <h2 className="mb-2">Profile</h2>
          <p className="text-[#1a1a1a]/80 mb-4">
            Đăng nhập để truy cập tài khoản của bạn
          </p>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/login")}
              className="bg-white hover:bg-white/90 text-[#1a1a1a]"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-[#1a1a1a] hover:bg-[#1a1a1a]/90 text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="sticky top-[73px] bg-white border-b border-[#fdcd00]/30 z-40">
        <div className="px-4 py-3 flex gap-2">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "about"
                ? "bg-[#fdcd00] text-[#1a1a1a]"
                : "bg-[#fffef5] text-[#1a1a1a] hover:bg-[#fdcd00]/20"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeTab === "contact"
                ? "bg-[#fdcd00] text-[#1a1a1a]"
                : "bg-[#fffef5] text-[#1a1a1a] hover:bg-[#fdcd00]/20"
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* About Tab Content */}
      {activeTab === "about" && (
        <div className="px-4 py-8">
          {/* Hero Image */}
          <div className="relative h-48 overflow-hidden rounded-lg mb-6">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657498023828-1e0181449d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQyNjUwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bakery interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white">
                Câu chuyện của chúng tôi
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h3 className="text-[#1a1a1a] mb-4">Về Bonpas</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Tự hào là mô hình đầu tiên tại Đà Nẵng sẽ mang đến
              cho bạn những trải nghiệm thú vị với hương vị bánh
              tươi mới đầy cuốn hút từ các sản phẩm bánh mì
              truyền thống, bánh mì mềm, bánh lớp pastries,
              sandwichs, pizza và bánh kem cùng nhiều loại thức
              uống hấp dẫn. Hãy đến và thưởng thức, BonPas
              Bakery & Coffee rất hân hạnh được phục vụ các bạn!
            </p>
          </div>

          {/* Values */}
          <h3 className="text-[#1a1a1a] mb-4">
            Giá trị của chúng tôi
          </h3>
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
                <Heart className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-2">
                  Niềm đam mê
                </h4>
                <p className="text-gray-600 text-sm">
                  Tạo được mối quan hệ lâu dài và bền vững với
                  những fan yêu thích Bon Pas. Phản hồi nhanh
                  những mong muốn của fan. Lắng nghe để thấu
                  hiểu nhận xét từ fan.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
                <Award className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-2">
                  Chất lượng
                </h4>
                <p className="text-gray-600 text-sm">
                  Tạo ra sản phẩm tươi, mới, chất lượng và tốt
                  cho sức khỏe
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm flex gap-4">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full h-fit">
                <Users className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-2">
                  Cộng đồng
                </h4>
                <p className="text-gray-600 text-sm">
                  Xây dựng văn hóa đội ngũ nhân viên đầy năng
                  lượng, nhiệt tình và sáng tạo.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          {/* <div className="bg-[#fdcd00] text-[#1a1a1a] rounded-lg p-6 shadow-sm">
            <h3 className="mb-3">Meet Our Bakers</h3>
            <p className="text-[#1a1a1a]/80 mb-4 text-sm">
              Our team of passionate bakers brings decades of
              combined experience to create the perfect baked
              goods every single day.
            </p>
            <p className="text-[#1a1a1a]/80 text-sm">
              Led by Master Baker Marie Laurent, who trained in
              France and brings authentic European techniques to
              every creation.
            </p>
          </div> */}
        </div>
      )}

      {/* Contact Tab Content */}
      {activeTab === "contact" && (
        <div className="px-4 py-6">
          <div className="space-y-4 mb-8">
            <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full">
                <MapPin className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-1">Địa chỉ</h4>
                <p className="text-gray-600 text-sm">
                  75 - 77 - 79 Phan Đăng Lưu
                </p>
                <p className="text-gray-600 text-sm">
                  P. Hoà Cường Nam, Q. Hải Châu, TP Đà Nẵng
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full">
                <Phone className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-1">
                  Điện thoại
                </h4>
                <p className="text-gray-600 text-sm">
                  0236.3621.645 – 0236.3621.649
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full">
                <Mail className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-1">Email</h4>
                <p className="text-gray-600 text-sm">
                  info@bonpasbakery.com,bonpasbakery@gmail.com
                </p>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg p-4 flex items-start gap-4 shadow-sm">
              <div className="bg-[#fdcd00]/20 p-3 rounded-full">
                <Clock className="w-5 h-5 text-[#1a1a1a]" />
              </div>
              <div>
                <h4 className="text-[#1a1a1a] mb-1">Hours</h4>
                <p className="text-gray-600 text-sm">
                  Monday - Friday: 7am - 7pm
                </p>
                <p className="text-gray-600 text-sm">
                  Saturday - Sunday: 8am - 6pm
                </p>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-[#1a1a1a] mb-4">
              Gửi tin nhắn cho chúng tôi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Tên</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tên của bạn"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@email.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">
                  Điện thoại (tùy chọn)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(+84) 123-4567"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="subject">Chủ đề</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Chúng tôi có thể giúp gì?"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">Tin nhắn</Label>
                <Textarea
                  id="message"
                  placeholder="Hãy cho chúng tôi biết thêm..."
                  required
                  className="mt-1 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#fdcd00] hover:bg-[#e6b900] text-[#1a1a1a]"
              >
                Gửi tin nhắn
              </Button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Map location</p>
                <p className="text-gray-400 text-sm">
                  75 - 77 - 79 Phan Đăng Lưu, P. Hoà Cường Nam,
                  Q. Hải Châu, TP Đà Nẵng
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}