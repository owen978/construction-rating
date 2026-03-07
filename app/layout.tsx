import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  JsonLd,
} from "@/lib/utils/schema";

export const metadata: Metadata = {
  title: "Construction Rating | Rate & Review UK Construction Contractors",
  description:
    "The UK's leading review platform for construction contractors. Rate main contractors, house developers, and construction companies. Real reviews from subcontractors and suppliers.",
  keywords: [
    "construction reviews",
    "contractor ratings",
    "UK construction",
    "main contractor reviews",
    "house developer ratings",
    "subcontractor reviews",
  ],
  openGraph: {
    title: "Construction Rating | Rate & Review UK Construction Contractors",
    description:
      "Real reviews from real contractors. Find trusted construction companies or warn others about bad experiences.",
    url: "https://constructionrating.co.uk",
    siteName: "Construction Rating",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
