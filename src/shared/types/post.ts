export type PostType = "News" | "Opinion" | "Rumor";

export interface Post {
  id: number;
  author: string;
  content: string;
  sentiment: string;
  type: PostType;
  likes: number;
}
