"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Check, Flame, ShieldAlert, Sparkles, ChefHat, Plus } from "lucide-react";

export default function DishModal() {
  const { selectedDishForModal, setSelectedDishForModal, addToCart } = useCart();
  const [extraProtein, setExtraProtein] = useState(false);
  const [swapCarb, setSwapCarb] = useState(false);
  const [notes, setNotes] = useState("");

  if (!selectedDishForModal) return null;

  const dish = selectedDishForModal;
  const isTikkaDetailed = dish.id === "chicken-tikka-bowl";

  const handleAddFromModal = () => {
    addToCart(dish, "subscription", { extraProtein, swapCarb, notes });
    setSelectedDishForModal(null);
    setExtraProtein(false);
    setSwapCarb(false);
    setNotes("");
  };

  const calculatedProtein = dish.protein + (extraProtein ? 15 : 0);
  const calculatedPrice = dish.subscriptionPrice + (extraProtein ? 4.0 : 0) + (swapCarb ? 2.0 : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={() => setSelectedDishForModal(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Media Column */}
          <div className="md:col-span-6 relative min-h-[280px] md:min-h-full bg-slate-50 flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-slate-100">
            <div className="relative w-full h-full min-h-[260px] rounded-2xl overflow-hidden">
              <Image
                src={isTikkaDetailed ? "/jptiffinImages/jptiffinandmeals detailed.png" : dish.image}
                alt={dish.name}
                fill
                className="object-contain"
                priority
              />
            </div>
            {isTikkaDetailed && (
              <div className="absolute bottom-3 left-4 right-4 px-3 py-1.5 rounded-xl bg-amber-50 text-[11px] text-amber-900 border border-amber-200 font-bold text-center shadow-sm">
                ✨ Four-Layer Culinary Precision Breakdown
              </div>
            )}
          </div>

          {/* Right Details Column */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {dish.badges?.map((b: string) => (
                  <span
                    key={b}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-100 text-amber-900 border border-amber-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{dish.name}</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {dish.description}
              </p>

              {/* Chef Craftsmanship Quote */}
              <div className="mt-4 p-3 rounded-2xl bg-amber-50/60 border-l-4 border-amber-500 text-xs text-slate-700 flex items-start gap-2">
                <ChefHat className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-slate-900 block">Executive Chef's Method:</span>
                  <span className="text-slate-600 font-medium">{dish.chefNotes}</span>
                </div>
              </div>

              {/* Macro Nutrients Grid in Light Mode */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Certified Nutritional Breakdown
                </h4>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Calories</p>
                    <p className="text-sm font-black text-slate-800">{dish.calories}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="text-[10px] text-emerald-700 uppercase font-bold">Protein</p>
                    <p className="text-sm font-black text-emerald-800">{calculatedProtein}g</p>
                  </div>
                  <div className="p-2 rounded-xl bg-amber-50 border border-amber-200">
                    <p className="text-[10px] text-amber-700 uppercase font-bold">Carbs</p>
                    <p className="text-sm font-black text-amber-800">{swapCarb ? "14g" : `${dish.carbs}g`}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Fats</p>
                    <p className="text-sm font-bold text-slate-700">{dish.fats}g</p>
                  </div>
                </div>
              </div>

              {/* Artisan Ingredients List */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Premium Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {dish.ingredients?.map((ing: string) => (
                    <span
                      key={ing}
                      className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5 font-medium"
                    >
                      <Check className="w-3 h-3 text-emerald-600" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Chef Customization Options */}
              <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  Culinary Customizations
                </h4>

                <label className="flex items-center justify-between text-xs cursor-pointer hover:text-slate-900 font-medium">
                  <span className="flex items-center gap-2 text-slate-700">
                    <input
                      type="checkbox"
                      checked={extraProtein}
                      onChange={(e) => setExtraProtein(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    Add Extra Protein (+15g portion)
                  </span>
                  <span className="text-amber-700 font-bold">+$4.00</span>
                </label>

                <label className="flex items-center justify-between text-xs cursor-pointer hover:text-slate-900 font-medium">
                  <span className="flex items-center gap-2 text-slate-700">
                    <input
                      type="checkbox"
                      checked={swapCarb}
                      onChange={(e) => setSwapCarb(e.target.checked)}
                      className="rounded accent-amber-500"
                    />
                    Keto Swap: Cauliflower Rice instead of Basmati
                  </span>
                  <span className="text-amber-700 font-bold">+$2.00</span>
                </label>

                <input
                  type="text"
                  placeholder="Special instructions (e.g. light sauce, mild spice)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold">Subscription Price</p>
                <p className="text-2xl font-black text-slate-900">${calculatedPrice.toFixed(2)}</p>
              </div>

              <button
                onClick={handleAddFromModal}
                className="px-6 py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Custom Dish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
