import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWE Intelligence — Practical AI Skills, Conscious Leadership & Human Wisdom",
  description:
    "AI training for leaders and teams. Learn to apply AI to real work while developing the judgement, adaptability and awareness to use it thoughtfully.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#141815] selection:bg-[#18231E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
