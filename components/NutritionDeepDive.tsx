"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Activity, ShieldCheck, Heart, Sparkles, Brain, Dumbbell, Zap } from "lucide-react";

export default function NutritionDeepDive() {
  const [activeMacro, setActiveMacro] = useState<"protein" | "carbs" | "fats" | "micro">("protein");

  const macroData = {
    protein: {
      letter: "P",
      title: "Bioavailable Clean Protein",
      subtitle: "The Structural Foundation of Cellular Recovery & Muscle Synthesis",
      stat: "45g–52g",
      statLabel: "Average Protein Per Meal",
      color: "from-red-500 to-amber-500",
      accent: "text-red-600",
      image: "/images/chef-herb-chicken.jpg",
      points: [
        {
          title: "Complete Amino Acid Profiles",
          desc: "Every portion is curated from farm-fresh free-range poultry, wild-caught salmon, or artisanal paneer rich in all 9 essential aminos.",
          icon: Dumbbell,
        },
        {
          title: "Sustained Satiety & Craving Control",
          desc: "High protein intake naturally regulates ghrelin (hunger hormone), eliminating late-afternoon energy crashes and junk food cravings.",
          icon: Zap,
        },
        {
          title: "Lean Tissue Preservation",
          desc: "Whether your goal is aggressive fat loss or lean athletic bulking, precision protein prevents muscle wasting during caloric deficits.",
          icon: Activity,
        },
        {
          title: "Immune & Cellular Regeneration",
          desc: "Key substrate for antibodies, metabolic enzymes, and systemic tissue repair after intense cognitive or physical work.",
          icon: ShieldCheck,
        },
      ],
    },
    carbs: {
      letter: "C",
      title: "Complex Slow-Burning Carbs",
      subtitle: "Sustained Glycemic Release for Steady Cognitive & Athletic Energy",
      stat: "Low GI",
      statLabel: "Zero Refined Sugar Spikes",
      color: "from-amber-400 to-amber-600",
      accent: "text-amber-600",
      image: "/images/chef-salmon-bowl.jpg",
      points: [
        {
          title: "Aged Basmati & Andean Quinoa",
          desc: "We use aged low-glycemic basmati rice and organic tricolor quinoa that digest smoothly without causing insulin rollercoasters.",
          icon: Zap,
        },
        {
          title: "Cognitive Focus & Brain Fuel",
          desc: "Supplies steady glucose to the cerebral cortex for uninterrupted executive focus throughout high-pressure work days.",
          icon: Brain,
        },
        {
          title: "Muscle Glycogen Replenishment",
          desc: "Recharges your muscular glycogen reserves so you walk into every workout or day energized and primed for performance.",
          icon: Dumbbell,
        },
        {
          title: "Prebiotic Dietary Fiber",
          desc: "8g to 12g of natural dietary fiber per bowl feeding beneficial microbiome bacteria for healthy digestion and zero bloating.",
          icon: Heart,
        },
      ],
    },
    fats: {
      letter: "F",
      title: "Cardioprotective Healthy Fats",
      subtitle: "Cold-Pressed Lipids Essential for Hormone Production & Brain Health",
      stat: "0% Seed Oils",
      statLabel: "Single-Estate EVOO & Grass-Fed Ghee",
      color: "from-emerald-400 to-teal-600",
      accent: "text-emerald-600",
      image: "/images/chef-paneer-bowl.jpg",
      points: [
        {
          title: "Zero Inflammatory Seed Oils",
          desc: "Strictly zero canola, corn, soybean, or vegetable oils. We exclusively cook with cold-pressed extra-virgin olive oil and pure ghee.",
          icon: ShieldCheck,
        },
        {
          title: "Hormonal Synthesis & Vitality",
          desc: "Healthy dietary fats serve as direct building blocks for testosterone, thyroid hormones, and cellular membrane integrity.",
          icon: Activity,
        },
        {
          title: "Fat-Soluble Vitamin Absorption",
          desc: "Enables your body to absorb critical fat-soluble vitamins (A, D3, E, and K2) from our fresh farm vegetables and spices.",
          icon: Sparkles,
        },
        {
          title: "High Omega-3 Fatty Acids",
          desc: "Rich in EPA and DHA from Atlantic salmon and organic chia/flax accents to fight systemic oxidative inflammation.",
          icon: Heart,
        },
      ],
    },
    micro: {
      letter: "M",
      title: "Antioxidants & Micronutrients",
      subtitle: "Synergistic Whole Food Botanicals, Spices & Natural Electrolytes",
      stat: "100% Whole",
      statLabel: "Zero Artificial Powders or Preservatives",
      color: "from-purple-500 to-indigo-600",
      accent: "text-purple-600",
      image: "/jptiffinImages/jptiffinandmeals detailed.png",
      points: [
        {
          title: "Curcumin & Saffron Synergy",
          desc: "Pure Lakadong turmeric and Kashmiri saffron deliver potent anti-inflammatory curcuminoids proven to assist joint recovery.",
          icon: Sparkles,
        },
        {
          title: "Bioavailable Iron & Zinc",
          desc: "Sourced from grass-fed lamb, lean poultry, and dark greens to support peak red blood cell count and stamina.",
          icon: Activity,
        },
        {
          title: "Natural Potassium & Magnesium",
          desc: "Abundant in roasted sweet potatoes, greens, and edamame, keeping muscle cramps and fatigue at bay.",
          icon: Dumbbell,
        },
        {
          title: "Fresh Microgreens & Live Herbs",
          desc: "Finished with crisp cilantro, fresh mint, and English cucumber ribbons to deliver vital enzymes and live micronutrients.",
          icon: Heart,
        },
      ],
    },
  };

  const current = macroData[activeMacro];

  return (
    <section id="macro-science" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Biometric Calibrated Nutrition</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The Science Behind <span className="gold-gradient-text">Every Master Meal</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            A perfect meal is never accidental. Executive Chef Japleen Singh personally calculates and weighs every single gram of macronutrients, ensuring five-star culinary pleasure and absolute nutritional accuracy.
          </p>

          {/* Interactive Macro Tabs in Light Mode */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[
              { id: "protein", label: "Protein (45g–52g)", letter: "P" },
              { id: "carbs", label: "Complex Carbs (Low GI)", letter: "C" },
              { id: "fats", label: "Healthy Fats (Zero Seed Oils)", letter: "F" },
              { id: "micro", label: "Micronutrients & Fiber", letter: "M" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMacro(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                  activeMacro === tab.id
                    ? "bg-white border-2 border-amber-500 text-slate-900 shadow-md shadow-amber-500/10 font-extrabold"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                    activeMacro === tab.id ? "bg-amber-500 text-slate-950" : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {tab.letter}
                </span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Display in Light Mode with Framer Motion Cross-fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMacro}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="mt-16 rounded-3xl bg-slate-50/70 p-6 sm:p-10 border border-slate-200/90 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Visual Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white p-2 border border-slate-200 shadow-md">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    loading="lazy"
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Stat Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-bold">
                        {current.statLabel}
                      </p>
                      <p className="text-xl font-black text-slate-900">{current.stat}</p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg text-white bg-gradient-to-tr ${current.color} shadow-md`}
                    >
                      {current.letter}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Details Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                  <Flame className="w-4 h-4" />
                  <span>Nutritional Pillar</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {current.title}
                </h3>

                <p className="text-sm text-slate-600 mt-2 font-medium">
                  {current.subtitle}
                </p>

                {/* 4 Points Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.points.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-400 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className={`w-4 h-4 ${current.accent}`} />
                          <h4 className="text-xs font-extrabold text-slate-900">{p.title}</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Quick Action */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    All macros quantified & listed on every meal label.
                  </span>
                  <a
                    href="#menu-pricing"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline flex items-center gap-1"
                  >
                    Order These Nutrients Now &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
