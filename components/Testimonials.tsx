"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/data/menuData";
import { Star, ShieldCheck, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Results, Zero Compromise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Loved By Over <span className="gold-gradient-text">1,200+ Active Subscribers</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From Bay Street finance directors and competitive athletes to busy surgeons—here's why GTA high-performers trust JP Tiffin & Meals.
          </p>

          {/* Aggregate Rating Badge in Light Mode */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <div className="flex text-amber-500 text-sm">
              {"★".repeat(5)}
            </div>
            <span className="text-xs font-black text-slate-900">4.9 / 5.0 Google Reviews</span>
            <span className="text-xs text-slate-500 font-medium">(340+ Verified Reviews)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid with Framer Motion */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-slate-200 group-hover:text-amber-200 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Stars & Plan */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-sm">
                    {"★".repeat(t.rating)}
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {t.plan}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Customer Profile */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-300 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span title="Verified Customer">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
