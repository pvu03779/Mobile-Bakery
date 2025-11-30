import { Outlet } from "react-router";
import { Header } from "./Header";
import { MobileNav } from "./MobileNav";
import { ChatBot } from "./ChatBot";

export function Root() {
  return (
    <div className="min-h-screen bg-[#fffef5]">
      <Header />
      <main className="pb-20">
        <Outlet />
      </main>
      <MobileNav />
      <ChatBot />
    </div>
  );
}
