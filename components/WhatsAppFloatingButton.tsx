"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Expanding Tooltip Pill on Hover */}
      <div
        className={`hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-full bg-slate-900/95 text-white text-xs font-bold shadow-xl border border-emerald-500/30 backdrop-blur-md transition-all duration-300 transform pointer-events-none select-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat with Chef Japleen</span>
        <span className="text-[10px] text-emerald-400 font-normal">(+1 437 757-6969)</span>
      </div>

      {/* Floating Action Button */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        href="https://wa.me/14377576969?text=Hello%20Chef%20Japleen%2C%20I%20would%20like%20to%20inquire%20about%20JP%20Tiffin%20%26%20Meals."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-shadow duration-300 flex items-center justify-center border-2 border-white/40"
        aria-label="Chat with Chef Japleen on WhatsApp at +1 (437) 757-6969"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none text-white relative z-10" />

        {/* Online Status Green Indicator Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 bg-emerald-300 border-2 border-slate-900 rounded-full z-20" />
      </motion.a>
    </div>
  );
}
