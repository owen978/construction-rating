import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  Globe,
  Phone,
  MapPin,
  Building2,
  ExternalLink,
  ThumbsUp,
  Shield,
  Calendar,
  Users,
  Lock,
} from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { RatingBreakdown } from "@/components/company/rating-breakdown";
import { StarRatingDisplay } from "@/components/company/star-rating";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCategory, getRatingLabel } from "@/lib/utils/ratings";
import type { Metadata } from "next";
import type { Company, Review } from "@/lib/supabase/types";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();
  const { data: companyData } = await supabase
    .from("companies")
    .select("name, category, region, avg_overall, review_count")
    .eq("slug", slug)
    .single();
  const company = companyData as Company | null;

  if (!company) return { title: "Company Not Found" };

  const ratingText = company.avg_overall
    ? ` - Rated ${Number(company.avg_overall).toFixed(1)}/5`
    : "";

  return {
    title: `${company.name} Reviews${ratingText} | Construction Rating`,
    description: `Read ${company.review_count} reviews of ${company.name}. ${formatCategory(company.category)} based in ${company.region || "UK"}. Real ratings from subcontractors and suppliers.`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createServerSupabaseClient();

  // Fetch company
  const { data: companyData2 } = await supabase
    .from("companies")
    .select("*")
    .eq("slug", slug)
    .single();
  const company = companyData2 as Company | null;

  if (!company) notFound();

  // Fetch reviews
  const { data: reviewsData } = await supabase
    .from("reviews")
    .select("*, profiles(display_name)")
    .eq("company_id", company.id)
    .order("created_at", { ascending: false })
    .limit(10);
  const reviews = (reviewsData || []) as (Review & { profiles: { display_name: string | null } | null })[];

  // Fetch related companies (same category)
  const { data: relatedData } = await supabase
    .from("companies")
    .select("id, slug, name, category, avg_overall, review_count")
    .eq("category", company.category || "")
    .neq("id", company.id)
    .limit(4);
  const relatedCompanies = (relatedData || []) as Company[];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Company Header */}
      <div className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {company.category && (
                  <Badge variant="info">{formatCategory(company.category)}</Badge>
                )}
                {company.is_verified && (
                  <Badge variant="success">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{company.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-slate-300 text-sm">
                {company.region && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {company.region}
                  </span>
                )}
                {company.founded_year && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Est. {company.founded_year}
                  </span>
                )}
                {company.employee_count && (
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    {company.employee_count} employees
                  </span>
                )}
              </div>
            </div>

            {/* Rating Summary */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 min-w-[200px] text-center">
              {company.avg_overall ? (
                <>
                  <div className="text-4xl font-bold text-amber-400">
                    {Number(company.avg_overall).toFixed(1)}
                  </div>
                  <StarRatingDisplay
                    rating={Number(company.avg_overall)}
                    size="md"
                    showValue={false}
                    className="justify-center mt-2"
                  />
                  <div className="mt-1 text-sm text-slate-300">
                    {getRatingLabel(Number(company.avg_overall))}
                  </div>
                  <div className="mt-2 text-xs text-slate-400">
                    {company.review_count}{" "}
                    {company.review_count === 1 ? "review" : "reviews"}
                  </div>
                  {company.would_work_again_pct !== null && (
                    <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-center gap-1.5 text-sm text-green-400">
                      <ThumbsUp className="h-4 w-4" />
                      {Math.round(Number(company.would_work_again_pct))}% would
                      work again
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="text-lg font-medium text-slate-300">
                    No ratings yet
                  </div>
                  <div className="mt-1 text-sm text-slate-400">
                    Be the first to review
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            {company.description && (
              <section className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">About</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {company.description}
                </p>
              </section>
            )}

            {/* AI Summary */}
            {company.ai_summary && (
              <section className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {company.ai_summary}
                </p>
              </section>
            )}

            {/* Rating Breakdown */}
            {company.avg_overall && (
              <section className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Rating Breakdown
                </h2>
                <RatingBreakdown ratings={company} />
              </section>
            )}

            {/* Gated Content - AI Analysis */}
            <section className="bg-white rounded-xl border border-slate-200 p-6 relative overflow-hidden">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Detailed Analysis
              </h2>
              <div className="gated-blur">
                <p className="text-slate-600 leading-relaxed">
                  This company has shown consistent payment patterns over the past
                  12 months with an average payment time of 45 days. Financial
                  analysis indicates stable revenue growth with moderate risk
                  factors. Based on Companies House filings, the company maintains
                  healthy cash reserves and manageable debt levels.
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px]">
                <div className="text-center p-6">
                  <Lock className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                  <p className="font-semibold text-slate-900">
                    Sign up to unlock detailed analysis
                  </p>
                  <p className="text-sm text-slate-500 mt-1">
                    AI-powered risk analysis, payment insights, and more
                  </p>
                  <Link
                    href="/signup"
                    className="mt-4 inline-block px-6 py-2.5 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a5a8f] transition-colors"
                  >
                    Sign Up Free
                  </Link>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Reviews ({company.review_count})
                </h2>
                <Link
                  href={`/write-review/${company.slug}`}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg text-sm transition-colors"
                >
                  Write a Review
                </Link>
              </div>

              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-slate-100 pb-6 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3">
                            <StarRatingDisplay
                              rating={
                                (review.payment_reliability +
                                  review.communication +
                                  review.site_management +
                                  review.health_and_safety) /
                                4
                              }
                              size="sm"
                            />
                            {review.would_work_again && (
                              <Badge variant="success">
                                <ThumbsUp className="h-3 w-3 mr-1" />
                                Would work again
                              </Badge>
                            )}
                          </div>
                          {review.review_title && (
                            <h4 className="font-semibold text-slate-900 mt-2">
                              {review.review_title}
                            </h4>
                          )}
                        </div>
                        <span className="text-xs text-slate-400 shrink-0">
                          {new Date(review.created_at).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>

                      <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                        {review.review_text}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        {!review.is_anonymous && (
                          <span>
                            By{" "}
                            {review.profiles?.display_name || "Anonymous"}
                          </span>
                        )}
                        {review.your_trade && (
                          <Badge>{review.your_trade}</Badge>
                        )}
                        {review.relationship && (
                          <Badge>
                            {review.relationship.charAt(0).toUpperCase() +
                              review.relationship.slice(1)}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <Star className="h-12 w-12 text-slate-200 mx-auto mb-3" />
                  <p className="text-slate-500">No reviews yet</p>
                  <p className="text-sm text-slate-400 mt-1">
                    Be the first to share your experience
                  </p>
                  <Link
                    href={`/write-review/${company.slug}`}
                    className="mt-4 inline-block px-6 py-2.5 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a5a8f] transition-colors text-sm"
                  >
                    Write a Review
                  </Link>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Company Details</h3>
              <dl className="space-y-4">
                {company.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-xs text-slate-400">Address</dt>
                      <dd className="text-sm text-slate-700">
                        {company.address}
                      </dd>
                    </div>
                  </div>
                )}
                {company.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-xs text-slate-400">Phone</dt>
                      <dd className="text-sm text-slate-700">
                        {company.phone}
                      </dd>
                    </div>
                  </div>
                )}
                {company.website && (
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-xs text-slate-400">Website</dt>
                      <dd>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#1e3a5f] hover:underline flex items-center gap-1"
                        >
                          Visit website
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </dd>
                    </div>
                  </div>
                )}
                {company.revenue_bracket && (
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <dt className="text-xs text-slate-400">Revenue</dt>
                      <dd className="text-sm text-slate-700">
                        {company.revenue_bracket}
                      </dd>
                    </div>
                  </div>
                )}
              </dl>
            </div>

            {/* Write Review CTA */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-6 text-center">
              <h3 className="font-bold text-slate-900 mb-2">
                Worked with {company.name}?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Share your experience to help other contractors
              </p>
              <Link
                href={`/write-review/${company.slug}`}
                className="inline-block w-full px-4 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-sm"
              >
                Write a Review
              </Link>
            </div>

            {/* Related Companies */}
            {relatedCompanies.length > 0 && (
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4">
                  Similar Companies
                </h3>
                <div className="space-y-3">
                  {relatedCompanies.map((related) => (
                    <Link
                      key={related.id}
                      href={`/company/${related.slug}`}
                      className="flex items-center justify-between py-2 hover:bg-slate-50 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-700">
                        {related.name}
                      </span>
                      {related.avg_overall && (
                        <div className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-bold">
                            {Number(related.avg_overall).toFixed(1)}
                          </span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
