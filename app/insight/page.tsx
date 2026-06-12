import AccuracyCard from "@/src/features/insight/components/AccuracyCard";
import MomentumFeed from "@/src/features/insight/components/MomentumFeed";
import RecommendationList from "@/src/features/insight/components/RecommendationList";
import SentimentGapDetector from "@/src/features/insight/components/SentimentGapDetector";
import ThemePreviewCard from "@/src/features/insight/components/ThemePreviewCard";

export default function InsightPage() {
  return (
    <div className="space-y-6 pb-20">
      <AccuracyCard />
      <MomentumFeed />
      <RecommendationList />
      <SentimentGapDetector />
      <ThemePreviewCard />
    </div>
  );
}
