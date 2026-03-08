import type { MetadataRoute } from "next";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const SITE_URL = "https://constructionrating.co.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createServerSupabaseClient();

  // Fetch all companies and regions in parallel
  const [companiesResult, regionsResult] = await Promise.all([
    supabase.from("companies").select("slug, updated_at").order("name"),
    supabase.from("regions").select("slug").order("name"),
  ]);

  const companies = (companiesResult.data || []) as { slug: string; updated_at: string }[];
  const regions = (regionsResult.data || []) as { slug: string }[];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/companies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/regions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  // Company pages
  const companyPages: MetadataRoute.Sitemap = companies.map(
    (company) => ({
      url: `${SITE_URL}/company/${company.slug}`,
      lastModified: new Date(company.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })
  );

  // Region pages
  const regionPages: MetadataRoute.Sitemap = regions.map((region) => ({
    url: `${SITE_URL}/region/${region.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...companyPages, ...regionPages];
}
