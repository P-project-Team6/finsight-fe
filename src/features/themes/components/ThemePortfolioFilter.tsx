"use client";

import { CheckCircle, XCircle, Filter } from "lucide-react";

type CompositionStatus = "included" | "excluded";

export interface CompositionItem {
  name: string;
  reason: string;
  status: CompositionStatus;
  score: number;
}

interface Props {
  composition: CompositionItem[];
  themeName: string;
}

export default function ThemePortfolioFilter({
  composition,
  themeName,
}: Props) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-cyan-600" />
        <h2 className="text-lg font-bold text-slate-900">
          AI 종목 필터링 (Portfolio)
        </h2>
      </div>

      <p className="text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
        {themeName} 관련 토픽으로 추출된 종목 중, <br />
        <strong>긍정 비율 50% 미만</strong>인 종목은 자동으로{" "}
        <strong>제외(Exclude)</strong>하여 ETF 수익률을 극대화합니다.
      </p>

      <div className="space-y-3">
        {composition.map((item) => (
          <div
            key={item.name}
            className={`p-3 rounded-lg border flex justify-between items-center ${
              item.status === "included"
                ? "bg-green-50/50 border-green-200"
                : "bg-slate-50 border-slate-200 opacity-60"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.status === "included" ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <XCircle className="w-5 h-5 text-slate-400" />
              )}
              <div>
                <div
                  className={`font-bold ${
                    item.status === "included"
                      ? "text-slate-900"
                      : "text-slate-500 decoration-slate-400"
                  }`}
                >
                  {item.name}
                </div>
                <div className="text-xs text-slate-500">{item.reason}</div>
              </div>
            </div>

            <div
              className={`font-bold text-sm ${
                item.status === "included" ? "text-green-600" : "text-slate-400"
              }`}
            >
              {item.status === "included" ? "편입" : "제외"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
