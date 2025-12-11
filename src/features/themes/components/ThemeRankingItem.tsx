"use client";

import { Theme } from "@/src/shared/types/theme";
import { useRouter } from "next/navigation";

interface ThemeRankingItemProps {
  theme: Theme;
  index: number;
}

export default function ThemeRankingItem({
  theme,
  index,
}: ThemeRankingItemProps) {
  const router = useRouter();

  return (
    <div
      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 cursor-pointer hover:border-cyan-500/30"
      onClick={() => router.push(`/themes/${theme.id}`)}
    >
      <div className="text-xl font-bold text-slate-300 w-6 text-center">
        {index}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-slate-900 text-lg">{theme.name}</h3>
        <p className="text-xs text-slate-500 mb-1">{theme.description}</p>
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`text-xs font-bold ${
              theme.sentiment === "positive"
                ? "text-green-600"
                : theme.sentiment === "negative"
                ? "text-red-600"
                : "text-slate-500"
            }`}
          >
            감성:{" "}
            {theme.sentiment === "positive"
              ? "긍정적"
              : theme.sentiment === "negative"
              ? "부정적"
              : "중립"}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500">관련글 1.2k+</span>
        </div>
      </div>
      <div
        className={`text-right ${
          theme.change.startsWith("+") ? "text-red-600" : "text-blue-600"
        }`}
      >
        <div className="font-bold">{theme.change}</div>
        <div className="text-xs text-slate-400">언급량</div>
      </div>
    </div>
  );
}
