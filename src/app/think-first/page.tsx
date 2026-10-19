"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from "@/components/MotionWrapper";

export default function ThinkFirstPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Discuss training for my team");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToUpdates = () => {
    const el = document.getElementById("updates");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const lessons = [
    {
      num: "01",
      title: "Why thinking first matters",
      desc: "How fast answers bypass critical evaluation, and why pausing creates an immediate advantage.",
    },
    {
      num: "02",
      title: "Five risks to watch for",
      desc: "Recognising hallucinations, unsupported assumptions, unvetted bias, omission and cognitive surrender.",
    },
    {
      num: "03",
      title: "Frame the task before you prompt",
      desc: "Defining clear objectives, boundaries, tone, and constraints before opening an AI tool.",
    },
    {
      num: "04",
      title: "Check the answer",
      desc: "Techniques for stress-testing responses, verifying sources, and isolating speculation.",
    },
    {
      num: "05",
      title: "Make and own the decision",
      desc: "Separating AI draft production from human accountability and executive decision rights.",
    },
    {
      num: "06",
      title: "Build your everyday AI practice",
      desc: "Integrating regular habits of attention, reflection and deliberate practice into your workflow.",
    },
  ];

  const faqItems = [
    {
      question: "Who is the course for?",
      answer:
        "Designed for leaders and professionals who want to use AI with greater care and intention.",
    },
    {
      question: "Can my team take part?",
      answer:
        "Contact us to discuss team learning and any support you need.",
    },
    {
      question: "When can I join?",
      answer:
        "Register your interest below to receive availability, previews and enrolment details as soon as cohorts open.",
    },
    {
      question: "Do I need technical experience?",
      answer:
        "No technical background or coding skills are needed. The course focuses on human judgement, strategic prompting and critical evaluation.",
    },
    {
      question: "Can I access the course on mobile?",
      answer:
        "Yes, all video lessons, worksheets and exercises are optimized for mobile, tablet, and desktop.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231E] selection:text-white">
      {/* Navbar */}
      <Navbar
        currentPath="/academy"
        onOpenModal={(topic) => {
          setModalTopic(topic);
          setModalOpen(true);
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[90vh] flex items-center pt-32 pb-20 isolate">
        {/* Background image with warm ivory gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/think-firsthero.png"
            alt="Think First"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 sm:via-[#FAF9F5]/70 to-transparent lg:w-[62%] w-full pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent h-32 bottom-0 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            <FadeUp delay={0.05}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-md px-3.5 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-6 shadow-2xs">
                <span>Think First</span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.12}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-5">
                AI skills.<br />
                Human wisdom.<br />
                Better decisions.
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.18}>
              <p className="text-base sm:text-lg font-semibold text-zinc-800 mb-4">
                A practical approach to working thoughtfully with AI.
              </p>
            </FadeUp>

            {/* Paragraph */}
            <FadeUp delay={0.24}>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-4 max-w-lg">
                AI can help you explore ideas and produce answers quickly. Think First introduces a way to frame the task, examine the response and decide what to do with it.
              </p>
            </FadeUp>

            <FadeUp delay={0.28}>
              <p className="text-xs sm:text-sm text-zinc-500 mb-8 italic">
                Who it is for: Designed for leaders and professionals who want to use AI with greater care and intention.
              </p>
            </FadeUp>

            {/* Buttons */}
            <FadeUp delay={0.34}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={scrollToUpdates}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#18231E] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Get course updates</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300/80 bg-white/60 backdrop-blur-md px-6 py-3.5 text-sm font-medium text-zinc-800 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white hover:border-zinc-400 active:scale-[0.98] cursor-pointer"
                >
                  <span>Watch the trailer</span>
                  <span className="text-xs">▷</span>
                </button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. FOUR FEATURES ROW */}
      <section className="w-full py-16 border-y border-zinc-200/80 bg-white/50 backdrop-blur-xs">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <StaggerItem>
              <HoverCard className="flex flex-col items-start p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs h-full">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Practical AI skills
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Learn through real examples and hands-on exercises you can apply straight away.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="flex flex-col items-start p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs h-full">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Greater self-awareness
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Explore the human qualities that support clearer thinking and better decisions.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="flex flex-col items-start p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs h-full">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Real-world application
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Use AI more effectively at work and in life decisions.
                </p>
              </HoverCard>
            </StaggerItem>

            <StaggerItem>
              <HoverCard className="flex flex-col items-start p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-xs h-full">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center mb-4 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Learn at your own pace
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Flexible, on-demand learning for busy professionals.
                </p>
              </HoverCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. SECTION 01: ABOUT THE COURSE / WHAT YOU WILL PRACTISE */}
      <section className="w-full py-20 sm:py-28">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Practise points */}
            <FadeUp>
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                <span className="font-mono text-xs">01</span>
                <span className="w-10 h-px bg-zinc-300"></span>
              </div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                About the course
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
                A more thoughtful way<br />to work with AI.
              </h2>
              <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                Think First combines practical AI learning with conscious leadership and a research-informed approach to human awareness. Here is what you will practise:
              </p>

              <ul className="space-y-3.5 text-zinc-700 text-sm leading-relaxed mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400 mt-1 select-none">•</span>
                  <span>Clarifying the task before asking AI to help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400 mt-1 select-none">•</span>
                  <span>Recognising risks in how you use and interpret AI-generated answers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400 mt-1 select-none">•</span>
                  <span>Checking evidence and assumptions before relying on an output.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-zinc-400 mt-1 select-none">•</span>
                  <span>Making and owning the final decision.</span>
                </li>
              </ul>

              <button
                onClick={scrollToUpdates}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#18231E] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Get course updates</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </FadeUp>

            {/* Right Column: Video Preview Card */}
            <FadeUp delay={0.15}>
              <div
                onClick={() => setVideoModalOpen(true)}
                className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[16/10] bg-zinc-900 cursor-pointer border border-zinc-200/80"
              >
                <Image
                  src="/sunrise.png"
                  alt="Think First preview"
                  fill
                  className="object-cover opacity-85 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                    <span className="text-zinc-900 text-xl ml-1">▶</span>
                  </div>
                  <span className="font-serif italic text-2xl sm:text-3xl font-light text-white tracking-widest drop-shadow-md">
                    THINK FIRST
                  </span>
                  <span className="text-xs uppercase tracking-wider text-white/80 mt-1 font-medium">
                    Watch course trailer
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. SECTION 02: SIX SHORT LESSONS & WHAT'S INCLUDED */}
      <section className="w-full py-20 sm:py-28 border-t border-zinc-200/80 bg-white/40">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-2">
                  <span className="font-mono text-xs">02</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-1">
                  What you&apos;ll learn
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Course curriculum
                </h2>
              </div>
              <p className="text-xs text-zinc-500 mt-2 md:mt-0 font-medium">
                6 modules · Self-paced · On-demand access
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: 6 Lessons */}
            <div className="lg:col-span-7 divide-y divide-zinc-200/90 border-t border-b border-zinc-200/90">
              {lessons.map((lesson) => (
                <div key={lesson.num} className="py-5 sm:py-6 flex items-start gap-5 group hover:bg-white/40 transition-colors px-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-xs font-semibold text-zinc-800 shrink-0 mt-0.5 shadow-2xs group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                    {lesson.num}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-950 mb-1.5 group-hover:text-black transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {lesson.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: What's included card */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <div className="rounded-3xl border border-zinc-200/80 bg-white p-7 sm:p-8 shadow-md">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-zinc-100 border border-zinc-100">
                    <Image
                      src="/sec3.png"
                      alt="Workplace and study format"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-3 tracking-tight">
                    The Learning Format
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-5">
                    Six video lessons of approximately 4–6 minutes each, with a summary, an exercise and a downloadable template for every lesson. Allow 24–36 minutes for the videos, plus time to complete the exercises and apply them to your work.
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700 mb-8 divide-y divide-zinc-100">
                    <li className="flex items-center gap-2.5 pt-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>On-demand video lessons</span>
                    </li>
                    <li className="flex items-center gap-2.5 pt-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>Practical exercises and templates</span>
                    </li>
                    <li className="flex items-center gap-2.5 pt-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>Reflection practices (optional breathwork)</span>
                    </li>
                    <li className="flex items-center gap-2.5 pt-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>Lifetime self-paced access</span>
                    </li>
                    <li className="flex items-center gap-2.5 pt-1.5">
                      <span className="text-zinc-900 font-bold">✓</span>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>

                  <button
                    onClick={scrollToUpdates}
                    className="w-full rounded-full bg-[#18231E] py-3.5 text-xs sm:text-sm font-medium text-white hover:bg-black transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer text-center"
                  >
                    Get course updates →
                  </button>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: YOUR GUIDE (SEAN LEE-DAVIES) */}
      <section className="w-full py-20 sm:py-28 border-t border-zinc-200/80">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Sean's Portrait */}
            <FadeUp>
              <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-zinc-100 border border-zinc-200/80 group">
                <Image
                  src="/sec6.png"
                  alt="Sean Lee-Davies"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </FadeUp>

            {/* Right: Bio */}
            <FadeUp delay={0.15}>
              <div>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">03</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                  Your Guide
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-4">
                  Meet Sean Lee-Davies
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                  Sean Lee-Davies is the founder of AWE Intelligence and Awethentic Group, a conscious leadership mentor, filmmaker and three-time TEDx speaker. His work explores the relationship between technology, leadership and human potential.
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  Through Think First, Sean brings his experience in storytelling, leadership and experiential learning to help you explore how to work with emerging technology while strengthening the human qualities you bring to it.
                </p>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 hover:text-black border-b border-black pb-0.5"
                >
                  <span>Read more about Sean</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 6. SECTION 04: QUESTIONS / FAQ */}
      <section className="w-full py-20 sm:py-28 border-t border-zinc-200/80 bg-white/40">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">04</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                  Frequently Asked Questions
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  Questions
                </h2>
              </FadeUp>
            </div>

            <div className="lg:col-span-7 divide-y divide-zinc-200/90 border-t border-zinc-200/90">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="transition-colors duration-200">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer py-5"
                    >
                      <span className="text-sm sm:text-base font-semibold text-zinc-900 group-hover:text-black tracking-tight transition-colors">
                        {item.question}
                      </span>
                      <span
                        className={`ml-4 w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-xs font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 ${
                          isOpen
                            ? "bg-[#18231E] text-white border-[#18231E] rotate-45"
                            : "bg-white text-zinc-600 group-hover:border-zinc-900 group-hover:text-black"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-5 pr-8 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 05: GET COURSE UPDATES FORM */}
      <section id="updates" className="w-full py-20 sm:py-28">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 min-h-[480px] p-8 sm:p-12 lg:p-16 isolate">
              {/* Background Image: sunrise.png */}
              <Image
                src="/sunrise.png"
                alt="Serene sunrise"
                fill
                className="object-cover object-center z-0"
              />
              {/* Soft gradient overlay matching ivory palette */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 sm:via-[#FAF9F5]/75 to-transparent lg:w-3/5 w-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 relative">
                {/* Left Context */}
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 backdrop-blur-md px-3 py-1 text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-700 mb-4">
                    Register Interest
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 mb-4 leading-tight">
                    Ready to think first?
                  </h2>
                  <p className="text-sm text-zinc-700 leading-relaxed max-w-md mb-4">
                    Join Think First and gain the skills, awareness and judgement to work with AI more effectively. Register your interest to receive course availability, previews and enrolment details.
                  </p>
                  <p className="text-xs text-zinc-600 italic">
                    Launch edition is register-interest only. No payment or checkout required at this stage.
                  </p>
                </div>

                {/* Right: Registration Form */}
                <div className="lg:col-span-6">
                  <div className="rounded-3xl bg-white/95 backdrop-blur-md p-7 sm:p-9 shadow-xl border border-zinc-200/80 max-w-md ml-auto">
                    {formSubmitted ? (
                      <div className="py-8 text-center space-y-4">
                        <div className="w-12 h-12 rounded-full bg-[#18231E] text-white mx-auto flex items-center justify-center text-xl font-bold shadow-sm">
                          ✓
                        </div>
                        <h3 className="text-lg font-bold text-zinc-950">
                          Thank you for registering.
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xs mx-auto">
                          We have recorded your interest in Think First. You will be among the first to receive enrollment dates and module previews.
                        </p>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="rounded-full bg-[#18231E] px-6 py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer mt-2"
                        >
                          Register another email
                        </button>
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-lg font-bold text-zinc-950 mb-1">
                          Get Course Updates
                        </h3>
                        <p className="text-xs text-zinc-500 mb-6">
                          Register your interest in Think First.
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
                              Email *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="jane@company.com"
                              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all"
                            />
                          </div>

                          <div className="pt-1">
                            <label className="flex items-start gap-2.5 text-xs text-zinc-600 cursor-pointer">
                              <input
                                type="checkbox"
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
                            Get course updates →
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Video Modal Placeholder */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 p-6 sm:p-8 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-sm"
            >
              ✕
            </button>
            <div className="aspect-video bg-zinc-900 rounded-2xl flex flex-col items-center justify-center text-center p-8">
              <span className="text-3xl mb-2">▶</span>
              <h3 className="text-lg font-semibold mb-1">Think First Course Trailer</h3>
              <p className="text-xs text-zinc-400 max-w-md">
                Course video trailer preview will play here. Register your interest to receive full access once enrolment opens.
              </p>
              <button
                onClick={() => {
                  setVideoModalOpen(false);
                  scrollToUpdates();
                }}
                className="mt-6 rounded-full bg-white text-zinc-950 px-6 py-2.5 text-xs font-semibold hover:bg-zinc-200 transition-colors"
              >
                Register for updates →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
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
