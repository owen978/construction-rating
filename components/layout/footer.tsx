import Link from "next/link";
import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f2440] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <HardHat className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-bold text-white">
                Construction Rating
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              The UK&apos;s first review platform built for construction
              professionals. Rate the companies you work for and make informed
              decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/companies", label: "Companies" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Categories
            </h4>
            <ul className="space-y-3">
              {[
                {
                  href: "/companies?category=main_contractor",
                  label: "Main Contractors",
                },
                {
                  href: "/companies?category=house_developer",
                  label: "House Developers",
                },
                {
                  href: "/companies?category=private_developer",
                  label: "Private Developers",
                },
                {
                  href: "/companies?category=government",
                  label: "Government",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Regions
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/region/greater-london", label: "Greater London" },
                { href: "/region/south-east-england", label: "South East" },
                { href: "/region/north-west-england", label: "North West" },
                { href: "/region/west-midlands", label: "West Midlands" },
                { href: "/region/south-wales", label: "South Wales" },
                { href: "/region/scotland", label: "Scotland" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2024-{new Date().getFullYear()} Construction Rating. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
