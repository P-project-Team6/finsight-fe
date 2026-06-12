import CommunityContent from "@/src/features/commuity/components/CommunityContent";
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

      <CommunityContent />
    </div>
  );
}
