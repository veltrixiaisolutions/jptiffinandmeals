"use client";

import React, { useState } from "react";
import { CITIES_SERVED } from "@/data/menuData";
import {
  MapPin,
  Search,
  CheckCircle2,
  Truck,
  Clock,
  ShieldCheck,
  Sparkles,
  AlertCircle,
  ArrowRight,
  MessageCircle,
  X,
  Info,
} from "lucide-react";

interface DeliveryCoverageProps {
  onOpenOrderModal?: (mealType?: string, plan?: string, city?: string) => void;
}

// Sample postal codes for quick testing and automatic auto-fill on hub click
const HUB_SAMPLE_CODES: Record<string, string> = {
  "Downtown Toronto": "M5V",
  "North York & Scarborough": "M2N",
  "Mississauga": "L5B",
  "Brampton": "L6Y",
  "Oakville": "L6H",
  "Burlington": "L7L",
  "Hamilton": "L8P",
  "Vaughan & Richmond Hill": "L4K",
};

// GTA Postal Code mapping logic
function findMatchingHub(input: string) {
  const clean = input.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!clean) return null;

  // 1. Direct name match
  const nameMatch = CITIES_SERVED.find(
    (c) =>
      clean.includes(c.name.toUpperCase().replace(/[^A-Z0-9]/g, "")) ||
      c.name.toUpperCase().includes(clean)
  );
  if (nameMatch) return { hub: nameMatch, code: clean };

  // Handle common GTA aliases
  if (clean.includes("TORONTO") || clean.includes("DOWNTOWN") || clean.includes("YORKVILLE")) {
    return { hub: CITIES_SERVED[0], code: clean };
  }
  if (clean.includes("NORTHYORK") || clean.includes("SCARBOROUGH") || clean.includes("EASTYORK")) {
    return { hub: CITIES_SERVED[1], code: clean };
  }
  if (clean.includes("MISSISSAUGA") || clean.includes("PORTCREDIT") || clean.includes("STREETSVILLE")) {
    return { hub: CITIES_SERVED[2], code: clean };
  }
  if (clean.includes("BRAMPTON")) {
    return { hub: CITIES_SERVED[3], code: clean };
  }
  if (clean.includes("OAKVILLE")) {
    return { hub: CITIES_SERVED[4], code: clean };
  }
  if (clean.includes("BURLINGTON")) {
    return { hub: CITIES_SERVED[5], code: clean };
  }
  if (clean.includes("HAMILTON") || clean.includes("ANCASTER") || clean.includes("DUNDAS")) {
    return { hub: CITIES_SERVED[6], code: clean };
  }
  if (clean.includes("VAUGHAN") || clean.includes("RICHMONDHILL") || clean.includes("MARKHAM") || clean.includes("WOODBRIDGE") || clean.includes("THORNHILL")) {
    return { hub: CITIES_SERVED[7], code: clean };
  }

  // 2. Postal prefix match (Forward Sortation Area)
  // First check 3-character prefixes (e.g. L6H for Oakville, L7L for Burlington, L4K for Vaughan)
  for (const city of CITIES_SERVED) {
    const matchedPrefix = city.postalPrefix.find((prefix) => {
      if (prefix.length === 3) {
        return clean.startsWith(prefix);
      }
      return false;
    });
    if (matchedPrefix) return { hub: city, code: clean };
  }

  // Next check 2-character prefixes (e.g. M4, M5, M6 for Toronto; L4, L5 for Mississauga; L6, L7 for Brampton; L8, L9 for Hamilton)
  // Also check Etobicoke (M8, M9) and North York (M2, M3) and Scarborough (M1)
  if (clean.startsWith("M1") || clean.startsWith("M2") || clean.startsWith("M3") || clean.startsWith("M8") || clean.startsWith("M9")) {
    return { hub: CITIES_SERVED[1], code: clean }; // North York, Scarborough & West Toronto
  }
  if (clean.startsWith("M4") || clean.startsWith("M5") || clean.startsWith("M6") || clean.startsWith("M7")) {
    return { hub: CITIES_SERVED[0], code: clean }; // Downtown Toronto
  }
  if (clean.startsWith("L4") || clean.startsWith("L5")) {
    // Check if Vaughan/Richmond Hill prefix first (L4K, L4C, L4L, L4J, etc.)
    if (clean.startsWith("L4K") || clean.startsWith("L4C") || clean.startsWith("L4L") || clean.startsWith("L4J") || clean.startsWith("L4H") || clean.startsWith("L4S") || clean.startsWith("L4E")) {
      return { hub: CITIES_SERVED[7], code: clean };
    }
    return { hub: CITIES_SERVED[2], code: clean }; // Mississauga
  }
  if (clean.startsWith("L6") || clean.startsWith("L7")) {
    // Check if Oakville (L6H, L6J, L6K, L6L, L6M)
    if (clean.startsWith("L6H") || clean.startsWith("L6J") || clean.startsWith("L6K") || clean.startsWith("L6L") || clean.startsWith("L6M")) {
      return { hub: CITIES_SERVED[4], code: clean };
    }
    // Check if Burlington (L7L, L7M, L7N, L7P, L7R, L7S, L7T)
    if (clean.startsWith("L7L") || clean.startsWith("L7M") || clean.startsWith("L7N") || clean.startsWith("L7P") || clean.startsWith("L7R") || clean.startsWith("L7S") || clean.startsWith("L7T")) {
      return { hub: CITIES_SERVED[5], code: clean };
    }
    return { hub: CITIES_SERVED[3], code: clean }; // Brampton
  }
  if (clean.startsWith("L8") || clean.startsWith("L9")) {
    return { hub: CITIES_SERVED[6], code: clean }; // Hamilton & Golden Horseshoe
  }
  if (clean.startsWith("L3")) {
    return { hub: CITIES_SERVED[7], code: clean }; // Markham & Richmond Hill area
  }

  return null;
}

export default function DeliveryCoverage({ onOpenOrderModal }: DeliveryCoverageProps) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCity, setSelectedCity] = useState(CITIES_SERVED[0]);
  const [isChecking, setIsChecking] = useState(false);
  const [showRoutesNotice, setShowRoutesNotice] = useState(false);
  const [searchStatus, setSearchStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [verifiedHub, setVerifiedHub] = useState<(typeof CITIES_SERVED)[0] | null>(null);
  const [verifiedCode, setVerifiedCode] = useState<string>("");

  const runCheck = (query: string) => {
    const raw = query.trim();
    if (!raw) {
      setSearchStatus("idle");
      setVerifiedHub(null);
      return;
    }

    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      const result = findMatchingHub(raw);

      if (result) {
        setSelectedCity(result.hub);
        setVerifiedHub(result.hub);
        setVerifiedCode(raw.toUpperCase());
        setSearchStatus("valid");
      } else {
        setVerifiedHub(null);
        setVerifiedCode(raw.toUpperCase());
        setSearchStatus("invalid");
      }
    }, 200);
  };

  const handlePostalCheck = (e: React.FormEvent) => {
    e.preventDefault();
    runCheck(searchInput);
  };

  const handleSelectCityCard = (city: (typeof CITIES_SERVED)[0]) => {
    setSelectedCity(city);
    const sampleCode = HUB_SAMPLE_CODES[city.name] || city.postalPrefix[0];
    setSearchInput(sampleCode);
    setVerifiedHub(city);
    setVerifiedCode(sampleCode);
    setSearchStatus("valid");
  };

  const handleQuickSuggestionClick = (sampleCode: string) => {
    setSearchInput(sampleCode);
    runCheck(sampleCode);
  };

  const handleStartOrder = () => {
    const targetCity = verifiedHub?.name || selectedCity.name;
    if (onOpenOrderModal) {
      onOpenOrderModal(
        "The Balanced Meal",
        "Chef Tasting Trial Box (2 Meals - $29.99)",
        targetCity
      );
    } else {
      window.location.href = `/plans`;
    }
  };

  const handleWhatsAppInquiry = () => {
    const code = verifiedCode || searchInput || "GTA";
    const city = verifiedHub?.name || selectedCity.name;
    const msg = encodeURIComponent(
      `Hello JP Tiffin Concierge! I checked postal code ${code} (${city}) for meal delivery. I would like to schedule an order.`
    );
    window.open(`https://wa.me/14377576969?text=${msg}`, "_blank");
  };

  return (
    <section id="coverage" className="py-20 lg:py-28 relative bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* ============================================================== */}
          {/* Left Column: Interactive Postal Code Checker                   */}
          {/* ============================================================== */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>Greater Toronto & Golden Horseshoe</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Rapid-Chilled Delivery <br />
              <span className="gold-gradient-text">Across the GTA</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
              Meals are packaged in custom thermal-insulated eco-coolers with reusable gel packs. Even if you aren't home during delivery, your food remains pristine and chilled at 2°C for up to 8 hours.
            </p>

            {/* Postal Code Search Input Form */}
            <form onSubmit={handlePostalCheck} className="mt-8 flex gap-2 max-w-md">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Enter postal code (e.g. M5V, L5B, L6Y)..."
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    if (!e.target.value.trim()) {
                      setSearchStatus("idle");
                    }
                  }}
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl text-xs sm:text-sm bg-white text-slate-900 border border-slate-300 uppercase placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-sm font-semibold transition-all"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput("");
                      setSearchStatus("idle");
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                disabled={isChecking}
                className="px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-900 bg-amber-500 hover:bg-amber-400 active:scale-95 shadow-md shadow-amber-500/25 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer disabled:opacity-70"
              >
                {isChecking ? (
                  <span>Checking...</span>
                ) : (
                  <>
                    <span>Check</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>

            {/* Quick Helper Suggestions */}
            <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-500">
              <span className="font-semibold text-slate-400">Quick tests:</span>
              <button
                type="button"
                onClick={() => handleQuickSuggestionClick("M5V")}
                className="hover:text-amber-700 underline cursor-pointer font-bold"
              >
                M5V (Toronto)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handleQuickSuggestionClick("L5B")}
                className="hover:text-amber-700 underline cursor-pointer font-bold"
              >
                L5B (Mississauga)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handleQuickSuggestionClick("L6H")}
                className="hover:text-amber-700 underline cursor-pointer font-bold"
              >
                L6H (Oakville)
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => handleQuickSuggestionClick("L6Y")}
                className="hover:text-amber-700 underline cursor-pointer font-bold"
              >
                L6Y (Brampton)
              </button>
            </div>

            {/* 🌟 1. SUCCESS: Valid GTA Coverage Card */}
            {searchStatus === "valid" && verifiedHub && (
              <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 border border-emerald-300 text-slate-900 shadow-md animate-fadeIn space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                          ✓ Delivery Confirmed
                        </span>
                        <span className="text-[11px] font-extrabold text-emerald-800">
                          100% Free Refrigerated Shipping
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                        {verifiedHub.name} Delivery Hub
                      </h4>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">
                        Matched postal region: <span className="font-mono font-bold text-slate-900">{verifiedCode}</span> (Prefixes: {verifiedHub.postalPrefix.join(", ")}*)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delivery Specifications Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-emerald-200/60">
                  <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Drop-off Days</span>
                    <span className="font-extrabold text-slate-900 block mt-0.5">
                      Wed, Sat & Sun
                    </span>
                    <span className="text-[10px] text-emerald-700 font-bold">Weekends Included</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/80 border border-emerald-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Delivery Window</span>
                    <span className="font-extrabold text-slate-900 block mt-0.5">
                      5:00 PM – 9:30 PM
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Photo SMS confirmation</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={handleStartOrder}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Order for {verifiedHub.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

            {/* ⚠️ 2. NOTICE: Outside Core GTA Hub Range */}
            {searchStatus === "invalid" && (
              <div className="mt-5 p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-slate-900 shadow-md animate-fadeIn space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-300">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm">
                      Outside Standard Hub Route
                    </span>
                    <h4 className="text-sm font-black text-slate-900 mt-1">
                      Postal code "{verifiedCode}" is outside our standard 8 GTA hubs
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Our refrigerated courier routes currently cover <strong>Downtown Toronto, North York, Scarborough, Mississauga, Brampton, Oakville, Burlington, Hamilton, Vaughan, and Richmond Hill</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-amber-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-slate-600 font-medium">
                    Need a custom drop-off or corporate delivery?
                  </span>
                  <a
                    href={`https://wa.me/14377576969?text=${encodeURIComponent(
                      `Hi JP Tiffin, my postal code is ${verifiedCode}. Can you accommodate a custom courier delivery?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Ask Concierge on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}

            {/* Delivery Guarantees Strip */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-colors">
                <Truck className="w-5 h-5 text-amber-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Weekend & Midweek Drops</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Deliveries available on Saturdays, Sundays & Wednesdays for peak freshness.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                <Clock className="w-5 h-5 text-emerald-600 mb-2" />
                <h4 className="text-xs font-bold text-slate-900">Live SMS Tracking</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  Real-time photo proof of delivery sent directly to your phone.
                </p>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* Right Column: Served Cities Grid with Interactive Selection    */}
          {/* ============================================================== */}
          <div className="lg:col-span-6 rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Active Delivery Hubs</h3>
                <p className="text-xs text-slate-400">Click any hub to check schedule & order</p>
              </div>

              {/* Clickable Live Routes Pill */}
              <button
                type="button"
                onClick={() => setShowRoutesNotice(!showRoutesNotice)}
                className="text-xs text-emerald-700 font-extrabold flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition-colors cursor-pointer"
                title="Click to view route status"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Live Routes</span>
                <Info className="w-3 h-3 text-emerald-600" />
              </button>
            </div>

            {/* Live Routes Notice Banner (Togglable) */}
            {showRoutesNotice && (
              <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 animate-fadeIn flex items-start justify-between gap-2">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-extrabold block">All 8 Hubs Active & Temperature Monitored</span>
                    <span className="text-[11px] text-emerald-700">
                      Cold chain unbroken at 2°C – 4°C with certified eco-cooler bags. Regular routes dispatch on Wednesdays, Saturdays, and Sundays at 5:00 PM EST.
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowRoutesNotice(false)}
                  className="text-emerald-700 hover:text-emerald-900 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* 8 Hub Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CITIES_SERVED.map((city) => {
                const isSelected = selectedCity.name === city.name;
                return (
                  <div
                    key={city.name}
                    onClick={() => handleSelectCityCard(city)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                      isSelected
                        ? "bg-amber-50/90 border-amber-500 shadow-md shadow-amber-500/15 ring-2 ring-amber-400/20"
                        : "bg-slate-50/80 border-slate-200 hover:border-amber-300 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        )}
                        <h4 className="text-xs font-black text-slate-900">{city.name}</h4>
                      </div>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-black tracking-tight">
                        FREE SHIP
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 mt-1 font-medium">
                      Drop-off: <strong className="text-slate-900">{city.days}</strong>
                    </p>

                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-[10px] text-slate-400 font-mono">
                        Prefix: {city.postalPrefix.join(", ")}*
                      </p>
                      {isSelected && (
                        <span className="text-[10px] font-black text-amber-700 uppercase">
                          Selected ✓
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Hub Footer Action Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-center sm:text-left">
                <span className="text-slate-500 font-medium block text-[11px]">Selected Delivery Hub:</span>
                <span className="text-slate-900 font-black text-sm">
                  {selectedCity.name}
                </span>
                <span className="text-amber-700 font-bold block text-[11px]">
                  Delivering on {selectedCity.days} (5:00 PM – 9:30 PM)
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (onOpenOrderModal) {
                    onOpenOrderModal(
                      "The Balanced Meal",
                      "Chef Tasting Trial Box (2 Meals - $29.99)",
                      selectedCity.name
                    );
                  } else {
                    window.location.href = `/plans`;
                  }
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <span>Order for {selectedCity.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
