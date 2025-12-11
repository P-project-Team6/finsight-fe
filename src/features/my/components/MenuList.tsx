import { Bookmark, Bell, FileText, ArrowRight } from "lucide-react";

export default function MenuList() {
  const items = [
    {
      label: "스크랩한 리포트",
      icon: <Bookmark className="w-5 h-5 text-purple-500" />,
    },
    {
      label: "키워드 알림 설정",
      icon: <Bell className="w-5 h-5 text-yellow-500" />,
    },
    {
      label: "내 활동 내역",
      icon: <FileText className="w-5 h-5 text-blue-500" />,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="p-4 flex items-center justify-between hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0"
        >
          <div className="flex items-center gap-3">
            {item.icon}
            <span className="text-slate-900 font-medium">{item.label}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400" />
        </div>
      ))}
    </div>
  );
}
