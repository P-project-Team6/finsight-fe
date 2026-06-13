import BackButton from "@/src/features/themes/components/BackButton";
import BacktestCard from "@/src/features/themes/components/BacktestCard";
import PredictionVote from "@/src/features/themes/components/PredictionVote";
import StockRelationMap from "@/src/features/themes/components/StockRelationMap";
import ThemeCommunityFeed from "@/src/features/themes/components/ThemeCommunityFeed";
import ThemePortfolioFilter from "@/src/features/themes/components/ThemePortfolioFilter";
import { hotThemes } from "@/src/shared/mock/hotThemes";
import { themeComposition } from "@/src/shared/mock/themeComposition";

interface ThemeDetailPageProps {
  params: {
    id: string;
  };
}

export default async function ThemeDetailPage({ params }: ThemeDetailPageProps) {
  const resolvedParams = await params;
  const theme = hotThemes.find((t) => String(t.id) === resolvedParams.id);

  if (!theme) {
    return (
      <div className="p-4 text-red-600 font-semibold">존재하지 않는 테마입니다.</div>
    );
  }

  return (
    <div className="pb-20 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <BackButton />
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{theme.name} ETF</h1>
          <span className="text-xs text-slate-500">AI 토픽 모델링 & 감성 필터링 결과</span>
        </div>
      </div>
      <BacktestCard themeName={theme.name} />
      <ThemePortfolioFilter composition={themeComposition} themeName={theme.name} />
      <StockRelationMap />
      <PredictionVote themeName={theme.name} />
      <ThemeCommunityFeed />
    </div>
  );
}
