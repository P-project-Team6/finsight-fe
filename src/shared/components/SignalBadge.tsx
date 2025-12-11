"use client";

import { TrendingUp, Activity } from "lucide-react";

interface SignalBadgeProps {
  score: number;
}

export default function SignalBadge({ score }: SignalBadgeProps) {
  const isBuy = score >= 50;

  return (
    <div
      className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold border ${
        isBuy
          ? "bg-red-50 border-red-200 text-red-600"
          : "bg-slate-100 border-slate-200 text-slate-500"
      }`}
    >
      {isBuy ? (
        <TrendingUp className="w-3 h-3" />
      ) : (
        <Activity className="w-3 h-3" />
      )}
      {isBuy ? "매수 추천" : "관망"}
    </div>
  );
}
