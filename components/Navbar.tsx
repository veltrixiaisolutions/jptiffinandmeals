"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Menu } from "lucide-react";
import { CONTACT_DETAILS } from "@/data/menuData";

interface NavbarProps {
  onOpenOrderModal?: (
    initialTier?: "lean" | "balanced" | "power",
    initialDiet?: "veg" | "non-veg",
    initialDuration?: "trial" | "weekly" | "monthly"
  ) => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Verified navigation routes per brief page 4
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meal Plans", href: "/plans" },
    { name: "Menu", href: "/#menu" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleTryOneDay = () => {
    if (onOpenOrderModal) {
      onOpenOrderModal("balanced", "non-veg", "trial");
    } else {
      window.location.href = "/plans";
    }
  };

  return (
    <>
      {/* Announcement Bar: exact copy from brief */}
      <div className="w-full bg-[#111111] text-[#F7F5EF] py-2 px-4 text-center text-xs tracking-wide border-b border-[#B69A59]/20 font-medium">
        Chef-made meals • Monday-Friday delivery • Serving Toronto & the GTA
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md py-2.5 border-b border-[#B69A59]/30 shadow-md"
            : "bg-[#111111] py-3 border-b border-[#B69A59]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: original round JP badge preserved exactly */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-[#B69A59]/50 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-black shrink-0">
              <Image
                src="/jptiffinImages/jptiffinblackbg.png"
                alt="JP TIFFIN & MEALS"
                width={56}
                height={56}
                className="object-contain rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-base font-bold tracking-tight text-[#F7F5EF] leading-tight">
                JP TIFFIN & MEALS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-wider text-[#B69A59] uppercase font-semibold">
                Toronto & GTA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : link.href.startsWith("/#")
                  ? false
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#B69A59] ${
                    isActive
                      ? "text-[#B69A59] font-semibold border-b-2 border-[#B69A59] pb-0.5"
                      : "text-[#F7F5EF]/90"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: WhatsApp & Primary "Try One Day" */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#F7F5EF] border border-[#B69A59]/40 hover:bg-[#B69A59]/10 transition-colors"
              title="Ask on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B69A59]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleTryOneDay}
              className="px-4 sm:px-5 py-2 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm"
            >
              Try One Day
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F7F5EF] border border-[#B69A59]/40 hover:bg-[#B69A59]/10 transition-colors focus:outline-none flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#B69A59]" />
              ) : (
                <Menu className="w-5 h-5 text-[#F7F5EF]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-[#111111] text-[#F7F5EF] z-50 shadow-2xl flex flex-col justify-between border-l border-[#B69A59]/30 overflow-y-auto md:hidden"
            >
              <div>
                <div className="p-5 flex items-center justify-between border-b border-[#B69A59]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#B69A59]/40 bg-black">
                      <Image
                        src="/jptiffinImages/jptiffinblackbg.png"
                        alt="JP TIFFIN & MEALS"
                        width={40}
                        height={40}
                        className="object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#F7F5EF]">JP TIFFIN & MEALS</h3>
                      <p className="text-[10px] text-[#B69A59]">Toronto & GTA</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg border border-[#B69A59]/30 text-[#F7F5EF] hover:bg-[#B69A59]/10"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="p-5 space-y-2">
                  {navLinks.map((link) => {
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : link.href.startsWith("/#")
                        ? false
                        : pathname?.startsWith(link.href);

                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#B69A59]/15 text-[#B69A59] font-bold border-l-2 border-[#B69A59]"
                            : "text-[#F7F5EF]/90 hover:bg-[#B69A59]/10 hover:text-[#B69A59]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="p-5 border-t border-[#B69A59]/20 space-y-3 bg-[#111111]/90">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleTryOneDay();
                  }}
                  className="w-full py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] transition-all"
                >
                  Try One Day
                </button>

                <a
                  href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#F7F5EF] border border-[#B69A59]/40 hover:bg-[#B69A59]/10 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#B69A59]" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
