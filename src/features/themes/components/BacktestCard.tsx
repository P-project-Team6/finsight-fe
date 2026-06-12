"use client";

import { BarChart2, TrendingUp, Award } from "lucide-react";

interface BacktestCardProps {
  themeName: string;
}

const backtestData = {
  threeMonth: { return: "+24.3%", vsKospi: "+11.0%", winRate: "72%" },
  sixMonth: { return: "+38.7%", vsKospi: "+19.4%", winRate: "68%" },
  oneYear: { return: "+61.2%", vsKospi: "+29.8%", winRate: "65%" },
};

export default function BacktestCard({ themeName }: BacktestCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-bold text-slate-900">테마 ETF 백테스트</h2>
      </div>

      <p className="text-sm text-slate-500 mb-4">
        AI 감성 분석 기반으로 구성된{" "}
        <span className="font-bold text-slate-700">{themeName} ETF</span>의
        과거 수익률 시뮬레이션 결과입니다.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { period: "3개월", ...backtestData.threeMonth },
          { period: "6개월", ...backtestData.sixMonth },
          { period: "1년", ...backtestData.oneYear },
        ].map((d) => (
          <div
            key={d.period}
            className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center"
          >
            <div className="text-xs text-slate-500 mb-1">{d.period}</div>
            <div className="text-lg font-bold text-red-600">{d.return}</div>
            <div className="text-xs text-purple-600 font-medium mt-1">
              코스피 대비 {d.vsKospi}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-3">
        <Award className="w-5 h-5 text-amber-500 flex-shrink-0" />
        <div>
          <div className="text-xs text-slate-500 mb-0.5">3개월 예측 적중률</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden w-28">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: "72%" }} />
            </div>
            <span className="text-sm font-bold text-amber-600">72%</span>
          </div>
        </div>
        <div className="ml-auto text-right">
          <TrendingUp className="w-4 h-4 text-green-500 ml-auto" />
          <div className="text-xs text-green-600 font-medium">신뢰도 높음</div>
        </div>
      </div>
    </div>
  );
}
