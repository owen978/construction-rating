import { createServerSupabaseClient } from "@/lib/supabase/server";
import { CompanyCard } from "@/components/company/company-card";
import { Search } from "lucide-react";
import { createMetadata } from "@/lib/utils/seo";
import type { Region, Company } from "@/lib/supabase/types";

export const metadata = createMetadata({
  title: "Browse Companies",
  description:
    "Search and browse UK construction companies. Read real reviews from subcontractors and suppliers about main contractors and house developers.",
  path: "/companies",
});

interface Props {
  searchParams: Promise<{
    q?: string;
    category?: string;
    region?: string;
    sort?: string;
    page?: string;
  }>;
}

export default async function CompaniesPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q || "";
  const category = params.category || "";
  const region = params.region || "";
  const sort = params.sort || "name";
  const page = parseInt(params.page || "1");
  const perPage = 24;

  const supabase = await createServerSupabaseClient();

  // Build query
  let dbQuery = supabase.from("companies").select("*", { count: "exact" });

  if (query) {
    dbQuery = dbQuery.ilike("name", `%${query}%`);
  }
  if (category) {
    dbQuery = dbQuery.eq("category", category);
  }
  if (region) {
    dbQuery = dbQuery.ilike("region", `%${region}%`);
  }

  // Sort
  switch (sort) {
    case "rating":
      dbQuery = dbQuery.order("avg_overall", {
        ascending: false,
        nullsFirst: false,
      });
      break;
    case "reviews":
      dbQuery = dbQuery.order("review_count", { ascending: false });
      break;
    case "newest":
      dbQuery = dbQuery.order("created_at", { ascending: false });
      break;
    default:
      dbQuery = dbQuery.order("name", { ascending: true });
  }

  // Pagination
  const from = (page - 1) * perPage;
  dbQuery = dbQuery.range(from, from + perPage - 1);

  const { data: companiesData, count } = await dbQuery;
  const companies = (companiesData || []) as Company[];
  const totalPages = Math.ceil((count || 0) / perPage);

  // Get regions for filter
  const { data: regionsData } = await supabase
    .from("regions")
    .select("*")
    .order("name");
  const regions = (regionsData || []) as Region[];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Browse Companies</h1>
          <p className="mt-2 text-slate-300">
            Find and review UK construction contractors and developers
          </p>

          {/* Search */}
          <form className="mt-6 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search by company name..."
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {/* Preserve existing filters */}
              {category && (
                <input type="hidden" name="category" value={category} />
              )}
              {region && <input type="hidden" name="region" value={region} />}
              {sort && sort !== "name" && (
                <input type="hidden" name="sort" value={sort} />
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">
              Category:
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "", label: "All" },
                { value: "main_contractor", label: "Main Contractors" },
                { value: "house_developer", label: "House Developers" },
                { value: "private_developer", label: "Private Developers" },
                { value: "government", label: "Government" },
              ].map((cat) => (
                <a
                  key={cat.value}
                  href={`/companies?${new URLSearchParams({
                    ...(query && { q: query }),
                    ...(cat.value && { category: cat.value }),
                    ...(region && { region }),
                    ...(sort !== "name" && { sort }),
                  }).toString()}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    category === cat.value
                      ? "bg-[#1e3a5f] text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#1e3a5f]"
                  }`}
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          {regions.length > 0 && (
            <div className="flex items-center gap-2">
              <label
                htmlFor="region"
                className="text-sm font-medium text-slate-600"
              >
                Region:
              </label>
              <select
                id="region"
                defaultValue={region}
                onChange={(e) => {
                  // Client-side navigation for select - use form instead
                }}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm bg-white"
              >
                <option value="">All Regions</option>
                {regions.map((r) => (
                  <option key={r.slug} value={r.name}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-sm font-medium text-slate-600">
              Sort:
            </label>
            <div className="flex gap-1">
              {[
                { value: "name", label: "A-Z" },
                { value: "rating", label: "Top Rated" },
                { value: "reviews", label: "Most Reviews" },
                { value: "newest", label: "Newest" },
              ].map((s) => (
                <a
                  key={s.value}
                  href={`/companies?${new URLSearchParams({
                    ...(query && { q: query }),
                    ...(category && { category }),
                    ...(region && { region }),
                    ...(s.value !== "name" && { sort: s.value }),
                  }).toString()}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    sort === s.value
                      ? "bg-[#1e3a5f] text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#1e3a5f]"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-slate-500">
          {count} {count === 1 ? "company" : "companies"} found
          {query && ` for "${query}"`}
        </div>

        {/* Company Grid */}
        {companies.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-slate-500">
              No companies found matching your search.
            </p>
            <a
              href="/companies"
              className="mt-4 inline-block text-[#1e3a5f] font-semibold hover:underline"
            >
              Clear all filters
            </a>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {page > 1 && (
              <a
                href={`/companies?${new URLSearchParams({
                  ...(query && { q: query }),
                  ...(category && { category }),
                  ...(region && { region }),
                  ...(sort !== "name" && { sort }),
                  page: String(page - 1),
                }).toString()}`}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Previous
              </a>
            )}
            <span className="px-4 py-2 text-sm text-slate-500">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <a
                href={`/companies?${new URLSearchParams({
                  ...(query && { q: query }),
                  ...(category && { category }),
                  ...(region && { region }),
                  ...(sort !== "name" && { sort }),
                  page: String(page + 1),
                }).toString()}`}
                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Next
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
