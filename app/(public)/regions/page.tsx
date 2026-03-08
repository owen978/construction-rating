import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createMetadata } from "@/lib/utils/seo";
import { getBreadcrumbSchema, JsonLd } from "@/lib/utils/schema";
import type { Region } from "@/lib/supabase/types";

export const metadata = createMetadata({
  title: "UK Regions",
  description:
    "Browse construction companies by UK region. Find main contractors, house developers, and construction firms across England, Wales, Scotland, and Northern Ireland.",
  path: "/regions",
});

export default async function RegionsPage() {
  const supabase = await createServerSupabaseClient();

  // Fetch regions and company counts
  const [{ data: regionsData }, { data: companiesData }] = await Promise.all([
    supabase.from("regions").select("*").order("name", { ascending: true }),
    supabase.from("companies").select("region"),
  ]);

  const regions = (regionsData || []) as Region[];
  const companies = (companiesData || []) as { region: string | null }[];

  // Count companies per region
  const countMap: Record<string, number> = {};
  for (const c of companies) {
    if (c.region) {
      countMap[c.region] = (countMap[c.region] || 0) + 1;
    }
  }

  const totalCompanies = companies.length;

  return (
    <div className="bg-slate-50 min-h-screen">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://constructionrating.co.uk" },
          { name: "Regions", url: "https://constructionrating.co.uk/regions" },
        ])}
      />

      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Regions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Browse by <span className="text-amber-400">Region</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Find construction companies across {regions.length} UK regions.{" "}
            {totalCompanies} companies listed and growing.
          </p>
        </div>
      </section>

      {/* Region Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => {
              const count = countMap[region.slug] || 0;
              return (
                <Link
                  key={region.id}
                  href={`/region/${region.slug}`}
                  className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-slate-300 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-[#1e3a5f] transition-colors">
                        <MapPin className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg text-slate-900 group-hover:text-[#1e3a5f] transition-colors">
                          {region.name}
                        </h2>
                        <p className="text-sm text-slate-500 flex items-center gap-1 mt-0.5">
                          <Building2 className="h-3.5 w-3.5" />
                          {count} {count === 1 ? "company" : "companies"}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-[#1e3a5f] transition-colors mt-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            Can&apos;t find your region?
          </h2>
          <p className="mt-3 text-slate-500">
            Browse all companies across the UK or search by name.
          </p>
          <Link
            href="/companies"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a5a8f] transition-colors"
          >
            Browse All Companies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
