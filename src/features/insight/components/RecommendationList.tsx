"use client";

import SignalBadge from "@/src/shared/components/SignalBadge";
import { stockList } from "@/src/shared/mock/stockList";
import { Zap } from "lucide-react";

export default function RecommendationList() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" /> 오늘의 추천 종목
        </h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
          기준: 긍정비율 50%↑
        </span>
      </div>
      <div className="space-y-3">
        {stockList.map((stock) => (
          <div
            key={stock.id}
            className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-lg text-slate-900">
                  {stock.name}
                </span>
                <span className="text-xs text-slate-500">{stock.code}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    stock.change.startsWith("+")
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {stock.price} ({stock.change})
                </span>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <SignalBadge score={stock.sentimentScore} />
              <div className="flex items-center gap-1">
                <span
                  className={`text-sm font-bold ${
                    stock.sentimentScore >= 50
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  긍정 {stock.sentimentScore}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
