import type { Metadata } from "next";

const SITE_NAME = "Construction Rating";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://constructionrating.co.uk";
const DEFAULT_DESCRIPTION =
  "Rate and review UK construction contractors. Find trusted main contractors, house developers, and construction companies with real reviews from subcontractors and suppliers.";

export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const desc = description || DEFAULT_DESCRIPTION;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}
