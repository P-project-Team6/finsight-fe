import InterestStockList from "@/src/features/my/components/InterestStockList";
import MenuList from "@/src/features/my/components/MenuList";
import ProfileCard from "@/src/features/my/components/ProfileCard";
import { Settings } from "lucide-react";

export default function MyPage() {
  return (
    <div className="pb-20 animate-fade-in space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-900">MY</h1>
        <button className="p-2 hover:bg-slate-100 rounded-full">
          <Settings className="w-6 h-6 text-slate-600" />
        </button>
      </div>
      <ProfileCard />
      <MenuList />
      <InterestStockList />
    </div>
  );
}
