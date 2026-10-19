"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import Link from "next/link";
import {
  PLAN_TIERS,
  PLAN_INCLUSION_NOTE,
  DURATION_COPY,
  CLASSIC_INDIAN_TIFFIN,
  CUSTOMIZATION_COPY,
  CONTACT_DETAILS,
} from "@/data/menuData";
import { Check, MessageCircle, ArrowRight, Info } from "lucide-react";

export default function PlansPage() {
  const [diet, setDiet] = useState<"veg" | "non-veg">("non-veg");
  const [duration, setDuration] = useState<"trial" | "weekly" | "monthly">("trial");

  // Modal State
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState<"lean" | "balanced" | "power">("balanced");
  const [modalClassic, setModalClassic] = useState(false);

  const handleOpenPlanOrder = (tierId: "lean" | "balanced" | "power") => {
    setModalTier(tierId);
    setModalClassic(false);
    setIsOrderModalOpen(true);
  };

  const handleOpenClassicQuote = () => {
    setModalClassic(true);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111]">
      <Navbar onOpenOrderModal={(tier) => handleOpenPlanOrder((tier as any) || "balanced")} />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Meal Plans & Reference Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mt-2">
            Chef-made meals. More variety. Your portion.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
            Every Healthy Meal Plan includes your main meal, one 8-oz side and an Indian meal of dal or sabji with 3 tawa rotis. Lean, Balanced and Power change the main-meal portion.
          </p>

          {/* Unified Duration & Dietary Selector per Brief Page 6 */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Dietary Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-white border border-[#B69A59]/30 shadow-sm">
              <button
                type="button"
                onClick={() => setDiet("non-veg")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  diet === "non-veg"
                    ? "bg-[#111111] text-[#F7F5EF]"
                    : "text-[#111111]/70 hover:text-[#111111]"
                }`}
              >
                Non-Vegetarian
              </button>
              <button
                type="button"
                onClick={() => setDiet("veg")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  diet === "veg"
                    ? "bg-[#111111] text-[#F7F5EF]"
                    : "text-[#111111]/70 hover:text-[#111111]"
                }`}
              >
                Vegetarian
              </button>
            </div>

            {/* Duration Selector: Defaults to trial so displayed price is not mistaken */}
            <div className="inline-flex p-1 rounded-xl bg-white border border-[#B69A59]/30 shadow-sm">
              <button
                type="button"
                onClick={() => setDuration("trial")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  duration === "trial"
                    ? "bg-[#B69A59] text-[#111111]"
                    : "text-[#111111]/70 hover:text-[#111111]"
                }`}
              >
                One-Day Trial
              </button>
              <button
                type="button"
                onClick={() => setDuration("weekly")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  duration === "weekly"
                    ? "bg-[#B69A59] text-[#111111]"
                    : "text-[#111111]/70 hover:text-[#111111]"
                }`}
              >
                Weekly (5 packages)
              </button>
              <button
                type="button"
                onClick={() => setDuration("monthly")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                  duration === "monthly"
                    ? "bg-[#B69A59] text-[#111111]"
                    : "text-[#111111]/70 hover:text-[#111111]"
                }`}
              >
                Monthly (20 packages)
              </button>
            </div>
          </div>
        </div>

        {/* Portion Comparison Table from Brief Page 5 */}
        <div className="mb-12 bg-white rounded-2xl p-5 sm:p-7 border border-[#B69A59]/25 shadow-sm overflow-x-auto">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#B69A59]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
              Choose Your Main-Meal Portion
            </h3>
          </div>
          <table className="w-full min-w-[500px] text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#B69A59]/20 text-[#111111]/70 font-semibold">
                <th className="py-2.5 px-3">Plan</th>
                <th className="py-2.5 px-3">Main-meal portion</th>
                <th className="py-2.5 px-3">Daily accompaniments</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-2.5 px-3 font-bold text-[#111111]">Lean</td>
                <td className="py-2.5 px-3">One 16-oz bowl</td>
                <td className="py-2.5 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-[#111111]">Balanced</td>
                <td className="py-2.5 px-3">One 24-oz bowl</td>
                <td className="py-2.5 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-[#111111]">Power</td>
                <td className="py-2.5 px-3">Two 16-oz bowls (32 oz total)</td>
                <td className="py-2.5 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-[11px] text-[#111111]/60 leading-relaxed">
            {PLAN_INCLUSION_NOTE}
          </p>
        </div>

        {/* 3 Healthy Plan Cards: Lean, Balanced, Power */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {PLAN_TIERS.map((tier) => {
            const description =
              diet === "veg" ? tier.vegDescription : tier.nonVegDescription;
            const image = diet === "veg" ? tier.images.veg : tier.images["non-veg"];
            const price = tier.prices[diet][duration];
            const isQuoteRequired = price === null;

            const buttonLabel =
              duration === "trial"
                ? `Try ${tier.name}`
                : isQuoteRequired
                ? "Ask on WhatsApp"
                : "Choose This Plan";

            return (
              <div
                key={tier.id}
                className="bg-white rounded-2xl border border-[#B69A59]/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Photo with caption per Page 7 */}
                  <div className="relative aspect-[4/3] w-full bg-black/5 overflow-hidden">
                    <Image
                      src={image}
                      alt={`${tier.name} ${diet === "veg" ? "Vegetarian" : "Non-Vegetarian"} meal package`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#111111]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                      {tier.name} • {diet === "veg" ? "Veg" : "Non-Veg"}
                    </div>
                    <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white">
                      Capacity: {tier.portion}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#111111]">
                      {tier.name} {diet === "veg" ? "Veg" : "Non-Veg"}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#111111]/75 leading-relaxed min-h-[48px]">
                      {description}
                    </p>

                    {/* Price Block */}
                    <div className="mt-5 pt-4 border-t border-[#B69A59]/20">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111]/60 block mb-1">
                        {duration === "trial"
                          ? "One-day trial (1 package)"
                          : duration === "weekly"
                          ? "Weekly (5 packages)"
                          : "Monthly (20 packages)"}
                      </span>
                      {isQuoteRequired ? (
                        <div>
                          <span className="text-lg font-bold text-[#B69A59]">
                            Quote required
                          </span>
                          <p className="text-[11px] text-[#111111]/60 mt-0.5">
                            Ask for weekly pricing on WhatsApp
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold text-[#111111]">
                            ${price.toFixed(2)}
                          </span>
                          <span className="text-xs font-semibold text-[#111111]/60">
                            CAD total
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Inclusions summary */}
                    <ul className="mt-4 space-y-1.5 text-xs text-[#111111]/80">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                        <span>Main: <strong>{tier.portion}</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                        <span>Daily 8-oz side dish</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                        <span>Indian meal (dal or sabji) + 3 tawa rotis</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (isQuoteRequired) {
                        const msg = `Hi JP TIFFIN & MEALS, I would like to ask about weekly pricing for ${tier.name} Non-Veg. Please provide rates and delivery details.`;
                        window.open(
                          `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`,
                          "_blank"
                        );
                      } else {
                        handleOpenPlanOrder(tier.id);
                      }
                    }}
                    className="w-full py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>{buttonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-[#111111]/50 mt-2">
                    Dishes change with daily menu. Images show example meals.
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Duration Copy Below Prices (Brief Page 5) */}
        <div className="p-6 rounded-2xl bg-white border border-[#B69A59]/25 shadow-sm text-xs sm:text-sm text-[#111111]/80 leading-relaxed mb-12">
          <h4 className="font-bold text-[#111111] mb-2 uppercase text-xs tracking-wider">
            Plan Duration & Schedule Terms
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>{DURATION_COPY.trial}</li>
            <li>{DURATION_COPY.weekly}</li>
            <li>{DURATION_COPY.monthly}</li>
            <li>{DURATION_COPY.schedule}</li>
          </ul>
        </div>

        {/* Classic Indian Tiffin (Separate Product Card per Brief Page 6) */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#111111] text-[#F7F5EF] border border-[#B69A59]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B69A59]">
              Separate Product Offering
            </span>
            <h3 className="text-2xl font-bold text-[#F7F5EF]">
              {CLASSIC_INDIAN_TIFFIN.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F5EF]/80 max-w-xl leading-relaxed">
              {CLASSIC_INDIAN_TIFFIN.description}
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenClassicQuote}
            className="w-full md:w-auto px-6 py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all whitespace-nowrap"
          >
            {CLASSIC_INDIAN_TIFFIN.ctaText}
          </button>
        </div>

        {/* Customization Copy (Brief Page 6) */}
        <div className="p-6 rounded-2xl bg-white border border-[#B69A59]/25 text-center max-w-2xl mx-auto shadow-sm">
          <h4 className="text-base font-bold text-[#111111]">
            {CUSTOMIZATION_COPY.title}
          </h4>
          <p className="mt-2 text-xs sm:text-sm text-[#111111]/75 leading-relaxed">
            {CUSTOMIZATION_COPY.description}
          </p>
          <div className="mt-4">
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                "Hi JP TIFFIN & MEALS, I would like to ask about a custom meal plan (e.g. mixed Veg/Non-Veg days or custom duration)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111111] border border-[#B69A59] hover:bg-[#B69A59]/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#B69A59]" />
              <span>Ask About Custom Plan on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialTier={modalTier}
        initialDiet={diet}
        initialDuration={duration}
        isClassicTiffin={modalClassic}
      />
    </div>
  );
}
