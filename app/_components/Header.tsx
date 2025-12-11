"use client";

import { BarChart2, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center">
      <div
        onClick={() => router.push("/insight")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-8 h-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-cyan-500/20">
          <BarChart2 className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight">
          FINSIGHT
        </span>
      </div>
      <div className="bg-slate-100 p-2 rounded-full cursor-pointer">
        <Bell className="w-5 h-5 text-slate-600" />
      </div>
    </header>
  );
}
