"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import {
  Star,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Quote,
  Flame,
  ThumbsUp,
} from "lucide-react";

export default function ReviewsPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterTabs = [
    "All",
    "Athletes & Fitness",
    "Executives & Tech",
    "Healthcare & Medical",
    "Busy Couples",
  ];

  const reviews = [
    {
      name: "Marcus Sterling",
      role: "Senior Tech Director, Financial District Toronto",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Executives & Tech",
      mealType: "The Balanced Meal",
      plan: "10 Meals/Week Athlete Plan",
      verified: true,
      headline: "No 2:00 PM sugar crashes, pure focus.",
      comment:
        "I started with the 2-meal trial box and was immediately blown away. The Balanced Meal Chicken Tikka and Salmon taste like fine dining. No oily grease, zero bloating, and my cognitive focus during afternoon executive meetings has completely transformed.",
    },
    {
      name: "Dr. Priya Varma",
      role: "Radiologist, Mississauga Hospital",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Healthcare & Medical",
      mealType: "The Lean Meal",
      plan: "Full Week Elite 14 Meals",
      verified: true,
      headline: "Keeps me full and energized during 14-hour hospital shifts.",
      comment:
        "Most tiffin meal services in the GTA are drenched in cheap seed oils and lack proper protein. JP's food is clearly cooked by real chefs with restaurant-grade standards. The Lean Meal keeps me satiated with zero bloat during long ER rotations.",
    },
    {
      name: "Alexandre Dupont",
      role: "Competitive CrossFit Athlete, Oakville",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Athletes & Fitness",
      mealType: "The High-Protein Performance Meal",
      plan: "10 Meals/Week High Protein",
      verified: true,
      headline: "Hitting 200g of protein without spending Sundays cooking.",
      comment:
        "Prepping 10 high-protein meals every single Sunday was draining my energy. With JP Tiffin, every box has exactly 48g–52g of clean, weighed protein. The meat is incredibly tender, not dry or rubbery, and the weekend Saturday delivery ensures I'm fueled for competition.",
    },
    {
      name: "Sarah Jenkins",
      role: "Corporate Lawyer & Marathoner, Downtown Toronto",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Executives & Tech",
      mealType: "The Lean Meal",
      plan: "5 Meals/Week Executive Plan",
      verified: true,
      headline: "Dropped 4% body fat without sacrificing taste.",
      comment:
        "I was tired of takeout sodium bloat and heavy sauces. The Lean Meal cut box is phenomenal—succulent herb chicken, crisp green beans, and zero refined carbs. My blood work and energy levels have never looked better.",
    },
    {
      name: "Arjun & Neha Patel",
      role: "Software Engineers & New Parents, Brampton",
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Busy Couples",
      mealType: "Balanced & Vegetarian Mix",
      plan: "14 Meals/Week Elite Plan",
      verified: true,
      headline: "Saved 12 hours of grocery shopping and dish washing every week.",
      comment:
        "With a toddler and two demanding tech jobs, dinner used to be a stressful battle. Having fresh chef meals delivered on Sundays and Wednesdays has been a life saver. The paneer tikka and saffron pilaf are restaurant quality.",
    },
    {
      name: "Dave K.",
      role: "Personal Trainer & Strength Coach, Burlington",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      category: "Athletes & Fitness",
      mealType: "The High-Protein Performance Meal",
      plan: "10 Meals/Week Athlete Plan",
      verified: true,
      headline: "The only meal prep service I recommend to my gym clients.",
      comment:
        "Cooking with Spanish Extra Virgin Olive Oil and pure Ghee makes a massive difference in gut health and inflammation. My clients who switched to JP Tiffin saw immediate recovery improvements and consistent weight loss.",
    },
  ];

  const filteredReviews =
    selectedFilter === "All"
      ? reviews
      : reviews.filter((r) => r.category === selectedFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* ============================================================== */}
        {/* 🌟 1. DEDICATED REVIEWS HERO SECTION                          */}
        {/* ============================================================== */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Rating Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>4.9 / 5.0 Rating • 1,200+ Verified Subscribers</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Real Stories from <br />
              <span className="gold-gradient-text">GTA High-Performers</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              From Bay Street executives and competitive CrossFitters to busy hospital doctors—see why thousands in Toronto & the GTA trust JP Tiffin & Meals for their daily nutrition.
            </p>

            {/* Quick Metrics */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl sm:text-3xl font-black gold-gradient-text">1,200+</p>
                <p className="text-xs text-slate-600 font-bold mt-1">Active Subscribers</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl sm:text-3xl font-black text-emerald-600">98.4%</p>
                <p className="text-xs text-slate-600 font-bold mt-1">Retention Rate</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl sm:text-3xl font-black text-slate-900">150,000+</p>
                <p className="text-xs text-slate-600 font-bold mt-1">Meals Delivered</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <p className="text-2xl sm:text-3xl font-black text-amber-500">4.9 / 5</p>
                <p className="text-xs text-slate-600 font-bold mt-1">Google Reviews</p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedFilter === tab
                      ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 💬 2. TESTIMONIALS GRID                                       */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-7 border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars + Verified Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified Eater
                      </span>
                    )}
                  </div>

                  {/* Headline */}
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                    "{review.headline}"
                  </h3>

                  {/* Comment */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {review.comment}
                  </p>
                </div>

                {/* Author Info & Ordered Plan Tag */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/50 shadow-sm"
                    />
                    <div>
                      <h4 className="text-xs font-black text-slate-900">{review.name}</h4>
                      <p className="text-[10px] text-slate-500 truncate max-w-[160px]">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 whitespace-nowrap">
                    {review.mealType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trial Box Prompt Banner */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-8 sm:p-10 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-300">
            <div>
              <span className="px-3 py-1 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase mb-2 inline-block">
                Taste The Proof
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Try Our 2-Meal Chef Tasting Box for $29.99
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-1">
                Zero commitment, zero recurring charge. Delivered fresh & chilled right to your doorstep.
              </p>
            </div>

            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="w-full md:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider bg-slate-950 text-white hover:bg-slate-800 shadow-xl transition-all transform hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>Order Trial Box ($29.99)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Order & Concierge Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultMealType="The Balanced Meal"
        defaultPlan="Chef Tasting Trial Box (2 Meals - $29.99)"
      />
    </div>
  );
}
