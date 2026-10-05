"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Award, Sparkles, ChefHat } from "lucide-react";

export default function ChefStandards() {
  const comparisons = [
    {
      feature: "Culinary Leadership",
      jp: "Personally Cooked by Master Chef Japleen Singh (Zero Delegated Staff)",
      jpHighlight: true,
      ordinary: "Uncertified Home-Cook Guesswork & Rotating Workers",
      takeout: "Rushed Fast-Food Fry Cooks",
    },
    {
      feature: "Cooking Oils Used",
      jp: "100% Spanish Extra Virgin Olive Oil & Cold-Pressed Ghee",
      jpHighlight: true,
      ordinary: "Cheap Canola, Soybean & Corn Seed Oils",
      takeout: "Reused Deep Fryer Hydrogenated Oils",
    },
    {
      feature: "Protein Portioning",
      jp: "45g–52g Lab-Weighed Clean Protein Guaranteed",
      jpHighlight: true,
      ordinary: "Vague Scoops (Heavy on cheap carbs & watery gravy)",
      takeout: "Deep Fried, Battered & High Saturated Fat",
    },
    {
      feature: "Kitchen & Safety",
      jp: "Commercial HACCP & Health Canada Inspected Facility",
      jpHighlight: true,
      ordinary: "Unregulated, Uninspected Residential Kitchens",
      takeout: "Varying Commercial Dine-in Standards",
    },
    {
      feature: "Preservation Tech",
      jp: "Blast-Chilled to 2°C in Minutes (Zero Preservatives)",
      jpHighlight: true,
      ordinary: "Left Sitting Warm in Condensation Bags",
      takeout: "Sweaty Styrofoam & Leaking Plastic",
    },
    {
      feature: "Biometric Customization",
      jp: "Carb Swaps (Cauliflower Rice), Double Protein, Macro Notes",
      jpHighlight: true,
      ordinary: "Zero Customization ('Eat whatever is cooked')",
      takeout: "Heavy Upcharges with Hidden Ingredients",
    },
  ];

  return (
    <section id="chef-standards" className="py-20 lg:py-28 relative bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>The Gold Standard of Meal Prep</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Master Chef-Crafted <br />
            <span className="gold-gradient-text">Changes Everything</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We built JP Tiffin & Meals because we were disgusted by ordinary tiffin services cutting corners with cheap seed oils, lack of real protein, and unregulated basement prep.
          </p>
        </motion.div>

        {/* Master Comparison Table in Light Mode */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 rounded-3xl bg-white overflow-hidden border border-slate-200 shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="p-5 sm:p-6 text-xs uppercase font-extrabold text-slate-600">
                    Standards & Ingredients
                  </th>
                  <th className="p-5 sm:p-6 text-xs sm:text-sm uppercase font-black text-amber-900 bg-amber-50 border-x border-amber-200">
                    <div className="flex items-center gap-2">
                      <ChefHat className="w-4 h-4 text-amber-600" />
                      <span>JP TIFFIN & MEALS (Chef-Crafted)</span>
                    </div>
                  </th>
                  <th className="p-5 sm:p-6 text-xs uppercase font-semibold text-slate-500">
                    Ordinary Tiffin Services
                  </th>
                  <th className="p-5 sm:p-6 text-xs uppercase font-semibold text-slate-500 hidden md:table-cell">
                    Restaurant Takeout
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="p-5 sm:p-6 font-bold text-slate-900 whitespace-nowrap">
                      {row.feature}
                    </td>

                    {/* JP Tiffin Column (Highlighted) */}
                    <td className="p-5 sm:p-6 bg-amber-50/30 border-x border-amber-200/80 font-bold text-slate-900">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-emerald-800 font-extrabold">{row.jp}</span>
                      </div>
                    </td>

                    {/* Ordinary Tiffin */}
                    <td className="p-5 sm:p-6 text-slate-500 font-medium">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{row.ordinary}</span>
                      </div>
                    </td>

                    {/* Takeout */}
                    <td className="p-5 sm:p-6 text-slate-500 font-medium hidden md:table-cell">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span>{row.takeout}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Banner in Light Mode */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-medium">
            Never settle for oily home-style compromises when you can have five-star culinary fuel delivered fresh.
          </p>
          <div className="mt-6">
            <a
              href="#menu-pricing"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-900 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all"
            >
              <span>Order Chef-Crafted Meals Now &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
