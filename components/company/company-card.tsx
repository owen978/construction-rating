import Link from "next/link";
import { Star, Building2, Users, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";
import { formatCategory } from "@/lib/utils/ratings";
import type { Company } from "@/lib/supabase/types";

interface CompanyCardProps {
  company: Pick<
    Company,
    | "slug"
    | "name"
    | "category"
    | "region"
    | "description"
    | "avg_overall"
    | "review_count"
    | "would_work_again_pct"
    | "is_verified"
  >;
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  return (
    <Link
      href={`/company/${company.slug}`}
      className={cn(
        "block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all group",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#1e3a5f] transition-colors truncate">
              {company.name}
            </h3>
            {company.is_verified && (
              <Badge variant="success" className="shrink-0">
                Verified
              </Badge>
            )}
          </div>

          {company.category && (
            <Badge className="mt-2">{formatCategory(company.category)}</Badge>
          )}
        </div>

        {company.avg_overall ? (
          <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-2 rounded-lg shrink-0">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-900">
              {Number(company.avg_overall).toFixed(1)}
            </span>
          </div>
        ) : (
          <span className="text-xs text-slate-400 shrink-0">No ratings</span>
        )}
      </div>

      {company.description && (
        <p className="mt-3 text-sm text-slate-500 line-clamp-2">
          {company.description}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
        {company.region && (
          <span className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5" />
            {company.region}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {company.review_count}{" "}
          {company.review_count === 1 ? "review" : "reviews"}
        </span>
        {company.would_work_again_pct !== null &&
          company.would_work_again_pct > 0 && (
            <span className="flex items-center gap-1 text-green-600">
              <ThumbsUp className="h-3.5 w-3.5" />
              {Math.round(Number(company.would_work_again_pct))}% would work
              again
            </span>
          )}
      </div>
    </Link>
  );
}
