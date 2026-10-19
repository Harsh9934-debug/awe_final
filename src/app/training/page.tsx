"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function TrainingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Discuss training for my team");
  const [enquiryHelpWith, setEnquiryHelpWith] = useState("Practical AI Training");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [discoveryModalOpen, setDiscoveryModalOpen] = useState(false);

  const handleOpenEnquiry = (topicName: string) => {
    setEnquiryHelpWith(topicName);
    setModalTopic(topicName);
    // Smooth scroll down to enquiry form or open modal
    const element = document.getElementById("enquire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231e] selection:text-white">
      {/* Navigation */}
      <Navbar
        currentPath="/training"
        onOpenModal={(topic) => {
          setModalTopic(topic);
          setModalOpen(true);
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center pt-24 pb-16 isolate">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/traininghero.png"
            alt="Corporate Training & Advisory"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/75 sm:via-[#FAF9F5]/50 to-transparent lg:w-[60%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-5">
              Corporate training and advisory
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Build your team’s ability to use AI well
            </h1>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-black leading-relaxed font-normal mb-8 max-w-lg">
              Practical learning shaped around your people, their work and the decisions they face. Start with the outcomes you want, then choose an appropriate training or advisory format.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleOpenEnquiry("Discuss training for my team")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-sm cursor-pointer"
              >
                <span>Discuss training for my team</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <a
                href="/#approach"
                className="inline-flex items-center justify-center rounded-full border border-zinc-400 bg-white/40 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-medium text-zinc-800 transition-all duration-200 hover:bg-white hover:border-zinc-500"
              >
                Explore our approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY TRAIN WITH AWE / MORE THAN TOOL TRAINING */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                Why train with AWE
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-5">
                More than<br />tool training.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed max-w-md">
                Our programmes combine practical AI skills with conscious leadership and a research-informed approach to human learning. We focus on real work, real decisions and lasting behaviour change.
              </p>
            </div>

            {/* Right Column: 3 Architectural Value Tiers */}
            <div className="lg:col-span-7 divide-y divide-zinc-200/70 pt-1">
              {/* Feature 1 */}
              <div className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6 group">
                <div className="w-11 h-11 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:border-zinc-900 group-hover:bg-[#18231E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-zinc-400 tracking-wider">01</span>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-950 tracking-tight">
                      Practical skills
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                    Hands-on practice with relevant use cases, clear prompting and critical evaluation.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6 group">
                <div className="w-11 h-11 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:border-zinc-900 group-hover:bg-[#18231E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-zinc-400 tracking-wider">02</span>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-950 tracking-tight">
                      Human-centred
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                    Connect AI adoption to purpose, responsibility and the people affected by it.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="py-6 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-6 group">
                <div className="w-11 h-11 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center shrink-0 shadow-2xs group-hover:border-zinc-900 group-hover:bg-[#18231E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5 text-zinc-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[11px] font-semibold text-zinc-400 tracking-wider">03</span>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-950 tracking-tight">
                      Lasting impact
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                    Build awareness, judgement and adaptability for better decisions over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE WAYS TO WORK WITH US / OUR TRAINING PROGRAMMES */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Sticky Narrative Anchor */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-3">
                Our training programmes
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4">
                Choose the right<br className="hidden sm:inline" /> starting point.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md mb-8">
                From introductory workshops to focused adoption programmes, we tailor each engagement to your team&apos;s goals, context and level of experience.
              </p>

              <div>
                <button
                  onClick={() => handleOpenEnquiry("Discuss training for my team")}
                  className="group inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-white/80 backdrop-blur-xs px-5 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-[#18231E] hover:text-white transition-all cursor-pointer shadow-2xs"
                >
                  <span>Talk to us about your team</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>

              {/* Quick Index Pills */}
              <div className="hidden lg:flex flex-col gap-2.5 pt-10 border-t border-zinc-200/60 mt-10 max-w-xs">
                <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">
                  Programmes
                </span>
                <span className="text-xs font-medium text-zinc-700 flex items-center gap-2.5">
                  <span className="font-mono text-zinc-400 text-[11px]">01</span> Practical AI Training
                </span>
                <span className="text-xs font-medium text-zinc-700 flex items-center gap-2.5">
                  <span className="font-mono text-zinc-400 text-[11px]">02</span> AI Adoption Advisory
                </span>
                <span className="text-xs font-medium text-zinc-700 flex items-center gap-2.5">
                  <span className="font-mono text-zinc-400 text-[11px]">03</span> Conscious Leadership in the Age of AI
                </span>
              </div>
            </div>

            {/* Right Column: Expansive Programme Showcases */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              {/* Programme 1: Practical AI Training */}
              <div className="group rounded-3xl bg-white/70 border border-zinc-200/80 p-5 sm:p-7 backdrop-blur-xs shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6 shadow-2xs">
                  <Image
                    src="/sec2.png"
                    alt="Practical AI Training"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-black/5 text-[10px] font-mono font-semibold text-zinc-800">
                    01 / PROGRAMME
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                    Practical AI Training
                  </h3>

                  <div className="mb-4 pb-4 border-b border-zinc-200/60">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      For
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-800 font-medium">
                      For teams developing their confidence and capability with AI.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      What happens
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      Explore relevant tools and use cases, practise clear prompting and learn how to assess an AI-generated answer. Exercises focus on real work and responsible use, so participants can identify practical next steps.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenEnquiry("Practical AI Training")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer shadow-2xs group/btn"
                  >
                    <span>Enquire about AI training</span>
                    <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Programme 2: AI Adoption Advisory */}
              <div className="group rounded-3xl bg-white/70 border border-zinc-200/80 p-5 sm:p-7 backdrop-blur-xs shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6 shadow-2xs">
                  <Image
                    src="/sec3.png"
                    alt="AI Adoption Advisory"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-black/5 text-[10px] font-mono font-semibold text-zinc-800">
                    02 / PROGRAMME
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                    AI Adoption Advisory
                  </h3>

                  <div className="mb-4 pb-4 border-b border-zinc-200/60">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      For
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-800 font-medium">
                      For organisations deciding where to begin or what to prioritise next.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      What happens
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      Work through your objectives, candidate use cases and the human checks they need. Define a focused starting point, identify the capabilities your team needs and agree how progress should be assessed.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenEnquiry("AI Adoption Advisory")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer shadow-2xs group/btn"
                  >
                    <span>Discuss your AI priorities</span>
                    <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Programme 3: Conscious Leadership in the Age of AI */}
              <div className="group rounded-3xl bg-white/70 border border-zinc-200/80 p-5 sm:p-7 backdrop-blur-xs shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-6 shadow-2xs">
                  <Image
                    src="/sec5sec.png"
                    alt="Conscious Leadership in the Age of AI"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF9F5]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-black/5 text-[10px] font-mono font-semibold text-zinc-800">
                    03 / PROGRAMME
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
                    Conscious Leadership in the Age of AI
                  </h3>

                  <div className="mb-4 pb-4 border-b border-zinc-200/60">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      For
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-800 font-medium">
                      For leaders navigating change and making decisions with AI in the picture.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">
                      What happens
                    </p>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      Explore judgement, accountability and communication through real leadership situations. Reflection and optional awareness practices sit alongside practical discussion of assumptions, uncertainty and the effects of decisions on others.
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenEnquiry("Conscious Leadership in the Age of AI")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer shadow-2xs group/btn"
                  >
                    <span>Explore leadership training</span>
                    <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK / A COLLABORATIVE PRACTICAL APPROACH */}
      <section className="w-full py-16 sm:py-24 border-t border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] bg-zinc-100">
              <Image
                src="/sec6.png"
                alt="A collaborative, practical approach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Right: 4 Steps */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                How we work
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 mb-8">
                A collaborative,<br />practical approach.
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-xs font-semibold text-zinc-800 shrink-0 shadow-2xs">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950 mb-1">
                      Understand your goals
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      We start with a conversation about where your team is today and what you want to achieve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-xs font-semibold text-zinc-800 shrink-0 shadow-2xs">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950 mb-1">
                      Design the right programme
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      We tailor the format, content and level to your needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-xs font-semibold text-zinc-800 shrink-0 shadow-2xs">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950 mb-1">
                      Deliver engaging, hands-on sessions
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      Practical learning, real examples and space for discussion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-xs font-semibold text-zinc-800 shrink-0 shadow-2xs">
                    04
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950 mb-1">
                      Support lasting impact
                    </h3>
                    <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                      Optional follow-up and resources to help your team keep learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A CONVERSATION ABOUT YOUR GOALS / ENQUIRY SECTION */}
      <section id="enquire" className="relative w-full overflow-hidden min-h-[540px] py-16 sm:py-24 isolate">
        {/* Background image: sunrise.png */}
        <Image
          src="/sunrise.png"
          alt="Misty mountain sunrise"
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
        />
        {/* Subtle gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 sm:via-[#FAF9F5]/60 to-transparent lg:w-3/5 w-full pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context */}
              <div className="lg:col-span-5">
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-700 mb-3">
                  Let&apos;s talk
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4">
                  Discuss training<br />for your team.
                </h2>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-6 max-w-md">
                  Book a 20-minute discovery conversation to discuss your team, priorities and the support you are looking for. Programme scope, format and delivery are agreed around your needs.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setDiscoveryModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-white/80 backdrop-blur-xs px-5 py-2.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-950 hover:text-white transition-all cursor-pointer shadow-2xs group"
                  >
                    <span>Book a discovery call</span>
                    <span className="transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                  <p className="text-[11px] text-zinc-600">
                    Or complete the form to share your details directly.
                  </p>
                </div>
              </div>

              {/* Right Column: Embedded Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md p-6 sm:p-8 shadow-xl border border-white/60 ring-1 ring-black/5 max-w-xl ml-auto">
                  {formSubmitted ? (
                    <div className="py-10 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center text-xl font-bold">
                        ✓
                      </div>
                      <h3 className="text-xl font-bold text-zinc-950">
                        Thanks for getting in touch.
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                        We have received your enquiry and will contact you to discuss it.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="rounded-full bg-[#18231E] px-5 py-2 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer mt-2"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-base font-bold text-zinc-950 mb-1">
                        Tell us a little about your team and what you want to achieve.
                      </h3>
                      <p className="text-xs text-zinc-500 mb-5">
                        We usually respond within one business day.
                      </p>

                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setFormSubmitted(true);
                        }}
                        className="space-y-3.5"
                      >
                        {/* Row 1: Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Jane Doe"
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="jane@company.com"
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>
                        </div>

                        {/* Row 2: Company & Help With */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              Company *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Organisation name"
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              What would you like help with? *
                            </label>
                            <select
                              value={enquiryHelpWith}
                              onChange={(e) => setEnquiryHelpWith(e.target.value)}
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
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
                              <option value="Other training or advisory support">
                                Other training or advisory support
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* Row 3: Team Size & Timing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              Team Size <span className="text-zinc-400 font-normal">(optional)</span>
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 10–25"
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                              Preferred Timing <span className="text-zinc-400 font-normal">(optional)</span>
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Next month, Q3"
                              className="w-full rounded-xl border border-zinc-200/90 bg-white/90 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>
                        </div>

                        <div className="pt-1">
                          <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer">
                            <input
                              type="checkbox"
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
                          className="w-full rounded-full bg-[#18231E] py-3 text-xs sm:text-sm font-medium text-white hover:bg-black transition-all cursor-pointer shadow-sm mt-2"
                        >
                          Send enquiry →
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Discovery modal placeholder */}
      {discoveryModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setDiscoveryModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDiscoveryModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-zinc-950 mb-2">
              Book a 20-minute discovery conversation
            </h3>
            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              Our calendar booking system is being linked. Please enter your preferred day or complete the enquiry form and our team will provide immediate time slots.
            </p>
            <button
              onClick={() => {
                setDiscoveryModalOpen(false);
                const el = document.getElementById("enquire");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full rounded-full bg-[#18231E] py-2.5 text-xs font-medium text-white hover:bg-black transition-all"
            >
              Continue to Enquiry Form →
            </button>
          </div>
        </div>
      )}

      {/* Shared Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />

      {/* Footer */}
      <Footer
        onOpenModal={(topic) => {
          setModalTopic(topic);
          setModalOpen(true);
        }}
      />
    </div>
  );
}
