"use client";

import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  onOpenModal?: (title: string) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="w-full bg-[#111613] text-[#FAF9F5] py-14 sm:py-16 mt-auto">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Top Row: Brand & Tagline + Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-zinc-800">
          {/* Brand & Tagline */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center mb-2.5 group"
              aria-label="AWE Intelligence"
            >
              <Image
                src="/logo-white.png"
                alt="AWE Intelligence"
                width={236}
                height={100}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-xs text-zinc-400">
              Practical AI skills. Conscious leadership. Human awareness.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-zinc-300">
            <Link
              href="/training"
              className="hover:text-white transition-colors"
            >
              Training &amp; Advisory
            </Link>
            <span className="text-zinc-600">·</span>
            <Link
              href="/#approach"
              className="hover:text-white transition-colors"
            >
              Our Approach
            </Link>
            <span className="text-zinc-600">·</span>
            <Link
              href="/academy"
              className="hover:text-white transition-colors"
            >
              Academy
            </Link>
            <span className="text-zinc-600">·</span>
            <Link href="/#about" className="hover:text-white transition-colors">
              About
            </Link>
            <span className="text-zinc-600">·</span>
            <button
              onClick={() =>
                onOpenModal
                  ? onOpenModal("Contact Us")
                  : (window.location.href = "/training#enquire")
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Row: Legal links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms
            </Link>
          </div>
          <div>© 2026 Awethentic Group Limited</div>
        </div>
      </div>
    </footer>
  );
}
