import AccuracyCard from "@/src/features/insight/components/AccuracyCard";
import RecommendationList from "@/src/features/insight/components/RecommendationList";
import ThemePreviewCard from "@/src/features/insight/components/ThemePreviewCard";

export default function InsightPage() {
  return (
    <div className="space-y-6 pb-20">
      <AccuracyCard />
      <RecommendationList />
      <ThemePreviewCard />
    </div>
  );
}
