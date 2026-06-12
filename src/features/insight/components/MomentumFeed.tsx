"use client";

import { Flame, TrendingUp, Clock } from "lucide-react";

const momentumItems = [
  {
    id: 1,
    theme: "HBM/AI반도체",
    prevScore: 54,
    currentScore: 92,
    change: 38,
    timeAgo: "1시간 전",
    type: "theme" as const,
  },
  {
    id: 2,
    theme: "방산",
    prevScore: 58,
    currentScore: 85,
    change: 27,
    timeAgo: "3시간 전",
    type: "theme" as const,
  },
  {
    id: 3,
    theme: "조선",
    prevScore: 50,
    currentScore: 74,
    change: 24,
    timeAgo: "5시간 전",
    type: "theme" as const,
  },
  {
    id: 4,
    theme: "원전",
    prevScore: 45,
    currentScore: 68,
    change: 23,
    timeAgo: "7시간 전",
    type: "theme" as const,
  },
];

export default function MomentumFeed() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          감성 급등 알람
        </h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
          실시간 모멘텀
        </span>
      </div>

      <div className="space-y-3">
        {momentumItems.map((item, i) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                i === 0
                  ? "bg-orange-100 text-orange-600"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {i + 1}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900">{item.theme}</span>
                {i === 0 && (
                  <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">
                    HOT
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="text-slate-400">감성 점수</span>
                <span className="font-medium text-slate-600">{item.prevScore}</span>
                <TrendingUp className="w-3 h-3 text-orange-500" />
                <span className="font-bold text-slate-900">{item.currentScore}</span>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              <div className="text-lg font-bold text-orange-500">
                +{item.change}
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400 justify-end">
                <Clock className="w-3 h-3" />
                {item.timeAgo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
