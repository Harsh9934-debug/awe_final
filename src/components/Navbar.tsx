"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  currentPath?: string;
  onOpenModal?: (title: string) => void;
  minimal?: boolean; // For /gent which has no menu
}

export default function Navbar({
  currentPath = "/",
  onOpenModal,
  minimal = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Training & Advisory", href: "/training" },
    { name: "Our Approach", href: "/#approach" },
    { name: "Academy", href: "/academy" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full transition-all">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group" aria-label="AWE Intelligence">
          <Image
            src="/logo-black.png"
            alt="AWE Intelligence"
            width={236}
            height={100}
            priority
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop Navigation Links (hidden if minimal is true) */}
        {!minimal && (
          <nav className="hidden md:flex items-center gap-5 text-[13px] font-normal text-zinc-700">
            {navLinks.map((link, idx) => {
              const isActive =
                currentPath === link.href ||
                (link.href.startsWith("/#") && currentPath === "/" && false);
              return (
                <div key={link.name} className="flex items-center gap-5">
                  <Link
                    href={link.href}
                    className={`transition-colors py-1 relative ${
                      isActive
                        ? "text-black font-medium border-b-2 border-black"
                        : "hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-zinc-400 text-xs select-none">·</span>
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
            className="group inline-flex items-center gap-2 rounded-full bg-[#1A4EAB] px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-medium text-white transition-all duration-200 hover:bg-[#123A80] hover:shadow-xs cursor-pointer"
          >
            <span>Discuss training for my team</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          {/* Mobile hamburger button */}
          {!minimal && (
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
          )}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {!minimal && mobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 border-b border-zinc-200/80 bg-[#E8E0DB]/98 backdrop-blur-md shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-black py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center rounded-full bg-[#1A4EAB] px-5 py-2.5 text-xs font-medium text-white hover:bg-[#123A80] transition-all"
          >
            Discuss training for my team →
          </Link>
        </div>
      )}
    </header>
  );
}
