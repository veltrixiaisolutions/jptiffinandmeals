"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MEAL_TYPES, WEEKLY_MENU_ROTATION, MealType, WeeklyScheduleDay } from "@/data/menuData";
import {
  Sparkles,
  Flame,
  Check,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  Award,
} from "lucide-react";

interface MenuAndPricingProps {
  onOpenOrderModal: (mealType?: string, plan?: string) => void;
}

export default function MenuAndPricing({ onOpenOrderModal }: MenuAndPricingProps) {
  const [selectedDay, setSelectedDay] = useState<string>("MON");
  const [dietView, setDietView] = useState<"non-veg" | "veg">("non-veg");

  const currentDayData =
    WEEKLY_MENU_ROTATION.find((d) => d.shortDay === selectedDay) ||
    WEEKLY_MENU_ROTATION[0];

  return (
    <section id="menu-pricing" className="py-20 lg:py-28 relative bg-slate-50/80 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Master Chef Repertoire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Our 3 Chef-Engineered <span className="gold-gradient-text">Meal Types</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don't do generic cooking or random guessing. Every single meal belongs to one of our 3 strictly calibrated nutritional formulas. Choose your meal type or try our fresh tasting trial box.
          </p>
        </div>

        {/* 🌟 Highlight: The 2-Meal Chef Tasting Trial Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-6 sm:p-8 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-300">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white p-1 flex items-center justify-center shadow-md flex-shrink-0">
              <Award className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase mb-1">
                Zero Commitment Trial
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                Try Our 2-Meal Chef Tasting Box for Just $29.99
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-0.5">
                Taste the difference of true master chef prep before subscribing. Delivered fresh & chilled to your door.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenOrderModal("Balanced Meal", "Chef Tasting Trial Box (2 Meals - $29.99)")}
            className="w-full md:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 shadow-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>Order Trial Box ($29.99)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* The 3 Core Meal Types Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MEAL_TYPES.map((type) => (
            <div
              key={type.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Media Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/95 text-slate-900 shadow-md">
                      {type.badge}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                    {type.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {type.tagline}
                  </p>

                  {/* Target Macros Pill Grid */}
                  <div className="mt-5 grid grid-cols-4 gap-1 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Calories</p>
                      <p className="text-xs font-black text-slate-800 mt-0.5">{type.calories}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-700 font-black uppercase">Protein</p>
                      <p className="text-xs font-black text-emerald-700 mt-0.5">{type.protein}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-amber-700 font-black uppercase">Carbs</p>
                      <p className="text-xs font-black text-amber-700 mt-0.5">{type.carbs}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Fats</p>
                      <p className="text-xs font-black text-slate-700 mt-0.5">{type.fats}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mt-4 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 font-medium">
                    <strong className="font-black text-amber-900">Target Goal: </strong>
                    {type.idealFor}
                  </div>

                  {/* Features List */}
                  <ul className="mt-5 space-y-2 text-xs text-slate-600 font-medium">
                    {type.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sample Dishes */}
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs space-y-2">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                      Sample Chef Creation:
                    </p>
                    <p className="text-slate-800 font-semibold flex items-start gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                      <span>{type.sampleNonVeg}</span>
                    </p>
                    <p className="text-slate-700 font-medium flex items-start gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      <span>{type.sampleVeg}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => onOpenOrderModal(type.name, "Executive Weekday Plan (5 Meals - $79.99/wk)")}
                  className="w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select {type.name} Plan &rarr;</span>
                </button>
                <button
                  onClick={() => onOpenOrderModal(type.name, "Chef Tasting Trial Box (2 Meals - $29.99)")}
                  className="w-full py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-wider text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Or Order 2-Meal Trial Box ($29.99)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 📅 Weekly Rotating Menu Schedule (Monday to Sunday) */}
        <div className="mt-20 rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black uppercase mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>7-Day Chef Rotation</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                Weekly Chef Menu Rotation (Monday &ndash; Sunday)
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Executive Chef Japleen Singh rotates dishes continuously so your healthy routine never feels repetitive.
              </p>
            </div>

            {/* Diet Toggle */}
            <div className="flex items-center gap-2 p-1 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setDietView("non-veg")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  dietView === "non-veg"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span>Non-Vegetarian</span>
              </button>
              <button
                onClick={() => setDietView("veg")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  dietView === "veg"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>Vegetarian</span>
              </button>
            </div>
          </div>

          {/* Day Selector Buttons: 7 Days (Mon - Sun) */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-2.5 justify-center">
            {WEEKLY_MENU_ROTATION.map((item) => (
              <button
                key={item.shortDay}
                onClick={() => setSelectedDay(item.shortDay)}
                className={`flex-1 min-w-[70px] sm:min-w-[85px] lg:min-w-[100px] py-3 sm:py-3.5 px-2.5 sm:px-3 rounded-2xl text-center transition-all ${
                  selectedDay === item.shortDay
                    ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-105"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 font-bold"
                }`}
              >
                <p className="text-xs uppercase font-extrabold">{item.shortDay}</p>
                <p className="text-[11px] opacity-80">{item.day}</p>
              </button>
            ))}
          </div>

          {/* Day's Detailed Menu View with Smooth Framer Motion Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay + dietView}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 rounded-2xl bg-slate-50 border border-slate-200"
            >
              {/* Dish Image */}
              <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-md">
                <Image
                  src={currentDayData.image}
                  alt={currentDayData.day}
                  fill
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-xl bg-white/95 text-[11px] font-black text-slate-900 shadow-sm">
                  {currentDayData.day}'s Fresh Drop
                </div>
              </div>

              {/* Menu Details for Balanced & Lean */}
              <div className="md:col-span-7 space-y-6">
                {/* Balanced Dish on this Day */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      The Balanced Meal
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {currentDayData.caloriesRange}
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mt-2">
                    {dietView === "non-veg"
                      ? currentDayData.balancedNonVeg
                      : currentDayData.balancedVeg}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Cooked with low-glycemic aged basmati rice or Andean quinoa & Spanish EVOO.
                  </p>
                </div>

                {/* Lean Dish on this Day */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      The Lean Meal
                    </span>
                    <span className="text-xs font-bold text-emerald-700">
                      {currentDayData.proteinRange} Protein
                    </span>
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mt-2">
                    {dietView === "non-veg"
                      ? currentDayData.leanNonVeg
                      : currentDayData.leanVeg}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Reduced carbohydrates, high lean protein, steamed vegetables & fresh herb dressing.
                  </p>
                </div>

                {/* Order this day's plan */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onOpenOrderModal("The Balanced Meal")}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md hover:brightness-105 transition-all"
                  >
                    Book This Week's Plan &rarr;
                  </button>
                  <button
                    onClick={() => onOpenOrderModal("The Balanced Meal", "Chef Tasting Trial Box (2 Meals - $29.99)")}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:border-amber-400 transition-all"
                  >
                    Get 2-Meal Trial ($29.99)
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
