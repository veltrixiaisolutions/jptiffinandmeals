"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/menuData";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Take the first 5 core FAQs for the homepage
  const selectedFaqs = FAQS.slice(0, 5);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#B69A59]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Clear answers to common questions
          </h2>
          <p className="mt-3 text-sm text-[#111111]/70 leading-relaxed">
            Everything you need to know about our daily inclusions, portion sizes, delivery schedule, and trial orders.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {selectedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#F7F5EF] border border-[#B69A59]/25 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#111111] text-sm sm:text-base hover:text-[#B69A59] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A59] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B69A59] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#111111]/80 leading-relaxed border-t border-[#B69A59]/15 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to view all FAQs */}
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#B69A59] transition-colors"
          >
            <span>View all 12 answers on our FAQ page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
