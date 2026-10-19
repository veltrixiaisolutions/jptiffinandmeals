"use client";

import React, { useState, useEffect } from "react";
import { X, Check, MessageCircle, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { PLAN_TIERS, CONTACT_DETAILS } from "@/data/menuData";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: "lean" | "balanced" | "power";
  initialDiet?: "veg" | "non-veg";
  initialDuration?: "trial" | "weekly" | "monthly";
  isClassicTiffin?: boolean;
}

export default function OrderModal({
  isOpen,
  onClose,
  initialTier = "balanced",
  initialDiet = "non-veg",
  initialDuration = "trial",
  isClassicTiffin = false,
}: OrderModalProps) {
  // Step in the ordering wizard: 1: Plan selection, 2: Location & Date, 3: Contact & Delivery details, 4: Review & Submit
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [productType, setProductType] = useState<"healthy" | "classic">(
    isClassicTiffin ? "classic" : "healthy"
  );
  const [tier, setTier] = useState<"lean" | "balanced" | "power">(initialTier);
  const [diet, setDiet] = useState<"veg" | "non-veg">(initialDiet);
  const [duration, setDuration] = useState<"trial" | "weekly" | "monthly">(initialDuration);

  // Step 2: Location & Date
  const [postalCode, setPostalCode] = useState("");
  const [startDate, setStartDate] = useState("");

  // Step 3: Details
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [buzzer, setBuzzer] = useState("");
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);

  // Status State
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (isClassicTiffin) setProductType("classic");
      if (initialTier) setTier(initialTier);
      if (initialDiet) setDiet(initialDiet);
      if (initialDuration) setDuration(initialDuration);
      setStep(1);
      setIsSubmitted(false);
    }
  }, [isOpen, initialTier, initialDiet, initialDuration, isClassicTiffin]);

  if (!isOpen) return null;

  // Selected tier data
  const selectedTierData = PLAN_TIERS.find((t) => t.id === tier) || PLAN_TIERS[1];
  const priceValue =
    productType === "healthy"
      ? selectedTierData.prices[diet][duration]
      : null;

  const durationLabel =
    duration === "trial"
      ? "one-day trial"
      : duration === "weekly"
      ? "weekly plan (5 packages)"
      : "monthly plan (20 packages)";

  const tierLabel = selectedTierData.name;
  const dietLabel = diet === "veg" ? "Veg" : "Non-Veg";

  // Build the WhatsApp message matching Page 10 prefill template exactly
  const generateWhatsAppMessage = () => {
    if (productType === "classic") {
      return `Hi JP TIFFIN & MEALS, I would like to enquire about Classic Indian Tiffin. My delivery postal code is ${postalCode || "[postal code]"} and my preferred start date is ${startDate || "[date]"}. Please confirm availability and pricing.`;
    }

    const durationText =
      duration === "trial"
        ? "one-day trial"
        : duration === "weekly"
        ? "weekly plan"
        : "monthly plan";

    return `Hi JP TIFFIN & MEALS, I would like a [${dietLabel}] [${tierLabel}] [${durationText}]. My delivery postal code is [${postalCode.trim() || "postal code"}] and my preferred start date is [${startDate || "date"}]. Please confirm availability and the total.`;
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${text}`, "_blank");
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !postalCode) {
      alert("Please fill in your name, phone number, and postal code.");
      return;
    }
    if (!policyAccepted) {
      alert("Please acknowledge the Delivery & Plan Policy to proceed.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-2xl overflow-hidden border border-[#B69A59]/40 shadow-2xl my-6">
        {/* Header */}
        <div className="px-6 py-4 bg-[#111111] text-[#F7F5EF] flex items-center justify-between border-b border-[#B69A59]/30">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#B69A59]">
              {productType === "classic" ? "Quote Request" : "Order Request"}
            </span>
            <h3 className="text-lg font-bold">
              {productType === "classic"
                ? "Classic Indian Tiffin Quote"
                : `${tierLabel} Healthy Meal Plan`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#F7F5EF]/80 hover:text-white hover:bg-[#B69A59]/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {!isSubmitted && (
          <div className="px-6 py-2.5 bg-[#F7F5EF] border-b border-[#B69A59]/20 flex items-center justify-between text-xs text-[#111111]/70 font-medium">
            <span className={step === 1 ? "text-[#111111] font-bold" : ""}>1. Selection</span>
            <span>&rarr;</span>
            <span className={step === 2 ? "text-[#111111] font-bold" : ""}>2. Location & Date</span>
            <span>&rarr;</span>
            <span className={step === 3 ? "text-[#111111] font-bold" : ""}>3. Delivery Details</span>
            <span>&rarr;</span>
            <span className={step === 4 ? "text-[#111111] font-bold" : ""}>4. Review & Confirm</span>
          </div>
        )}

        {/* Body Content */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>

            {/* Honest status message from brief page 10 */}
            <h4 className="text-xl font-bold text-[#111111]">Request Sent!</h4>
            <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/30 text-xs sm:text-sm text-[#111111]/85 leading-relaxed text-left">
              <p className="font-semibold text-[#111111] mb-1">
                Thank you! We have received your request.
              </p>
              <p>
                Your booking is not confirmed yet. We will review your delivery postal code (<strong>{postalCode}</strong>), verify route availability, and confirm payment and your preferred start date (<strong>{startDate || "As soon as available"}</strong>) via WhatsApp or phone.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Now</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-lg text-xs font-semibold text-[#111111] border border-[#B69A59] hover:bg-[#B69A59]/10"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {/* Step 1: Select Plan & Portion */}
            {step === 1 && (
              <div className="space-y-5">
                {/* Product Switcher */}
                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-2">
                    Product Offering
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setProductType("healthy")}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        productType === "healthy"
                          ? "border-[#B69A59] bg-[#B69A59]/10 font-bold"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <p className="font-bold text-[#111111]">Healthy Meal Plan</p>
                      <p className="text-[11px] text-[#111111]/70">Main + Side + Indian Meal + 3 Rotis</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProductType("classic")}
                      className={`p-3 rounded-xl border text-left text-xs transition-all ${
                        productType === "classic"
                          ? "border-[#B69A59] bg-[#B69A59]/10 font-bold"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <p className="font-bold text-[#111111]">Classic Indian Tiffin</p>
                      <p className="text-[11px] text-[#111111]/70">Dal, Sabji, Rotis (Quote Request)</p>
                    </button>
                  </div>
                </div>

                {productType === "healthy" ? (
                  <>
                    {/* Portion Size Selection */}
                    <div>
                      <label className="text-xs font-bold uppercase text-[#111111] block mb-2">
                        Main-Meal Portion
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {PLAN_TIERS.map((t) => (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTier(t.id)}
                            className={`p-3 rounded-xl border text-left text-xs transition-all ${
                              tier === t.id
                                ? "border-[#B69A59] bg-[#B69A59]/10 font-bold"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <p className="font-bold text-[#111111]">{t.name}</p>
                            <p className="text-[10px] text-[#111111]/70">{t.portion}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dietary Option */}
                    <div>
                      <label className="text-xs font-bold uppercase text-[#111111] block mb-2">
                        Dietary Choice
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setDiet("veg")}
                          className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between ${
                            diet === "veg"
                              ? "border-emerald-600 bg-emerald-50 text-emerald-900"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <span>Vegetarian</span>
                          {diet === "veg" && <Check className="w-4 h-4 text-emerald-700" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => setDiet("non-veg")}
                          className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between ${
                            diet === "non-veg"
                              ? "border-[#B69A59] bg-[#B69A59]/15 text-[#111111]"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <span>Non-Vegetarian</span>
                          {diet === "non-veg" && <Check className="w-4 h-4 text-[#B69A59]" />}
                        </button>
                      </div>
                    </div>

                    {/* Duration Selection (Default to trial as required by Page 6) */}
                    <div>
                      <label className="text-xs font-bold uppercase text-[#111111] block mb-2">
                        Duration / Packages
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setDuration("trial")}
                          className={`p-2.5 rounded-xl border text-left text-xs ${
                            duration === "trial"
                              ? "border-[#B69A59] bg-[#B69A59]/15 font-bold"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <p className="font-bold text-[#111111]">One-Day Trial</p>
                          <p className="text-[10px] text-[#B69A59] font-semibold">
                            ${selectedTierData.prices[diet].trial.toFixed(2)} total
                          </p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDuration("weekly")}
                          className={`p-2.5 rounded-xl border text-left text-xs ${
                            duration === "weekly"
                              ? "border-[#B69A59] bg-[#B69A59]/15 font-bold"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <p className="font-bold text-[#111111]">Weekly (5 pkgs)</p>
                          <p className="text-[10px] text-[#B69A59] font-semibold">
                            {selectedTierData.prices[diet].weekly
                              ? `$${selectedTierData.prices[diet].weekly?.toFixed(2)}`
                              : "Quote required"}
                          </p>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDuration("monthly")}
                          className={`p-2.5 rounded-xl border text-left text-xs ${
                            duration === "monthly"
                              ? "border-[#B69A59] bg-[#B69A59]/15 font-bold"
                              : "border-gray-200 text-gray-700"
                          }`}
                        >
                          <p className="font-bold text-[#111111]">Monthly (20 pkgs)</p>
                          <p className="text-[10px] text-[#B69A59] font-semibold">
                            ${selectedTierData.prices[diet].monthly.toFixed(2)}
                          </p>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/20 text-xs text-[#111111]/80 leading-relaxed">
                    <p className="font-bold text-[#111111] mb-1">Classic Indian Tiffin</p>
                    <p>
                      Includes dal, sabji and rotis, with rice depending on your plan. Tell us your preferences in the next steps and our team will provide a tailored quote.
                    </p>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white flex items-center gap-1.5 transition-all"
                  >
                    <span>Next: Location & Date</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location & Preferred Start Date */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                    Delivery Postal Code *
                  </label>
                  <p className="text-[11px] text-[#111111]/60 mb-1.5">
                    We serve selected areas across Toronto & GTA (Downtown Toronto, Mississauga, Brampton, North York, Vaughan, Etobicoke).
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="e.g. M5V 2T6 or L5B 1M3"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-[#B69A59]/40 focus:outline-none focus:border-[#B69A59] font-medium"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                    Preferred Start Date *
                  </label>
                  <p className="text-[11px] text-[#111111]/60 mb-1.5">
                    Standard deliveries run Monday–Friday. We will verify kitchen cutoff and schedule confirmation.
                  </p>
                  <input
                    type="date"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-white border border-[#B69A59]/40 focus:outline-none focus:border-[#B69A59] font-medium"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!postalCode.trim()) {
                        alert("Please enter your delivery postal code.");
                        return;
                      }
                      setStep(3);
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white flex items-center gap-1.5 transition-all"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Delivery Details */}
            {step === 3 && (
              <div className="space-y-3.5 max-h-[60vh] overflow-y-auto pr-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (437) 757-6969"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. customer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 100 University Ave"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                      Unit / Suite #
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apt 1402"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                    Buzzer / Delivery Access Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Buzzer code #1234, leave with concierge"
                    value={buzzer}
                    onChange={(e) => setBuzzer(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-[#111111] block mb-1">
                    Allergies or Dietary Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us before ordering so we can confirm kitchen safety arrangements..."
                    value={dietaryNotes}
                    onChange={(e) => setDietaryNotes(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59] resize-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100 flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!name.trim() || !phone.trim() || !address.trim()) {
                        alert("Please fill in your name, phone number, and street address.");
                        return;
                      }
                      setStep(4);
                    }}
                    className="px-6 py-2.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white flex items-center gap-1.5 transition-all"
                  >
                    <span>Next: Review Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <form onSubmit={handleSubmitRequest} className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F7F5EF] border border-[#B69A59]/30 space-y-2 text-xs">
                  <h4 className="font-bold text-sm text-[#111111] border-b border-[#B69A59]/20 pb-1.5">
                    Order Summary
                  </h4>

                  {productType === "healthy" ? (
                    <>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Package:</span>
                        <strong className="text-[#111111]">
                          {tierLabel} ({dietLabel})
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Main portion:</span>
                        <span>{selectedTierData.portion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Daily accompaniments:</span>
                        <span>{selectedTierData.accompaniments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Duration:</span>
                        <span>{durationLabel}</span>
                      </div>
                      <div className="flex justify-between border-t border-[#B69A59]/20 pt-1.5 text-sm">
                        <span className="font-bold text-[#111111]">Price:</span>
                        <strong className="text-[#B69A59] text-base font-black">
                          {priceValue ? `$${priceValue.toFixed(2)} CAD` : "Quote required"}
                        </strong>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Offering:</span>
                        <strong className="text-[#111111]">Classic Indian Tiffin</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#111111]/70">Pricing:</span>
                        <span className="text-[#B69A59] font-bold">Custom Quote</span>
                      </div>
                    </>
                  )}

                  <div className="border-t border-[#B69A59]/20 pt-2 space-y-1">
                    <p className="text-[11px] text-[#111111]/70">
                      <strong>Deliver to:</strong> {name}, {address} {unit && `Unit ${unit}`}, {postalCode}
                    </p>
                    <p className="text-[11px] text-[#111111]/70">
                      <strong>Preferred Start Date:</strong> {startDate || "Earliest available"}
                    </p>
                    {dietaryNotes && (
                      <p className="text-[11px] text-[#111111]/70">
                        <strong>Dietary notes:</strong> {dietaryNotes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Policy Acknowledgement */}
                <label className="flex items-start gap-2.5 text-xs text-[#111111]/80 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    required
                    checked={policyAccepted}
                    onChange={(e) => setPolicyAccepted(e.target.checked)}
                    className="mt-0.5 accent-[#B69A59]"
                  />
                  <span>
                    I have read and agree to the{" "}
                    <a href="/delivery-policy" target="_blank" className="text-[#B69A59] underline font-semibold">
                      Delivery & Plan Policy
                    </a>{" "}
                    (Monday–Friday GTA deliveries, up to 4 pauses/month, no refunds on active plans).
                  </span>
                </label>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full sm:flex-1 py-3 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order via WhatsApp Direct</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
