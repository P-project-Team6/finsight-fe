"use client";

import { communityPosts } from "@/src/shared/mock/communityPosts";

export default function ThemeCommunityFeed() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 mb-3 px-1">
        관련 커뮤니티 여론
      </h3>

      <div className="space-y-3">
        {communityPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                {post.source}
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded ${
                  post.sentiment === "Positive" ||
                  post.sentiment === "Very Positive"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {post.sentiment}
              </span>
            </div>
            <p className="text-sm text-slate-800 mb-2">{post.content}</p>
            <div className="text-xs text-slate-500 flex gap-2">
              <span>AI 분석: {post.aiSummary}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
