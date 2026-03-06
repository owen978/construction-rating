import Link from "next/link";
import {
  Search,
  Shield,
  Star,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { Company } from "@/lib/supabase/types";

async function getStats() {
  const supabase = await createServerSupabaseClient();

  const [companiesResult, reviewsResult, regionsResult] = await Promise.all([
    supabase.from("companies").select("id", { count: "exact", head: true }),
    supabase.from("reviews").select("id", { count: "exact", head: true }),
    supabase.from("regions").select("id", { count: "exact", head: true }),
  ]);

  return {
    companies: companiesResult.count || 0,
    reviews: reviewsResult.count || 0,
    regions: regionsResult.count || 0,
  };
}

async function getTopCompanies(): Promise<Company[]> {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase
    .from("companies")
    .select("*")
    .gt("review_count", 0)
    .order("avg_overall", { ascending: false })
    .limit(6);

  return (data || []) as Company[];
}

async function getRecentCompanies(): Promise<Company[]> {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase
    .from("companies")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  return (data || []) as Company[];
}

function formatCategory(category: string | null): string {
  if (!category) return "";
  return category
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function HomePage() {
  const [stats, topCompanies, recentCompanies] = await Promise.all([
    getStats(),
    getTopCompanies(),
    getRecentCompanies(),
  ]);

  const displayCompanies =
    topCompanies.length > 0 ? topCompanies : recentCompanies;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Rate your contractor.
              <br />
              <span className="text-amber-400">Protect your business.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
              The UK&apos;s first review platform built for construction. Real
              reviews from subcontractors, suppliers, and trade professionals
              about the main contractors and developers they work for.
            </p>

            {/* Search Bar */}
            <div className="mt-10">
              <form action="/companies" method="GET" className="flex gap-3">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    name="q"
                    placeholder="Search for a company..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-slate-900 text-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-lg"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">
                {stats.companies.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Companies Listed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">
                {stats.reviews.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 mt-1">Reviews Posted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1e3a5f]">
                {stats.regions.toLocaleString()}
              </div>
              <div className="text-sm text-slate-500 mt-1">UK Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-500">
              Stop getting burnt. Start making informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                1. Find a Company
              </h3>
              <p className="mt-3 text-slate-500">
                Search for any main contractor, house developer, or construction
                company in the UK.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                2. Read & Leave Reviews
              </h3>
              <p className="mt-3 text-slate-500">
                See what other contractors say about payment, communication,
                site management, and health & safety.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                3. Protect Your Business
              </h3>
              <p className="mt-3 text-slate-500">
                Make informed decisions about who you work for. Avoid bad
                payers and unreliable clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      {displayCompanies.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  {topCompanies.length > 0
                    ? "Top Rated Companies"
                    : "Recently Added Companies"}
                </h2>
                <p className="mt-2 text-slate-500">
                  {topCompanies.length > 0
                    ? "Highest rated by the construction community"
                    : "Latest companies added to the directory"}
                </p>
              </div>
              <Link
                href="/companies"
                className="hidden sm:flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-amber-600 transition-colors"
              >
                View all companies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayCompanies.map((company) => (
                <Link
                  key={company.id}
                  href={`/company/${company.slug}`}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#1e3a5f] transition-colors">
                        {company.name}
                      </h3>
                      {company.category && (
                        <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {formatCategory(company.category)}
                        </span>
                      )}
                    </div>
                    {company.avg_overall && (
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-lg">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-slate-900">
                          {Number(company.avg_overall).toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
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
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold"
              >
                View all companies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Browse by Category
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Find reviews for the type of company you work with
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Main Contractors",
                slug: "main_contractor",
                icon: Building2,
                description:
                  "Tier 1 & 2 contractors managing large-scale projects",
              },
              {
                name: "House Developers",
                slug: "house_developer",
                icon: Building2,
                description:
                  "Residential developers building homes across the UK",
              },
              {
                name: "Private Developers",
                slug: "private_developer",
                icon: Building2,
                description:
                  "Independent developers and property companies",
              },
              {
                name: "Government",
                slug: "government",
                icon: Shield,
                description:
                  "Public sector and government-backed construction clients",
              },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/companies?category=${cat.slug}`}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-[#1e3a5f] transition-all group text-center"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1e3a5f] transition-colors">
                  <cat.icon className="h-6 w-6 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1e3a5f] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Had a good or bad experience?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Help other contractors make better decisions. Leave an anonymous
            review and rate the companies you&apos;ve worked with.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-lg"
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Sign Up Free
            </Link>
            <Link
              href="/companies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors text-lg border border-white/20"
            >
              Browse Companies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
