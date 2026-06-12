"use client";

import { ThumbsUp, MessageCircle, AlertTriangle, ShieldOff } from "lucide-react";
import PostTypeBadge from "./PostTypeBadge";
import { CommunityPost } from "@/src/shared/types/commuity";

interface PostCardProps {
  post: CommunityPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50">
      {post.isFakeAlert && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-xs font-bold text-red-600">
            주의: 감성-거래량 괴리 발생 (신뢰도 낮음)
          </span>
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
            {post.author[0]}
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">
              {post.author}
            </div>
            <div className="text-xs text-slate-500">
              {post.source} • 10분 전
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post.isSpam && (
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded text-xs font-bold text-slate-500">
              <ShieldOff className="w-3 h-3" />
              스팸
            </div>
          )}
          <PostTypeBadge type={post.type} />
        </div>
      </div>

      <p className={`text-slate-800 text-sm leading-relaxed mb-3 line-clamp-3 ${post.isSpam ? "opacity-50" : ""}`}>
        {post.content}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <ThumbsUp className="w-4 h-4" /> {post.likes}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <MessageCircle className="w-4 h-4" /> 8
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span
            className={`text-xs font-bold ${
              post.sentiment === "Positive" || post.sentiment === "Very Positive"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {post.sentiment}
          </span>
        </div>
      </div>
    </div>
  );
}
