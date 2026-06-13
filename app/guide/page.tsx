"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  BookOpen,
  BarChart2,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

const sections = [
  {
    id: 1,
    icon: <BarChart2 className="w-5 h-5 text-cyan-500" />,
    title: "감성 분석이란?",
    badge: "기초",
    content: [
      {
        q: "감성 분석 (Sentiment Analysis) 이란?",
        a: "온라인 게시글·뉴스 텍스트에서 AI가 긍정/부정 감정을 자동으로 판별하는 기술입니다. FinSight는 종목토론방, 트위터, 뉴스 기사를 실시간 수집하여 KoBERT 모델로 분석하고 0~100점 감성 점수를 산출합니다.",
      },
      {
        q: "감성 점수는 어떻게 해석하나요?",
        a: "75점 이상: 강한 긍정 (매수 심리 우세) / 50~75점: 완만한 긍정 / 50점: 중립 / 50점 미만: 부정 (매도 심리 우세). 단, 점수만으로 투자 결정을 내리지 말고 거래량·주가 흐름을 함께 확인하세요.",
      },
      {
        q: "Momentum Feed는 무엇인가요?",
        a: "단순 랭킹이 아닌, 감성 점수 변화율(Δscore)로 급등 테마를 포착합니다. 예: '32→71 (+39) / 2h'는 2시간 만에 39점이 오른 테마입니다. 변화 속도가 빠를수록 시장의 관심이 집중되는 신호입니다.",
      },
    ],
  },
  {
    id: 2,
    icon: <BookOpen className="w-5 h-5 text-purple-500" />,
    title: "주요 투자 용어 정리",
    badge: "용어",
    content: [
      {
        q: "PER (주가수익비율)",
        a: "주가 ÷ 주당순이익(EPS). 낮을수록 저평가일 수 있지만 업종별 평균과 비교해야 합니다. 예: PER 10배 = 현재 주가를 10년치 순이익으로 회수 가능.",
      },
      {
        q: "PBR (주가순자산비율)",
        a: "주가 ÷ 주당순자산. 1 미만이면 청산 가치보다 싸다는 의미. 한국 '밸류업 프로그램'의 핵심 지표.",
      },
      {
        q: "시가총액 (Market Cap)",
        a: "주가 × 발행 주식 수. 기업의 시장 평가 가치. 대형주(코스피 상위 30): 안정성↑ / 소형주: 변동성↑.",
      },
      {
        q: "거래량 (Volume)",
        a: "하루 동안 거래된 주식 수. 주가 상승 + 거래량 증가 = 신뢰도 높은 상승 / 주가 상승 + 거래량 감소 = 주의 신호.",
      },
      {
        q: "52주 최고/최저가",
        a: "지난 1년 중 가장 높은/낮은 주가. 최고가 근처에서는 매도 압력이 클 수 있고, 최저가 근처에서는 반등 가능성을 검토합니다.",
      },
    ],
  },
  {
    id: 3,
    icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    title: "차트 기초 — 이동평균선과 거래량",
    badge: "차트",
    content: [
      {
        q: "이동평균선 (MA) 이란?",
        a: "일정 기간의 종가 평균을 이은 선. 5일선(단기), 20일선(중기), 60일선(장기)이 주로 쓰입니다. 주가가 이동평균선 위에 있으면 상승 추세, 아래면 하락 추세로 해석합니다.",
      },
      {
        q: "골든 크로스 / 데드 크로스",
        a: "골든 크로스: 단기 이동평균선이 장기선을 아래에서 위로 돌파 → 매수 신호. 데드 크로스: 반대 → 매도 신호. 거래량이 함께 증가해야 신뢰도가 높습니다.",
      },
      {
        q: "거래량으로 시세를 읽는 법",
        a: "주가 급등 시 거래량이 평균의 3배 이상 → 세력/기관 매집 가능성. 거래량이 줄면서 주가가 오르면 '빈집' 상승으로 조정 위험. FinSight의 가짜 여론 경고는 이 원리를 활용합니다.",
      },
    ],
  },
  {
    id: 4,
    icon: <Lightbulb className="w-5 h-5 text-amber-500" />,
    title: "FinSight 100% 활용법",
    badge: "활용",
    content: [
      {
        q: "Step 1 — 모멘텀 피드로 테마 발굴",
        a: "매일 아침 인사이트 페이지의 '감성 급등 알람'을 확인하세요. 감성 변화량(Δscore)이 20 이상인 테마는 당일 시장에서 주목받을 가능성이 높습니다.",
      },
      {
        q: "Step 2 — 테마 상세에서 교차 검증",
        a: "관심 테마 클릭 → AI 종목 필터링(편입 종목만 신뢰) → 백테스트 수익률 확인 → 커뮤니티 여론 Clean 뷰로 확인. 이 4단계를 거치면 노이즈를 대폭 줄일 수 있습니다.",
      },
      {
        q: "Step 3 — 감성-주가 괴리 탐지기 활용",
        a: "인사이트 페이지의 '저평가 신호' 종목은 감성이 이미 긍정이지만 주가가 아직 반응하지 않은 상태입니다. 거래량과 함께 확인하면 선제 진입 기회를 포착할 수 있습니다.",
      },
      {
        q: "Step 4 — 가짜 여론 경고 반드시 확인",
        a: "커뮤니티에서 빨간 경고 배너가 붙은 게시물은 AI가 감성-거래량 괴리를 감지한 것입니다. 이런 게시물의 종목은 세력 개입 가능성이 있으므로 추가 검증 없이 투자하지 마세요.",
      },
    ],
  },
  {
    id: 5,
    icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    title: "주의해야 할 투자 실수 5가지",
    badge: "주의",
    content: [
      {
        q: "❌ 실수 1: 커뮤니티 여론만 믿고 투자",
        a: "종목토론방의 '무조건 오른다'는 글 대부분은 근거가 없거나 세력의 홍보입니다. 반드시 FinSight의 Clean 뷰로 스팸을 걸러낸 뒤 여론을 판단하세요.",
      },
      {
        q: "❌ 실수 2: 감성 점수만 보고 매수",
        a: "감성 점수가 높아도 거래량이 뒷받침되지 않으면 지속성이 없습니다. 가짜 여론 경고가 떴다면 반드시 피하세요.",
      },
      {
        q: "❌ 실수 3: 고점에서 추격 매수",
        a: "Momentum Feed에서 급등한 테마를 발견했어도, 이미 주가가 크게 오른 상태라면 고점 추격일 수 있습니다. 백테스트에서 수익률 피크 이후 패턴을 확인하세요.",
      },
      {
        q: "❌ 실수 4: 분산 없이 한 종목 집중",
        a: "나만의 ETF 기능으로 여러 종목을 묶어 리스크를 분산하세요. AI 리스크 평가가 '높음'인 종목은 전체 비중의 20% 이내로 제한하는 것을 권장합니다.",
      },
      {
        q: "❌ 실수 5: FinSight 분석을 투자 조언으로 오해",
        a: "FinSight의 모든 데이터는 참고용 정보이며, 확정적인 투자 조언이 아닙니다. 최종 투자 결정과 책임은 항상 본인에게 있습니다.",
      },
    ],
  },
];

export default function GuidePage() {
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(1);

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
          <h1 className="text-xl font-bold text-slate-900">주식 입문 가이드</h1>
          <p className="text-xs text-slate-500">
            대학생 투자자를 위한 FinSight 활용 가이드
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-5 mb-6 text-white">
        <p className="text-sm font-semibold mb-1">처음 시작하는 투자자라면</p>
        <p className="text-xs text-blue-100 leading-relaxed">
          감성 분석 읽는 법부터 실수 방지 팁까지, 5단계 가이드로 FinSight를
          제대로 활용해보세요.
        </p>
      </div>

      <div className="space-y-3">
        {sections.map((section) => {
          const isOpen = openId === section.id;
          return (
            <div
              key={section.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : section.id)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <div>
                    <span className="font-bold text-slate-900">
                      {section.title}
                    </span>
                    <span className="ml-2 text-[10px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                      {section.badge}
                    </span>
                  </div>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 divide-y divide-slate-100">
                  {section.content.map((item, i) => (
                    <div key={i} className="p-4">
                      <p className="text-sm font-bold text-slate-800 mb-2">
                        {item.q}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
        <p className="text-xs text-slate-500">
          FinSight의 모든 분석은 <strong>참고용 정보</strong>이며 투자 조언이
          아닙니다.
          <br />
          투자의 최종 결정과 책임은 본인에게 있습니다.
        </p>
      </div>
    </div>
  );
}
