"use client";

import { BarChart2 } from "lucide-react";
import { useRouter } from "next/navigation";

const tickerItems = [
  { label: "KOSPI", value: "2,847.35", change: "+0.74%", up: true },
  { label: "KOSDAQ", value: "923.18", change: "+1.12%", up: true },
  { label: "USD/KRW", value: "1,368.50", change: "+3.20", up: true },
  { label: "NASDAQ", value: "21,453.67", change: "+0.58%", up: true },
  { label: "S&P500", value: "5,912.44", change: "+0.42%", up: true },
  { label: "원유(WTI)", value: "$74.18", change: "-1.03%", up: false },
];

export default function Header() {
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-3 flex justify-between items-center">
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

        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/login")}
            className="text-xs font-medium text-slate-600 hover:text-cyan-600 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            로그인
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="text-xs font-bold text-white bg-cyan-500 hover:bg-cyan-600 px-3 py-1.5 rounded-lg transition-colors"
          >
            회원가입
          </button>
        </div>
      </div>

      <div className="bg-slate-900 overflow-hidden border-b border-slate-700">
        <div className="flex animate-marquee whitespace-nowrap py-1.5">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 mx-6 text-xs">
              <span className="text-slate-400 font-medium">{item.label}</span>
              <span className="text-white font-bold">{item.value}</span>
              <span className={item.up ? "text-red-400 font-medium" : "text-blue-400 font-medium"}>
                {item.change}
              </span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
