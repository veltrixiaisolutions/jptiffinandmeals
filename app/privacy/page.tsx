import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Lock, UserCheck, ShieldCheck } from "lucide-react";
import { CONTACT_DETAILS } from "@/data/menuData";

export const metadata: Metadata = {
  title: "Privacy Policy | JP Tiffin & Meals",
  description:
    "How JP Tiffin & Meals collects, uses, and safeguards customer order and delivery information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[#111111]/70">
            How we collect and handle your order and delivery information truthfully and responsibly.
          </p>
        </div>

        <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-[#B69A59]/25 shadow-sm text-sm text-[#111111]/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-[#B69A59]" />
              <span>Information We Collect</span>
            </h2>
            <p>
              When you submit an order request or contact inquiry, we collect information necessary to fulfill your meal deliveries:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name, mobile telephone number, and email address</li>
              <li>Delivery address, unit/apartment number, postal code, and delivery access instructions (e.g., buzzer code)</li>
              <li>Dietary choices (Veg or Non-Veg, meal size) and declared allergen notes</li>
              <li>Communication preferences and order confirmation details</li>
            </ul>
          </section>

          <hr className="border-[#B69A59]/20" />

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B69A59]" />
              <span>How Your Information Is Used</span>
            </h2>
            <p>
              Your details are used solely to confirm order availability, schedule delivery routes, coordinate with drivers, process payment, and notify you of menu and schedule updates.
            </p>
            <p>
              We do not sell, rent, or trade your personal information. Marketing communications are separate from order transactional messages and will only be sent if explicitly consented to.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#B69A59]" />
              <span>Security & Confidentiality</span>
            </h2>
            <p>
              Access to customer contact and delivery records is restricted strictly to authorized staff responsible for packaging and delivery operations. We never publish customer names, addresses, private order lists, phone screenshots, or chat messages.
            </p>
          </section>

          <hr className="border-[#B69A59]/20" />

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#111111]">
              Correction and Deletion Requests
            </h2>
            <p>
              To update your address, request deletion of your information, or inquire about your data, contact us directly at{" "}
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-[#B69A59] underline font-medium">
                {CONTACT_DETAILS.email}
              </a>{" "}
              or message our WhatsApp line at{" "}
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B69A59] underline font-medium"
              >
                {CONTACT_DETAILS.phoneDisplay}
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
