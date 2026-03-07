import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Star,
  Users,
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Construction Rating",
  description:
    "Construction Rating is the UK's first review platform built for the construction industry. We help subcontractors, suppliers, and trades make informed decisions about who they work for.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              About Construction Rating
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              We&apos;re building transparency in the UK construction industry —
              one review at a time. Because every subcontractor, supplier, and
              trade professional deserves to know who they&apos;re working for
              before they sign on the dotted line.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                To create a trusted, transparent ecosystem where construction
                professionals can share honest feedback about the main
                contractors and developers they work with. We believe that
                accountability drives better business practices — and that
                starts with giving a voice to the people who do the work.
              </p>
            </div>

            <div>
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                A UK construction industry where payment reliability,
                communication quality, and site management standards are
                visible and comparable — like Glassdoor, but for construction.
                Where the best companies are rewarded with the best talent,
                and everyone knows what to expect before they start a project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Why We Built This
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              The construction industry has a transparency problem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "60%",
                label: "of subcontractors",
                description:
                  "have experienced late payment from a main contractor at some point in their career.",
              },
              {
                stat: "£26bn",
                label: "in late payments",
                description:
                  "owed to SMEs in the UK construction sector at any given time, crippling cash flow.",
              },
              {
                stat: "87%",
                label: "of contractors",
                description:
                  "say they'd choose who they work for differently if they had access to better information.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-white rounded-xl border border-slate-200 p-8 text-center"
              >
                <div className="text-4xl font-bold text-[#1e3a5f]">
                  {item.stat}
                </div>
                <div className="text-sm font-medium text-amber-600 mt-1">
                  {item.label}
                </div>
                <p className="mt-4 text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
            <p className="mt-4 text-lg text-slate-500">
              Four key areas that make Construction Rating different.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: Star,
                title: "Structured Reviews",
                description:
                  "Not just star ratings. We measure what matters: payment reliability, communication, site management, and health & safety. Plus the key question — would you work with them again?",
              },
              {
                icon: Shield,
                title: "Anonymous & Protected",
                description:
                  "We understand the reality of construction. Reviews can be left anonymously so you can speak honestly without fear of losing future work.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description:
                  "Built by people who work in construction, for people who work in construction. Our community of subcontractors, suppliers, and trades drives everything we do.",
              },
              {
                icon: CheckCircle2,
                title: "Data You Can Trust",
                description:
                  "We enrich company profiles with Companies House data, financial health indicators, and AI-powered analysis to give you the full picture — not just opinions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-xl border border-slate-200 bg-white"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-[#1e3a5f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a5f] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to have your say?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Join the growing community of construction professionals sharing
            honest reviews and making the industry more transparent.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-colors text-lg"
            >
              Sign Up Free
              <ArrowRight className="h-5 w-5 ml-2" />
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
