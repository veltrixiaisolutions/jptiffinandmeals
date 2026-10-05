"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/menuData";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>

          <p className="mt-4 text-base text-slate-600">
            Everything you need to know about our master chef meals, refrigeration standards, and doorstep delivery.
          </p>
        </motion.div>

        {/* Accordion List with Framer Motion */}
        <div className="mt-12 space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-amber-700 transition-colors">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? "bg-amber-500 text-slate-950 font-bold" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Help CTA in Light Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-3xl bg-white text-center flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-200 shadow-md"
        >
          <div className="text-left">
            <h4 className="text-sm font-extrabold text-slate-900">Have a custom dietary requirement?</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Talk directly with Executive Chef Japleen Singh on WhatsApp for bespoke macro prep.
            </p>
          </div>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/14377576969?text=Hi%20Chef%20Japleen%2C%20I%20have%20a%20specific%20dietary%20question%20about%20JP%20Tiffin%20%26%20Meals."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
