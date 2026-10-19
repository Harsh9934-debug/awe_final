"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, StaggerContainer, StaggerItem, HoverCard } from "@/components/MotionWrapper";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#181D1A] flex flex-col antialiased selection:bg-[#18231E] selection:text-white">
      {/* Sticky Frosted-Glass Navigation */}
      <Navbar currentPath="/about" />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[85vh] lg:min-h-screen flex items-center pt-28 pb-16 isolate border-b border-zinc-200/70">
        {/* Full-bleed background image with bespoke atmospheric editorial visual */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/abouthero.jpg"
            alt="AI capability shaped by human wisdom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-[center_35%] transition-transform duration-1000 ease-out"
          />
          {/* Subtle multi-stop gradient to ensure flawless typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/98 via-[#FAF9F5]/85 sm:via-[#FAF9F5]/55 to-transparent lg:w-[62%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Eyebrow */}
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-3 text-zinc-600 font-medium text-xs mb-4">
                <span className="font-mono text-xs text-zinc-500">ABOUT</span>
                <span className="w-10 h-px bg-zinc-300"></span>
                <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-600">
                  AWE Intelligence
                </span>
              </div>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-6">
                AI capability shaped by human wisdom.
              </h1>
            </FadeUp>

            {/* Paragraph */}
            <FadeUp delay={0.3}>
              <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-normal mb-8 max-w-xl">
                We help leaders and organisations navigate the intelligence revolution by combining practical capability with the human qualities technology cannot replace: discernment, self-awareness, and considered judgement.
              </p>
            </FadeUp>

            {/* Action Buttons */}
            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black hover:shadow-xs active:scale-[0.98] cursor-pointer"
                >
                  <span>Discuss training for your team</span>
                  <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#founder"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-400 bg-white/70 backdrop-blur-xs px-6 py-3.5 text-xs sm:text-sm font-medium text-zinc-800 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:hover:border-zinc-600 active:scale-[0.98]"
                >
                  Meet our founder ↓
                </a>
              </div>
            </FadeUp>

            {/* Refined Pill Badges */}
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-700 pt-5 border-t border-zinc-300/60">
                <span className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-xs border border-zinc-200/90 rounded-full px-3.5 py-1.5 shadow-2xs font-medium hover:border-zinc-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  Founder-Led Advisory
                </span>
                <span className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-xs border border-zinc-200/90 rounded-full px-3.5 py-1.5 shadow-2xs font-medium hover:border-zinc-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#18231E]" />
                  Practical Enterprise Training
                </span>
                <span className="inline-flex items-center gap-2 bg-white/85 backdrop-blur-xs border border-zinc-200/90 rounded-full px-3.5 py-1.5 shadow-2xs font-medium hover:border-zinc-400 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  Part of Awethentic Group
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDER (SEAN LEE-DAVIES) */}
      <section id="founder" className="w-full py-20 sm:py-28 border-b border-zinc-200/70">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.1}>
                <HoverCard liftY={-6}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5 aspect-[4/5] bg-zinc-100 group">
                    <Image
                      src="/sec6.png"
                      alt="Sean Lee-Davies"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/60 shadow-xs">
                      <p className="text-xs font-bold text-zinc-950">Sean Lee-Davies</p>
                      <p className="text-[11px] text-zinc-600">
                        Founder, AWE Intelligence &amp; Awethentic Group
                      </p>
                    </div>
                  </div>
                </HoverCard>
              </FadeUp>
            </div>

            {/* Right Column: Complete Bio Content */}
            <div className="lg:col-span-7 flex flex-col pt-1 sm:pt-2">
              <FadeUp delay={0.1}>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">01</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                  <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">
                    Leadership
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-950 leading-[1.1] mb-6">
                  Meet Sean Lee-Davies
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-normal mb-5">
                  Sean Lee-Davies is the founder of AWE Intelligence and Awethentic Group, a conscious leadership mentor, filmmaker and three-time TEDx speaker. His work explores the relationship between technology, leadership and human potential.
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-5">
                  A contributing editor to Tatler Limitless and GQ Hong Kong, Sean has interviewed and photographed influential figures including Ray Dalio, Steven Bartlett, Wim Hof and Jane Goodall. Through his work across storytelling, leadership and experiential learning, he explores how people can approach change with curiosity, purpose and considered judgement.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal mb-8">
                  At AWE Intelligence, he brings this perspective to practical AI learning, helping leaders and teams explore how to work with emerging technology while strengthening the human qualities they bring to it.
                </p>
              </FadeUp>

              <FadeUp delay={0.5}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black hover:shadow-xs active:scale-[0.98] cursor-pointer"
                  >
                    <span>Talk to us about your team</span>
                    <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/training"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-xs sm:text-sm font-medium text-zinc-800 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-black hover:active:scale-[0.98]"
                  >
                    Explore training programmes
                  </Link>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR GUIDING PRINCIPLES */}
      <section className="w-full py-20 sm:py-28 border-b border-zinc-200/70">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <FadeUp>
            <div className="max-w-2xl mb-14">
              <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                <span className="font-mono text-xs">02</span>
                <span className="w-10 h-px bg-zinc-300"></span>
                <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">
                  Philosophy
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-4">
                More than tool training.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Our programmes combine practical AI skills with conscious leadership and a research-informed approach to human learning. We focus on real work, real decisions and lasting behaviour change.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <StaggerItem>
              <div className="border-t border-zinc-300/80 pt-6 group">
                <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-zinc-900 transition-colors">01</span>
                <h3 className="text-lg font-bold text-zinc-950 mt-3 mb-2 tracking-tight">
                  Practical skills
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Hands-on practice with relevant use cases, clear prompting and critical evaluation. Learning is anchored in what people actually do every day.
                </p>
              </div>
            </StaggerItem>

            {/* Pillar 2 */}
            <StaggerItem>
              <div className="border-t border-zinc-300/80 pt-6 group">
                <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-zinc-900 transition-colors">02</span>
                <h3 className="text-lg font-bold text-zinc-950 mt-3 mb-2 tracking-tight">
                  Human-centred
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Connect AI adoption to purpose, responsibility and the people affected by it. Technology is treated as an amplifier of human intention, not a replacement.
                </p>
              </div>
            </StaggerItem>

            {/* Pillar 3 */}
            <StaggerItem>
              <div className="border-t border-zinc-300/80 pt-6 group">
                <span className="font-mono text-xs font-semibold text-zinc-400 group-hover:text-zinc-900 transition-colors">03</span>
                <h3 className="text-lg font-bold text-zinc-950 mt-3 mb-2 tracking-tight">
                  Lasting impact
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Build awareness, judgement and adaptability for better decisions over time. Equipping teams with the mental models to learn as tools evolve.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. THE AWETHENTIC GROUP ECOSYSTEM */}
      <section className="w-full py-20 sm:py-28 border-b border-zinc-200/70 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-6">
              <FadeUp delay={0.1}>
                <div className="flex items-center gap-3 text-zinc-500 font-medium text-xs mb-3">
                  <span className="font-mono text-xs">03</span>
                  <span className="w-10 h-px bg-zinc-300"></span>
                  <span className="uppercase tracking-[0.16em] text-[11px] font-semibold text-zinc-500">
                    The Ecosystem
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-5">
                  Part of Awethentic Group
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mb-4">
                  Awethentic Group is an international creative and leadership collective uniting storytelling, immersive experiences, and enterprise capability.
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  From documentary filmmaking and conservation advocacy to executive development retreats, the Group is dedicated to raising human awareness in a hyper-technological age. AWE Intelligence brings this legacy into the modern corporate landscape.
                </p>

                <div className="flex items-center gap-6 pt-4 text-xs font-semibold text-zinc-900">
                  <Link href="/academy" className="underline underline-offset-4 hover:text-black transition-colors">
                    AWE Academy →
                  </Link>
                  <Link href="/training" className="underline underline-offset-4 hover:text-black transition-colors">
                    Corporate Training →
                  </Link>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-6">
              <FadeUp delay={0.2}>
                <HoverCard liftY={-6}>
                  <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md bg-zinc-100 group">
                    <Image
                      src="/traininghero.png"
                      alt="Awethentic Group Collaboration"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                </HoverCard>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FULL-WIDTH CALL TO ACTION (SUNRISE BANNER) */}
      <section className="relative w-full overflow-hidden min-h-[500px] py-16 sm:py-24 isolate">
        <Image
          src="/sunrise.png"
          alt="Mountain sunrise"
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 sm:via-[#FAF9F5]/60 to-transparent lg:w-3/5 w-full pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full flex items-center">
          <FadeUp>
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-700 mb-3">
                Let&apos;s talk
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-zinc-950 leading-[1.08] mb-4">
                Discuss training<br />for your team.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-8 max-w-md">
                Book a 20-minute discovery conversation to discuss your team, priorities and the support you are looking for. Programme scope, format and delivery are agreed around your needs.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3 text-xs sm:text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black hover:shadow-xs active:scale-[0.98] cursor-pointer"
                >
                  <span>Book a discovery call</span>
                  <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-900 backdrop-blur-xs px-6 py-3 text-xs sm:text-sm font-medium text-zinc-900 hover:transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] cursor-pointer"
                >
                  View training options
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
