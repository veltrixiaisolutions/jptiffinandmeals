"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import DeliveryCoverage from "@/components/DeliveryCoverage";
import { FAQS } from "@/data/menuData";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  Flame,
  ArrowRight,
} from "lucide-react";

export default function FAQPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalMealType, setModalMealType] = useState("The Balanced Meal");
  const [modalPlan, setModalPlan] = useState("Chef Tasting Trial Box (2 Meals - $29.99)");
  const [modalCity, setModalCity] = useState("Downtown Toronto");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleOpenOrderModal = (mealType?: string, plan?: string, city?: string) => {
    if (mealType) setModalMealType(mealType);
    if (plan) setModalPlan(plan);
    if (city) setModalCity(city);
    setIsOrderModalOpen(true);
  };

  const categories = [
    "All",
    "Delivery & Weekends",
    "Food & Cooking Standards",
    "Trial Box & Ordering",
    "Storage & Reheating",
  ];

  const extendedFaqs = [
    {
      category: "Delivery & Weekends",
      q: "Do you deliver on Saturdays and Sundays?",
      a: "Yes! We proudly deliver on both Saturdays and Sundays, as well as midweek (Wednesdays). This ensures you always have peak fresh chef meals ready for your active weekends and the upcoming work week with zero meal prep hassle.",
    },
    {
      category: "Delivery & Weekends",
      q: "What areas across the GTA do you deliver to?",
      a: "We deliver across Downtown Toronto, North York, Scarborough, Mississauga, Brampton, Oakville, Burlington, Hamilton, Vaughan, and Richmond Hill. All meals arrive in temperature-controlled, insulated eco-containers with reusable ice packs that keep food cold at 2°C for up to 8 hours.",
    },
    {
      category: "Delivery & Weekends",
      q: "Do I have to be home to receive the delivery?",
      a: "No. Our insulated cooler bags maintain refrigeration temperature for up to 8 hours. Our delivery driver will leave the package securely at your door or concierge, and send you real-time photo confirmation via SMS.",
    },
    {
      category: "Food & Cooking Standards",
      q: "How does JP Tiffin & Meals differ from ordinary tiffin services?",
      a: "We do not prepare ordinary home-style food. Every dish is personally handcrafted by Executive Chef Japleen Singh in our certified commercial kitchen. Chef Japleen uses cold-pressed Spanish Extra Virgin Olive Oil and pure clarified butter (strictly zero industrial seed oils), precision-weighs all macronutrients, and blast-chills every container to lock in five-star restaurant flavor.",
    },
    {
      category: "Food & Cooking Standards",
      q: "What oils do you cook with?",
      a: "We strictly forbid commercial seed oils (canola, soybean, corn, cottonseed). We cook exclusively with cold-pressed Spanish Extra Virgin Olive Oil and pure clarified butter (Ghee), ensuring zero inflammatory oils in your daily fuel.",
    },
    {
      category: "Food & Cooking Standards",
      q: "Where are your meats sourced?",
      a: "All poultry, lamb, and beef used in our kitchen are 100% hormone-free, antibiotic-free, and ethically sourced from local Ontario farms and Canadian fisheries.",
    },
    {
      category: "Trial Box & Ordering",
      q: "What types of meals do you offer?",
      a: "We specialize in 3 chef-crafted meal types: The Balanced Meal (optimal macronutrient harmony for all-day energy), The Lean Meal (high-protein, reduced-carb, low-calorie cut box for fat loss), and The High-Protein Performance Meal. We also offer a 2-Meal Chef Tasting Trial Box so you can experience the quality before committing to a weekly plan.",
    },
    {
      category: "Trial Box & Ordering",
      q: "How does the 2-Meal Chef Tasting Trial Box work?",
      a: "Our Trial Box gives you 2 fresh chef-prepared meals for just $29.99 with free delivery. There is zero subscription lock-in and zero recurring charge. It allows you to test the taste, tenderness, and freshness first-hand before deciding on a weekly plan.",
    },
    {
      category: "Trial Box & Ordering",
      q: "Can I pause, skip, or cancel my subscription?",
      a: "Yes, you have total flexibility. You can pause or cancel anytime before Friday 5:00 PM for the upcoming week's delivery with zero lock-in contracts or hidden fees. Just message our WhatsApp concierge.",
    },
    {
      category: "Storage & Reheating",
      q: "How long do the meals stay fresh?",
      a: "Stored in your refrigerator at 2–4°C, our blast-chilled meals stay fresh, crisp, and delicious for 4 to 5 days. Because we deliver multiple times per week (including Saturdays and Sundays), you always have fresh food in your fridge.",
    },
    {
      category: "Storage & Reheating",
      q: "How do I reheat the meals?",
      a: "Our containers are 100% BPA-free and microwave-safe. Loosen the lid, microwave on high for 90 to 120 seconds, and enjoy. You can also transfer the meal to a skillet or oven-safe dish for an authentic stovetop sizzle.",
    },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? extendedFaqs
      : extendedFaqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* ============================================================== */}
        {/* 💡 1. DEDICATED FAQ HERO SECTION                              */}
        {/* ============================================================== */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Instant Transparency & Support</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Frequently Asked <br />
              <span className="gold-gradient-text">Questions</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Everything you need to know about our chef meal prep, Saturday & Sunday weekend deliveries, zero seed oil standards, and flexible trial options.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-amber-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* ❓ 2. ACCORDION FAQ QUESTIONS                                 */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-amber-400 shadow-lg"
                      : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-amber-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Concierge Assistance Card */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Culinary Concierge
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-2">
                Have a specific dietary question?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md">
                Executive Chef Japleen Singh responds personally within 15 minutes to answer questions about custom macros, allergies, and weekend drop-offs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/14377576969"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => handleOpenOrderModal()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Order Trial Box ($29.99)</span>
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 🗺️ 3. GTA POSTAL CODE COVERAGE CHECKER                        */}
        {/* ============================================================== */}
        <DeliveryCoverage onOpenOrderModal={handleOpenOrderModal} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Order & Concierge Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        defaultMealType={modalMealType}
        defaultPlan={modalPlan}
        defaultCity={modalCity}
      />
    </div>
  );
}
