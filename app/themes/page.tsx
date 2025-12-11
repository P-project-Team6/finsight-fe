import ThemeRankingItem from "@/src/features/themes/components/ThemeRankingItem";
import { hotThemes } from "@/src/shared/mock/hotThemes";
import { Search } from "lucide-react";

export default function ThemesPage() {
  return (
    <div className="pb-20 animate-fade-in space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-900">테마 탐색</h1>
        <button className="p-2 bg-slate-100 rounded-full">
          <Search className="w-5 h-5 text-slate-600" />
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {["전체", "반도체", "2차전지", "AI", "바이오", "플랫폼", "자동차"].map(
          (cat, idx) => (
            <button
              key={idx}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                idx === 0
                  ? "bg-cyan-500 text-white"
                  : "bg-white border border-slate-200 text-slate-600"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>
      <div className="space-y-4">
        {hotThemes.map((theme, idx) => (
          <ThemeRankingItem key={theme.id} theme={theme} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
