import type { Company, Review } from "@/lib/supabase/types";

const SITE_URL = "https://constructionrating.co.uk";
const SITE_NAME = "Construction Rating";

/**
 * Organization schema for the website itself.
 * Used on the homepage and root layout.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "The UK's leading review platform for construction contractors. Real reviews from subcontractors and suppliers.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@constructionrating.co.uk",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };
}

/**
 * WebSite schema with SearchAction for sitelinks search box.
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Rate and review UK construction contractors. Real reviews from subcontractors, suppliers, and trades.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/companies?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Company page schema with LocalBusiness + AggregateRating.
 */
export function getCompanySchema(company: Company, reviews: Review[] = []) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: `${SITE_URL}/company/${company.slug}`,
  };

  if (company.website) {
    schema.sameAs = [company.website];
  }

  if (company.address) {
    schema.address = {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressLocality: company.address,
    };
  }

  if (company.phone) {
    schema.telephone = company.phone;
  }

  if (company.logo_url) {
    schema.image = company.logo_url;
  }

  if (company.description) {
    schema.description = company.description;
  }

  if (company.founded_year) {
    schema.foundingDate = String(company.founded_year);
  }

  // AggregateRating — only if there are reviews
  if (company.avg_overall && company.review_count > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: Number(company.avg_overall).toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: company.review_count,
    };
  }

  // Individual reviews
  if (reviews.length > 0) {
    schema.review = reviews.slice(0, 10).map((review) => {
      const avgRating =
        (review.payment_reliability +
          review.communication +
          review.site_management +
          review.health_and_safety) /
        4;

      return {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: avgRating.toFixed(1),
          bestRating: "5",
          worstRating: "1",
        },
        author: {
          "@type": "Person",
          name: review.is_anonymous
            ? "Anonymous Contractor"
            : "Construction Professional",
        },
        datePublished: review.created_at.split("T")[0],
        ...(review.review_title && { name: review.review_title }),
        reviewBody: review.review_text,
      };
    });
  }

  return schema;
}

/**
 * BreadcrumbList schema for navigation hierarchy.
 */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * ItemList schema for company directory / search results pages.
 */
export function getCompanyListSchema(
  companies: Company[],
  listName: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: companies.length,
    itemListElement: companies.slice(0, 20).map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Organization",
        name: company.name,
        url: `${SITE_URL}/company/${company.slug}`,
        ...(company.avg_overall &&
          company.review_count > 0 && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: Number(company.avg_overall).toFixed(1),
              ratingCount: company.review_count,
            },
          }),
      },
    })),
  };
}

/**
 * Helper component to inject JSON-LD into a page.
 * Usage: <JsonLd data={getOrganizationSchema()} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
