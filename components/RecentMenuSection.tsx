"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RECENT_MENU_EXAMPLES, CONTACT_DETAILS } from "@/data/menuData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function RecentMenuSection() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = RECENT_MENU_EXAMPLES[activeDayIndex];

  // Approved food photos matching the exact written names
  const exampleImages = [
    {
      src: "/images/meals/peri-peri-bowl.jpg",
      alt: "Peri-Peri Paneer and Chicken Bowls with fajita vegetables",
    },
    {
      src: "/images/meals/afghani-malai-bowl.jpg",
      alt: "Afghani Malai Bowl with Sriracha Lime Sauce",
    },
    {
      src: "/images/meals/sweet-corn-pasta.jpg",
      alt: "Sweet Corn Red Sauce Pasta with Feta",
    },
  ];

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#B69A59]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Brief Page 7 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Recent menu examples
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            A menu that keeps your week interesting
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
            Explore examples from our kitchen. For the latest daily menu, check our WhatsApp Status and Instagram Story.
          </p>
          <div className="mt-5">
            <a
              href={CONTACT_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111111] border border-[#B69A59] hover:bg-[#B69A59]/10 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#B69A59]" />
              <span>Follow {CONTACT_DETAILS.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Day Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {RECENT_MENU_EXAMPLES.map((day, idx) => (
            <button
              key={day.dayName}
              type="button"
              onClick={() => setActiveDayIndex(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeDayIndex === idx
                  ? "bg-[#111111] text-[#F7F5EF] shadow-sm"
                  : "bg-white text-[#111111]/70 border border-[#B69A59]/30 hover:border-[#B69A59]"
              }`}
            >
              {day.dayName}
            </button>
          ))}
        </div>

        {/* Selected Example Detail Card with robust, non-overlapping flex layout */}
        <div className="bg-white rounded-2xl border border-[#B69A59]/30 overflow-hidden shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Column: Food Photo (strictly 5/12 width on desktop, matching card height) */}
            <div className="w-full md:w-5/12 relative min-h-[280px] md:min-h-[420px] shrink-0 bg-black/5 overflow-hidden">
              <Image
                src={exampleImages[activeDayIndex]?.src || "/images/meals/peri-peri-bowl.jpg"}
                alt={exampleImages[activeDayIndex]?.alt || "Example dish from rotating menu"}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/75 text-[10px] text-white font-medium z-10">
                Example from our rotating menu
              </div>
            </div>

            {/* Right Column: Menu Items (strictly 7/12 width on desktop) */}
            <div className="w-full md:w-7/12 p-6 sm:p-8 space-y-4 flex flex-col justify-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A59]">
                  {activeDay.dayName} Rotation
                </span>
                <h3 className="text-xl font-bold text-[#111111] mt-1">
                  Daily Dish Breakdown
                </h3>
              </div>

              {/* Veg Main */}
              <div className="p-3.5 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                  <span className="text-xs font-bold text-emerald-900 uppercase">
                    Vegetarian Main
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#111111]">
                  {activeDay.vegMain}
                </p>
              </div>

              {/* Non-Veg Main */}
              <div className="p-3.5 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-700 shrink-0" />
                  <span className="text-xs font-bold text-amber-950 uppercase">
                    Non-Vegetarian Main
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#111111]">
                  {activeDay.nonVegMain}
                </p>
              </div>

              {/* Side / Indian Meal */}
              <div className="p-3.5 rounded-xl bg-white border border-[#B69A59]/30">
                <span className="text-xs font-bold text-[#B69A59] uppercase block mb-1">
                  Side & Indian Meal (Included with Every Plan)
                </span>
                <p className="text-xs sm:text-sm text-[#111111]/85 font-medium">
                  {activeDay.sideAndIndianMeal}
                </p>
              </div>

              <p className="text-[11px] text-[#111111]/60">
                Dishes change daily. Follow our WhatsApp Status or Instagram Story for today's live drop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
