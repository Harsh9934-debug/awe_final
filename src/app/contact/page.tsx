"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TOPICS = [
  "Practical AI Training",
  "AI Adoption Advisory",
  "Conscious Leadership in the Age of AI",
  "Discuss training for my team",
  "Other training or advisory support",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    workEmail: "",
    company: "",
    helpWith: "Practical AI Training",
    teamSize: "",
    preferredTiming: "",
    message: "",
    newsletterConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF9F5] text-[#141815] antialiased selection:bg-[#18231E] selection:text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen w-full">
        
        {/* Left Column: Full-Height Atmospheric Editorial Column */}
        <div className="lg:col-span-5 relative min-h-[480px] lg:min-h-screen flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white overflow-hidden bg-[#111118] isolate">
          {/* Background Image: hero.png with rich moody grading */}
          <Image
            src="/hero.png"
            alt="Applied AI for the enterprise"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center z-0 opacity-40 mix-blend-luminosity scale-105"
          />
          {/* Subtle multi-stop gradient for high contrast readability */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#111118] via-[#111118]/75 to-[#111118]/40 pointer-events-none" />

          {/* Top Brand Link */}
          <div className="relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group transition-opacity"
              aria-label="AWE Intelligence Home"
            >
              <Image
                src="/logo-white.png"
                alt="AWE Intelligence"
                width={180}
                height={50}
                className="h-7 w-auto"
              />
            </Link>
          </div>

          {/* Center Main Narrative & Inquiries Block */}
          <div className="relative z-10 my-auto py-10 lg:py-16">
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight text-white leading-[1.08] mb-5">
              Applied AI<br />for the enterprise
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-md mb-10">
              AWE helps organisations accelerate practical AI adoption, strengthen leadership judgement, and unlock lasting human potential.
            </p>

            {/* Inquiries List */}
            <div className="space-y-2.5 text-xs sm:text-[13px] text-zinc-400 font-light">
              <p>
                General inquiries:{" "}
                <a
                  href="mailto:info@aweintelligence.com"
                  className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                >
                  info@aweintelligence.com
                </a>
              </p>
              <p>
                Training &amp; advisory:{" "}
                <a
                  href="mailto:training@aweintelligence.com"
                  className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                >
                  training@aweintelligence.com
                </a>
              </p>
              <p>
                Media inquiries:{" "}
                <a
                  href="mailto:press@aweintelligence.com"
                  className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                >
                  press@aweintelligence.com
                </a>
              </p>
              <p>
                Found a bug? report here:{" "}
                <a
                  href="mailto:security@aweintelligence.com"
                  className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                >
                  security@aweintelligence.com
                </a>
              </p>
              <p>
                <Link
                  href="/terms"
                  className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                >
                  Bug Bounty Terms and Conditions
                </Link>
              </p>
            </div>
          </div>

          {/* Bottom Privacy Statement */}
          <div className="relative z-10 pt-6 border-t border-white/10 mt-auto">
            <p className="text-[11px] sm:text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              We store and process the data in this form to respond to your request.
              For more information on how we use data, please refer to our{" "}
              <Link href="/privacy" className="text-zinc-200 underline hover:text-white">
                Privacy policy
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column: Clean Form Pane with Current Fields & Reference Alignment */}
        <div className="lg:col-span-7 bg-white min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          <div className="max-w-xl w-full mx-auto">
            
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                Discuss training for your team
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2">
                Tell us where your team is today and what you want to achieve. We usually respond within one business day.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-8">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-zinc-950">
                  Thanks for getting in touch.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                  We have received your enquiry and will contact you shortly to explore the right starting point for your organisation.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/"
                    className="rounded-full bg-black px-6 py-2.5 text-xs font-medium text-white hover:bg-zinc-800 transition-all cursor-pointer"
                  >
                    Back to home
                  </Link>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-zinc-300 px-6 py-2.5 text-xs font-medium text-zinc-700 hover:border-black transition-all cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name * | Work email * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Work email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Company * | What would you like help with? * */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Organisation name"
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      What would you like help with? *
                    </label>
                    <select
                      required
                      value={formData.helpWith}
                      onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    >
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Team Size | Preferred Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Team Size <span className="text-zinc-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      placeholder="e.g. 10–25"
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Preferred Timing <span className="text-zinc-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.preferredTiming}
                      onChange={(e) => setFormData({ ...formData, preferredTiming: e.target.value })}
                      placeholder="e.g. Next month, Q3"
                      className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: What would you like to explore? (Optional notes) */}
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                    What would you like to explore? <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your team's goals, current AI adoption, or any specific challenges..."
                    className="w-full rounded-xl border border-zinc-200/90 bg-[#F6F6F6]/70 px-4 py-3 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all resize-none"
                  />
                </div>

                {/* Consent checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.newsletterConsent}
                      onChange={(e) => setFormData({ ...formData, newsletterConsent: e.target.checked })}
                      className="mt-0.5 rounded border-zinc-300 text-black focus:ring-black"
                    />
                    <span>
                      I would also like to receive AWE Intelligence news, learning resources and programme updates. I can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                {/* Privacy note */}
                <p className="text-[11px] text-zinc-500">
                  See our{" "}
                  <Link href="/privacy" className="underline hover:text-black">
                    Privacy Policy
                  </Link>{" "}
                  for how we use your information.
                </p>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-black px-10 py-3.5 text-sm font-medium text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-sm active:scale-[0.99] flex items-center gap-2"
                  >
                    <span>Send enquiry</span>
                    <span>→</span>
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
