import { cn } from "@/lib/utils/cn";
import { RATING_CATEGORIES } from "@/lib/utils/ratings";

interface RatingBreakdownProps {
  ratings: {
    avg_payment_reliability: number | null;
    avg_communication: number | null;
    avg_site_management: number | null;
    avg_health_and_safety: number | null;
  };
  className?: string;
}

export function RatingBreakdown({ ratings, className }: RatingBreakdownProps) {
  const ratingMap: Record<string, number | null> = {
    payment_reliability: ratings.avg_payment_reliability,
    communication: ratings.avg_communication,
    site_management: ratings.avg_site_management,
    health_and_safety: ratings.avg_health_and_safety,
  };

  return (
    <div className={cn("space-y-4", className)}>
      {RATING_CATEGORIES.map((cat) => {
        const value = ratingMap[cat.key];
        const percentage = value ? (value / 5) * 100 : 0;

        return (
          <div key={cat.key}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-slate-700">
                {cat.label}
              </span>
              <span className="text-sm font-bold text-slate-900">
                {value ? value.toFixed(1) : "N/A"}
              </span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  value && value >= 4
                    ? "bg-green-500"
                    : value && value >= 3
                      ? "bg-amber-500"
                      : value && value >= 2
                        ? "bg-orange-500"
                        : value
                          ? "bg-red-500"
                          : "bg-slate-200"
                )}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
