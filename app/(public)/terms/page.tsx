import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Construction Rating",
  description:
    "Terms of Use for Construction Rating. Please read these terms carefully before using our platform.",
};

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-2 text-slate-300">Last updated: March 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-[#1e3a5f]">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Construction Rating
              (constructionrating.co.uk), you agree to be bound by these Terms
              of Use. If you do not agree to these terms, please do not use our
              platform.
            </p>

            <h2>2. About the Platform</h2>
            <p>
              Construction Rating is a review and rating platform for the UK
              construction industry. We enable construction professionals
              (subcontractors, suppliers, tradespeople) to share their
              experiences working with main contractors, house developers, and
              other construction companies.
            </p>

            <h2>3. User Accounts</h2>
            <p>To leave reviews, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate and truthful information.</li>
              <li>Keep your login credentials secure.</li>
              <li>Not create multiple accounts for the purpose of submitting duplicate or fraudulent reviews.</li>
              <li>
                Notify us immediately if you suspect unauthorised access to your
                account.
              </li>
            </ul>

            <h2>4. Review Guidelines</h2>
            <p>When submitting reviews on Construction Rating, you must:</p>
            <ul>
              <li>
                <strong>Be truthful:</strong> Reviews must be based on genuine
                first-hand experience working with the company being reviewed.
              </li>
              <li>
                <strong>Be fair:</strong> Provide a balanced and honest
                assessment across all rating categories.
              </li>
              <li>
                <strong>Be respectful:</strong> Do not include personal attacks,
                threats, hate speech, or discriminatory language.
              </li>
              <li>
                <strong>Be relevant:</strong> Reviews should relate to
                professional working experience (payment reliability,
                communication, site management, health &amp; safety).
              </li>
            </ul>
            <p>You must NOT:</p>
            <ul>
              <li>Submit fake, misleading, or defamatory reviews.</li>
              <li>
                Review a company you have not directly worked with or for.
              </li>
              <li>
                Submit reviews in exchange for payment, gifts, or other
                incentives.
              </li>
              <li>
                Include confidential business information, trade secrets, or
                proprietary data.
              </li>
              <li>
                Impersonate another person or misrepresent your relationship
                with a company.
              </li>
            </ul>

            <h2>5. Content Ownership &amp; Licence</h2>
            <p>
              You retain ownership of the content you submit. However, by
              posting a review on Construction Rating, you grant us a
              non-exclusive, royalty-free, worldwide licence to display,
              distribute, and use your review content on our platform and in
              related marketing materials.
            </p>

            <h2>6. Moderation &amp; Removal</h2>
            <p>
              We reserve the right to remove, edit, or reject any content that
              violates these terms or our review guidelines. We may also
              suspend or terminate accounts that repeatedly violate our
              policies.
            </p>
            <p>
              Companies can respond to reviews and may flag reviews they believe
              are inaccurate or defamatory. We will investigate flagged reviews
              and take appropriate action.
            </p>

            <h2>7. Company Profiles</h2>
            <p>
              Company profiles on Construction Rating may include publicly
              available information sourced from Companies House, public
              records, and user-submitted content. Companies can claim their
              profile to respond to reviews and update their information by
              contacting us.
            </p>

            <h2>8. Disclaimer</h2>
            <p>
              Construction Rating provides a platform for user-generated
              reviews. We do not verify the accuracy of individual reviews and
              do not endorse or guarantee the opinions expressed by users. The
              information on this platform is provided &ldquo;as is&rdquo; and
              should not be the sole basis for business decisions.
            </p>
            <p>
              AI-generated content on company profiles (summaries, analysis) is
              provided for informational purposes only and should not be
              considered professional advice.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Construction Rating shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of our platform or
              reliance on any content or reviews.
            </p>

            <h2>10. Intellectual Property</h2>
            <p>
              The Construction Rating name, logo, website design, and
              proprietary technology are owned by us and protected by
              intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our prior written consent.
            </p>

            <h2>11. Third-Party Links</h2>
            <p>
              Our platform may contain links to third-party websites. We are
              not responsible for the content, privacy practices, or
              availability of these external sites.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the
              laws of England and Wales. Any disputes shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of the platform after changes constitutes acceptance of the
              updated terms.
            </p>

            <h2>14. Contact</h2>
            <p>
              For questions about these terms, please contact us at{" "}
              <a href="mailto:hello@constructionrating.co.uk">
                hello@constructionrating.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
