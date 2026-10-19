"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F7F5EF] border-t border-[#B69A59]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#B69A59]/20">
          {/* Brand Info with Original Round Badge */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#B69A59]/50 bg-black">
                <Image
                  src="/jptiffinImages/jptiffinblackbg.png"
                  alt="JP TIFFIN & MEALS"
                  width={56}
                  height={56}
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-[#F7F5EF]">
                  JP TIFFIN & MEALS
                </span>
                <p className="text-xs text-[#B69A59] font-medium">Chef-Made Meals in Toronto & GTA</p>
              </div>
            </Link>

            <p className="text-sm text-[#F7F5EF]/80 max-w-sm leading-relaxed">
              Chef-made meals for your everyday routine. Combining a main protein meal, an 8-oz side and an Indian meal with 3 tawa rotis.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#B69A59]/30 text-[#B69A59] hover:bg-[#B69A59]/15 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#B69A59]/30 text-[#B69A59] hover:bg-[#B69A59]/15 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="w-9 h-9 rounded-lg border border-[#B69A59]/30 text-[#B69A59] hover:bg-[#B69A59]/15 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A59]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F7F5EF]/80">
              <li>
                <Link href="/" className="hover:text-[#B69A59] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-[#B69A59] transition-colors">
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link href="/#menu" className="hover:text-[#B69A59] transition-colors">
                  Recent Menu
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#B69A59] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B69A59] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/delivery-policy" className="hover:text-[#B69A59] transition-colors">
                  Delivery & Plan Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#B69A59] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas & Schedule */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B69A59]">
              Service Areas
            </h4>
            <p className="text-xs text-[#F7F5EF]/70 leading-relaxed">
              Serving: {SERVICE_AREAS.join(", ")}. Standard deliveries run Monday–Friday. Free delivery within confirmed service areas.
            </p>
            <div className="pt-2 text-xs text-[#F7F5EF]/80 space-y-1.5">
              <p>
                <strong className="text-[#B69A59]">WhatsApp: </strong>
                <a
                  href={`https://wa.me/${CONTACT_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {CONTACT_DETAILS.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-[#B69A59]">Email: </strong>
                <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:underline">
                  {CONTACT_DETAILS.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright per brief */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F5EF]/60">
          <p>© 2026 JP TIFFIN & MEALS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/delivery-policy" className="hover:underline">
              Delivery & Plan Policy
            </Link>
            <span>•</span>
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
