"use client";

import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  onOpenModal?: (title: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const openContact = () =>
    onOpenModal
      ? onOpenModal("Contact Us")
      : (window.location.href = "/training#enquire");

  const linkClass =
    "text-sm text-zinc-400 hover:text-white transition-colors";
  const headingClass =
    "text-sm text-zinc-500 mb-5";

  return (
    <footer className="relative w-full overflow-hidden bg-black text-[#FAF9F5] mt-auto">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-16 sm:pb-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-14 lg:gap-10">
          {/* Brand block */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="inline-flex items-center group"
              aria-label="AWE Intelligence"
            >
              <Image
                src="/logo-white.png"
                alt="AWE Intelligence"
                width={236}
                height={100}
                className="h-9 w-auto"
                priority={false}
              />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Practical AI skills. Conscious
              <br className="hidden sm:block" /> leadership. Human awareness.
            </p>

            <button
              onClick={openContact}
              className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-medium text-[#111118] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-zinc-100 active:scale-[0.98] shadow-sm hover:shadow-lg cursor-pointer"
            >
              Get in touch
            </button>

            <p className="mt-10 text-sm text-zinc-500">
              © 2026 Awethentic Group Limited
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-12 lg:gap-x-16">
            {/* Explore */}
            <div>
              <h3 className={headingClass}>Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/#approach" className={linkClass}>
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link href="/training" className={linkClass}>
                    Training &amp; Advisory
                  </Link>
                </li>
                <li>
                  <Link href="/academy" className={linkClass}>
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="/think-first" className={linkClass}>
                    Think First
                  </Link>
                </li>
                <li>
                  <Link href="/gent" className={linkClass}>
                    Gen.T
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className={headingClass}>Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className={linkClass}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkClass}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className={headingClass}>Social</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className={headingClass}>Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant faded logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-12 sm:-bottom-20 left-1/2 -translate-x-1/2 w-[48%] max-w-[560px] opacity-[0.08]"
      >
        <Image
          src="/logo-white.png"
          alt=""
          width={920}
          height={390}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}
