"use client";

import { Target, TrendingUp } from "lucide-react";

export default function AccuracyCard() {
  return (
    <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-start mb-2 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-5 h-5 text-cyan-600" />
            <h2 className="text-slate-900 font-bold text-lg">AI 예측 정확도</h2>
          </div>
          <p className="text-xs text-slate-500">
            지난 1개월간 긍정 비율 50% 이상 종목의
            <br />
            실제 주가 상승 적중률입니다.
          </p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-slate-900">78.4%</span>
          <div className="text-xs text-green-600 font-medium flex items-center justify-end gap-1">
            <TrendingUp className="w-3 h-3" /> 신뢰도 높음
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1 font-medium">
          <span className="text-green-600">적중 (Profit)</span>
          <span className="text-slate-400">실패 (Loss)</span>
        </div>
        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
          <div className="h-full bg-green-500" style={{ width: "78.4%" }}></div>
          <div className="h-full bg-slate-300" style={{ width: "21.6%" }}></div>
        </div>
      </div>
    </section>
  );
}
