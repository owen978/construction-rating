import type { Metadata } from "next";
import Link from "next/link";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/supabase/types";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Construction Rating",
  description:
    "Insights, guides, and news for UK construction professionals. Learn about payment practices, contractor reviews, and industry trends.",
};

async function getBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createServerSupabaseClient();

  const { data } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(20);

  return (data || []) as BlogPost[];
}

function formatDate(dateString: string | null): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Insights, guides, and industry news for UK construction
            professionals. Stay informed about payment practices, contractor
            reviews, and what matters in the industry.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {post.featured_image_url && (
                    <div className="aspect-video bg-slate-100 overflow-hidden">
                      <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full mb-3">
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-lg font-semibold text-slate-900 group-hover:text-[#1e3a5f] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between">
                      {post.published_at && (
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(post.published_at)}
                        </span>
                      )}
                      <span className="text-sm font-medium text-[#1e3a5f] flex items-center gap-1">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-slate-400" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Blog coming soon
              </h2>
              <p className="mt-3 text-slate-500 max-w-md mx-auto">
                We&apos;re working on insightful articles about payment
                practices, contractor reviews, and tips for construction
                professionals. Check back soon!
              </p>
              <div className="mt-8">
                <Link
                  href="/companies"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#2a4d7a] transition-colors"
                >
                  Browse Companies
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
