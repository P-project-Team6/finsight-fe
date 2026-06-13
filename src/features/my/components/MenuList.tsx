"use client";

import {
  Bookmark,
  Bell,
  FileText,
  ArrowRight,
  LayoutDashboard,
  BookOpen,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MenuList() {
  const router = useRouter();

  const items = [
    {
      label: "나만의 ETF 만들기",
      icon: <LayoutDashboard className="w-5 h-5 text-cyan-500" />,
      href: "/my-etf",
      badge: "NEW",
    },
    {
      label: "주식 입문 가이드",
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
      href: "/guide",
      badge: "NEW",
    },
    {
      label: "스크랩한 리포트",
      icon: <Bookmark className="w-5 h-5 text-amber-500" />,
      href: null,
    },
    {
      label: "키워드 알림 설정",
      icon: <Bell className="w-5 h-5 text-yellow-500" />,
      href: null,
    },
    {
      label: "내 활동 내역",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
      href: null,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => item.href && router.push(item.href)}
          className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0"
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-slate-900 font-medium">{item.label}</span>
            {item.badge && (
              <span className="text-[10px] font-bold bg-cyan-100 text-cyan-600 px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </div>
      ))}
    </div>
  );
}
