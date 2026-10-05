"use client";

import React from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Sliders, Flame, Truck, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Select Your Meal Type & Plan",
      description:
        "Choose between The Balanced Meal, The Lean Meal, or The High-Protein Meal, or start with our 2-Meal Chef Tasting Trial Box with zero recurring commitment.",
      icon: UtensilsCrossed,
      color: "from-amber-400 to-amber-600",
      bgLight: "bg-amber-50 text-amber-600",
    },
    {
      num: "02",
      title: "Customize Macros & Swaps",
      description:
        "High protein? Low-carb keto? Extra portion chicken or cauliflower rice swap? Tailor your selections to match your exact biometric fitness goals.",
      icon: Sliders,
      color: "from-emerald-400 to-emerald-600",
      bgLight: "bg-emerald-50 text-emerald-600",
    },
    {
      num: "03",
      title: "Handcrafted by Chef Japleen Singh",
      description:
        "No amateur cooks or delegated line staff. Prepared personally from scratch using Spanish extra virgin olive oil, pure ghee, and laboratory-measured ingredients.",
      icon: Flame,
      color: "from-red-400 to-red-600",
      bgLight: "bg-red-50 text-red-600",
    },
    {
      num: "04",
      title: "Chilled Doorstep Delivery",
      description:
        "Delivered twice weekly in insulated, temperature-controlled eco-boxes straight to your home or office across Toronto & the entire GTA.",
      icon: Truck,
      color: "from-blue-400 to-indigo-600",
      bgLight: "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase font-extrabold tracking-widest text-amber-600 mb-2">
            Seamless Culinary Pipeline
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How Master Chef Dining <span className="gold-gradient-text">Reaches You</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            From precision kitchen preparation to your refrigerator in under 4 hours. No meal prep hassle, zero sink full of dishes.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="relative rounded-3xl bg-slate-50/70 p-8 border border-slate-200/80 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-6 text-4xl font-black text-slate-200 group-hover:text-amber-100 transition-colors select-none">
                  {step.num}
                </span>

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.bgLight} border border-slate-200/60 shadow-sm group-hover:scale-110 transition-transform mb-6 flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center text-xs font-bold text-amber-600">
                  <span>Step {step.num} of 04</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#menu-pricing"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all"
          >
            <span>View 3 Meal Types & Plans</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
