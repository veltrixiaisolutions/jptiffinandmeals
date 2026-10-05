"use client";

import React, { useState } from "react";
import { X, Check, Phone, Sparkles, MapPin, CheckCircle, Flame } from "lucide-react";
import { CITIES_SERVED } from "@/data/menuData";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
  defaultMealType?: string;
  defaultCity?: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  defaultPlan = "Trial Box (2 Meals - $29.99)",
  defaultMealType = "Balanced Meal",
  defaultCity = "Downtown Toronto",
}: OrderModalProps) {
  const [mealType, setMealType] = useState(defaultMealType);
  const [diet, setDiet] = useState<"non-veg" | "veg">("non-veg");
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (defaultMealType) setMealType(defaultMealType);
    if (defaultPlan) setSelectedPlan(defaultPlan);
    if (defaultCity) setSelectedCity(defaultCity);
  }, [defaultMealType, defaultPlan, defaultCity, isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    let message = `*NEW MEAL ORDER - JP TIFFIN & MEALS*\n`;
    message += `--------------------------------\n`;
    message += `*Customer:* ${customerName || "Customer"}\n`;
    message += `*Phone:* ${customerPhone || "Provided in chat"}\n`;
    message += `*City:* ${selectedCity}\n`;
    message += `*Address:* ${customerAddress || "To be confirmed"}\n\n`;
    message += `*ORDER SELECTION:*\n`;
    message += `• *Meal Type:* ${mealType}\n`;
    message += `• *Diet:* ${diet === "non-veg" ? "Non-Vegetarian" : "Vegetarian"}\n`;
    message += `• *Selected Plan:* ${selectedPlan}\n`;
    message += `--------------------------------\n`;
    message += `Please confirm my order and next available fresh delivery slot!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/14377576969?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl my-8">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black uppercase mb-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Chef-Crafted Fresh Prep</span>
            </div>
            <h3 className="text-xl font-black text-slate-900">Start Your Meal Plan</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 shadow-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black text-slate-900">Request Received!</h4>
            <p className="text-sm text-slate-600">
              Thank you, <strong className="text-slate-900">{customerName}</strong>. Our culinary concierge is reviewing your <strong className="text-amber-700">{mealType} ({selectedPlan})</strong> and will text or call you at <strong className="text-slate-900">{customerPhone}</strong> within 15 minutes to confirm delivery!
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="p-6 space-y-5 max-h-[78vh] overflow-y-auto">
            {/* Step 1: Select Meal Type */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                1. Choose Meal Type:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "Balanced Meal", tag: "Energy & Health" },
                  { id: "Lean Meal", tag: "Cut & Shred" },
                  { id: "High-Protein Meal", tag: "Muscle & Power" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setMealType(t.id)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      mealType === t.id
                        ? "bg-amber-50 border-amber-500 shadow-sm"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <p className="text-xs font-extrabold text-slate-900">{t.id}</p>
                    <p className="text-[10px] text-amber-700 font-semibold">{t.tag}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Diet Preference */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                2. Dietary Preference:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDiet("non-veg")}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                    diet === "non-veg"
                      ? "bg-red-50 text-red-900 border-red-300 shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    Non-Vegetarian
                  </span>
                  {diet === "non-veg" && <Check className="w-4 h-4 text-red-600" />}
                </button>

                <button
                  type="button"
                  onClick={() => setDiet("veg")}
                  className={`p-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-all ${
                    diet === "veg"
                      ? "bg-emerald-50 text-emerald-900 border-emerald-300 shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    Vegetarian (Artisan)
                  </span>
                  {diet === "veg" && <Check className="w-4 h-4 text-emerald-600" />}
                </button>
              </div>
            </div>

            {/* Step 3: Plan Option */}
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block mb-2">
                3. Select Plan / Trial:
              </label>
              <div className="space-y-2">
                {[
                  {
                    name: "Chef Tasting Trial Box (2 Meals - $29.99)",
                    desc: "Fresh 2-meal tasting box with free delivery • Zero commitment",
                    highlight: true,
                  },
                  {
                    name: "Executive Weekday Plan (5 Meals - $79.99/wk)",
                    desc: "Monday to Friday fresh work lunches",
                  },
                  {
                    name: "Athlete & Performance Plan (10 Meals - $139.99/wk)",
                    desc: "Lunch & Dinner Mon-Fri • Bi-weekly fresh deliveries",
                  },
                  {
                    name: "Full Week Elite Nutrition (14 Meals - $189.99/wk)",
                    desc: "Complete 7-day culinary fuel (Lunch & Dinner)",
                  },
                ].map((p) => (
                  <label
                    key={p.name}
                    className={`flex items-start gap-3 p-3 rounded-2xl border cursor-pointer transition-all ${
                      selectedPlan === p.name
                        ? "bg-amber-50/80 border-amber-500 shadow-sm"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan_choice"
                      checked={selectedPlan === p.name}
                      onChange={() => setSelectedPlan(p.name)}
                      className="mt-1 accent-amber-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-black text-slate-900">{p.name}</p>
                        {p.highlight && (
                          <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                            TRIAL OFFER
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{p.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Step 4: Contact & Delivery Location */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                4. Your Contact & Delivery Details:
              </label>

              <div>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 focus:outline-none focus:border-amber-500 font-medium"
                >
                  {CITIES_SERVED.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name} (Fresh drop: {c.days})
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="text"
                placeholder="Full Name *"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />

              <input
                type="tel"
                placeholder="Mobile / WhatsApp Phone Number *"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />

              <input
                type="text"
                placeholder="Street Address & Unit / Buzz code *"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
            </div>

            {/* CTAs */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Instant Order via WhatsApp &rarr;</span>
              </button>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all"
              >
                Submit Online Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
