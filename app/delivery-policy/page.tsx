import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Clock, Truck, PauseCircle, AlertCircle, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivery & Plan Policy | JP Tiffin & Meals",
  description:
    "Read the delivery, schedule, pause, active plan, and food handling policies for JP Tiffin & Meals across Toronto & GTA.",
};

export default function DeliveryPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111]">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#B69A59] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Delivery & Plan Policy
          </h1>
          <p className="mt-2 text-sm text-[#111111]/70">
            Clear, transparent operating policies for all JP Tiffin & Meals packages.
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-[#B69A59]/25 shadow-sm">
          {/* Plan Duration */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#B69A59]" />
              <span>Plan Duration</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              Weekly Healthy Meal Plans include <strong>5 complete daily packages</strong>. Monthly Healthy Meal Plans include <strong>20 complete daily packages</strong>. A one-day trial includes <strong>1 complete daily package</strong>.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          {/* Delivery */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#B69A59]" />
              <span>Delivery</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              Standard deliveries take place <strong>Monday–Friday</strong> within our confirmed service areas (downtown Toronto, Mississauga, Brampton, North York, Vaughan, and Etobicoke). Delivery times can vary depending on the route. Please provide accurate address, unit, buzzer and access details before your first delivery.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          {/* Pauses */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <PauseCircle className="w-5 h-5 text-[#B69A59]" />
              <span>Pauses</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              Up to four pauses per month are allowed. Contact us in advance and wait for confirmation before assuming a delivery has been paused.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          {/* Active Plans */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#B69A59]" />
              <span>Active Plans</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              No refunds on active plans. Please contact us about any order or delivery issue so we can review it and help resolve the issue promptly.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          {/* Menu and Customization */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#B69A59]" />
              <span>Menu and Customization</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              Menus rotate. Custom requests, mixed dietary plans and additional items require confirmation of availability and price before booking.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          {/* Storage, Allergens & Dietary Considerations */}
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#B69A59]" />
              <span>Storage, Allergens and Dietary Considerations</span>
            </h2>
            <div className="space-y-2 text-sm text-[#111111]/80 leading-relaxed">
              <p>
                Please refrigerate meals immediately upon arrival. Follow the specific handling and reheating guidelines indicated on your meal packaging.
              </p>
              <p>
                Our meals are prepared in a kitchen that handles common allergens including dairy, wheat/gluten, nuts, and soy. Please notify us of any severe allergies before ordering so we can confirm whether your request can be safely accommodated.
              </p>
              <p>
                Vegetarian meals may contain paneer (dairy) and are not certified vegan.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
