"use client";

import React, { useState } from "react";
import { MapPin, Clock, Search, MessageCircle, CheckCircle, HelpCircle } from "lucide-react";
import { SERVICE_AREAS, CONTACT_DETAILS } from "@/data/menuData";

interface DeliveryCoverageProps {
  onOpenOrderModal?: (
    tier?: "lean" | "balanced" | "power",
    diet?: "veg" | "non-veg",
    duration?: "trial" | "weekly" | "monthly"
  ) => void;
}

export default function DeliveryCoverage({ onOpenOrderModal }: DeliveryCoverageProps) {
  const [postalInput, setPostalInput] = useState("");
  const [searchStatus, setSearchStatus] = useState<"idle" | "checked">("idle");

  const handleCheckPostal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postalInput.trim()) return;
    setSearchStatus("checked");
  };

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#B69A59]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Coverage & Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Delivery across Toronto & the GTA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
            We serve downtown Toronto, Mississauga, Brampton, North York, Vaughan and Etobicoke. Free delivery is available within our service areas. Share your postal code so we can confirm your address.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#111111]/60 leading-relaxed">
            Standard deliveries run Monday–Friday. Timing depends on the route and can vary. Please share any access or timing requirements before ordering.
          </p>
        </div>

        {/* Confirmed Service Hubs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-10">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="p-4 rounded-xl bg-white border border-[#B69A59]/25 flex items-center gap-2.5 shadow-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#B69A59]/15 text-[#B69A59] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#111111]">{city}</h4>
                <p className="text-[10px] text-[#111111]/60">Mon–Fri Service</p>
              </div>
            </div>
          ))}
        </div>

        {/* Postal Code Inquiry Box (Honest response per brief page 8) */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#B69A59]/30 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-base font-bold text-[#111111] mb-2 text-center">
            Confirm Your Delivery Postal Code
          </h3>
          <p className="text-xs text-[#111111]/70 text-center mb-5">
            Enter your postal code below to check your address with our delivery schedule.
          </p>

          <form onSubmit={handleCheckPostal} className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              required
              placeholder="e.g. M5V 2T6"
              value={postalInput}
              onChange={(e) => {
                setPostalInput(e.target.value.toUpperCase());
                setSearchStatus("idle");
              }}
              className="flex-1 px-4 py-2.5 rounded-lg text-sm bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59] font-medium"
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm whitespace-nowrap"
            >
              Check My Delivery Area
            </button>
          </form>

          {searchStatus === "checked" && (
            <div className="mt-5 p-4 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/30 text-xs text-[#111111]/85 leading-relaxed space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#111111]">
                <HelpCircle className="w-4 h-4 text-[#B69A59]" />
                <span>Confirming Route for {postalInput}</span>
              </div>
              <p>
                A postal prefix is checked against active driver routes for Toronto, Mississauga, Brampton, North York, Vaughan, and Etobicoke. To verify your exact building or house address and timing, tap below to confirm instantly with our team.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(
                    `Hi JP TIFFIN & MEALS, I would like to confirm delivery route coverage for my postal code: ${postalInput}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Verify Route on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
