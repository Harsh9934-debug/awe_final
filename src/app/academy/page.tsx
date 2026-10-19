"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";

export default function AcademyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Discuss training for my team");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do I need technical experience?",
      answer:
        "No prior technical experience is required. The courses are designed for leaders, professionals and curious learners at any level who want to use AI with greater intention.",
    },
    {
      question: "How long do the courses take?",
      answer:
        "Think First consists of six bite-sized video lessons of 4–6 minutes each, plus exercises. Total video run time is 24–36 minutes, designed for self-paced completion.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, participants who complete all lessons and application exercises will receive a verified certificate of completion.",
    },
    {
      question: "Can I access the courses on mobile?",
      answer:
        "Yes, all modules, videos, and reflection exercises are completely responsive and accessible on your smartphone, tablet, or desktop.",
    },
    {
      question: "Do you offer courses for teams?",
      answer:
        "Yes. We support team cohorts with live reflection sessions, custom use-case reviews and enterprise access. Contact us to discuss options.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E8E0DB] text-[#1A1A22] flex flex-col antialiased selection:bg-[#1A1A22] selection:text-white">
      {/* Navbar */}
      <Navbar
        currentPath="/academy"
        onOpenModal={(topic) => {
          setModalTopic(topic);
          setModalOpen(true);
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center pt-24 pb-16 isolate">
        {/* Background image using Next.js Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/academyhero.png"
            alt="AWE Academy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8E0DB]/99 via-[#E8E0DB]/95 sm:via-[#E8E0DB]/50 to-transparent lg:w-[60%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-5">
              Academy
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
              Develop your practice, one lesson at a time.
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-black leading-relaxed font-normal mb-8 max-w-lg">
              Explore self-paced learning that brings practical AI skills together with thoughtful decision-making. Build a habit of asking better questions, checking the answers and keeping your own judgement involved.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#courses"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1A4EAB] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-[#123A80] hover:shadow-sm cursor-pointer"
              >
                <span>Explore our courses</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#why"
                className="inline-flex items-center justify-center rounded-full border border-zinc-400 bg-white/40 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-medium text-zinc-800 transition-all duration-200 hover:bg-white hover:border-zinc-500"
              >
                Why learn with us?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 01: WHY THE ACADEMY */}
      <section id="why" className="w-full py-16 sm:py-20 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-2">
                <span className="font-mono text-xs">01</span>
                <span className="w-10 h-px bg-zinc-300"></span>
              </div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                Why the Academy
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 leading-tight mb-4">
                Practical skills.<br />
                Deeper understanding.<br />
                Real-world application.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-md">
                Our courses combine practical AI skills with conscious leadership and a research-informed approach to human learning — so you can use AI more effectively, stay human-centred and make better decisions.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-col items-start p-2">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center mb-3 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Build practical skills
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Learn through real examples and hands-on exercises you can apply straight away.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-start p-2">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center mb-3 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Develop awareness
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Explore the human qualities that support clearer thinking and better decisions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-start p-2">
                <div className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center mb-3 shadow-2xs">
                  <svg className="w-5 h-5 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-zinc-950 mb-1.5">
                  Learn at your own pace
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Flexible, on-demand courses designed for busy professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 02: EXPLORE OUR COURSES */}
      <section id="courses" className="w-full py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-12">
            <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-2">
              <span className="font-mono text-xs">02</span>
              <span className="w-10 h-px bg-zinc-300"></span>
            </div>
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-1">
              Our Courses
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-zinc-950">
              Explore our courses
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-xl">
              Start with our flagship course or explore our growing library of practical and reflective learning experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1: Think First (Featured) */}
            <div className="rounded-2xl border border-zinc-300/80 bg-[#E8E0DB] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
              <div>
                <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden">
                  <Image
                    src="/sec5one.png"
                    alt="Think First Course"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Think First
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4">
                    A practical approach to working thoughtfully with AI. Introduces a structured way to frame the task, examine the response and make sound decisions.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/think-first"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1A4EAB] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#123A80] transition-all"
                >
                  <span>Learn more about Think First</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Course 2: Practical AI Skills (Coming soon) */}
            <div className="rounded-2xl border border-zinc-200/90 bg-[#E8E0DB] overflow-hidden flex flex-col justify-between shadow-2xs">
              <div>
                <div className="relative aspect-[16/10] bg-zinc-100 opacity-90">
                  <Image
                    src="/sec3.png"
                    alt="Practical AI Skills Course"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-200 text-zinc-700 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Practical AI Skills
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4">
                    Hands-on training to help you apply AI to real work, with clear prompting and critical evaluation techniques.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setModalTopic("Get updates on Practical AI Skills");
                    setModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-zinc-400 px-4 py-2 text-xs font-medium text-zinc-800 hover:bg-white hover:border-black transition-all cursor-pointer"
                >
                  <span>Get updates</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Course 3: Human Wisdom for Modern Leaders */}
            <div className="rounded-2xl border border-zinc-200/90 bg-[#E8E0DB] overflow-hidden flex flex-col justify-between shadow-2xs">
              <div>
                <div className="relative aspect-[16/10] bg-zinc-100 opacity-90">
                  <Image
                    src="/sunrise.png"
                    alt="Human Wisdom for Modern Leaders"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-200 text-zinc-700 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">
                    Human Wisdom for Modern Leaders
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4">
                    Reflection, attention and decision-making tools to navigate change with greater clarity and purpose.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setModalTopic("Get updates on Human Wisdom for Modern Leaders");
                    setModalOpen(true);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-zinc-400 px-4 py-2 text-xs font-medium text-zinc-800 hover:bg-white hover:border-black transition-all cursor-pointer"
                >
                  <span>Get updates</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-5. SECTIONS 03 + 04 AS STACKING CARDS */}
      <section className="w-full py-10 sm:py-16 border-t border-zinc-200/60">
        <StackingCards
          totalCards={2}
          className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10"
        >
          {/* Card 1 — Section 03: Featured Course */}
          <StackingCardItem index={0} className="h-screen">
            <div className="h-[80%] sm:h-[76%] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-[#F6F6F6] shadow-xl grid grid-cols-1 lg:grid-cols-2">
              {/* Course Details */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">03</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                  Featured course
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-2">
                  Think First
                </h2>
                <p className="text-sm sm:text-base font-semibold text-zinc-800 mb-4">
                  AI skills. Human wisdom. Better decisions.
                </p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-8 max-w-lg">
                  A practical approach to working thoughtfully with AI. A
                  self-paced course to help you understand how AI works, where it
                  can help, and how to use it thoughtfully — while growing the
                  awareness and judgement to make better decisions in a
                  fast-changing world.
                </p>
                <div className="flex items-center gap-3">
                  <Link
                    href="/think-first"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#1A4EAB] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#123A80] hover:shadow-sm"
                  >
                    <span>Learn more about Think First</span>
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Video Preview */}
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative min-h-[240px] lg:min-h-full bg-zinc-900 group cursor-pointer"
              >
                <Image
                  src="/sunrise.png"
                  alt="Think First Video Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-85 group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                    <span className="text-zinc-900 text-xl ml-1">▶</span>
                  </div>
                  <span className="font-serif italic text-2xl sm:text-3xl font-light text-zinc-900 tracking-wider">
                    THINK FIRST
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-zinc-700 mt-1 font-medium">
                    Watch course trailer
                  </span>
                </div>
              </div>
            </div>
          </StackingCardItem>

          {/* Card 2 — Section 04: Team Learning */}
          <StackingCardItem index={1} className="h-screen">
            <div className="h-[80%] sm:h-[76%] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[240px] lg:min-h-full bg-zinc-100">
                <Image
                  src="/sec2.png"
                  alt="Team learning with AWE"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">04</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                  Team Learning
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 mb-4">
                  Looking for a shared learning experience for your team?
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed mb-8 max-w-lg">
                  Talk to us about the options. We can help you adapt Think First
                  or develop a custom learning path for your organisation, with
                  live sessions, facilitated discussions and practical
                  application exercises.
                </p>
                <Link
                  href="/training#enquire"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#1A4EAB] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#123A80] hover:shadow-xs"
                >
                  <span>Talk to us about team learning</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </StackingCardItem>
        </StackingCards>
      </section>

      {/* 6. SECTION 05: FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="w-full py-16 sm:py-24 border-t border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                <span className="font-mono text-xs">05</span>
                <span className="w-10 h-px bg-zinc-300"></span>
              </div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-1">
                General Questions
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Frequently asked<br />questions
              </h2>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 divide-y divide-zinc-200">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className="py-4 sm:py-4.5">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-medium text-zinc-900 group-hover:text-black">
                        {item.question}
                      </span>
                      <span className="ml-4 text-zinc-400 group-hover:text-zinc-700 text-lg font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-2.5 pr-6 text-xs sm:text-[13px] text-zinc-600 leading-relaxed transition-all">
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

      {/* Video Modal Placeholder */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-zinc-950 p-6 sm:p-8 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white"
            >
              ✕
            </button>
            <div className="aspect-video bg-zinc-900 rounded-xl flex flex-col items-center justify-center text-center p-8">
              <span className="text-3xl mb-2">▶</span>
              <h3 className="text-lg font-semibold mb-1">Think First Course Trailer</h3>
              <p className="text-xs text-zinc-400 max-w-md">
                Course video trailer preview will be loaded here. Register your interest to receive full access upon launch.
              </p>
              <Link
                href="/think-first#updates"
                onClick={() => setVideoModalOpen(false)}
                className="mt-6 rounded-full bg-white text-zinc-950 px-5 py-2 text-xs font-medium hover:bg-zinc-200"
              >
                Register for updates →
              </Link>
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
