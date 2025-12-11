export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold text-white border-2 border-white/20">
          S
        </div>
        <div>
          <div className="font-bold text-lg">성공투자자</div>
          <div className="text-sm text-slate-400">프리미엄 멤버십 이용중</div>
        </div>
      </div>
      <div className="flex justify-between bg-white/10 rounded-xl p-4 backdrop-blur-sm">
        <div className="text-center flex-1 border-r border-white/10">
          <div className="text-xs text-slate-400 mb-1">스크랩</div>
          <div className="font-bold text-lg">24</div>
        </div>
        <div className="text-center flex-1 border-r border-white/10">
          <div className="text-xs text-slate-400 mb-1">관심종목</div>
          <div className="font-bold text-lg">12</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-xs text-slate-400 mb-1">알림</div>
          <div className="font-bold text-lg text-cyan-400">5</div>
        </div>
      </div>
    </div>
  );
}
