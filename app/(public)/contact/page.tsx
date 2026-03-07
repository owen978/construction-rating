import type { Metadata } from "next";
import Script from "next/script";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Construction Rating",
  description:
    "Get in touch with the Construction Rating team. Questions, feedback, or partnership enquiries — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Got a question, feedback, or want to work with us? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a
                        href="mailto:hello@constructionrating.co.uk"
                        className="text-sm text-[#1e3a5f] hover:text-amber-600 transition-colors"
                      >
                        hello@constructionrating.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Location</p>
                      <p className="text-sm text-slate-500">United Kingdom</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Response Time
                      </p>
                      <p className="text-sm text-slate-500">
                        We aim to reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900">Common Topics</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-500">
                  <li>• Claiming or updating a company profile</li>
                  <li>• Reporting inaccurate reviews</li>
                  <li>• Partnership or advertising enquiries</li>
                  <li>• Press and media requests</li>
                  <li>• Feature suggestions or bug reports</li>
                </ul>
              </div>
            </div>

            {/* GHL Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Send us a message
                </h2>
                <iframe
                  src="https://link.contractorsystems.co.uk/widget/form/O9oldAO4G2CtQdnhaOEu"
                  style={{ width: "100%", height: "477px", border: "none", borderRadius: "4px" }}
                  id="inline-O9oldAO4G2CtQdnhaOEu"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Us"
                  data-height="477"
                  data-layout-iframe-id="inline-O9oldAO4G2CtQdnhaOEu"
                  data-form-id="O9oldAO4G2CtQdnhaOEu"
                  title="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GHL Form Embed Script */}
      <Script
        src="https://link.contractorsystems.co.uk/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
