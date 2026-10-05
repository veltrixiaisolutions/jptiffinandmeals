"use client";

import React from "react";
import Image from "next/image";
import { ChefHat, Award, Sparkles, ShieldCheck, Flame, Scale, HeartHandshake, CheckCircle2, MessageCircle } from "lucide-react";

export default function ChefTeam() {
  const chefPillars = [
    {
      icon: ChefHat,
      title: "100% Personal Artisan Cooking",
      subtitle: "Zero Delegated Line Cooks",
      description:
        "No hired kitchen hands or anonymous prep crews. Every recipe, marinade, flame sear, and spice reduction is executed personally by Executive Chef Japleen Singh.",
    },
    {
      icon: Scale,
      title: "Obsessive Macro Precision",
      subtitle: "Individually Weighed Containers",
      description:
        "Chef Japleen personally measures every single protein portion and complex carb allocation on certified digital scales before blast chilling.",
    },
    {
      icon: Flame,
      title: "Zero Seed Oils Guarantee",
      subtitle: "Pure Spanish EVOO & Ghee Only",
      description:
        "Chef Japleen strictly refuses canola, vegetable, or soybean oils. Cooked exclusively with cold-pressed Spanish Extra Virgin Olive Oil and pure clarified butter.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative bg-white border-t border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-400/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ChefHat className="w-3.5 h-3.5 text-amber-600" />
            <span>Sole Master Chef Kitchen</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Meet Your Chef: <span className="gold-gradient-text">Executive Chef Japleen Singh</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            No hired line cooks. No rotating amateur staff. No mass-market assembly lines. <br className="hidden sm:inline" />
            Every single meal is <strong>personally handcrafted, seasoned, and seared</strong> by Chef Japleen Singh.
          </p>
        </div>

        {/* Featured Solo Master Chef Showcase Card */}
        <div className="mt-16 rounded-3xl bg-slate-50/90 overflow-hidden border border-slate-200 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Chef Kitchen Image */}
            <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-[500px] bg-slate-900">
              <Image
                src="/images/chef-kitchen-plating.jpg"
                alt="Executive Chef Japleen Singh Personally Plating Meals"
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

              {/* Floating Pill on image */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">Executive Chef Japleen Singh</h4>
                  <p className="text-[11px] text-amber-700 font-bold">Founder & Sole Master Chef</p>
                </div>
              </div>
            </div>

            {/* Chef Philosophy & Background */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>The Personal Craftsmanship Promise</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
                "When you open your meal box, you are tasting food I cooked with my own hands—never delegated."
              </h3>
              <p className="text-xs font-black text-amber-600 uppercase tracking-widest -mt-2">
                — Executive Chef Japleen Singh
              </p>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                At JP Tiffin & Meals, there is no faceless factory or underpaid assembly line. I founded this kitchen because ordinary services cut corners with toxic seed oils, watery gravies, and cheap fillers. Every single cut of Canadian poultry or wild fish is trimmed, seasoned with freshly cracked whole spices, and flame-seared by me personally in small artisan batches.
              </p>

              {/* Verified Chef Standards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Solo Handcrafted Prep</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>15+ Years Master Experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Zero Commercial Seed Oils</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Commercial Certified Kitchen</span>
                </div>
              </div>

              {/* Direct WhatsApp Concierge CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/14377576969?text=Hi%20Chef%20Japleen%2C%20I%20have%20a%20question%20about%20your%20meals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Directly with Chef Japleen (+1 437 757-6969)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Solo Chef Standards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-700 block">
                    {pillar.subtitle}
                  </span>
                  <h4 className="text-lg font-black text-slate-900 mt-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
