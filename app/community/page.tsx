import PostCard from "@/src/features/commuity/components/PostCard";
import { communityPosts } from "@/src/shared/mock/communityPosts";
import { Filter, Search } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="pb-20 animate-fade-in space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-slate-900">커뮤니티 나우</h1>
        <div className="flex gap-2">
          <button className="p-2 bg-slate-100 rounded-full">
            <Filter className="w-5 h-5 text-slate-600" />
          </button>
          <button className="p-2 bg-slate-100 rounded-full">
            <Search className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="flex-1 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold">
          전체
        </button>
        <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium">
          뉴스
        </button>
        <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium">
          SNS
        </button>
      </div>

      <div className="space-y-4">
        {communityPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
