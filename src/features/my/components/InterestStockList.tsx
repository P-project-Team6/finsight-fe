import { stockList } from "@/src/shared/mock/stockList";

export default function InterestStockList() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 mb-3 px-1">
        내 관심 종목 심리
      </h3>
      <div className="space-y-3">
        {stockList.map((stock) => (
          <div
            key={stock.id}
            className="bg-white p-4 rounded-xl border border-slate-200 flex justify-between items-center shadow-sm"
          >
            <span className="font-bold text-slate-900">{stock.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-green-600">
                {stock.sentimentScore}% 긍정
              </span>
              <div
                className={`w-2 h-2 rounded-full ${
                  stock.sentimentScore > 50 ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
