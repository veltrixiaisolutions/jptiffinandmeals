"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu as MenuIcon,
  X,
  Flame,
  Sparkles,
  ChefHat,
  MessageCircle,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenOrderModal?: (mealType?: string, plan?: string) => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open to prevent background scrolling
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

  // Dedicated page routes
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Plans", href: "/plans" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleOrderClick = () => {
    if (onOpenOrderModal) {
      onOpenOrderModal("The Balanced Meal", "Chef Tasting Trial Box (2 Meals - $29.99)");
    } else {
      window.location.href = "/plans";
    }
  };

  return (
    <>
      {/* Top Delivery & Chef Guarantee Marquee Ticker */}
      <div className="w-full max-w-full bg-slate-900 border-b border-amber-500/20 py-1.5 overflow-hidden text-[11px] text-slate-300 relative z-50">
        <div className="flex animate-marquee whitespace-nowrap gap-10 items-center font-medium">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-amber-400 font-bold">100% Master Chef Prepared</span> • No home-cook guesswork
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-3 h-3 text-amber-400" />
            <span className="text-white font-medium">Zero Seed Oils</span> • Spanish EVOO & Pure Ghee
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 font-bold">Weekend Delivery:</span> Saturdays & Sundays Included
          </span>
          <span className="flex items-center gap-1.5">
            <ChefHat className="w-3 h-3 text-amber-400" />
            <span className="text-white font-medium">2-Meal Tasting Trial Box $29.99</span> • Free Delivery
          </span>
          {/* Duplicate loop for continuous marquee */}
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-amber-400 font-bold">100% Master Chef Prepared</span> • No home-cook guesswork
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="w-3 h-3 text-amber-400" />
            <span className="text-white font-medium">Zero Seed Oils</span> • Spanish EVOO & Pure Ghee
          </span>
        </div>
      </div>

      {/* Main Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-1.5 border-b border-slate-200/80 shadow-md"
            : "bg-white/90 backdrop-blur-md py-2 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#b45309] via-[#f59e0b] to-[#d97706] shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-0.5 shadow-inner">
                <Image
                  src="/jptiffinImages/jptiffinblackbg.png"
                  alt="JP Tiffin and Meals Logo"
                  width={62}
                  height={62}
                  className="object-contain rounded-full"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all relative py-1 hover:translate-y-[-1px] ${
                    isActive
                      ? "text-amber-600 font-extrabold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:rounded-full"
                      : "text-slate-700 hover:text-amber-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action: WhatsApp CTA & Prominent Order Now Button */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://wa.me/14377576969?text=Hello%20Chef%20Japleen%2C%20I%20have%20a%20question%20about%20JP%20Tiffin%20%26%20Meals"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all shadow-sm"
              title="Chat with Chef Japleen on WhatsApp (+1 437 757-6969)"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleOrderClick}
              className="px-4 sm:px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-sm shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <span className="font-extrabold">&rarr;</span>
            </button>

            {/* Animated Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 flex flex-col items-center justify-center gap-1.5 transition-colors focus:outline-none"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-slate-800 rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-0.5 bg-slate-800 rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="w-5 h-0.5 bg-slate-800 rounded-full origin-center"
              />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ============================================================== */}
      {/* 📱 MOBILE NAVIGATION DRAWER - SLIDES IN FROM THE RIGHT        */}
      {/* ============================================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 md:hidden"
              aria-hidden="true"
            />

            {/* Slide-over Drawer From the Right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto md:hidden border-l border-slate-200"
            >
              {/* Drawer Header */}
              <div>
                <div className="p-5 flex items-center justify-between border-b border-slate-100 bg-slate-50/70">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-[#b45309] to-[#f59e0b] shadow-sm">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Image
                          src="/jptiffinImages/jptiffinblackbg.png"
                          alt="JP Logo"
                          width={40}
                          height={40}
                          className="object-contain rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-black text-slate-900 tracking-tight">
                        JP TIFFIN & MEALS
                      </h3>
                      <p className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                        Master Chef Japleen Singh
                      </p>
                    </div>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center shadow-sm"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Staggered Navigation Links */}
                <nav className="p-5 space-y-1.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 px-3 py-1">
                    Navigation
                  </p>
                  {navLinks.map((link, idx) => {
                    const isActive =
                      link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.1, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                            isActive
                              ? "bg-amber-50 text-amber-900 border border-amber-200/80 font-black shadow-sm"
                              : "text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                          }`}
                        >
                          <span>{link.name}</span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform ${
                              isActive ? "text-amber-600 translate-x-0.5" : "text-slate-400 opacity-60"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Footer Actions: WhatsApp, Order Now, Chef Details */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
                {/* Direct WhatsApp Concierge */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  href="https://wa.me/14377576969?text=Hello%20Chef%20Japleen%2C%20I%20have%20a%20question%20about%20JP%20Tiffin%20%26%20Meals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chef Japleen</span>
                </motion.a>

                {/* Primary Order Now Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOrderClick();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Order Now (From $29.99)</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                {/* Quick Info & Phone Contact */}
                <div className="pt-2 text-center space-y-1">
                  <a
                    href="tel:+14377576969"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>+1 (437) 757-6969</span>
                  </a>
                  <p className="text-[11px] text-slate-500 font-medium">
                    100% Prepared by Chef Japleen • Zero Seed Oils
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
