import { CommunityPost } from "../types/commuity";

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    source: "종토방",
    author: "개미대장",
    content: "양자컴퓨터 이제 시작이다...",
    sentiment: "Positive",
    type: "Opinion",
    likes: 124,
    aiSummary: "정부 정책 기대감 및 상승 예측",
  },
  {
    id: 2,
    source: "Twitter",
    author: "@quant_pro",
    content: "아직 상용화 멀었음...",
    sentiment: "Negative",
    type: "Rumor",
    likes: 45,
    aiSummary: "상용화 시기 우려",
  },
  {
    id: 3,
    source: "News",
    author: "AI Bot",
    content: "[속보] 대규모 공급 계약...",
    sentiment: "Very Positive",
    type: "News",
    likes: 312,
    aiSummary: "공급 계약 호재 예상",
  },
];
