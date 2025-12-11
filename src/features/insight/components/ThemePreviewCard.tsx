"use client";

import { hotThemes } from "@/src/shared/mock/hotThemes";
import { Brain } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ThemePreviewCard() {
  const router = useRouter();

  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          커뮤니티 기반 테마 ETF
        </h3>
        <button
          onClick={() => router.push("/themes")}
          className="text-xs text-slate-500 hover:text-cyan-600 cursor-pointer"
        >
          더보기 &gt;
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {hotThemes.slice(0, 3).map((theme) => (
          <div
            key={theme.id}
            onClick={() => router.push(`/themes/${theme.id}`)}
            className="bg-white p-4 rounded-xl border border-slate-200 hover:border-cyan-500/50 transition-colors cursor-pointer shadow-sm relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 p-3 opacity-10">
              <Brain className="w-16 h-16 text-purple-600" />
            </div>

            <div className="flex justify-between items-start mb-2 relative z-10">
              <div>
                <span className="font-bold text-slate-900 text-lg">
                  {theme.name} ETF
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  {theme.description}
                </p>
              </div>
              <span
                className={`text-sm font-bold px-2 py-1 rounded bg-slate-100 ${
                  theme.sentiment === "positive"
                    ? "text-red-600"
                    : "text-blue-600"
                }`}
              >
                {theme.change}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-purple-500 h-full"
                  style={{ width: `${theme.score}%` }}
                ></div>
              </div>
              <span className="text-xs font-bold text-purple-600">
                매수 심리 {theme.score}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
