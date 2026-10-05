"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ShoppingBag, X } from "lucide-react";

export default function SocialProofToast() {
  const notifications = [
    { city: "Downtown Toronto", plan: "10-Meal Athlete Performance Box", time: "3 mins ago" },
    { city: "Mississauga", plan: "Chicken Tikka Rice Bowl Box", time: "7 mins ago" },
    { city: "Oakville", plan: "Full Week Elite Nutrition Box", time: "14 mins ago" },
    { city: "Brampton", plan: "Glazed Atlantic Salmon & Quinoa", time: "22 mins ago" },
    { city: "Burlington", plan: "10-Meal High-Protein Box", time: "31 mins ago" },
    { city: "Hamilton", plan: "Executive Weekday 5-Meal Box", time: "45 mins ago" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show after 4 seconds initial delay
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    // Rotate every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setIsVisible(true);
      }, 800);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed, notifications.length]);

  if (isDismissed) return null;

  const current = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 max-w-sm transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-2xl flex items-center gap-3">
        {/* Pulsing Icon */}
        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex-shrink-0 flex items-center justify-center text-amber-600 shadow-sm">
          <ShoppingBag className="w-4 h-4" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-[11px] font-bold text-slate-900 truncate">
            Someone in <span className="text-amber-700 font-extrabold">{current.city}</span>
          </p>
          <p className="text-[11px] text-slate-600 truncate">
            ordered <span className="text-slate-900 font-bold">{current.plan}</span>
          </p>
          <p className="text-[9px] text-emerald-700 font-bold mt-0.5">
            Verified Purchase • {current.time}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 rounded-md text-slate-400 hover:text-slate-700 transition-colors"
          aria-label="Dismiss Notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
