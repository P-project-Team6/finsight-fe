import type { CompositionItem } from "@/src/features/themes/components/ThemePortfolioFilter";

export const themeComposition: CompositionItem[] = [
  {
    name: "SK하이닉스",
    score: 91,
    status: "included",
    reason: "HBM4 독점 공급 기대, 긍정 비율 91%",
  },
  {
    name: "삼성전자",
    score: 78,
    status: "included",
    reason: "파운드리 수주 회복세, 긍정 비율 78%",
  },
  {
    name: "한미반도체",
    score: 82,
    status: "included",
    reason: "TC본더 독점 공급 유지, 긍정 비율 82%",
  },
  {
    name: "DB하이텍",
    score: 44,
    status: "excluded",
    reason: "레거시 반도체 수요 부진, 긍정 비율 44%",
  },
  {
    name: "원익IPS",
    score: 38,
    status: "excluded",
    reason: "장비 발주 지연 우려, 부정 여론 우세",
  },
];
