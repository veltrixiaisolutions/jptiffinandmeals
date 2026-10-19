"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { CONTACT_DETAILS, SERVICE_AREAS } from "@/data/menuData";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    size: "Balanced (24-oz main)",
    diet: "Non-Veg",
    postalCode: "",
    startDate: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.postalCode) {
      alert("Please provide your name, phone number, and delivery postal code.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `Hi JP TIFFIN & MEALS, I would like to inquire about a meal plan.
Name: ${formData.name || "Customer"}
Size: ${formData.size}
Diet: ${formData.diet}
Postal Code: ${formData.postalCode}
Preferred Start Date: ${formData.startDate || "Flexible"}
Notes: ${formData.notes || "None"}`;

    window.open(
      `https://wa.me/${CONTACT_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111]">
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header from Brief Page 8 */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            Direct Concierge
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mt-2">
            Let’s find your meal plan.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#111111]/75 leading-relaxed">
            Tell us your preferred size, Veg or Non-Veg choice, delivery postal code and preferred start date. We’ll help you choose the right option.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={CONTACT_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs font-semibold text-[#111111] border border-[#B69A59] hover:bg-[#B69A59]/10 flex items-center gap-2 transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#B69A59]" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Contact Info & Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Confirmed Public Contact Channels & Delivery Areas */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-[#B69A59]/25 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-[#111111]">
                Confirmed Contact Details
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#111111]/85">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B69A59]/15 text-[#B69A59] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#111111]">WhatsApp Concierge</strong>
                    <a
                      href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B69A59] font-medium hover:underline"
                    >
                      {CONTACT_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B69A59]/15 text-[#B69A59] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#111111]">Email Inquiries</strong>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="text-[#B69A59] font-medium hover:underline break-all"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B69A59]/15 text-[#B69A59] flex items-center justify-center shrink-0 mt-0.5">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#111111]">Daily Menu Stories</strong>
                    <a
                      href={CONTACT_DETAILS.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B69A59] font-medium hover:underline"
                    >
                      {CONTACT_DETAILS.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Box per Brief */}
            <div className="bg-white p-6 rounded-2xl border border-[#B69A59]/25 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B69A59]" />
                <h4 className="text-sm font-bold text-[#111111]">Confirmed Service Areas</h4>
              </div>
              <p className="text-xs text-[#111111]/70 leading-relaxed">
                We serve {SERVICE_AREAS.join(", ")}. Standard deliveries run Monday–Friday. Free delivery within confirmed routes.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-[#111111]/80">
                <Clock className="w-4 h-4 text-[#B69A59]" />
                <span>Delivery times vary with the route</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#B69A59]/25 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#111111]">Inquiry Received</h3>
                <p className="text-xs sm:text-sm text-[#111111]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We have received your details for <strong>{formData.postalCode}</strong>. We will confirm route availability and get back to you shortly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-[#111111]">Plan Inquiry & Route Check</h3>
                <p className="text-xs text-[#111111]/60 -mt-2">
                  Share your preferred package and postal code so we can confirm your route.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaspreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (437) 757-6969"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Delivery Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M5V 2T6"
                      value={formData.postalCode}
                      onChange={(e) =>
                        setFormData({ ...formData, postalCode: e.target.value.toUpperCase() })
                      }
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. customer@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Preferred Main Size
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    >
                      <option value="Lean (16-oz main)">Lean (One 16-oz bowl)</option>
                      <option value="Balanced (24-oz main)">Balanced (One 24-oz bowl)</option>
                      <option value="Power (Two 16-oz bowls)">Power (Two 16-oz bowls / 32-oz total)</option>
                      <option value="Classic Indian Tiffin">Classic Indian Tiffin (Dal, Sabji, Rotis)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                      Dietary Choice
                    </label>
                    <select
                      value={formData.diet}
                      onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                    >
                      <option value="Non-Veg">Non-Vegetarian</option>
                      <option value="Veg">Vegetarian</option>
                      <option value="Mixed">Mixed Veg & Non-Veg (Custom)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#111111] mb-1">
                    Dietary Requirements or Access Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Allergies, unit/buzzer instructions, or special requests..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg text-xs bg-white border border-gray-300 focus:outline-none focus:border-[#B69A59] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:flex-1 py-3 rounded-lg text-xs font-bold text-[#F7F5EF] bg-emerald-700 hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
