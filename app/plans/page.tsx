"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuAndPricing from "@/components/MenuAndPricing";
import MealPlanBuilder from "@/components/MealPlanBuilder";
import ChefStandards from "@/components/ChefStandards";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  Award,
  Calendar,
  CheckCircle,
  Truck,
  HeartHandshake,
} from "lucide-react";

const OrderModal = dynamic(() => import("@/components/OrderModal"), {
  ssr: false,
});

export default function PlansPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalMealType, setModalMealType] = useState("The Balanced Meal");
  const [modalPlan, setModalPlan] = useState("Chef Tasting Trial Box (2 Meals - $29.99)");

  const handleOpenOrderModal = (mealType?: string, plan?: string) => {
    if (mealType) setModalMealType(mealType);
    if (plan) setModalPlan(plan);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* ============================================================== */}
        {/* 🌟 1. DEDICATED PLANS HERO SECTION                            */}
        {/* ============================================================== */}
        <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 overflow-hidden border-b border-slate-200">
          {/* Subtle Ambient Background Accents */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>100% Master Chef Prepared • Toronto & GTA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Curated Chef Nutrition Plans & <br />
              <span className="gold-gradient-text">2-Meal Tasting Box</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              No generic cooking or guesswork. Every meal belongs to our 3 scientifically calibrated formulas: <strong>The Balanced Meal</strong>, <strong>The Lean Meal</strong>, or <strong>High-Protein Performance</strong>. Delivered fresh throughout the week, including <strong>Saturdays & Sundays</strong>.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <Truck className="w-4 h-4 text-emerald-600" />
                Weekend Deliveries (Sat & Sun)
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Zero Seed Oils (Spanish EVOO & Ghee)
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <HeartHandshake className="w-4 h-4 text-amber-600" />
                Zero Commitment (Pause or Cancel Anytime)
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() =>
                  handleOpenOrderModal(
                    "The Balanced Meal",
                    "Chef Tasting Trial Box (2 Meals - $29.99)"
                  )
                }
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Order Trial Box ($29.99)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#plan-builder"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl font-extrabold text-xs uppercase tracking-wider text-slate-800 bg-white border-2 border-slate-200 hover:border-amber-400 transition-all shadow-sm flex items-center justify-center"
              >
                <span>Compare Weekly Plans &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 🍽️ 2. THE 3 MEAL TYPES & 7-DAY ROTATION                      */}
        {/* ============================================================== */}
        <MenuAndPricing onOpenOrderModal={handleOpenOrderModal} />

        {/* ============================================================== */}
        {/* 📦 3. STRUCTURED WEEKLY & MONTHLY PLANS + TRIAL BOX           */}
        {/* ============================================================== */}
        <div id="plan-builder">
          <MealPlanBuilder onOpenOrderModal={handleOpenOrderModal} />
        </div>

        {/* ============================================================== */}
        {/* 🏆 4. CHEF STANDARDS COMPARISON MATRIX                         */}
        {/* ============================================================== */}
        <ChefStandards />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Order & Concierge Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        defaultMealType={modalMealType}
        defaultPlan={modalPlan}
      />
    </div>
  );
}
