"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

/**
 * 👇 HERO CAROUSEL MEDIA SLIDES
 * You can easily add, edit, or remove videos and images here!
 * type: 'image' | 'video'
 */
export const HERO_SLIDES = [
  {
    id: 1,
    type: "image",
    src: "/jptiffinImages/image1.png",
    title: "Chef's Chicken Tikka Rice Bowl",
    subtitle: "3D Culinary Art • 48g Protein • Slow-Spiced Basmati",
    badge: "Chef Signature Creation",
    protein: "48g Protein",
    calories: "526 kcal",
  },
  {
    id: 2,
    type: "video",
    src: "/jptiffinImages/Video.mp4",
    title: "Inside the JP Culinary Kitchen",
    subtitle: "Real Kitchen Action • Chef Japleen Singh at Work",
    badge: "Live Kitchen Video",
    protein: "100% Fresh Daily",
    calories: "Zero Seed Oils",
  },
  {
    id: 3,
    type: "image",
    src: "/jptiffinImages/jptiffinandmeals detailed.png",
    title: "Four-Layer Precision Bowl",
    subtitle: "Spiced Basmati, Chicken Tikka, Fresh Salad & Herb Drizzle",
    badge: "Quantified Layering",
    protein: "48g Protein",
    calories: "Balanced Macros",
  },
  {
    id: 4,
    type: "image",
    src: "/images/chef-salmon-bowl.jpg",
    title: "Pan-Seared Atlantic Salmon & Quinoa",
    subtitle: "Wild Atlantic Salmon, Andean Tricolor Quinoa & Asparagus",
    badge: "Omega-3 Rich",
    protein: "44g Protein",
    calories: "490 kcal",
  },
  {
    id: 5,
    type: "image",
    src: "/images/chef-kitchen-plating.jpg",
    title: "Personal Artisan Plating",
    subtitle: "Handcrafted by Chef Japleen Singh • Commercial Kitchen",
    badge: "Haute Cuisine",
    protein: "HACCP Certified",
    calories: "Ontario Farm Fresh",
  },
];

interface HeroProps {
  onOpenOrderModal?: (mealType?: string, plan?: string) => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Auto-play timer (slides every 6 seconds for images, 8 seconds for video, unless hovered)
  useEffect(() => {
    if (isPaused) return;
    const isVideo = HERO_SLIDES[currentSlide]?.type === "video";
    const duration = isVideo ? 8000 : 5500;
    const interval = setInterval(nextSlide, duration);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  // Restart video playback whenever slide switches to a video
  useEffect(() => {
    const activeSlide = HERO_SLIDES[currentSlide];
    if (activeSlide && activeSlide.type === "video") {
      const vid = videoRefs.current[activeSlide.id];
      if (vid) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      }
    }
  }, [currentSlide]);


  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* ============================================================== */}
      {/* 🎬 1. FULL-SCREEN HERO MEDIA CAROUSEL (COVERS THE SCREEN)       */}
      {/* ============================================================== */}
      <div
        className="relative w-full h-[82vh] sm:h-[86vh] lg:h-[90vh] min-h-[580px] max-h-[920px] bg-slate-950 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Track */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {slide.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[slide.id] = el;
                }}
                src={slide.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            )}

            {/* Cinematic Gradient Vignette for Contrast & Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />
          </div>
        ))}

        {/* Floating Content Overlay Centered on the Screen-Covering Carousel */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 pointer-events-none">
          {/* Top Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>100% Master Chef Prepared • Toronto & GTA</span>
            </div>
          </motion.div>

          {/* Central Hero Headline & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-4xl mx-auto space-y-5 sm:space-y-6 pointer-events-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] drop-shadow-md">
              Dine Like Royalty. <br />
              <span className="gold-gradient-text drop-shadow-lg">
                Handcrafted by Master Chef Japleen.
              </span>
            </h1>

            <p className="text-sm sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
              Experience the pinnacle of culinary-grade meal prep. Precision-calibrated macros, 45g+ clean protein, cooked exclusively with Spanish Extra Virgin Olive Oil and zero seed oils.
            </p>

            {/* CTAs on the Carousel */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#menu-pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>View 3 Meal Types & Menu</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => {
                  if (onOpenOrderModal) {
                    onOpenOrderModal("The Balanced Meal", "Chef Tasting Trial Box (2 Meals - $29.99)");
                  } else {
                    window.location.hash = "#plans";
                  }
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 hover:border-amber-400 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Order Trial Box ($29.99)</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Row on Carousel: Scroll Prompt */}
          <div className="w-full max-w-5xl mx-auto flex items-center justify-center pointer-events-auto">
            {/* Scroll Down Cue */}
            <a
              href="#hero-content"
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 shadow-lg"
            >
              <span>Explore Menu & Chef Standards</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
            </a>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white hover:text-amber-400 flex items-center justify-center backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/50 hover:bg-black/80 text-white hover:text-amber-400 flex items-center justify-center backdrop-blur-md border border-white/20 transition-all transform hover:scale-110 shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>


        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-8 bg-amber-400 shadow-md" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 📖 2. CONTENT STARTS AFTER THE CAROUSEL                         */}
      {/* ============================================================== */}
      <div id="hero-content" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Background Accents */}
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-12 right-1/4 w-[400px] h-[400px] bg-emerald-400/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Haute Cuisine Meets Precision Sports Nutrition</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Culinary Excellence In Every Container, <br />
              <span className="gold-gradient-text">Zero Compromises.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Founded by Executive Chef Japleen Singh, JP Tiffin & Meals was created because ordinary tiffin services cut corners with industrial seed oils, watery gravies, and lack of real protein. Our master culinary kitchen prepares laboratory-quantified, gourmet meals blast-chilled fresh to your door.
            </p>
          </motion.div>

          {/* 3 Core Culinary Pillars */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Zero Commercial Seed Oils</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Cooked exclusively with cold-pressed Spanish Extra Virgin Olive Oil and pure clarified butter (Ghee). Zero inflammatory canola, soybean, or vegetable oils.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">45g–52g Lab-Weighed Protein</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Every container is weighed to ensure guaranteed bioavailable amino acids for lean muscle repair, sustained daytime fullness, and energy without crashes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">100% Hormone-Free Local Meats</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Directly sourced from trusted local Ontario farms. Fresh triple-trimmed poultry, wild Canadian salmon, and artisanal high-protein paneer.
              </p>
            </motion.div>
          </div>

          {/* Customer Rating & Social Proof Strip */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Subscriber"
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Subscriber"
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                  alt="Subscriber"
                />
                <div className="h-11 w-11 rounded-full bg-amber-500 ring-2 ring-white flex items-center justify-center text-xs font-black text-slate-950 shadow-sm">
                  +1.2k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                  {"★".repeat(5)}{" "}
                  <span className="text-slate-900 ml-1 font-black">4.9 / 5.0 Google Rating</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Trusted by 1,200+ professionals, athletes & fitness enthusiasts in the GTA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="#menu-pricing"
                className="w-full md:w-auto px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md text-center"
              >
                Explore 3 Meal Types &rarr;
              </a>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="text-center p-3 border-r border-slate-200/80 last:border-none">
              <p className="text-2xl sm:text-4xl font-black gold-gradient-text">150,000+</p>
              <p className="text-xs text-slate-600 font-bold mt-1">Gourmet Meals Delivered</p>
            </div>
            <div className="text-center p-3 border-r border-slate-200/80 last:border-none">
              <p className="text-2xl sm:text-4xl font-black text-emerald-600">48g+</p>
              <p className="text-xs text-slate-600 font-bold mt-1">Avg Clean Protein / Meal</p>
            </div>
            <div className="text-center p-3 border-r border-slate-200/80 last:border-none">
              <p className="text-2xl sm:text-4xl font-black text-slate-900">15 Days</p>
              <p className="text-xs text-slate-600 font-bold mt-1">Gourmet Menu Rotation</p>
            </div>
            <div className="text-center p-3">
              <p className="text-2xl sm:text-4xl font-black text-amber-600">100%</p>
              <p className="text-xs text-slate-600 font-bold mt-1">Master Chef Crafted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
