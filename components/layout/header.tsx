"use client";

import Link from "next/link";
import { useState } from "react";
import { HardHat, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "Companies" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1e3a5f] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <HardHat className="h-7 w-7 text-amber-400" />
            <span className="text-lg font-bold tracking-tight">
              Construction Rating
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-900 text-sm font-semibold rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-200 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f2440] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/10 my-3" />
            <Link
              href="/login"
              className="block px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-3 text-sm font-semibold text-center bg-amber-500 text-slate-900 rounded-lg hover:bg-amber-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
