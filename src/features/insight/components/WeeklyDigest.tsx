"use client";

import { useState } from "react";
import {
  Mail,
  TrendingUp,
  Flame,
  Target,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const digest = {
  week: "2026년 6월 2주차",
  topTheme: { name: "HBM/AI반도체", score: 92, change: "+18%" },
  topStock: {
    name: "한화에어로스페이스",
    change: "+14.3%",
    reason: "폴란드 K9 계약 체결",
  },
  aiHit: {
    prediction: "방산 긍정 신호 → 상승 예측",
    result: "+14% 실현",
    accuracy: "적중",
  },
  highlights: [
    "HBM/AI반도체 테마 감성 점수 4주 연속 상승",
    "방산 섹터, 전주 대비 감성 급등 +27p 기록",
    "조선 수주 잔량 사상 최고 → 여론 긍정 유지",
    "바이오 임상 실패 2건 → 섹터 전반 부정 전환",
  ],
};

export default function WeeklyDigest() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section>
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-500" />
          Weekly Digest
        </h3>
        <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
          {digest.week}
        </span>
      </div>

      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl p-5 text-white">
        <p className="text-xs text-blue-300 font-semibold mb-4 tracking-wider">
          지난주 FinSight 요약
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {/* 감성 1위 테마 */}
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-1 text-[10px] text-blue-300 mb-2">
              <Flame className="w-3 h-3" /> 감성 1위 테마
            </div>
            <div className="font-bold text-sm leading-tight">
              {digest.topTheme.name}
            </div>
            <div className="text-red-400 text-xs font-bold mt-1">
              {digest.topTheme.change}
            </div>
          </div>

          {/* 급등 종목 */}
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-1 text-[10px] text-blue-300 mb-2">
              <TrendingUp className="w-3 h-3" /> 급등 종목
            </div>
            <div className="font-bold text-sm leading-tight">
              {digest.topStock.name}
            </div>
            <div className="text-red-400 text-xs font-bold mt-1">
              {digest.topStock.change}
            </div>
          </div>

          {/* AI 적중 */}
          <div className="bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-1 text-[10px] text-blue-300 mb-2">
              <Target className="w-3 h-3" /> AI 적중
            </div>
            <div className="font-bold text-sm leading-tight text-green-400">
              {digest.aiHit.accuracy}
            </div>
            <div className="text-green-400 text-xs font-bold mt-1">
              {digest.aiHit.result}
            </div>
          </div>
        </div>

        {/* 주요 하이라이트 */}
        <div className="space-y-1.5 mb-4">
          {digest.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-xs text-slate-300"
            >
              <ChevronRight className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* 구독 버튼 */}
        <button
          onClick={() => setSubscribed(true)}
          className={`w-full py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            subscribed
              ? "bg-green-500/20 text-green-400 border border-green-500/30"
              : "bg-white text-slate-900 hover:bg-blue-50"
          }`}
        >
          {subscribed ? (
            <>
              <CheckCircle className="w-4 h-4" /> 매주 월요일 9시에 발송됩니다
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" /> 무료 구독하기 — 매주 월요일 발송
            </>
          )}
        </button>
      </div>
    </section>
  );
}
