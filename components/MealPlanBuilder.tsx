"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MEAL_PLANS } from "@/data/menuData";
import { Check, Sparkles, ShieldCheck, Flame, Zap, ArrowRight, Award } from "lucide-react";

interface MealPlanBuilderProps {
  onOpenOrderModal: (mealType?: string, plan?: string) => void;
}

export default function MealPlanBuilder({ onOpenOrderModal }: MealPlanBuilderProps) {
  const [billingPeriod, setBillingPeriod] = useState<"weekly" | "monthly">("weekly");

  return (
    <section id="plans" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-100/30 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Structured Nutrition Plans</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Curated <span className="gold-gradient-text">Chef Meal Plans & Trial Box</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Precision quantified nutrition approved by certified sports dietitians. Pause, swap meals, or cancel anytime with zero friction.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setBillingPeriod("weekly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingPeriod === "weekly"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Weekly Delivery
            </button>
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                billingPeriod === "monthly"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 font-black"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Monthly Commitment</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold">
                EXTRA 10% OFF
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MEAL_PLANS.map((plan, idx) => {
            const monthlyMultiplier = !plan.isTrial && billingPeriod === "monthly" ? 0.9 : 1.0;
            const finalWeeklyPrice = plan.pricePerWeek * monthlyMultiplier;
            const finalMealPrice = typeof plan.mealsPerWeek === "number" ? finalWeeklyPrice / plan.mealsPerWeek : plan.pricePerMeal;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-white border-2 border-amber-500 shadow-2xl shadow-amber-500/15 -translate-y-2 lg:-translate-y-4"
                    : plan.isTrial
                    ? "bg-gradient-to-b from-amber-50/70 to-white border-2 border-amber-400 shadow-lg"
                    : "bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-xl"
                }`}
              >
                {/* Popular or Trial Pill */}
                {plan.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-slate-900">{plan.name}</h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {plan.savings}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-5 border-b border-slate-200/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">
                        ${finalWeeklyPrice.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-500 font-bold">
                        {plan.isTrial ? " total" : " / wk"}
                      </span>
                    </div>
                    <p className="text-xs text-amber-700 font-bold mt-1">
                      ${finalMealPrice.toFixed(2)} per chef-crafted meal
                    </p>
                  </div>

                  {/* Recommended For */}
                  <div className="mt-3 flex items-start gap-1.5 text-xs text-slate-600 font-medium">
                    <Zap className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Best for: <strong className="text-slate-800">{plan.recommendedFor}</strong></span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-5 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => onOpenOrderModal("Balanced Meal", plan.name)}
                    className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      plan.isPopular || plan.isTrial
                        ? "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 text-slate-950 hover:brightness-105 shadow-md shadow-amber-500/20"
                        : "bg-slate-900 text-white hover:bg-slate-800 shadow-sm"
                    }`}
                  >
                    <span>{plan.isTrial ? "Book Trial Box" : "Select Plan"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Satisfaction Guarantee Banner */}
        <div className="mt-14 text-center max-w-xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/80 p-4 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span className="font-medium">
            <strong>100% Taste & Freshness Guarantee:</strong> If you don't fall in love with your first chef meal, we'll refund it on the spot.
          </span>
        </div>
      </div>
    </section>
  );
}
