"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function PrivacyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "collect", title: "Information we collect" },
    { id: "use", title: "How we use your information" },
    { id: "sharing", title: "Sharing your information" },
    { id: "rights", title: "Your rights" },
    { id: "security", title: "Data security" },
    { id: "cookies", title: "Cookies" },
    { id: "third-party", title: "Third-party links" },
    { id: "changes", title: "Changes to this policy" },
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
      "collect",
      "use",
      "sharing",
      "rights",
      "security",
      "cookies",
      "third-party",
      "changes",
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

  const useItems = [
    "Respond to your enquiries and provide information about our services",
    "Manage registrations and bookings for our programmes",
    "Deliver and improve our training content and related services",
    "Send relevant updates, insights and marketing communications (with your consent)",
    "Analyse website usage and improve the user experience",
    "Comply with legal and regulatory obligations",
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141815] flex flex-col antialiased selection:bg-[#18231e] selection:text-white">
      {/* Navbar */}
      <Navbar onOpenModal={() => setModalOpen(true)} />

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center pt-24 pb-14 isolate">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sunrise.png"
            alt="Privacy Policy"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/75 sm:via-[#FAF9F5]/50 to-transparent lg:w-[60%] w-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-4">
              Privacy Policy
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 leading-[1.05] mb-5">
              Your privacy
              <br />
              matters.
            </h1>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal max-w-md">
              This Privacy Policy explains how we collect, use and protect your
              personal information when you visit our website or engage with our
              training programmes and related services.
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
                  This Privacy Policy explains how AWE Intelligence (operated by
                  Awethentic Group Limited) collects, uses, shares and protects
                  your personal information when you visit our website, enquire
                  about our services, enrol in our programmes or otherwise
                  interact with us. We are committed to protecting your privacy
                  and handling your information in a transparent and responsible
                  way.
                </p>
              </SectionRow>

              {/* 02. Information we collect */}
              <SectionRow
                id="collect"
                num="02"
                eyebrow="Information we collect"
                heading={
                  <>
                    2. Information
                    <br className="hidden sm:block" /> we collect
                  </>
                }
              >
                <p>
                  We may collect personal information that you provide to us
                  directly, such as your name, email address, organisation, job
                  title, and any other information you choose to share when you
                  contact us, register for a course or subscribe to our updates.
                </p>
                <p>
                  We may also collect certain information automatically when you
                  visit our website, such as your IP address, browser type,
                  device information and pages visited, through cookies and
                  similar technologies.
                </p>
              </SectionRow>

              {/* 03. How we use your information */}
              <SectionRow
                id="use"
                num="03"
                eyebrow="How we use your information"
                heading={
                  <>
                    3. How we use
                    <br className="hidden sm:block" /> your information
                  </>
                }
              >
                <p>We use your personal information to:</p>
                <ul className="space-y-2.5">
                  {useItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-zinc-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </SectionRow>

              {/* 04. Sharing your information */}
              <SectionRow
                id="sharing"
                num="04"
                eyebrow="Sharing your information"
                heading={
                  <>
                    4. Sharing
                    <br className="hidden sm:block" /> your information
                  </>
                }
              >
                <p>
                  We do not sell your personal information. We may share your
                  information with trusted third-party service providers who help
                  us deliver our services, such as email marketing platforms,
                  booking systems and website analytics providers. These
                  providers are contractually required to protect your
                  information and use it only for the purposes we specify.
                </p>
                <p>
                  We may also share information if required by law or to protect
                  our legal rights.
                </p>
              </SectionRow>

              {/* 05. Your rights */}
              <SectionRow
                id="rights"
                num="05"
                eyebrow="Your rights"
                heading="5. Your rights"
              >
                <p>
                  Depending on your location, you may have rights in relation to
                  your personal information, including the right to access,
                  correct, delete or restrict its use. You can also opt out of
                  marketing communications at any time by following the
                  unsubscribe link or contacting us.
                </p>
              </SectionRow>

              {/* 06. Data security */}
              <SectionRow
                id="security"
                num="06"
                eyebrow="Data security"
                heading="6. Data security"
              >
                <p>
                  We take reasonable technical and organisational measures to
                  protect your personal information from unauthorised access,
                  loss, misuse or alteration. However, no method of transmission
                  over the internet is completely secure, and we cannot guarantee
                  absolute security.
                </p>
              </SectionRow>

              {/* 07. Cookies */}
              <SectionRow
                id="cookies"
                num="07"
                eyebrow="Cookies"
                heading="7. Cookies"
              >
                <p>
                  We use cookies and similar technologies to help our website
                  function, understand how it is used and improve your
                  experience. You can manage your cookie preferences through your
                  browser settings. For more information, please see our Cookie
                  Policy (if available).
                </p>
              </SectionRow>

              {/* 08. Third-party links */}
              <SectionRow
                id="third-party"
                num="08"
                eyebrow="Third-party links"
                heading="8. Third-party links"
              >
                <p>
                  Our website may include links to third-party websites. We are
                  not responsible for the privacy practices or content of those
                  sites and encourage you to review their privacy policies.
                </p>
              </SectionRow>

              {/* 09. Changes to this policy */}
              <SectionRow
                id="changes"
                num="09"
                eyebrow="Changes to this policy"
                heading={
                  <>
                    9. Changes
                    <br className="hidden sm:block" /> to this policy
                  </>
                }
              >
                <p>
                  We may update this Privacy Policy from time to time. The latest
                  version will always be available on this page, and the
                  &ldquo;last updated&rdquo; date will be shown at the top.
                </p>
              </SectionRow>

              {/* 10. Contact us */}
              <SectionRow
                id="contact"
                num="10"
                eyebrow="Contact us"
                heading="10. Contact us"
              >
                <p>
                  If you have any questions about this Privacy Policy or how we
                  handle your information, please contact us at:
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
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#FAF9F5]/95 via-[#FAF9F5]/80 to-transparent lg:w-3/4 w-full pointer-events-none" />

          <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 w-full py-14">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-zinc-600 mb-3">
              Have a question?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
              Get in touch
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed mb-7 max-w-md">
              If you have any questions about your privacy or our use of personal
              information, we&rsquo;re here to help.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md cursor-pointer"
            >
              <span>Contact us</span>
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
        initialTopic="Privacy Policy Enquiry"
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
