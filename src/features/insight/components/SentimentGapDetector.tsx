"use client";

import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react";

const gapStocks = [
  {
    id: 1,
    name: "LIG넥스원",
    code: "079550",
    sentimentScore: 84,
    priceChange: "-1.2%",
    description: "중동·유럽 방산 수출 계약 기대 여론 급증, 주가 미반영",
    signal: "undervalued" as const,
  },
  {
    id: 2,
    name: "삼성중공업",
    code: "010140",
    sentimentScore: 77,
    priceChange: "-0.8%",
    description: "LNG·암모니아 운반선 수주 호재, 주가 반영 지연",
    signal: "undervalued" as const,
  },
  {
    id: 3,
    name: "두산에너빌리티",
    code: "034020",
    sentimentScore: 71,
    priceChange: "-1.5%",
    description: "체코 원전 계약 가시화 여론 긍정, 주가 괴리",
    signal: "undervalued" as const,
  },
];

export default function SentimentGapDetector() {
  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          감성 vs 주가 괴리 탐지
        </h3>
        <span className="text-xs text-slate-500 bg-amber-50 border border-amber-200 text-amber-600 px-2 py-1 rounded font-medium">
          저평가 신호
        </span>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3">
        <p className="text-xs text-amber-700">
          AI 감성이 <strong>긍정적</strong>이나 주가에 아직 반영되지 않은 종목입니다.
          선제적 투자 기회로 활용할 수 있습니다.
        </p>
      </div>

      <div className="space-y-3">
        {gapStocks.map((stock) => (
          <div
            key={stock.id}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{stock.name}</span>
                  <span className="text-xs text-slate-400">{stock.code}</span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">{stock.description}</p>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                <TrendingDown className="w-3 h-3" />
                {stock.priceChange}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">AI 감성 긍정률</span>
                  <span className="font-bold text-green-600">{stock.sentimentScore}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${stock.sentimentScore}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg flex-shrink-0">
                <TrendingUp className="w-3 h-3" />
                저평가 신호
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
