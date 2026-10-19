"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function TermsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "services", title: "Our services" },
    { id: "website", title: "Use of our website" },
    { id: "bookings", title: "Enquiries and bookings" },
    { id: "payments", title: "Payments and cancellations" },
    { id: "ip", title: "Intellectual property" },
    { id: "acceptable", title: "Acceptable use" },
    { id: "disclaimers", title: "Disclaimers" },
    { id: "liability", title: "Limitation of liability" },
    { id: "changes", title: "Changes to these terms" },
    { id: "governing", title: "Governing law" },
    { id: "contact", title: "Contact us" },
  ];

  // Ignore scroll-spy briefly after a click so the target highlights cleanly
  const clickLock = useRef(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    clickLock.current = true;
    window.setTimeout(() => {
      clickLock.current = false;
    }, 800);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll-spy: highlight the last section whose top has crossed a line near
  // the top of the viewport. Robust for tall sections of varying height.
  useEffect(() => {
    const ids = [
      "intro",
      "services",
      "website",
      "bookings",
      "payments",
      "ip",
      "acceptable",
      "disclaimers",
      "liability",
      "changes",
      "governing",
      "contact",
    ];
    const LINE = 160; // px from top of viewport

    const onScroll = () => {
      if (clickLock.current) return;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= LINE) current = id;
      }
      setActiveSection((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231E] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[400px] sm:min-h-[460px] flex items-center pt-28 pb-14 isolate">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sunrise.png"
            alt="Terms of Service"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 sm:via-[#FAF9F5]/70 to-transparent lg:w-[62%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-4">
              Terms of Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.05] mb-5">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal max-w-md">
              These terms set out the basis on which you use our website and
              participate in our training programmes and related services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT WITH STICKY SIDEBAR */}
      <section className="w-full py-14 sm:py-20 border-t border-zinc-200/60">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Sidebar */}
            <aside className="lg:col-span-3 sticky top-28 hidden lg:block">
              <nav className="space-y-0.5">
                {sections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-lg text-sm text-left transition-all cursor-pointer ${
                        isActive
                          ? "bg-white border border-zinc-200 text-zinc-950 font-semibold shadow-2xs"
                          : "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                      }`}
                    >
                      <span>{sec.title}</span>
                      {isActive && (
                        <span className="text-zinc-400 text-sm">›</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Right Column: Sections */}
            <div className="lg:col-span-9">
              {/* 01. Introduction */}
              <SectionRow
                id="intro"
                num="01"
                eyebrow="Introduction"
                heading="1. Introduction"
                borderTop={false}
              >
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) apply to your use
                  of the AWE Intelligence website (the &ldquo;Site&rdquo;) and to
                  your participation in our training programmes, courses,
                  workshops and related services (together, our
                  &ldquo;Services&rdquo;).
                </p>
                <p>
                  By using our Site or Services, you agree to these Terms. If you
                  do not agree, please do not use our Site or Services.
                </p>
              </SectionRow>

              {/* 02. Our services */}
              <SectionRow
                id="services"
                num="02"
                eyebrow="Our services"
                heading="2. Our services"
              >
                <p>
                  AWE Intelligence provides training, advisory and learning
                  programmes focused on practical AI skills, conscious leadership
                  and human awareness. Our Services may include in-person
                  workshops, online courses, advisory sessions, resources and
                  related content. The details of each Service will be provided
                  at the time of enquiry or booking.
                </p>
              </SectionRow>

              {/* 03. Use of our website */}
              <SectionRow
                id="website"
                num="03"
                eyebrow="Use of our website"
                heading={
                  <>
                    3. Use of
                    <br className="hidden sm:block" /> our website
                  </>
                }
              >
                <p>
                  You may use our Site for lawful purposes only. You agree not to
                  misuse the Site, introduce malicious code, or attempt to gain
                  unauthorised access to our systems. We may update, suspend or
                  withdraw any part of the Site at any time without notice.
                </p>
              </SectionRow>

              {/* 04. Enquiries and bookings */}
              <SectionRow
                id="bookings"
                num="04"
                eyebrow="Enquiries and bookings"
                heading={
                  <>
                    4. Enquiries
                    <br className="hidden sm:block" /> and bookings
                  </>
                }
              >
                <p>
                  Enquiries can be made through our website or by contacting us
                  directly. A booking is confirmed once we have issued a written
                  confirmation (such as an email or agreement). We may require
                  additional information to tailor a programme to your needs.
                </p>
              </SectionRow>

              {/* 05. Payments and cancellations */}
              <SectionRow
                id="payments"
                num="05"
                eyebrow="Payments and cancellations"
                heading={
                  <>
                    5. Payments and
                    <br className="hidden sm:block" /> cancellations
                  </>
                }
              >
                <p>
                  Fees and payment terms will be set out in your booking
                  confirmation or agreement. Cancellation terms vary depending on
                  the type of Service and will be provided at the time of
                  booking. If you need to reschedule or cancel, please contact us
                  as early as possible.
                </p>
              </SectionRow>

              {/* 06. Intellectual property */}
              <SectionRow
                id="ip"
                num="06"
                eyebrow="Intellectual property"
                heading={
                  <>
                    6. Intellectual
                    <br className="hidden sm:block" /> property
                  </>
                }
              >
                <p>
                  All content on our Site and in our Services, including text,
                  images, videos, materials and frameworks, is owned by or
                  licensed to AWE Intelligence or Awethentic Group Limited. You
                  may not copy, reproduce or distribute our content without our
                  prior written consent, except for personal, non-commercial use.
                </p>
              </SectionRow>

              {/* 07. Acceptable use */}
              <SectionRow
                id="acceptable"
                num="07"
                eyebrow="Acceptable use"
                heading="7. Acceptable use"
              >
                <p>
                  You agree not to use our Services in a way that is harmful,
                  unlawful, abusive or disruptive. We reserve the right to refuse
                  or remove access to our Services if we believe you have
                  breached these Terms.
                </p>
              </SectionRow>

              {/* 08. Disclaimers */}
              <SectionRow
                id="disclaimers"
                num="08"
                eyebrow="Disclaimers"
                heading="8. Disclaimers"
              >
                <p>
                  Our Services are provided for educational and informational
                  purposes only. They do not constitute professional, legal,
                  financial, medical or other advice. While we aim to provide
                  accurate and helpful information, we do not guarantee specific
                  outcomes.
                </p>
              </SectionRow>

              {/* 09. Limitation of liability */}
              <SectionRow
                id="liability"
                num="09"
                eyebrow="Limitation of liability"
                heading={
                  <>
                    9. Limitation
                    <br className="hidden sm:block" /> of liability
                  </>
                }
              >
                <p>
                  To the fullest extent permitted by law, AWE Intelligence and
                  Awethentic Group Limited shall not be liable for any indirect,
                  incidental or consequential loss arising from your use of our
                  Site or Services.
                </p>
              </SectionRow>

              {/* 10. Changes to these terms */}
              <SectionRow
                id="changes"
                num="10"
                eyebrow="Changes to these terms"
                heading={
                  <>
                    10. Changes
                    <br className="hidden sm:block" /> to these terms
                  </>
                }
              >
                <p>
                  We may update these Terms from time to time. The latest version
                  will always be available on this page, and the &ldquo;last
                  updated&rdquo; date will be shown at the top.
                </p>
              </SectionRow>

              {/* 11. Governing law */}
              <SectionRow
                id="governing"
                num="11"
                eyebrow="Governing law"
                heading="11. Governing law"
              >
                <p>
                  These Terms are governed by the laws of England and Wales, and
                  any disputes will be subject to the exclusive jurisdiction of
                  the courts of England and Wales.
                </p>
              </SectionRow>

              {/* 12. Contact us */}
              <SectionRow
                id="contact"
                num="12"
                eyebrow="Contact us"
                heading="12. Contact us"
              >
                <p>
                  If you have any questions about these Terms, please contact us
                  at:
                </p>
                <a
                  href="mailto:hello@awe-intelligence.com"
                  className="font-semibold text-zinc-900 underline hover:text-black"
                >
                  hello@awe-intelligence.com
                </a>
              </SectionRow>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GET IN TOUCH CTA BANNER */}
      <section className="w-full">
        <div className="relative overflow-hidden min-h-[260px] sm:min-h-[300px] flex items-center">
          <Image
            src="/sunrise.png"
            alt="Sunrise over mountains"
            fill
            sizes="100vw"
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-transparent lg:w-3/4 w-full pointer-events-none" />

          <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full py-14">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-3">
              Have a question?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
              Get in touch
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-7 max-w-md">
              If you have any questions about our Terms of Service or any other
              aspect of our work, we&rsquo;re here to help.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#18231E] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black active:scale-[0.98] shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Contact us</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
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
        initialTopic="Terms of Service Enquiry"
      />

      {/* Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />
    </div>
  );
}

/* Per-section row: eyebrow + heading on the left, body on the right */
function SectionRow({
  id,
  num,
  eyebrow,
  heading,
  children,
  borderTop = true,
}: {
  id: string;
  num: string;
  eyebrow: string;
  heading: React.ReactNode;
  children: React.ReactNode;
  borderTop?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] gap-5 md:gap-10 py-9 transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${borderTop ? "border-t border-zinc-200/80" : ""}`}
    >
      {/* Heading column */}
      <div>
        <div className="flex items-center gap-3 text-zinc-400 font-medium text-[11px] mb-3">
          <span className="font-mono">{num}</span>
          <span className="w-6 h-px bg-zinc-300"></span>
          <span className="uppercase tracking-[0.14em]">{eyebrow}</span>
        </div>
        <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight text-zinc-950 leading-tight">
          {heading}
        </h2>
      </div>

      {/* Body column */}
      <div className="text-sm text-zinc-600 leading-relaxed space-y-4 md:pt-7">
        {children}
      </div>
    </div>
  );
}
