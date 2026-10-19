"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTACT_DETAILS } from "@/data/menuData";

interface HeroProps {
  onOpenOrderModal: (tier?: "lean" | "balanced" | "power", diet?: "veg" | "non-veg", duration?: "trial" | "weekly" | "monthly") => void;
}

export default function Hero({ onOpenOrderModal }: HeroProps) {
  return (
    <section className="relative bg-[#111111] text-[#F7F5EF] overflow-hidden border-b border-[#B69A59]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Exact Headline, Subtext, and Buttons from Brief Page 4 */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B69A59]/15 border border-[#B69A59]/30 text-[#B69A59] text-xs font-semibold tracking-wide">
              <span>Chef-Made Meals • Toronto & GTA Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F7F5EF] leading-[1.15]">
              Chef-made meals. <br />
              <span className="text-[#B69A59]">More variety.</span> Your portion.
            </h1>

            <p className="text-base sm:text-lg text-[#F7F5EF]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A main protein meal, an 8-oz side and an Indian meal with 3 tawa rotis. Choose Lean, Balanced or Power, with Veg and Non-Veg options.
            </p>

            {/* Buttons: View Meal Plans | Try One Day */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/plans"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>View Meal Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenOrderModal("balanced", "non-veg", "trial")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-xs font-semibold text-[#F7F5EF] border border-[#B69A59] hover:bg-[#B69A59]/15 transition-all flex items-center justify-center gap-2"
              >
                <span>Try One Day</span>
              </button>
            </div>

            {/* Supporting line from Brief Page 4 */}
            <p className="text-xs text-[#F7F5EF]/60 pt-1">
              Free delivery in our service areas. Confirm your postal code with us.
            </p>
          </div>

          {/* Right Column: One Static Hero Image per Brief Page 4 */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#B69A59]/40 shadow-2xl bg-black">
              <Image
                src="/images/meals/balanced-package-hero.jpg"
                alt="JP Balanced meal package with a main bowl, side, Indian dish and three tawa rotis."
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#111111]/85 backdrop-blur-sm border border-[#B69A59]/30 text-xs text-[#F7F5EF]">
                <p className="font-bold text-[#B69A59]">Complete Daily Package</p>
                <p className="text-[11px] text-[#F7F5EF]/80">
                  Main bowl, 8-oz side dish, Indian dal or sabji, and 3 tawa rotis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
