"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, Trophy, Users } from "lucide-react";

interface PredictionVoteProps {
  themeName: string;
}

export default function PredictionVote({ themeName }: PredictionVoteProps) {
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const upVotes = 1482;
  const downVotes = 573;
  const total = upVotes + downVotes + (voted ? 1 : 0);
  const upCount = upVotes + (voted === "up" ? 1 : 0);
  const downCount = downVotes + (voted === "down" ? 1 : 0);
  const upPercent = Math.round((upCount / total) * 100);
  const downPercent = 100 - upPercent;

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-1">
        <Trophy className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-bold text-slate-900">예측 참여</h2>
      </div>

      <p className="text-sm text-slate-500 mb-4">
        <span className="font-bold text-slate-700">{themeName}</span> 테마,
        다음 주에 오를까요 내릴까요?
      </p>

      {!voted ? (
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => setVoted("up")}
            className="flex flex-col items-center gap-2 py-4 rounded-xl border-2 border-red-200 bg-red-50 hover:border-red-400 hover:bg-red-100 transition-colors group"
          >
            <TrendingUp className="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-red-600">상승</span>
          </button>
          <button
            onClick={() => setVoted("down")}
            className="flex flex-col items-center gap-2 py-4 rounded-xl border-2 border-blue-200 bg-blue-50 hover:border-blue-400 hover:bg-blue-100 transition-colors group"
          >
            <TrendingDown className="w-7 h-7 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-blue-600">하락</span>
          </button>
        </div>
      ) : (
        <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <span className="text-sm font-bold text-slate-700">
            {voted === "up" ? "상승" : "하락"} 예측으로 투표 완료!
          </span>
          <p className="text-xs text-slate-500 mt-0.5">결과 발표까지 기다려주세요</p>
        </div>
      )}

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold mb-1">
          <span className="text-red-600 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 상승 {upPercent}%
          </span>
          <span className="text-blue-600 flex items-center gap-1">
            하락 {downPercent}% <TrendingDown className="w-3 h-3" />
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-red-400 transition-all duration-500"
            style={{ width: `${upPercent}%` }}
          />
          <div
            className="h-full bg-blue-400 transition-all duration-500"
            style={{ width: `${downPercent}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 mt-3 text-xs text-slate-400">
        <Users className="w-3 h-3" />
        총 {total.toLocaleString()}명 참여
      </div>
    </div>
  );
}
