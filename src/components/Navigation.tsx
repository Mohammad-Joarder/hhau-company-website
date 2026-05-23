"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Platforms",        href: "#ecosystem" },
  { label: "Features",         href: "#features" },
  { label: "Trust & Safety",   href: "#trust" },
  { label: "Technology",       href: "#technology" },
  { label: "Get the App",      href: "#download" },
  { label: "Legal",            href: "#legal" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="container-tight">
          <nav className="flex items-center justify-between h-16 md:h-[72px]" aria-label="Main navigation">

            {/* Dual logo lockup */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0] rounded-lg"
              aria-label="HelpingHandsAu and LetsGO home"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="32px" className="object-contain" />
                </div>
                <span className="font-semibold text-[14px] text-[#111111] tracking-tight hidden sm:block">
                  HelpingHands<span className="text-[#1AABF0]">Au</span>
                </span>
                <div className="w-px h-5 bg-[rgba(0,0,0,0.12)] mx-0.5" aria-hidden="true" />
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="32px" className="object-contain" />
                </div>
                <span className="font-semibold text-[14px] text-[#111111] tracking-tight hidden sm:block">
                  Let&rsquo;s<span className="text-[#E8511A]">GO</span>
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0] rounded link-underline whitespace-nowrap ${
                    link.label === "Get the App"
                      ? "text-[#1AABF0] font-medium hover:text-[#0A8FCC]"
                      : "text-[#4A4F4A] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm font-medium bg-[#111111] text-white px-5 py-2.5 rounded-full hover:bg-[#2A2D2A] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 whitespace-nowrap"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#4A4F4A] hover:text-[#111111] transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AABF0]"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            className="fixed top-[64px] left-0 right-0 z-40 glass border-b border-[rgba(0,0,0,0.06)] lg:hidden"
          >
            <div className="container-tight py-4">
              {/* Platform logos */}
              <div className="flex items-center gap-4 px-4 py-3 mb-2 bg-[rgba(0,0,0,0.02)] rounded-2xl">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7">
                    <Image src="/icon-helpinghandsau.png" alt="HelpingHandsAu" fill sizes="28px" className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-[#111111]">HelpingHandsAu</span>
                </div>
                <div className="w-px h-4 bg-[rgba(0,0,0,0.1)]" />
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7">
                    <Image src="/icon_letsgo.png" alt="LetsGO" fill sizes="28px" className="object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-[#111111]">LetsGO</span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-sm text-[#2A2D2A] hover:text-[#111111] hover:bg-[rgba(0,0,0,0.04)] px-4 py-3 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="border-t border-[rgba(0,0,0,0.06)] mt-2 pt-3">
                  <button
                    onClick={() => handleNavClick("#contact")}
                    className="w-full text-sm font-medium bg-[#111111] text-white px-5 py-3 rounded-xl text-center"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
