"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import Link from "next/link";
import { FAQS, CONTACT_DETAILS } from "@/data/menuData";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState<"lean" | "balanced" | "power">("balanced");
  const [modalDiet, setModalDiet] = useState<"veg" | "non-veg">("non-veg");
  const [modalDuration, setModalDuration] = useState<"trial" | "weekly" | "monthly">("trial");

  const handleOpenOrderModal = (
    tier?: string,
    diet?: "veg" | "non-veg",
    duration?: "trial" | "weekly" | "monthly"
  ) => {
    if (tier === "lean" || tier === "balanced" || tier === "power") {
      setModalTier(tier);
    }
    if (diet) setModalDiet(diet);
    if (duration) setModalDuration(duration);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111]">
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Questions & Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mt-2">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#111111]/70 leading-relaxed">
            Everything you need to know about our meal plans, daily inclusions, portion sizes, delivery areas, and pause policies.
          </p>
        </div>

        {/* 12 Accessible FAQs from Brief Page 9 */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#B69A59]/25 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-[#111111] text-base hover:text-[#B69A59] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A59] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B69A59] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-[#111111]/80 leading-relaxed border-t border-[#B69A59]/15 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#111111] text-[#F7F5EF] border border-[#B69A59]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#F7F5EF]">Still have questions?</h3>
            <p className="text-xs sm:text-sm text-[#F7F5EF]/75 mt-1 max-w-md">
              We are happy to answer any questions about custom meal combinations, delivery routes, or start dates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-[#F7F5EF] border border-[#B69A59] hover:bg-[#B69A59]/15 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#B69A59]" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => handleOpenOrderModal("balanced", "non-veg", "trial")}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white flex items-center justify-center gap-2 transition-all"
            >
              <span>Try One Day</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialTier={modalTier}
        initialDiet={modalDiet}
        initialDuration={modalDuration}
      />
    </div>
  );
}
