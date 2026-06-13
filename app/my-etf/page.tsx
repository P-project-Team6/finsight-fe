"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Minus,
  BarChart2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const CATEGORIES = [
  "전체",
  "반도체",
  "방산",
  "조선",
  "원전",
  "자동차",
  "바이오",
  "플랫폼",
];

const stockPool = [
  {
    id: 1,
    name: "SK하이닉스",
    code: "000660",
    sentimentScore: 91,
    risk: "보통",
    sector: "반도체",
    change: "+2.8%",
  },
  {
    id: 2,
    name: "삼성전자",
    code: "005930",
    sentimentScore: 78,
    risk: "낮음",
    sector: "반도체",
    change: "-0.6%",
  },
  {
    id: 3,
    name: "한미반도체",
    code: "042700",
    sentimentScore: 82,
    risk: "높음",
    sector: "반도체",
    change: "+4.1%",
  },
  {
    id: 4,
    name: "한화에어로스페이스",
    code: "012450",
    sentimentScore: 87,
    risk: "보통",
    sector: "방산",
    change: "+3.5%",
  },
  {
    id: 5,
    name: "LIG넥스원",
    code: "079550",
    sentimentScore: 84,
    risk: "보통",
    sector: "방산",
    change: "+2.2%",
  },
  {
    id: 6,
    name: "HD현대중공업",
    code: "329180",
    sentimentScore: 76,
    risk: "보통",
    sector: "조선",
    change: "+1.9%",
  },
  {
    id: 7,
    name: "삼성중공업",
    code: "010140",
    sentimentScore: 68,
    risk: "보통",
    sector: "조선",
    change: "+0.7%",
  },
  {
    id: 8,
    name: "두산에너빌리티",
    code: "034020",
    sentimentScore: 71,
    risk: "높음",
    sector: "원전",
    change: "-1.5%",
  },
  {
    id: 9,
    name: "현대차",
    code: "005380",
    sentimentScore: 58,
    risk: "낮음",
    sector: "자동차",
    change: "+0.3%",
  },
  {
    id: 10,
    name: "POSCO홀딩스",
    code: "005490",
    sentimentScore: 52,
    risk: "보통",
    sector: "자동차",
    change: "-0.4%",
  },
  {
    id: 11,
    name: "셀트리온",
    code: "068270",
    sentimentScore: 45,
    risk: "높음",
    sector: "바이오",
    change: "-2.1%",
  },
  {
    id: 12,
    name: "삼성바이오로직스",
    code: "207940",
    sentimentScore: 54,
    risk: "높음",
    sector: "바이오",
    change: "+0.9%",
  },
  {
    id: 13,
    name: "카카오",
    code: "035720",
    sentimentScore: 38,
    risk: "보통",
    sector: "플랫폼",
    change: "-1.2%",
  },
  {
    id: 14,
    name: "NAVER",
    code: "035420",
    sentimentScore: 61,
    risk: "보통",
    sector: "플랫폼",
    change: "+0.5%",
  },
];

const riskColor: Record<string, string> = {
  낮음: "text-green-600 bg-green-50 border-green-200",
  보통: "text-amber-600 bg-amber-50 border-amber-200",
  높음: "text-red-600 bg-red-50 border-red-200",
};

function sentimentColor(score: number) {
  if (score >= 75) return "text-green-600";
  if (score >= 55) return "text-amber-500";
  return "text-red-500";
}

function calcPortfolioRisk(stocks: typeof stockPool) {
  const highCount = stocks.filter((s) => s.risk === "높음").length;
  const ratio = highCount / stocks.length;
  if (ratio >= 0.5) return "높음";
  if (ratio >= 0.25) return "보통";
  return "낮음";
}

export default function MyEtfPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const [category, setCategory] = useState("전체");

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const filtered = useMemo(
    () =>
      category === "전체"
        ? stockPool
        : stockPool.filter((s) => s.sector === category),
    [category],
  );

  const selectedStocks = stockPool.filter((s) => selected.includes(s.id));
  const avgSentiment =
    selectedStocks.length > 0
      ? Math.round(
          selectedStocks.reduce((a, s) => a + s.sentimentScore, 0) /
            selectedStocks.length,
        )
      : 0;
  const portfolioRisk =
    selectedStocks.length > 0 ? calcPortfolioRisk(selectedStocks) : null;
  const estReturn =
    avgSentiment > 0 ? `+${((avgSentiment - 50) * 0.32).toFixed(1)}%` : "—";

  return (
    <div className="pb-24 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-100 rounded-full"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </button>
        <div>
          <h1 className="text-xl font-bold text-slate-900">
            나만의 ETF 만들기
          </h1>
          <p className="text-xs text-slate-500">
            종목을 골라 AI 감성 기반 포트폴리오를 구성하세요
          </p>
        </div>
      </div>

      {/* 포트폴리오 요약 카드 */}
      <div
        className={`rounded-2xl p-5 mb-6 border transition-all ${selectedStocks.length > 0 ? "bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-400"}`}
      >
        {selectedStocks.length === 0 ? (
          <p className="text-center text-sm py-2">
            종목을 선택하면 AI가 포트폴리오를 평가합니다
          </p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-slate-300">
                내 커스텀 ETF
              </span>
              <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-bold">
                {selectedStocks.length}종목
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1">
                  <BarChart2 className="w-3 h-3" /> AI 감성
                </div>
                <div
                  className={`text-2xl font-bold ${sentimentColor(avgSentiment)}`}
                >
                  {avgSentiment}%
                </div>
                <div className="text-[10px] text-slate-400">긍정 비율</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 리스크
                </div>
                <div
                  className={`text-xl font-bold ${portfolioRisk === "낮음" ? "text-green-400" : portfolioRisk === "보통" ? "text-amber-400" : "text-red-400"}`}
                >
                  {portfolioRisk}
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" /> 예상 수익
                </div>
                <div className="text-xl font-bold text-red-400">
                  {estReturn}
                </div>
                <div className="text-[10px] text-slate-400">3개월 예측</div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {selectedStocks.map((s) => (
                <span
                  key={s.id}
                  className="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* 카테고리 탭 */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${category === cat ? "bg-cyan-500 text-white" : "bg-white border border-slate-200 text-slate-600"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 종목 리스트 */}
      <div className="space-y-3">
        {filtered.map((stock) => {
          const isSelected = selected.includes(stock.id);
          return (
            <div
              key={stock.id}
              className={`bg-white p-4 rounded-xl border shadow-sm transition-all ${isSelected ? "border-cyan-400 ring-1 ring-cyan-400/30" : "border-slate-200"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">
                      {stock.name}
                    </span>
                    <span className="text-xs text-slate-400">{stock.code}</span>
                    <span className="text-xs bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                      {stock.sector}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-sm font-bold ${sentimentColor(stock.sentimentScore)}`}
                    >
                      감성 {stock.sentimentScore}%
                    </span>
                    <span
                      className={`text-xs font-semibold border px-1.5 py-0.5 rounded ${riskColor[stock.risk]}`}
                    >
                      리스크 {stock.risk}
                    </span>
                    <span
                      className={`text-xs font-medium ${stock.change.startsWith("+") ? "text-red-600" : "text-blue-600"}`}
                    >
                      {stock.change}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggle(stock.id)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-3 transition-colors ${isSelected ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                >
                  {isSelected ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
