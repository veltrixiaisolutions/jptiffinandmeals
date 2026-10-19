"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: "1",
      title: "Choose your size and Veg or Non-Veg option",
      description: "Select Lean (16-oz), Balanced (24-oz), or Power (two 16-oz bowls) with daily accompaniments.",
    },
    {
      stepNumber: "2",
      title: "Share your address, preferred start date and dietary requirements",
      description: "Provide your postal code, unit details, and any allergen considerations for route verification.",
    },
    {
      stepNumber: "3",
      title: "We confirm your plan, payment and delivery arrangements",
      description: "Our team verifies your schedule and sends clear confirmation details before your plan starts.",
    },
    {
      stepNumber: "4",
      title: "Enjoy your meals and check our daily menu",
      description: "Check WhatsApp Status or Instagram Story (@jptiffinandmeals) for daily chef menu updates.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#B69A59]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#B69A59]">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mt-2">
            Fresh variety, a simple routine
          </h2>
          <p className="mt-3 text-sm text-[#111111]/70 leading-relaxed">
            Four easy steps from choosing your portion to enjoying fresh chef-made meals every weekday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl bg-[#F7F5EF] border border-[#B69A59]/25 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#111111] text-[#B69A59] font-bold text-sm flex items-center justify-center mb-4">
                  {step.stepNumber}
                </div>
                <h3 className="text-base font-bold text-[#111111] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
