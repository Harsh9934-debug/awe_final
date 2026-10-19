"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialTopic = "Discuss training for my team",
}: ContactModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [topic, setTopic] = useState(initialTopic);
  const [marketingConsent, setMarketingConsent] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 shadow-2xl border border-zinc-200 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-black transition-colors"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {formSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center text-xl">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">
              Thanks for getting in touch.
            </h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
              We have received your enquiry and will contact you to discuss it.
            </p>
            <button
              onClick={onClose}
              className="rounded-full bg-[#18231E] px-6 py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-zinc-950 mb-1.5">
              {topic}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed">
              Tell us a little about your team and what you want to achieve.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company or Organisation name"
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">
                  What would you like help with? *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                >
                  <option value="Practical AI Training">
                    Practical AI Training
                  </option>
                  <option value="AI Adoption Advisory">
                    AI Adoption Advisory
                  </option>
                  <option value="Conscious Leadership in the Age of AI">
                    Conscious Leadership in the Age of AI
                  </option>
                  <option value="Discuss training for my team">
                    Discuss training for my team
                  </option>
                  <option value="Other enquiry">Other enquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Team Size <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10–25"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-700 mb-1">
                    Preferred Timing <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next month, Q3"
                    className="w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                  />
                </div>
              </div>

              {/* Marketing consent checkbox (optional and unticked) */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-0.5 rounded border-zinc-300 text-[#18231E] focus:ring-[#18231E]"
                  />
                  <span>
                    I would also like to receive AWE Intelligence news, learning resources and programme updates. I can unsubscribe at any time.
                  </span>
                </label>
              </div>

              <p className="text-[11px] text-zinc-500">
                See our{" "}
                <a href="/privacy" className="underline hover:text-black">
                  Privacy Policy
                </a>{" "}
                for how we use your information.
              </p>

              <button
                type="submit"
                className="w-full rounded-full bg-[#18231E] py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition-all cursor-pointer shadow-sm mt-3"
              >
                Send enquiry →
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
