"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, ShieldCheck, Flame, Heart, Phone, Mail, MapPin, Sparkles, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="relative bg-slate-900 border-t border-slate-800 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info with Large Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 shadow-md">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-0.5">
                  <Image
                    src="/jptiffinImages/jptiffinblackbg.png"
                    alt="JP Tiffin and Meals Logo"
                    width={64}
                    height={64}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  JP TIFFIN & MEALS
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  Est. 2026 • Master Chef Prep
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Personally handcrafted by Executive Chef Japleen Singh. High-protein, precision-quantified gourmet meal boxes cooked exclusively with cold-pressed Spanish Extra Virgin Olive Oil and zero seed oils.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300 pt-2 font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Hormone-Free Meats
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                Zero Seed Oils
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/plans" className="text-amber-400 font-bold hover:underline transition-colors">
                  Plans & Trial Box
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  FAQs & Delivery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              GTA Delivery Hubs
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Downtown Toronto & Financial District
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Mississauga & Port Credit
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Brampton & Woodbridge
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Oakville & Burlington
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Hamilton & Ancaster
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Vaughan, Richmond Hill & Markham
              </li>
            </ul>
          </div>

          {/* VIP Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              VIP Tasting Club
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for exclusive seasonal chef specials and get 15% off your first culinary delivery.
            </p>

            {subscribed ? (
              <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 pt-2">
                <Sparkles className="w-4 h-4" />
                Welcome! Check your email for code: TASTING15
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-800 text-white border border-slate-700 placeholder-slate-500 focus:outline-none focus:border-amber-400 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get 15% Off Code</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1.5">
              <div>
                <p className="text-slate-400">Culinary Concierge WhatsApp:</p>
                <a
                  href="https://wa.me/14377576969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+1 (437) 757-6969</span>
                </a>
              </div>

              <div>
                <p className="text-slate-400">Executive Email:</p>
                <a
                  href="mailto:jpmealsandco@gmail.com"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>jpmealsandco@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 JP TIFFIN & MEALS. All Rights Reserved. Master Chef Prepared.</p>
          <p className="flex items-center gap-1 font-medium">
            Engineered with culinary excellence in Toronto & GTA.
          </p>
        </div>
      </div>
    </footer>
  );
}
