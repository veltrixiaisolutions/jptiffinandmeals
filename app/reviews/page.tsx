import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MessageSquareQuote } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Reviews | JP Tiffin & Meals",
  description: "Verified customer feedback and experiences with JP Tiffin & Meals.",
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111]">
      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#B69A59] hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="w-16 h-16 rounded-full bg-[#B69A59]/15 text-[#B69A59] flex items-center justify-center mx-auto mb-6">
          <MessageSquareQuote className="w-8 h-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
          Customer Reviews
        </h1>

        <p className="mt-4 text-base text-[#111111]/70 leading-relaxed max-w-xl mx-auto">
          We publish only verified reviews with direct permission from our customers. As our new website transitions, updated reviews will appear here.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/plans"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-bold text-[#111111] bg-[#B69A59] hover:bg-[#A38747] hover:text-white transition-all shadow-sm"
          >
            Explore Meal Plans
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-semibold text-[#111111] border border-[#B69A59] hover:bg-[#B69A59]/10 transition-colors"
          >
            Contact the Chef
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
