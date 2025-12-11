"use client";

import { TrendingUp, Hash, MessageCircle, User } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();
  const path = usePathname();

  const navItems = [
    { label: "인사이트", href: "/insight", icon: TrendingUp },
    { label: "테마탐색", href: "/themes", icon: Hash },
    { label: "커뮤니티", href: "/community", icon: MessageCircle },
    { label: "MY", href: "/my", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 pb-safe z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = path.startsWith(href);

          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={`flex flex-col items-center gap-1 ${
                active ? "text-cyan-600" : "text-slate-500"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
