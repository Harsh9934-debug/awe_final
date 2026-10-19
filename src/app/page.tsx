"use client";

import Image from "next/image";
import { useState } from "react";
import StackingCards, {
  StackingCardItem,
} from "@/components/ui/stacking-cards";

export default function Home() {
  // State for interactive FAQ accordion (Section 07)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // State for Research accordion (Section 08)
  const [openResearch, setOpenResearch] = useState<number | null>(null);

  // State for Contact Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Discuss training for my team");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleResearch = (index: number) => {
    setOpenResearch(openResearch === index ? null : index);
  };

  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  const handleExploreResearch = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenResearch(0);
    const element = document.getElementById("research");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqItems = [
    {
      id: "01",
      category: "Audience & Scope",
      tag: "All Levels",
      question: "Who is the training for?",
      answer:
        "Leaders and teams who want to understand how AI applies to their work and develop a more thoughtful way to use it. Whether you are an executive framing strategic direction or an operational team adopting generative tools, our programmes meet you at your current capability.",
    },
    {
      id: "02",
      category: "Prerequisites",
      tag: "Zero Tech Prerequisite",
      question: "Do we need technical experience?",
      answer:
        "No technical or programming background is necessary. Tell us about your team’s starting point — we design the curriculum around your everyday workflows, cognitive discernment, and high-leverage prompting frameworks.",
    },
    {
      id: "03",
      category: "Curriculum",
      tag: "Selective & Tailored",
      question: "Does every session include meditation or breathwork?",
      answer:
        "Awareness practices are optional and selected to suit the agreed programme. Practical AI learning remains the primary foundation, with reflection techniques introduced as practical tools for cognitive regulation and decision clarity.",
    },
    {
      id: "04",
      category: "Logistics",
      tag: "Global & Hybrid",
      question: "Where do you deliver?",
      answer:
        "We deliver in-person keynotes, executive workshops, and multi-day programmes internationally (including London, Singapore, Hong Kong, Bangkok, and across Europe), as well as interactive live virtual programmes worldwide.",
    },
  ];

  const researchItems = [
    {
      id: "01",
      category: "Cognitive Control",
      title: "Attention and self-regulation",
      authorYear: "Tang et al. · 2007",
      content:
        "Tang and colleagues (2007) randomly assigned 80 Chinese undergraduates to five days of integrative body–mind training or relaxation training. The meditation group improved on a measure of executive attention and showed differences in mood and stress responses.",
      boundary:
        "The study tested a specific, supported training protocol under controlled conditions, not a brief workplace exercise or business decision performance.",
      source:
        "Tang et al. 2007 — Short-term meditation training improves attention and self-regulation",
    },
    {
      id: "02",
      category: "Neuroimaging",
      title: "Brain networks involved in executive control",
      authorYear: "Taren et al. · 2017",
      content:
        "Taren and colleagues (2017) studied 35 stressed unemployed adults assigned to a three-day mindfulness or relaxation programme. They reported differences in resting-state functional connectivity involving executive-control networks.",
      boundary:
        "This small neuroimaging study offers a possible mechanism to investigate; it did not establish improved executive performance or better real-world decisions.",
      source:
        "Taren et al. 2017 — Mindfulness meditation training and executive control network connectivity",
    },
    {
      id: "03",
      category: "Physiological Regulation",
      title: "Structured breathing and emotional state",
      authorYear: "Balban et al. · 2023",
      content:
        "Balban and colleagues (2023) studied daily five-minute breathing exercises and mindfulness meditation over 28 days. The trial found improvements in mood and reductions in respiratory rate, with particularly promising findings for exhale-focused cyclic sighing.",
      boundary:
        "Decision quality was not measured. These results support exploring structured breathing for emotional state, not a claim that it produces better decisions.",
      source:
        "Balban et al. 2023 — Brief structured respiration practices enhance mood and reduce physiological arousal",
    },
    {
      id: "04",
      category: "Behavioral Economics",
      title: "Mindfulness and a specific decision bias",
      authorYear: "Hafenbrack et al. · 2014 & 2022",
      content:
        "Hafenbrack, Kinias and Barsade (2014) reported that a brief mindfulness exercise reduced susceptibility to sunk-cost bias in experimental decision scenarios. This concerns one kind of bias under study conditions, rather than general decision-making ability.",
      boundary:
        "Evidence is mixed. A 2022 study using a different intervention design did not find mindfulness superior to relaxation on sunk-cost bias. Duration, comparison condition and setting matter, so neither result should be presented as a universal effect.",
      source:
        "Hafenbrack et al. 2014 — Debiasing the mind through meditation; 2022 counterevidence — Meditation in the workplace",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231e] selection:text-white">
      {/* 1. NAVIGATION BAR (Floating transparent header seamlessly positioned over hero) */}
      <header className="absolute top-0 left-0 right-0 z-30 w-full transition-all">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 h-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="AWE Intelligence">
            <Image
              src="/logo-black.png"
              alt="AWE Intelligence"
              width={236}
              height={100}
              priority
              className="h-7 w-auto"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 text-[13px] font-normal text-zinc-700">
            <a
              href="/training"
              className="hover:text-black transition-colors"
            >
              Training &amp; Advisory
            </a>
            <span className="text-zinc-400 text-xs select-none">·</span>
            <a
              href="#approach"
              className="hover:text-black transition-colors"
            >
              Our Approach
            </a>
            <span className="text-zinc-400 text-xs select-none">·</span>
            <a
              href="/academy"
              className="hover:text-black transition-colors"
            >
              Academy
            </a>
            <span className="text-zinc-400 text-xs select-none">·</span>
            <a
              href="#about"
              className="hover:text-black transition-colors"
            >
              About
            </a>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => handleOpenModal("Discuss training for my team")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-sm cursor-pointer"
            >
              <span>Discuss training for my team</span>
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-3 pb-6 border-b border-zinc-200/80 bg-[#FAF9F5]/98 backdrop-blur-md shadow-lg flex flex-col gap-4">
            <a
              href="/training"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-black"
            >
              Training &amp; Advisory
            </a>
            <a
              href="#approach"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-black"
            >
              Our Approach
            </a>
            <a
              href="/academy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-black"
            >
              Academy
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-black"
            >
              About
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenModal("Discuss training for my team");
              }}
              className="w-full text-center rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-all"
            >
              Discuss training for my team →
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center pt-24 pb-16 isolate">
        {/* Background hero image with cover placement */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="AWE Intelligence"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Subtle gradient overlay to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/75 sm:via-[#FAF9F5]/50 to-transparent lg:w-[60%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-5">
              AI training for leaders and teams
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
              AI skills.
              <br />
              Human wisdom.
              <br />
              Better decisions.
            </h1>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mb-8 max-w-lg">
              Learn to apply AI to real work while developing the judgement,
              adaptability and awareness to use it thoughtfully. AWE Intelligence
              combines practical AI training with conscious leadership and a
              research-informed approach to human learning.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleOpenModal("Explore training for your team")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-sm cursor-pointer"
              >
                <span>Explore training for your team</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center rounded-full border border-zinc-400 bg-white/40 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-medium text-zinc-800 transition-all duration-200 hover:bg-white hover:border-zinc-500"
              >
                Discover our approach
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3-4. SECTIONS 02 + 03 AS STACKING CARDS */}
      <section id="training" className="w-full py-10 sm:py-16">
        <StackingCards
          totalCards={2}
          className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10"
        >
          {/* Card 1 — Section 02 */}
          <StackingCardItem index={0} className="h-screen">
            <div className="h-[80%] sm:h-[76%] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-[#EFEEE8] shadow-xl grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[220px] lg:min-h-full bg-zinc-100">
                <Image
                  src="/sec2.png"
                  alt="Colleagues discussing AI and workplace training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">02</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 leading-tight mb-5">
                  AI has changed the work.
                  <br />
                  Now we need to change the training.
                </h2>

                <p className="text-zinc-600 leading-relaxed text-sm mb-5">
                  AI is changing how we research, create, communicate and make
                  decisions. The opportunity starts with understanding where it
                  can help, then building the skills to use it well.
                </p>

                <p className="text-zinc-800 font-medium text-sm mb-3">
                  Our training connects practical exercises with the questions
                  that matter at work:
                </p>

                <ul className="space-y-2 text-zinc-600 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>What are we trying to achieve?</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>Can we trust this answer?</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>Where do we need human expertise?</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>What should we do next?</span>
                  </li>
                </ul>
              </div>
            </div>
          </StackingCardItem>

          {/* Card 2 — Section 03 */}
          <StackingCardItem index={1} className="h-screen">
            <div className="h-[80%] sm:h-[76%] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="order-2 lg:order-1 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">03</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-zinc-950 leading-tight mb-6">
                  Make AI useful in
                  <br />
                  everyday work.
                </h2>

                <ul className="space-y-3.5 text-zinc-600 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>Find relevant use cases for your role and team.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span className="italic text-zinc-700">
                      Give AI clear instructions, useful context and meaningful
                      constraints.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>
                      Review outputs for accuracy, relevance and unsupported
                      assumptions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>
                      Recognise when to seek expert advice or keep a decision
                      with a person.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-zinc-400 mt-0.5 select-none">•</span>
                    <span>
                      Turn what you learn into a practical next step for your
                      organisation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 relative min-h-[220px] lg:min-h-full bg-zinc-100">
                <Image
                  src="/sec3.png"
                  alt="Workspace with laptop, notebook and coffee"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </StackingCardItem>
        </StackingCards>
      </section>

      {/* 5. SECTION 04: START WITH YOUR TEAM (SUNRISE BANNER) */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md ring-1 ring-black/5 min-h-[380px] sm:min-h-[440px] flex items-center p-10 sm:p-14 lg:p-20">
            {/* Background Image: sunrise.png */}
            <Image
              src="/sunrise.png"
              alt="Serene sunrise over mountain ridge"
              fill
              priority
              className="object-cover object-center z-0"
            />

            {/* White gradient overlay for text legibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/85 sm:via-[#FAF9F5]/65 to-transparent lg:w-4/5 w-full pointer-events-none" />

            {/* Content overlay */}
            <div className="relative max-w-xl z-10">
              {/* Section Tag */}
              <div className="flex items-center gap-3 text-zinc-600 font-medium text-sm mb-5">
                <span className="font-mono text-xs tracking-wider">04</span>
                <span className="w-12 h-px bg-zinc-400"></span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-zinc-950 leading-[1.05] mb-5">
                Start with your team.
              </h2>

              {/* Description */}
              <p className="text-zinc-700 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Tell us where your team is today and what you want to achieve.
                We can help you explore the right starting point, from an
                introductory workshop to a focused adoption programme.
              </p>

              {/* Button */}
              <button
                onClick={() => handleOpenModal("Discuss training for my team")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-7 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md cursor-pointer"
              >
                <span>Discuss training for my team</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 05: OUR APPROACH / HUMAN FIRST BY DESIGN */}
      <section id="approach" className="w-full py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-2">
              <span className="font-mono text-xs">05</span>
              <span className="w-10 h-px bg-zinc-300"></span>
            </div>
            <p className="text-[11px] font-medium text-zinc-500 mb-1">
              Our Approach
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-zinc-950 mb-3">
              Human First by Design.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 max-w-2xl leading-relaxed">
              The tools will keep changing. Our approach gives people a way to
              keep learning: practise on real tasks, question the output and take
              responsibility for the decision.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-14 items-stretch">
            {/* Pillar 1: Practical AI Skills */}
            <div className="relative flex flex-col h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-zinc-100">
                <Image
                  src="/sec5one.png"
                  alt="Practical AI Skills"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-col px-6 pt-11 pb-7">
                <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-[#18231E] flex items-center justify-center shadow-lg ring-4 ring-white">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <path d="M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 mb-2">
                  Practical AI skills
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Build confidence through relevant examples and hands-on
                  practice. Learn how to frame a task, write useful prompts,
                  evaluate responses and apply AI where it adds value.
                </p>
              </div>
            </div>

            {/* Pillar 2: Conscious Leadership */}
            <div className="relative flex flex-col h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-zinc-100">
                <Image
                  src="/sec5sec.png"
                  alt="Conscious Leadership"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-col px-6 pt-11 pb-7">
                <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-[#18231E] flex items-center justify-center shadow-lg ring-4 ring-white">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 mb-2">
                  Conscious leadership
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Connect AI adoption to purpose, responsibility and the people
                  affected by it. Explore how to lead change, communicate clearly
                  and make considered choices about what to automate, where to
                  experiment and when to involve others.
                </p>
              </div>
            </div>

            {/* Pillar 3: Awareness and Human Wisdom */}
            <div className="relative flex flex-col h-full rounded-2xl border border-zinc-200/80 bg-white shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-zinc-100">
                <Image
                  src="/sec5third.png"
                  alt="Awareness and human wisdom"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="relative flex flex-col px-6 pt-11 pb-7">
                <div className="absolute -top-7 left-6 w-14 h-14 rounded-full bg-[#18231E] flex items-center justify-center shadow-lg ring-4 ring-white">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.6"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 mb-2">
                  Awareness and human wisdom
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Our approach draws on neuroscience and behavioural research,
                  alongside ancient wisdom traditions. We pair practical AI
                  learning with reflection, meditation and optional breathwork to
                  cultivate attention, emotional awareness and more considered
                  decisions.
                </p>
              </div>
            </div>
          </div>

          {/* 1. LEARN THROUGH DELIBERATE PRACTICE - ARCHITECTURAL MILESTONE TRACK */}
          <div className="pt-16 pb-16 sm:pb-20 border-t border-zinc-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500 mb-2">
                  Practice Framework
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-zinc-950 leading-tight">
                  Learn through deliberate practice.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-md font-normal leading-relaxed">
                A structured four-stage cycle to test outputs, challenge assumptions, and keep human discernment at the center.
              </p>
            </div>

            {/* Continuous Architectural Pipeline (4 Stages) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {[
                {
                  n: "01",
                  phase: "FRAME",
                  title: "Clarify the challenge",
                  desc: "Define the decision, context and what a useful result would look like before prompting.",
                  icon: (
                    <>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M8 13h8M8 17h8M8 9h2" />
                    </>
                  ),
                },
                {
                  n: "02",
                  phase: "EXPLORE",
                  title: "Explore with AI",
                  desc: "Ask questions, develop options and test alternative perspectives rapidly.",
                  icon: (
                    <path d="M12 3l2.1 5.9L20 11l-5.9 2.1L12 19l-2.1-5.9L4 11l5.9-2.1z" />
                  ),
                },
                {
                  n: "03",
                  phase: "EVALUATE",
                  title: "Question the answer",
                  desc: "Check evidence, assumptions, hallucinations, omissions and consequences.",
                  icon: (
                    <>
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3" />
                    </>
                  ),
                },
                {
                  n: "04",
                  phase: "INTEGRATE",
                  title: "Decide and reflect",
                  desc: "Make your own judgement, act responsibly and learn from the outcome.",
                  icon: (
                    <>
                      <path d="M6 20V10M12 20V4M18 20v-7" />
                    </>
                  ),
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group relative flex flex-col pt-6 border-t-2 border-zinc-200 hover:border-zinc-950 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold tracking-wider text-zinc-400 group-hover:text-zinc-950 transition-colors">
                      {step.n} · {step.phase}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 group-hover:bg-[#18231E] group-hover:text-white text-zinc-700 flex items-center justify-center transition-all duration-300 shadow-2xs">
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {step.icon}
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-zinc-950 mb-2 group-hover:text-black leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. WHAT INFORMS THE APPROACH - LUXURY EDITORIAL SPREAD */}
          <div className="pt-16 pb-4 border-t border-zinc-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Thesis & Intellectual Stance */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-1">
                <span className="font-mono text-xs">05B</span>
                <span className="w-10 h-px bg-zinc-300"></span>
                <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">Methodological Context</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-zinc-950 leading-[1.12]">
                What informs the approach.
              </h3>

              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal pt-1">
                Research has explored how meditation and structured breathing affect attention, stress, mood and aspects of decision-making. Findings vary across practices, settings and participants.
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                We use this research to inform how we teach, while recognising that a change in mood or brain activity does not by itself demonstrate better business decisions. AWE Intelligence’s combined approach has not been independently validated as a programme — our aim is to help people develop useful habits of attention and reflection alongside their AI skills.
              </p>

              {/* Intellectual Integrity Pill */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-200/60 text-zinc-700 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Peer-reviewed rationale · Transparent boundaries</span>
                </div>
              </div>
            </div>

            {/* Right Column: Integrated Literature Index (NO BOX) */}
            <div className="lg:col-span-6 lg:pt-1">
              <div className="space-y-1">
                <div className="flex items-center justify-between pb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  <span>Literature Index</span>
                  <span className="font-mono text-[11px]">4 Key Papers</span>
                </div>

                <div className="divide-y divide-zinc-200/90 border-y border-zinc-200/90">
                  {[
                    {
                      id: "01",
                      title: "Attention and self-regulation",
                      author: "Tang et al. · PNAS (2007)",
                      tag: "Cognitive Control",
                    },
                    {
                      id: "02",
                      title: "Brain networks in executive control",
                      author: "Taren et al. · NeuroImage (2017)",
                      tag: "Functional MRI",
                    },
                    {
                      id: "03",
                      title: "Structured breathing and emotional state",
                      author: "Balban et al. · Cell Reports (2023)",
                      tag: "Respiration",
                    },
                    {
                      id: "04",
                      title: "Mindfulness and decision bias",
                      author: "Hafenbrack et al. · Psych Sci (2014)",
                      tag: "Sunk-Cost Bias",
                    },
                  ].map((paper) => (
                    <button
                      key={paper.id}
                      onClick={handleExploreResearch}
                      className="w-full py-4 flex items-center justify-between text-left group cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="font-mono text-xs text-zinc-400 group-hover:text-zinc-950 transition-colors pt-0.5">
                          {paper.id}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-[15px] font-semibold text-zinc-900 group-hover:text-black transition-colors">
                            {paper.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-zinc-500 font-mono">
                              {paper.author}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                            <span className="text-[10px] uppercase font-semibold tracking-wider text-emerald-800">
                              {paper.tag}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
                        <span className="text-xs font-medium transition-transform group-hover:translate-x-0.5">→</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-xs text-zinc-500">
                    Examine study details and boundaries in Section 08.
                  </p>
                  <button
                    onClick={handleExploreResearch}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#18231E] hover:text-black cursor-pointer group"
                  >
                    <span>View Studies & Methodology</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 06: MEET SEAN LEE-DAVIES */}
      <section id="about" className="w-full py-16 sm:py-24">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Image of Sean */}
            <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 aspect-[4/5] bg-zinc-100">
              <Image
                src="/sec6.png"
                alt="Sean Lee-Davies"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column: Bio Content */}
            <div className="lg:col-span-7 flex flex-col pt-1 sm:pt-2">
              {/* Section Tag */}
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                <span className="font-mono text-xs">06</span>
                <span className="w-10 h-px bg-zinc-300"></span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 leading-[1.1] mb-6">
                Meet Sean Lee-Davies
              </h2>

              {/* Bio paragraphs */}
              <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-normal mb-4">
                Sean Lee-Davies is the founder of AWE Intelligence and Awethentic
                Group, a conscious leadership mentor, filmmaker and three-time
                TEDx speaker. His work explores the relationship between
                technology, leadership and human potential.
              </p>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-4">
                A contributing editor to Tatler Limitless and GQ Hong Kong, Sean
                has interviewed and photographed influential figures including
                Ray Dalio, Steven Bartlett, Wim Hof and Jane Goodall. Through his
                work across storytelling, leadership and experiential learning,
                he explores how people can approach change with curiosity,
                purpose and considered judgement.
              </p>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8">
                At AWE Intelligence, he brings this perspective to practical AI
                learning, helping leaders and teams explore how to work with
                emerging technology while strengthening the human qualities they
                bring to it.
              </p>

              {/* Button */}
              <div>
                <button
                  onClick={() => handleOpenModal("Talk to us about your team")}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-xs cursor-pointer"
                >
                  <span>Talk to us about your team</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 07: GENERAL QUESTIONS */}
      <section id="faq" className="w-full py-20 sm:py-32 border-t border-zinc-200/80 bg-[#FAF9F5] relative isolate">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Sticky anchor sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-8">
              <div>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">07</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                  <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">Inquiries</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4">
                  General questions
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  Clear answers on how we partner with enterprise teams, adapt to your technical maturity, and integrate human awareness into high-speed AI workflows.
                </p>
              </div>

              {/* Interactive Category Jump Pills */}
              <div className="space-y-2.5 pt-6 border-t border-zinc-200/80">
                <p className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                  Quick Navigation
                </p>
                <div className="flex flex-wrap gap-2">
                  {faqItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => toggleFaq(idx)}
                      className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer font-medium ${
                        openFaq === idx
                          ? "bg-[#18231E] text-white shadow-xs"
                          : "bg-zinc-200/60 text-zinc-700 hover:bg-zinc-300/80 hover:text-zinc-950"
                      }`}
                    >
                      {item.id} · {item.category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Enquiry Card */}
              <div className="rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur-xs p-5 sm:p-6 shadow-2xs space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                  Have a bespoke requirement?
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Every organisation begins at a different baseline. Let’s map out a format that reflects your team’s strategic and technical maturity.
                </p>
                <button
                  onClick={() => handleOpenModal("Discuss training for my team")}
                  className="group inline-flex items-center gap-2 text-xs font-semibold text-[#18231E] hover:text-black cursor-pointer pt-1"
                >
                  <span>Discuss training for my team</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>

            {/* Right Column: Premium Editorial Hairline Ledger (NO BOXES) */}
            <div className="lg:col-span-7 divide-y divide-zinc-200/90 border-y border-zinc-200/90">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="group transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-7 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <span className="font-mono text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-900 transition-colors pt-1">
                          {item.id}
                        </span>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-500">
                              {item.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                            <span className="text-[10px] sm:text-[11px] font-medium text-zinc-500">
                              {item.tag}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold tracking-tight text-zinc-950 group-hover:text-black transition-colors leading-snug">
                            {item.question}
                          </h3>
                        </div>
                      </div>

                      {/* Clean minimalist rotating glyph */}
                      <div className="shrink-0 pt-1">
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#18231E] border-[#18231E] text-white rotate-45 scale-105"
                              : "border-zinc-300 text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900"
                          }`}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Expandable answer */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-8 sm:pl-12 pb-8 pr-4 sm:pr-8">
                          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION 08: RESEARCH BEHIND OUR APPROACH */}
      <section
        id="research"
        className="w-full py-20 sm:py-32 border-t border-zinc-200/80 bg-[#FAF9F5] relative isolate"
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header - Sticky sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6">
              <div>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">08</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                  <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">Empirical Foundation</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4">
                  Research behind our approach
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                  How empirical studies in cognitive science, neuroimaging, and respiratory physiology inform our pedagogy.
                </p>
              </div>

              {/* Distinguished Methodological Note Card */}
              <div className="rounded-2xl border border-zinc-300/80 bg-white/70 backdrop-blur-xs p-5 sm:p-6 shadow-2xs space-y-3.5">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-zinc-900">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                  Methodological Integrity
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  These peer-reviewed studies establish mechanisms for executive attention, neurological control, and physiological calming under experimental protocols. They substantiate our underlying theory — without overclaiming that mindfulness or breathwork guarantees commercial decision outcomes.
                </p>
                <div className="pt-2 border-t border-zinc-200/70 text-[11px] text-zinc-500 flex items-center justify-between font-mono">
                  <span>4 Studies Indexed</span>
                  <span>Peer-Reviewed</span>
                </div>
              </div>
            </div>

            {/* Right List - Scholarly Research Dossier (NO BOXES) */}
            <div className="lg:col-span-7 divide-y divide-zinc-200/90 border-y border-zinc-200/90">
              {researchItems.map((item, index) => {
                const isOpen = openResearch === index;
                return (
                  <div
                    key={index}
                    className="group transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleResearch(index)}
                      className="w-full py-7 sm:py-8 flex items-start justify-between gap-6 text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <span className="font-mono text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-900 transition-colors pt-1">
                          {item.id}
                        </span>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2.5">
                            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-zinc-500">
                              {item.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                            <span className="text-[10px] sm:text-[11px] font-medium text-zinc-500 font-mono">
                              {item.authorYear}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl lg:text-[22px] font-semibold tracking-tight text-zinc-950 group-hover:text-black transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="shrink-0 pt-1">
                        <div
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#18231E] border-[#18231E] text-white rotate-45 scale-105"
                              : "border-zinc-300 text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900"
                          }`}
                        >
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Study Details */}
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-8 sm:pl-12 pb-8 pr-4 sm:pr-8">
                          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="w-full bg-[#111613] text-[#FAF9F5] py-14 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          {/* Top Row: Brand & Tagline + Navigation Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-zinc-800">
            {/* Brand & Tagline */}
            <div>
              <div className="flex items-center mb-2.5">
                <Image
                  src="/logo-white.png"
                  alt="AWE Intelligence"
                  width={236}
                  height={100}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-xs text-zinc-400">
                Practical AI skills. Conscious leadership. Human awareness.
              </p>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-zinc-300">
              <a
                href="/training"
                className="hover:text-white transition-colors"
              >
                Training &amp; Advisory
              </a>
              <span className="text-zinc-600">·</span>
              <a
                href="#approach"
                className="hover:text-white transition-colors"
              >
                Our Approach
              </a>
              <span className="text-zinc-600">·</span>
              <a href="/academy" className="hover:text-white transition-colors">
                Academy
              </a>
              <span className="text-zinc-600">·</span>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
              <span className="text-zinc-600">·</span>
              <button
                onClick={() => handleOpenModal("Contact Us")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Bottom Row: Legal links & Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 text-[11px] text-zinc-500">
            <div className="flex items-center gap-3">
              <a href="/privacy" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </a>
              <span>·</span>
              <a href="/terms" className="hover:text-zinc-300 transition-colors">
                Terms
              </a>
            </div>
            <div>© 2026 Awethentic Group Limited</div>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE MODAL DIALOG */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#FAF9F5] p-6 sm:p-7 shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors"
              aria-label="Close dialog"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center text-lg">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  Thank You
                </h3>
                <p className="text-xs text-zinc-600 max-w-xs mx-auto leading-relaxed">
                  We have received your enquiry and our advisory team will be in
                  touch shortly to discuss your team’s requirements.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full bg-[#18231E] px-5 py-2 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-zinc-950 mb-1.5">
                  {modalTitle}
                </h3>
                <p className="text-xs text-zinc-600 mb-5 leading-relaxed">
                  Tell us where your team is today and what you want to achieve.
                  We will explore the right starting point for your
                  organisation.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      Organisation / Team Size
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp · 25 team members"
                      className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-zinc-700 mb-1">
                      What would you like to explore?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your team's goals, current AI adoption, or any specific challenges..."
                      className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1.5 focus:ring-[#18231E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#18231E] py-2.5 text-xs font-medium text-white hover:bg-black transition-all cursor-pointer shadow-2xs mt-2"
                  >
                    Send Enquiry →
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
