"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import RecentMenuSection from "@/components/RecentMenuSection";
import ChefStorySection from "@/components/ChefStorySection";
import DeliveryCoverage from "@/components/DeliveryCoverage";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import {
  PLAN_TIERS,
  PLAN_INCLUSION_NOTE,
  DURATION_COPY,
  CLASSIC_INDIAN_TIFFIN,
  CUSTOMIZATION_COPY,
  CONTACT_DETAILS,
} from "@/data/menuData";
import { ArrowRight, Check, Info, Utensils, Sparkles, MessageCircle } from "lucide-react";

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState<"lean" | "balanced" | "power">("balanced");
  const [modalDiet, setModalDiet] = useState<"veg" | "non-veg">("non-veg");
  const [modalDuration, setModalDuration] = useState<"trial" | "weekly" | "monthly">("trial");
  const [isClassicModal, setIsClassicModal] = useState(false);

  // Home Plan Card Controls
  const [selectedDiet, setSelectedDiet] = useState<"veg" | "non-veg">("non-veg");
  const [selectedDuration, setSelectedDuration] = useState<"trial" | "weekly" | "monthly">("trial");

  const handleOpenOrderModal = (
    tier?: "lean" | "balanced" | "power",
    diet?: "veg" | "non-veg",
    duration?: "trial" | "weekly" | "monthly"
  ) => {
    if (tier) setModalTier(tier);
    if (diet) setModalDiet(diet);
    if (duration) setModalDuration(duration);
    setIsClassicModal(false);
    setIsOrderModalOpen(true);
  };

  const handleOpenClassicQuote = () => {
    setIsClassicModal(true);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111] overflow-x-hidden">
      {/* 1. Header & Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* 2. Hero Section (Brief Page 4) */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* 3. Two Offerings: Two ways to enjoy JP (Brief Page 4) */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#B69A59]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
                Our Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
                Two ways to enjoy JP
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Offering 1: Healthy Meal Plan + Indian Tiffin */}
              <div className="p-8 rounded-2xl bg-[#F7F5EF] border border-[#B69A59]/30 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B69A59]/15 text-[#B69A59] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Signature Package</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Healthy Meal Plan + Indian Tiffin
                  </h3>
                  <p className="text-sm text-[#111111]/75 leading-relaxed">
                    Your daily combination of a main protein meal, an 8-oz side and an Indian meal with 3 tawa rotis. Three main-meal sizes to suit your appetite.
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/plans"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm"
                  >
                    <span>Compare Meal Plans</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Offering 2: Classic Indian Tiffin */}
              <div className="p-8 rounded-2xl bg-[#111111] text-[#F7F5EF] border border-[#B69A59]/30 flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B69A59]/20 text-[#B69A59] text-[11px] font-bold uppercase tracking-wider">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>Traditional Tiffin</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F7F5EF]">
                    Classic Indian Tiffin
                  </h3>
                  <p className="text-sm text-[#F7F5EF]/80 leading-relaxed">
                    Dal, sabji and rotis, with rice depending on your selected plan.
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={handleOpenClassicQuote}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold text-[#F7F5EF] border border-[#B69A59] hover:bg-[#B69A59]/20 transition-all"
                  >
                    <span>Ask About Classic Tiffin</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What is Included / Portion Comparison (Brief Page 5) */}
        <section className="py-16 sm:py-20 bg-[#F7F5EF] border-b border-[#B69A59]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
                Portion Guide
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#111111] mt-2">
                Choose your main-meal portion
              </h2>
              <p className="mt-2 text-sm text-[#111111]/75 leading-relaxed">
                Every Healthy Meal Plan includes your main meal, one 8-oz side and an Indian meal of dal or sabji with 3 tawa rotis. Lean, Balanced and Power change the main-meal portion.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B69A59]/30 shadow-sm overflow-x-auto">
              <table className="w-full min-w-[500px] text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#B69A59]/25 text-[#111111]/70 font-semibold">
                    <th className="py-3 px-3">Plan</th>
                    <th className="py-3 px-3">Main-meal portion</th>
                    <th className="py-3 px-3">Daily accompaniments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#111111]">Lean</td>
                    <td className="py-3 px-3">One 16-oz bowl</td>
                    <td className="py-3 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#111111]">Balanced</td>
                    <td className="py-3 px-3">One 24-oz bowl</td>
                    <td className="py-3 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-[#111111]">Power</td>
                    <td className="py-3 px-3">Two 16-oz bowls (32 oz total)</td>
                    <td className="py-3 px-3 text-[#111111]/80">8-oz side + Indian meal + 3 tawa rotis</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-[11px] text-[#111111]/60 leading-relaxed border-t border-gray-100 pt-3">
                {PLAN_INCLUSION_NOTE}
              </p>
            </div>
          </div>
        </section>

        {/* 5. Plan Prices & Reference Cards (Brief Page 5 & 6) */}
        <section id="plans" className="py-16 sm:py-24 bg-white border-b border-[#B69A59]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
                Verified Reference Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
                Clear packages. No surprise fees.
              </h2>
              <p className="mt-2 text-sm text-[#111111]/75 leading-relaxed">
                Choose your dietary type and package duration. Defaulted to a one-day trial so entry pricing is unmistakable.
              </p>

              {/* Selector Controls */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="inline-flex p-1 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/30">
                  <button
                    type="button"
                    onClick={() => setSelectedDiet("non-veg")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedDiet === "non-veg"
                        ? "bg-[#111111] text-[#F7F5EF]"
                        : "text-[#111111]/70 hover:text-[#111111]"
                    }`}
                  >
                    Non-Vegetarian
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDiet("veg")}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedDiet === "veg"
                        ? "bg-[#111111] text-[#F7F5EF]"
                        : "text-[#111111]/70 hover:text-[#111111]"
                    }`}
                  >
                    Vegetarian
                  </button>
                </div>

                <div className="inline-flex p-1 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/30">
                  <button
                    type="button"
                    onClick={() => setSelectedDuration("trial")}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedDuration === "trial"
                        ? "bg-[#B69A59] text-[#111111]"
                        : "text-[#111111]/70 hover:text-[#111111]"
                    }`}
                  >
                    One-Day Trial
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration("weekly")}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedDuration === "weekly"
                        ? "bg-[#B69A59] text-[#111111]"
                        : "text-[#111111]/70 hover:text-[#111111]"
                    }`}
                  >
                    Weekly (5 pkgs)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDuration("monthly")}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                      selectedDuration === "monthly"
                        ? "bg-[#B69A59] text-[#111111]"
                        : "text-[#111111]/70 hover:text-[#111111]"
                    }`}
                  >
                    Monthly (20 pkgs)
                  </button>
                </div>
              </div>
            </div>

            {/* 3 Plan Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PLAN_TIERS.map((tier) => {
                const desc =
                  selectedDiet === "veg" ? tier.vegDescription : tier.nonVegDescription;
                const image =
                  selectedDiet === "veg" ? tier.images.veg : tier.images["non-veg"];
                const price = tier.prices[selectedDiet][selectedDuration];
                const isQuote = price === null;

                const ctaText =
                  selectedDuration === "trial"
                    ? `Try ${tier.name}`
                    : isQuote
                    ? "Ask on WhatsApp"
                    : "Choose This Plan";

                return (
                  <div
                    key={tier.id}
                    className="bg-[#F7F5EF] rounded-2xl border border-[#B69A59]/30 overflow-hidden shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[4/3] w-full bg-black/5 overflow-hidden">
                        <Image
                          src={image}
                          alt={`${tier.name} ${selectedDiet === "veg" ? "Vegetarian" : "Non-Vegetarian"}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#111111]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                          {tier.name} • {selectedDiet === "veg" ? "Veg" : "Non-Veg"}
                        </div>
                        <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded bg-black/70 text-[10px] text-white">
                          Capacity: {tier.portion}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#111111]">
                          {tier.name} {selectedDiet === "veg" ? "Veg" : "Non-Veg"}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#111111]/75 leading-relaxed min-h-[48px]">
                          {desc}
                        </p>

                        <div className="mt-5 pt-4 border-t border-[#B69A59]/20">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111]/60 block mb-1">
                            {selectedDuration === "trial"
                              ? "One-day trial (1 package)"
                              : selectedDuration === "weekly"
                              ? "Weekly: 5 packages"
                              : "Monthly: 20 packages"}
                          </span>
                          {isQuote ? (
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
                                CAD
                              </span>
                            </div>
                          )}
                        </div>

                        <ul className="mt-4 space-y-1.5 text-xs text-[#111111]/80">
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                            <span>Main bowl: <strong>{tier.portion}</strong></span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                            <span>8-oz side dish</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#B69A59] shrink-0" />
                            <span>Indian meal (dal or sabji) + 3 tawa rotis</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <button
                        type="button"
                        onClick={() => {
                          if (isQuote) {
                            const msg = `Hi JP TIFFIN & MEALS, I would like to ask about weekly pricing for ${tier.name} Non-Veg. Please provide rates and delivery details.`;
                            window.open(
                              `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`,
                              "_blank"
                            );
                          } else {
                            handleOpenOrderModal(tier.id, selectedDiet, selectedDuration);
                          }
                        }}
                        className="w-full py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <span>{ctaText}</span>
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

            {/* Customization Note */}
            <div className="mt-10 p-5 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/20 text-center max-w-xl mx-auto text-xs text-[#111111]/80">
              <p className="font-bold text-[#111111] mb-1">{CUSTOMIZATION_COPY.title}</p>
              <p>{CUSTOMIZATION_COPY.description}</p>
            </div>
          </div>
        </section>

        {/* 6. Recent Menu Section (Brief Page 7) */}
        <RecentMenuSection />

        {/* 7. How It Works (Brief Page 4) */}
        <HowItWorks />

        {/* 8. Real Chef Story: Meet Chef Japleen (Brief Page 8) */}
        <ChefStorySection />

        {/* 9. Delivery Section (Brief Page 8) */}
        <DeliveryCoverage onOpenOrderModal={handleOpenOrderModal} />

        {/* 10. Selected FAQs (Brief Page 4 & 9) */}
        <FAQSection />

        {/* 11. Why JP + Final Call to Action (Brief Page 4) */}
        <section className="py-16 sm:py-24 bg-[#111111] text-[#F7F5EF] text-center border-t border-[#B69A59]/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
              Made for your everyday routine
            </span>

            <p className="text-xs sm:text-sm text-[#F7F5EF]/70 font-medium">
              Chef-made food • A rotating menu • Three main-meal sizes • Veg and Non-Veg choices
            </p>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F7F5EF]">
              Start with one day.
            </h2>

            <p className="text-sm sm:text-base text-[#F7F5EF]/85 max-w-lg mx-auto">
              Try a complete daily package before choosing a longer plan.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleOpenOrderModal("balanced", "non-veg", "trial")}
                className="px-8 py-3.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Choose My Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer (Brief Page 8) */}
      <Footer />

      {/* Booking / WhatsApp Order Modal (Brief Page 10) */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialTier={modalTier}
        initialDiet={modalDiet}
        initialDuration={modalDuration}
        isClassicTiffin={isClassicModal}
      />
    </div>
  );
}
