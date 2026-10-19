"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface NavbarProps {
  currentPath?: string;
  onOpenModal?: (title: string) => void;
  minimal?: boolean; // For /gent which has no menu
}

export default function Navbar({
  currentPath = "/",
  minimal = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Training & Advisory", href: "/training" },
    { name: "Our Approach", href: "/#approach" },
    { name: "Academy", href: "/academy" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "bg-[#FAF9F5]/85 backdrop-blur-md border-b border-black/[0.06] shadow-[0_4px_24px_-12px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "h-18" : "h-22 sm:h-24"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="AWE Intelligence"
        >
          <Image
            src="/logo-black.png"
            alt="AWE Intelligence"
            width={236}
            height={100}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links */}
        {!minimal && (
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-normal text-black">
            {navLinks.map((link, idx) => {
              const isActive = currentPath === link.href;
              return (
                <div key={link.name} className="flex items-center gap-6">
                  <Link
                    href={link.href}
                    className={`transition-colors duration-200 py-1 relative ${
                      isActive
                        ? "text-zinc-950 font-semibold"
                        : "hover:text-zinc-950"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-zinc-300 text-xs select-none">·</span>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Primary CTA Button */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#18231E] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black hover:shadow-xs active:scale-[0.98] cursor-pointer"
          >
            <span>Discuss training for my team</span>
            <span className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Mobile hamburger button */}
          {!minimal && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-700 hover:text-black focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {!minimal && mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-b border-zinc-200/80 bg-[#FAF9F5]/98 backdrop-blur-md shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-800 hover:text-black py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center rounded-full bg-[#18231E] px-5 py-2.5 text-xs font-medium text-white hover:bg-black transition-all"
          >
            Discuss training for my team →
          </Link>
        </div>
      )}
    </header>
  );
}
