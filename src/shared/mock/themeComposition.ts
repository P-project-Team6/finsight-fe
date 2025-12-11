import type { CompositionItem } from "@/src/features/themes/components/ThemePortfolioFilter";

export const themeComposition: CompositionItem[] = [
  {
    name: "우리로",
    score: 82,
    status: "included",
    reason: "긍정 비율 82% (기준 충족)",
  },
  {
    name: "엑스게이트",
    score: 75,
    status: "included",
    reason: "긍정 비율 75% (기준 충족)",
  },
  {
    name: "텔레필드",
    score: 42,
    status: "excluded",
    reason: "긍정 비율 42% (기준 미달)",
  },
  {
    name: "케이씨에스",
    score: 35,
    status: "excluded",
    reason: "부정 여론 우세",
  },
];
