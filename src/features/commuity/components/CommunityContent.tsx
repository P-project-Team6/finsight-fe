"use client";

import { useState } from "react";
import { Shield, ShieldCheck } from "lucide-react";
import PostCard from "./PostCard";
import { communityPosts } from "@/src/shared/mock/communityPosts";

export default function CommunityContent() {
  const [cleanMode, setCleanMode] = useState(false);
  const [tab, setTab] = useState<"all" | "news" | "sns">("all");

  const spamCount = communityPosts.filter((p) => p.isSpam).length;
  const filteredPosts = communityPosts.filter((post) => {
    if (cleanMode && post.isSpam) return false;
    if (tab === "news") return post.type === "News";
    if (tab === "sns") return post.source === "Twitter";
    return true;
  });

  return (
    <>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTab("all")}
          className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${
            tab === "all"
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-600"
          }`}
        >
          전체
        </button>
        <button
          onClick={() => setTab("news")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "news"
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-600"
          }`}
        >
          뉴스
        </button>
        <button
          onClick={() => setTab("sns")}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "sns"
              ? "bg-slate-900 text-white"
              : "bg-white border border-slate-200 text-slate-600"
          }`}
        >
          SNS
        </button>
      </div>

      <button
        onClick={() => setCleanMode(!cleanMode)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors mb-4 ${
          cleanMode
            ? "bg-green-50 border-green-300"
            : "bg-slate-50 border-slate-200"
        }`}
      >
        <div className="flex items-center gap-2">
          {cleanMode ? (
            <ShieldCheck className="w-5 h-5 text-green-600" />
          ) : (
            <Shield className="w-5 h-5 text-slate-400" />
          )}
          <span
            className={`text-sm font-bold ${
              cleanMode ? "text-green-700" : "text-slate-600"
            }`}
          >
            {cleanMode ? "Clean 뷰 ON — 순수 여론만 표시 중" : "Clean 뷰 — 스팸/어그로 필터링"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {cleanMode && (
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded">
              스팸 {spamCount}건 제거됨
            </span>
          )}
          <div
            className={`w-10 h-5 rounded-full transition-colors ${
              cleanMode ? "bg-green-500" : "bg-slate-300"
            } relative`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                cleanMode ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </div>
        </div>
      </button>

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <div className="text-center py-10 text-slate-400 text-sm">
            표시할 게시물이 없습니다.
          </div>
        )}
      </div>
    </>
  );
}
