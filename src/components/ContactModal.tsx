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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#FAF9F5] p-7 sm:p-9 shadow-2xl border border-zinc-200/90 overflow-y-auto max-h-[90vh] text-[#141815]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-black hover:border-zinc-400 transition-colors cursor-pointer text-sm"
          aria-label="Close dialog"
        >
          ✕
        </button>

        {formSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#18231E] text-white mx-auto flex items-center justify-center text-2xl font-bold shadow-sm">
              ✓
            </div>
            <h3 className="text-xl font-bold text-zinc-950">
              Thanks for getting in touch.
            </h3>
            <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed font-normal">
              We have received your enquiry and will contact you to discuss it.
            </p>
            <button
              onClick={onClose}
              className="rounded-full bg-[#18231E] px-7 py-3 text-sm font-medium text-white hover:bg-black transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-1.5 tracking-tight">
              {topic}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 mb-6 leading-relaxed font-normal">
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
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company or Organisation name"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  What would you like help with? *
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
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
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Team Size <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 10–25"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Preferred Timing <span className="text-zinc-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next month, Q3"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                  />
                </div>
              </div>

              {/* Marketing consent checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    className="mt-0.5 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                  />
                  <span className="leading-relaxed">
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
                className="w-full rounded-full bg-[#18231E] py-3.5 text-sm font-medium text-white hover:bg-black transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer mt-3"
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
