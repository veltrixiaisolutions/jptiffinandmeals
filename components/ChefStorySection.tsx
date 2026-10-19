"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";

export default function ChefStorySection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#B69A59]/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] rounded-3xl p-8 sm:p-12 text-[#F7F5EF] border border-[#B69A59]/30 relative overflow-hidden shadow-xl">
          {/* Subtle gold accent decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B69A59]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B69A59]/20 text-[#B69A59] text-xs font-semibold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5" />
              <span>About JP Tiffin & Meals</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F5EF]">
              Meet Chef Japleen
            </h2>

            {/* Exact copy from Brief Page 8 */}
            <div className="space-y-4 text-sm sm:text-base text-[#F7F5EF]/85 leading-relaxed font-normal">
              <p>
                JP TIFFIN & MEALS brings chef-made food and rotating variety to your everyday routine. Led by Chef Japleen Singh, our meal plans combine a main protein meal, a side and an Indian meal, with portion options for different appetites.
              </p>
              <p>
                From paneer and chicken bowls to pasta, dal and sabji, our menu gives you something different to look forward to.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm"
              >
                <span>Find Your Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
