export type PostCategory = "News" | "Opinion" | "Rumor";

export type PostSentiment = "Positive" | "Negative" | "Very Positive";

export interface CommunityPost {
  id: number;
  source: string;
  author: string;
  content: string;
  sentiment: PostSentiment;
  type: PostCategory;
  likes: number;
  aiSummary: string;
}
