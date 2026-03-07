import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Construction Rating",
  description:
    "Privacy Policy for Construction Rating. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-slate-300">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-[#1e3a5f]">
            <h2>1. Introduction</h2>
            <p>
              Construction Rating (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
              &ldquo;us&rdquo;) is committed to protecting and respecting your
              privacy. This policy explains how we collect, use, and safeguard
              your personal data when you use our website at
              constructionrating.co.uk (the &ldquo;Site&rdquo;).
            </p>
            <p>
              We comply with the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Account information:</strong> Name, email address, and
                trade/profession when you create an account.
              </li>
              <li>
                <strong>Review content:</strong> Reviews, ratings, and comments
                you submit about construction companies.
              </li>
              <li>
                <strong>Usage data:</strong> Information about how you use our
                Site, including pages visited, time spent, and referring pages.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, device
                type, and operating system.
              </li>
              <li>
                <strong>Contact information:</strong> Any details you provide
                when contacting us via our contact form.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal data to:</p>
            <ul>
              <li>Provide and maintain the Construction Rating platform.</li>
              <li>Display reviews and ratings on company profiles.</li>
              <li>
                Send you service-related communications (e.g., account
                verification, review confirmations).
              </li>
              <li>Improve our Site and user experience.</li>
              <li>Prevent fraud and ensure the integrity of reviews.</li>
              <li>Comply with legal obligations.</li>
            </ul>

            <h2>4. Anonymous Reviews</h2>
            <p>
              We allow users to post reviews anonymously. When you choose to post
              anonymously, your name and identifiable information will not be
              displayed publicly alongside your review. However, we retain your
              account information internally for moderation and fraud prevention
              purposes.
            </p>

            <h2>5. Legal Basis for Processing</h2>
            <p>We process your personal data on the following bases:</p>
            <ul>
              <li>
                <strong>Consent:</strong> When you create an account or submit
                reviews.
              </li>
              <li>
                <strong>Legitimate interests:</strong> To operate and improve our
                platform, prevent fraud, and ensure quality reviews.
              </li>
              <li>
                <strong>Legal obligation:</strong> When required by law.
              </li>
            </ul>

            <h2>6. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> Hosting (Vercel), database
                (Supabase), and analytics providers who assist in operating our
                Site.
              </li>
              <li>
                <strong>Legal requirements:</strong> When required by law, court
                order, or government regulation.
              </li>
              <li>
                <strong>Business partners:</strong> With your consent, we may
                share contact details with relevant service providers
                (e.g., AI construction tools, software solutions).
              </li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active
              or as needed to provide our services. If you request account
              deletion, we will remove your personal data within 30 days, though
              anonymised review content may be retained.
            </p>

            <h2>8. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your data.</li>
              <li>Object to processing of your data.</li>
              <li>Request restriction of processing.</li>
              <li>Data portability.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@constructionrating.co.uk">
                hello@constructionrating.co.uk
              </a>
              .
            </p>

            <h2>9. Cookies</h2>
            <p>
              We use essential cookies to keep you logged in and to remember your
              preferences. We may also use analytics cookies to understand how our
              Site is used. You can control cookie settings in your browser.
            </p>

            <h2>10. Security</h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data, including encryption in transit (HTTPS)
              and at rest, and secure authentication systems.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated &ldquo;last updated&rdquo;
              date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data
              practices, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:hello@constructionrating.co.uk">
                hello@constructionrating.co.uk
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
