"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";
import DeliveryCoverage from "@/components/DeliveryCoverage";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle,
  Truck,
  Flame,
  ArrowRight,
  HelpCircle,
  Calendar,
} from "lucide-react";

export default function ContactPage() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalMealType, setModalMealType] = useState("The Balanced Meal");
  const [modalPlan, setModalPlan] = useState("Chef Tasting Trial Box (2 Meals - $29.99)");
  const [modalCity, setModalCity] = useState("Downtown Toronto");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Toronto",
    inquiryType: "Trial Box Inquiry",
    mealFormula: "The Balanced Meal",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenOrderModal = (mealType?: string, plan?: string, city?: string) => {
    if (mealType) setModalMealType(mealType);
    if (plan) setModalPlan(plan);
    if (city) setModalCity(city);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift concierge dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 w-full overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      <main className="flex-1 w-full overflow-x-hidden">
        {/* ============================================================== */}
        {/* 🌟 1. DEDICATED CONTACT HERO SECTION                           */}
        {/* ============================================================== */}
        <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-amber-50/50 via-white to-slate-50 overflow-hidden border-b border-slate-200">
          {/* Subtle Ambient Background Accents */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 rounded-full blur-[160px] pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Direct Concierge Support • 7 Days a Week</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Get in Touch with Our <br />
              <span className="gold-gradient-text">Executive Culinary Concierge</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Have questions about our 3 chef-engineered meal formulas, weekend deliveries (<strong>Saturdays & Sundays</strong>), or custom nutrition macros? We are here 7 days a week to ensure your dining experience is seamless.
            </p>

            {/* Quick Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-700">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Response: Under 15 Minutes
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <Truck className="w-4 h-4 text-amber-600" />
                Active Weekend Delivery: Sat & Sun
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                100% Commercial Kitchen Certified
              </span>
            </div>

            {/* Hero Quick CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/14377576969?text=Hi%20Chef%20Japleen%2C%20I%20have%20a%20question%20about%20your%20meals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() =>
                  handleOpenOrderModal(
                    "The Balanced Meal",
                    "Chef Tasting Trial Box (2 Meals - $29.99)"
                  )
                }
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Order 2-Meal Trial Box ($29.99)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 🌟 2. 4 CONCIERGE CHANNELS GRID                                 */}
        {/* ============================================================== */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: WhatsApp */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-900">WhatsApp VIP Concierge</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">Instant answers & order assistance</p>
                <p className="mt-3 text-sm font-bold text-emerald-600">+1 (437) 757-6969</p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Avg reply: &lt;15 mins</span>
                  <a
                    href="https://wa.me/14377576969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-black text-emerald-600 hover:underline flex items-center gap-1"
                  >
                    Open Chat &rarr;
                  </a>
                </div>
              </div>

              {/* Card 2: Email Inquiries */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-900">Executive Concierge Email</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">For corporate, events & macros</p>
                <p className="mt-3 text-sm font-bold text-amber-600 truncate">
                  jptiffinandco@gmail.com
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Response within 2-4 hrs</span>
                  <a
                    href="mailto:jptiffinandco@gmail.com"
                    className="text-xs font-black text-amber-600 hover:underline flex items-center gap-1"
                  >
                    Send Email &rarr;
                  </a>
                </div>
              </div>

              {/* Card 3: Delivery Operations */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-900">Delivery Operations</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">Wednesdays, Saturdays & Sundays</p>
                <p className="mt-3 text-sm font-bold text-slate-800">5:00 PM – 9:30 PM EST</p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-600 font-bold">● Weekend Active</span>
                  <Link href="/faq" className="text-xs font-black text-blue-600 hover:underline">
                    View FAQ &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 4: Culinary Hubs */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-900">GTA Commercial Hubs</h3>
                <p className="mt-1 text-xs text-slate-500 font-medium">HACCP & OMAFRA certified</p>
                <p className="mt-3 text-sm font-bold text-slate-800">Toronto & Mississauga Hubs</p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">Full GTA coverage</span>
                  <a href="#delivery-lookup" className="text-xs font-black text-purple-600 hover:underline">
                    Check Postal &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 🌟 3. INTERACTIVE CONTACT & INQUIRY FORM                       */}
        {/* ============================================================== */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context & Chef Guarantee */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Personalized Culinary Care</span>
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    Tell Us What You Need, <br />
                    <span className="gold-gradient-text">We Handle The Rest</span>
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed font-medium">
                    Whether you want to try our 2-Meal Chef Tasting Trial Box, customize your weekly delivery days (including <strong>Saturdays and Sundays</strong>), or discuss medical dietary specifications, our head concierge is ready to assist.
                  </p>
                </div>

                {/* Quality commitments */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    The JP Tiffin Promise
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-600 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Zero Seed Oils Ever:</strong> We prepare exclusively with cold-pressed Spanish Extra Virgin Olive Oil and pure Ghee.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Hormone-Free & Antibiotic-Free:</strong> 100% ethically sourced Canadian poultry, lamb, and wild fisheries.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Weekend Deliveries:</strong> Saturday and Sunday evening delivery slots guarantee fresh nutrition for your active weekends.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Zero Lock-in:</strong> Pause, skip, or cancel your weekly plan whenever your schedule requires.</span>
                    </li>
                  </ul>
                </div>

                {/* Direct WhatsApp Callout Banner */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-slate-900 text-white shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">Prefer to talk right now?</h4>
                      <p className="text-xs text-emerald-300">Tap below to open direct WhatsApp chat</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/14377576969?text=Hello%20JP%20Tiffin%20Concierge%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20meals"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Launch WhatsApp (+1 437 757-6969)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Inquiry Form */}
              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name || "valued guest"}</strong>. Executive Chef Japleen Singh has received your inquiry and will reach out via WhatsApp or email within 15 minutes.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Send Another Message
                      </button>
                      <button
                        onClick={() =>
                          handleOpenOrderModal(
                            formData.mealFormula,
                            "Chef Tasting Trial Box (2 Meals - $29.99)"
                          )
                        }
                        className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                      >
                        Order Trial Box ($29.99) &rarr;
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">Send an Inquiry</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in your details below and Chef Japleen will get in touch shortly.
                      </p>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Miller"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. (437) 757-6969"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* Email & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. david@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Delivery City / Postal Area
                        </label>
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        >
                          <option value="Toronto">Downtown Toronto / Midtown</option>
                          <option value="Mississauga">Mississauga</option>
                          <option value="Brampton">Brampton</option>
                          <option value="Oakville">Oakville / Burlington</option>
                          <option value="Vaughan">Vaughan / Woodbridge</option>
                          <option value="Richmond Hill">Richmond Hill / Markham</option>
                          <option value="Hamilton">Hamilton</option>
                          <option value="Other">Other GTA Area</option>
                        </select>
                      </div>
                    </div>

                    {/* Inquiry Type & Meal Formula */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Inquiry Type
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        >
                          <option value="Trial Box Inquiry">2-Meal Tasting Trial Box ($29.99)</option>
                          <option value="Custom Macros / Diet">Custom Macros / Allergies</option>
                          <option value="Weekend Deliveries">Weekend Deliveries (Sat & Sun)</option>
                          <option value="Corporate / Group Orders">Corporate / Team Catering</option>
                          <option value="General Question">General Concierge Question</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Interested Meal Formula
                        </label>
                        <select
                          value={formData.mealFormula}
                          onChange={(e) => setFormData({ ...formData, mealFormula: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium"
                        >
                          <option value="The Balanced Meal">The Balanced Meal (Optimal Harmony)</option>
                          <option value="The Lean Meal">The Lean Meal (High-Protein Cut)</option>
                          <option value="The High-Protein Performance Meal">High-Protein Performance (Bulking / Athletes)</option>
                          <option value="Chef Tasting Trial Box">Chef Tasting Trial Box (2 Meals - $29.99)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Message / Dietary Notes
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about any food preferences, delivery buzzer codes, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-medium resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Connecting with Concierge...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Concierge Request</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      Your privacy is protected. We will never share your personal information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 🌟 4. GTA POSTAL CODE CHECKER EMBED                            */}
        {/* ============================================================== */}
        <div id="delivery-lookup">
          <DeliveryCoverage onOpenOrderModal={handleOpenOrderModal} />
        </div>

        {/* ============================================================== */}
        {/* 🌟 5. TRIAL BOX CALLOUT BANNER                                 */}
        {/* ============================================================== */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-50 via-yellow-50/60 to-amber-100/50 border border-amber-200/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-[11px] font-bold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5 text-amber-700" />
                  Limited Weekly Batch Tasting
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Try Our 2-Meal Chef Tasting Trial Box
                </h3>
                <p className="text-sm text-slate-600 max-w-xl font-medium">
                  Experience Michelin-trained culinary precision first-hand. 2 gourmet meals for <strong>$29.99</strong> with free GTA delivery and zero recurring subscription.
                </p>
              </div>

              <button
                onClick={() =>
                  handleOpenOrderModal(
                    "The Balanced Meal",
                    "Chef Tasting Trial Box (2 Meals - $29.99)"
                  )
                }
                className="shrink-0 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Order Trial Box Now ($29.99)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Booking / WhatsApp Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        defaultMealType={modalMealType}
        defaultPlan={modalPlan}
        defaultCity={modalCity}
      />
    </div>
  );
}
