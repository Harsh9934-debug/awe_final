"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function GenTPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openCurriculum, setOpenCurriculum] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openEnquiry = () => setModalOpen(true);

  const features = [
    {
      title: "Practical AI skills",
      desc: "Learn through real examples and hands-on practice.",
      icon: (
        <>
          <path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5v.5A2.5 2.5 0 0 0 5 7.5 2.5 2.5 0 0 0 6.5 12 2.5 2.5 0 0 0 5 16.5 2.5 2.5 0 0 0 7 19v.5A2.5 2.5 0 0 0 9.5 22 2.5 2.5 0 0 0 12 19.5V4.5A2.5 2.5 0 0 0 9.5 2z" />
          <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v.5A2.5 2.5 0 0 1 19 7.5 2.5 2.5 0 0 1 17.5 12 2.5 2.5 0 0 1 19 16.5 2.5 2.5 0 0 1 17 19v.5A2.5 2.5 0 0 1 14.5 22 2.5 2.5 0 0 1 12 19.5V4.5A2.5 2.5 0 0 1 14.5 2z" />
        </>
      ),
    },
    {
      title: "Greater self-awareness",
      desc: "Build the human qualities that support clearer thinking and better decisions.",
      icon: (
        <>
          <circle cx="12" cy="6" r="2.5" />
          <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
          <path d="M8.5 13.5 12 17l3.5-3.5" />
        </>
      ),
    },
    {
      title: "Real-world application",
      desc: "Use AI more effectively in study, work and life.",
      icon: (
        <>
          <path d="M6 20V10M12 20V4M18 20v-7" />
        </>
      ),
    },
    {
      title: "A more human future",
      desc: "Navigate change with confidence, purpose and adaptability.",
      icon: (
        <>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 15-9 0 8-3 15-9 15a6 6 0 0 1-.9-.07" />
          <path d="M8 16c1.5-4 4.5-6 8-7" />
        </>
      ),
    },
  ];

  const audience = [
    {
      title: "Students",
      desc: "Build skills for study and future work.",
      icon: (
        <>
          <path d="M22 10 12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
        </>
      ),
    },
    {
      title: "Early career individuals",
      desc: "Develop confidence and clarity as you navigate new opportunities.",
      icon: (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 6a3 3 0 0 1 0 6M17 14c2.2.6 4 2.6 4 5" />
        </>
      ),
    },
    {
      title: "Change makers",
      desc: "Use AI to contribute to a more positive and sustainable future.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5 13 13l-4.5 2.5L11 11z" />
        </>
      ),
    },
  ];

  const benefits = [
    {
      title: "Practical skills",
      desc: "Learn how to use AI tools effectively and creatively.",
      icon: (
        <>
          <path d="M9 18h6M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1V18h6v-1.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
        </>
      ),
    },
    {
      title: "Greater self-awareness",
      desc: "Build attention, emotional awareness and clearer thinking.",
      icon: (
        <path d="M12 21s-7-4.3-9.5-8.5C1 9.5 2.4 6 5.8 6c2 0 3.3 1.2 4.2 2.4C10.9 7.2 12.2 6 14.2 6c3.4 0 4.8 3.5 3.3 6.5C19 16.7 12 21 12 21z" />
      ),
    },
    {
      title: "Real-world relevance",
      desc: "Apply your learning to study, work and wider life decisions.",
      icon: (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
        </>
      ),
    },
    {
      title: "Positive impact",
      desc: "Explore how to use AI for good in your communities and beyond.",
      icon: (
        <>
          <path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 15-9 0 8-3 15-9 15a6 6 0 0 1-.9-.07" />
          <path d="M8 16c1.5-4 4.5-6 8-7" />
        </>
      ),
    },
  ];

  const curriculum = [
    {
      title: "AI fundamentals",
      body: "Understand how AI models work, what they can and cannot do, and how to use them responsibly.",
    },
    {
      title: "Practical application",
      body: "Hands-on practice applying AI tools to real study, work and life tasks.",
    },
    {
      title: "Human skills and awareness",
      body: "Develop attention, reflection and judgement so you can work thoughtfully alongside AI.",
    },
    {
      title: "Real-world projects",
      body: "Apply your skills to a project that matters to you and your community.",
    },
    {
      title: "Next steps",
      body: "Plan how to keep learning and growing after the programme.",
    },
  ];

  const faqs = [
    {
      q: "Who is Gen.T for?",
      a: "Gen.T is designed for students and early career individuals who want to build practical AI skills and explore the human side of change.",
    },
    {
      q: "How long does the programme take?",
      a: "The programme is delivered in flexible modules. Exact timing depends on the format, and details are shared on enquiry.",
    },
    {
      q: "Do I need technical experience?",
      a: "No. Gen.T starts from the fundamentals and focuses on practical, everyday use of AI.",
    },
    {
      q: "Is this available for schools or organisations?",
      a: "Yes. We can tailor Gen.T for schools, universities and organisations. Get in touch to discuss.",
    },
    {
      q: "How do I apply or enquire?",
      a: "Use the Enquire about Gen.T button on this page and we will be in touch with next steps.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231e] selection:text-white">
      {/* Navbar */}
      <Navbar
        currentPath="/academy"
        onOpenModal={() => setModalOpen(true)}
      />

      {/* 1. HERO */}
      <section className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[680px] flex items-center pt-32 pb-16 isolate">
        <div className="absolute inset-0 z-0">
          <Image
            src="/genthero.png"
            alt="Young people talking at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 sm:via-[#FAF9F5]/60 to-transparent lg:w-[62%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-5">
              Gen.T
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-[#1b3a31] leading-[1.04] mb-6">
              AI skills
              <br />
              for a more
              <br />
              human future.
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal mb-8 max-w-md">
              Gen.T is a learning programme for young people, designed to build
              practical AI skills, deeper self-awareness and the human
              capabilities needed to navigate change with confidence and
              purpose.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={openEnquiry}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md cursor-pointer"
              >
                <span>Enquire about Gen.T</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
              <a
                href="#about-gent"
                className="inline-flex items-center justify-center rounded-full border border-zinc-400 bg-white/40 backdrop-blur-xs px-6 py-3.5 text-sm font-medium text-zinc-800 transition-all duration-200 hover:bg-white hover:border-zinc-500"
              >
                Explore the programme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR FEATURES ROW */}
      <section className="w-full py-12 sm:py-14 border-y border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`flex flex-col items-start ${
                  i > 0 ? "lg:border-l lg:border-zinc-200 lg:pl-8" : ""
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-[#e7ece8] flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-[#2f4a40]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </div>
                <h3 className="text-[15px] font-bold text-[#1b3a31] mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-[15rem]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION 01: ABOUT GEN.T */}
      <section
        id="about-gent"
        className="w-full py-16 sm:py-24 border-b border-zinc-200/60"
      >
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel num="01" text="About Gen.T" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1b3a31] leading-[1.08] mb-5">
                More than AI training.
                <br />
                A broader foundation
                <br />
                for what&rsquo;s next.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-8 max-w-lg">
                Gen.T combines practical AI learning with conscious leadership
                and a research-informed approach to human development. It helps
                young people build useful skills, stronger self-awareness and
                the judgement to make a positive impact in a fast-changing
                world.
              </p>
              <button
                onClick={openEnquiry}
                className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md cursor-pointer"
              >
                <span>Enquire about Gen.T</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] lg:aspect-[5/4] bg-zinc-100">
              <Image
                src="/hero.png"
                alt="A young person looking out over a city at sunrise"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 02: WHO IT'S FOR */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel num="02" text="Who it's for" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1b3a31] leading-[1.08] mb-5">
                For curious, open-minded
                <br />
                young people.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed max-w-lg">
                Gen.T is for students and early career individuals who want to
                understand AI, develop practical skills and explore the human
                side of change &mdash; so they can make better decisions for
                themselves, their communities and the world around them.
              </p>
            </div>

            <div className="space-y-7">
              {audience.map((a) => (
                <div key={a.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-[#e7ece8] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#2f4a40]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {a.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#1b3a31] mb-1">
                      {a.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
                      {a.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: PROGRAMME BENEFITS */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel num="03" text="Programme benefits" />
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#1b3a31] leading-[1.08] mb-5">
                Skills for today.
                <br />
                Perspective for tomorrow.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed max-w-lg">
                Gen.T helps young people develop a balance of practical skills
                and human awareness, so they can use AI thoughtfully and step
                into the future with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-xl border border-zinc-200/80 bg-[#F0F0EA] p-5"
                >
                  <div className="w-9 h-9 rounded-full bg-[#e2e8e3] flex items-center justify-center mb-3">
                    <svg
                      className="w-[18px] h-[18px] text-[#2f4a40]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {b.icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-[#1b3a31] mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 04: WHAT YOU'LL LEARN (image + curriculum) */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] bg-zinc-100 order-2 lg:order-1">
              <Image
                src="/academyhero.png"
                alt="A young person studying at a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel num="04" text="What you'll learn" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b3a31] leading-[1.1] mb-4">
                A practical and reflective curriculum.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-7 max-w-lg">
                The programme combines hands-on learning with guided reflection,
                helping participants build both technical skills and the human
                capabilities to use them well.
              </p>

              <div className="border-t border-zinc-200">
                {curriculum.map((c, i) => {
                  const open = openCurriculum === i;
                  return (
                    <div key={c.title} className="border-b border-zinc-200">
                      <button
                        onClick={() => setOpenCurriculum(open ? null : i)}
                        className="w-full flex items-center gap-4 py-4 text-left cursor-pointer group"
                      >
                        <span className="w-7 h-7 shrink-0 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-[11px] font-bold text-[#1b3a31]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-sm font-semibold text-[#1b3a31]">
                          {c.title}
                        </span>
                        <span
                          className={`text-zinc-400 text-lg leading-none transition-transform ${
                            open ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {open && (
                        <p className="pl-11 pr-6 pb-4 -mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                          {c.body}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 05: MEET THE FOUNDER */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel num="05" text="Meet the founder" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b3a31] leading-[1.1] mb-5">
                Guided by experience.
                <br />
                Grounded in people.
              </h2>
              <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed mb-7 max-w-lg">
                Gen.T is founded by Sean Lee-Davies, a conscious leadership
                mentor, filmmaker and three-time TEDx speaker. His work explores
                the relationship between technology, leadership and human
                potential, and he brings this perspective to Gen.T to help young
                people navigate change with curiosity, purpose and considered
                judgement.
              </p>
              <Link
                href="/#about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1b3a31] hover:text-black border-b border-[#1b3a31] pb-0.5"
              >
                <span>Read more about Sean</span>
                <span>→</span>
              </Link>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xs aspect-[4/3] lg:aspect-[5/4] bg-zinc-100">
              <Image
                src="/sec6.png"
                alt="Sean Lee-Davies"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 06: FAQs */}
      <section className="w-full py-16 sm:py-24 border-b border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div>
              <SectionLabel num="06" text="Frequently asked questions" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b3a31]">
                FAQs
              </h2>
            </div>

            <div className="border-t border-zinc-200 lg:pt-2">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} className="border-b border-zinc-200">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left cursor-pointer"
                    >
                      <span className="text-sm font-medium text-[#1b3a31]">
                        {f.q}
                      </span>
                      <span
                        className={`text-zinc-400 text-lg leading-none transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <p className="pr-8 pb-4 -mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA BAND */}
      <section className="w-full">
        <div className="relative overflow-hidden min-h-[280px] sm:min-h-[320px] flex items-center">
          <Image
            src="/sunrise.png"
            alt="Sunrise over mountains"
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent lg:w-3/4 w-full pointer-events-none" />

          <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full py-14">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1b3a31] mb-3">
              Be part of Gen.T
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-7 max-w-md">
              Gain the skills, awareness and judgement to navigate change and
              help shape a more human future.
            </p>
            <button
              onClick={openEnquiry}
              className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md cursor-pointer"
            >
              <span>Enquire about Gen.T</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic="Gen.T Enquiry"
      />

      {/* Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}

/* Eyebrow: number — label */
function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-zinc-500">{num}</span>
      <span className="w-6 h-px bg-zinc-300" />
      <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-500">
        {text}
      </span>
    </div>
  );
}
