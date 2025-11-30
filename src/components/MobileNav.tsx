import { Link, useLocation } from "react-router";
import { Home, ShoppingBag, Newspaper, User } from "lucide-react";

export function MobileNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/products", label: "Products", icon: ShoppingBag },
    { path: "/news", label: "News", icon: Newspaper },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#fdcd00]/30 z-50">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
              isActive(path)
                ? "text-[#1a1a1a] bg-[#fdcd00]/20"
                : "text-gray-500"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
