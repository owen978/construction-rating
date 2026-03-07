import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getCompanyListSchema, getBreadcrumbSchema, JsonLd } from "@/lib/utils/schema";
import type { Company, Region } from "@/lib/supabase/types";
import { Building2, Star, Users, MapPin, ArrowRight } from "lucide-react";

interface RegionPageProps {
  params: Promise<{ slug: string }>;
}

async function getRegion(slug: string): Promise<Region | null> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("regions")
    .select("*")
    .eq("slug", slug)
    .single();
  return data as Region | null;
}

async function getCompaniesByRegion(regionSlug: string): Promise<Company[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("companies")
    .select("*")
    .eq("region", regionSlug)
    .order("review_count", { ascending: false })
    .order("name", { ascending: true });
  return (data || []) as Company[];
}

async function getAllRegions(): Promise<Region[]> {
  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("regions")
    .select("*")
    .order("name", { ascending: true });
  return (data || []) as Region[];
}

function formatCategory(category: string | null): string {
  if (!category) return "";
  return category
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = await getRegion(slug);
  if (!region) return { title: "Region Not Found" };

  return {
    title: `Construction Companies in ${region.name} - Construction Rating`,
    description: `Browse and review construction companies, main contractors, and house developers in ${region.name}. Read real reviews from subcontractors and trades.`,
  };
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const [region, companies, allRegions] = await Promise.all([
    getRegion(slug),
    getCompaniesByRegion(slug),
    getAllRegions(),
  ]);

  if (!region) {
    notFound();
  }

  return (
    <div>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://constructionrating.co.uk" },
          { name: region.name, url: `https://constructionrating.co.uk/region/${region.slug}` },
        ])}
      />
      {companies.length > 0 && (
        <JsonLd
          data={getCompanyListSchema(
            companies,
            `Construction Companies in ${region.name}`
          )}
        />
      )}
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">{region.name}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Construction Companies in{" "}
            <span className="text-amber-400">{region.name}</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Browse {companies.length} construction{" "}
            {companies.length === 1 ? "company" : "companies"} in{" "}
            {region.name}. Read reviews from subcontractors, suppliers, and
            trade professionals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar - Other Regions */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                  All Regions
                </h3>
                <nav className="space-y-1">
                  {allRegions.map((r) => (
                    <Link
                      key={r.id}
                      href={`/region/${r.slug}`}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        r.slug === slug
                          ? "bg-[#1e3a5f] text-white font-medium"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      <span>{r.name}</span>
                      <span
                        className={`text-xs ${
                          r.slug === slug
                            ? "text-slate-300"
                            : "text-slate-400"
                        }`}
                      >
                        {r.company_count}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Company Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {companies.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-sm text-slate-500">
                      Showing {companies.length}{" "}
                      {companies.length === 1 ? "company" : "companies"}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {companies.map((company) => (
                      <Link
                        key={company.id}
                        href={`/company/${company.slug}`}
                        className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-900 group-hover:text-[#1e3a5f] transition-colors truncate">
                              {company.name}
                            </h3>
                            {company.category && (
                              <span className="inline-block mt-1.5 px-2.5 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                {formatCategory(company.category)}
                              </span>
                            )}
                          </div>
                          {company.avg_overall ? (
                            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg shrink-0 ml-3">
                              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                              <span className="font-bold text-sm text-slate-900">
                                {Number(company.avg_overall).toFixed(1)}
                              </span>
                            </div>
                          ) : null}
                        </div>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {region.name}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {company.review_count}{" "}
                            {company.review_count === 1
                              ? "review"
                              : "reviews"}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-slate-400" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">
                    No companies listed yet
                  </h2>
                  <p className="mt-2 text-slate-500 max-w-sm mx-auto">
                    We don&apos;t have any companies listed in {region.name}{" "}
                    yet. Know one? Help us grow the directory.
                  </p>
                  <Link
                    href="/companies"
                    className="inline-flex items-center gap-2 mt-6 text-[#1e3a5f] font-semibold hover:text-amber-600 transition-colors"
                  >
                    Browse all companies
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
