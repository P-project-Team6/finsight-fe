"use client";

import { PostType } from "@/src/shared/types/post";

interface Props {
  type: PostType;
}

export default function PostTypeBadge({ type }: Props) {
  const styles: Record<PostType, string> = {
    News: "bg-blue-100 text-blue-700",
    Opinion: "bg-purple-100 text-purple-700",
    Rumor: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded font-bold ${styles[type]}`}>
      {type}
    </span>
  );
}
