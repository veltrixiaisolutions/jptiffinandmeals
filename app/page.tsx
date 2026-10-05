"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MenuAndPricing from "@/components/MenuAndPricing";
import MealPlanBuilder from "@/components/MealPlanBuilder";
import ChefVideoSection from "@/components/ChefVideoSection";
import NutritionDeepDive from "@/components/NutritionDeepDive";
import ChefStandards from "@/components/ChefStandards";
import ChefTeam from "@/components/ChefTeam";
import DeliveryCoverage from "@/components/DeliveryCoverage";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

// Lazy-loaded OrderModal for instant initial page speed
const OrderModal = dynamic(() => import("@/components/OrderModal"), {
  ssr: false,
});

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [modalMealType, setModalMealType] = useState("The Balanced Meal");
  const [modalPlan, setModalPlan] = useState("Chef Tasting Trial Box (2 Meals - $29.99)");
  const [modalCity, setModalCity] = useState("Downtown Toronto");

  const handleOpenOrderModal = (mealType?: string, plan?: string, city?: string) => {
    if (mealType) setModalMealType(mealType);
    if (plan) setModalPlan(plan);
    if (city) setModalCity(city);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 w-full overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section with Interactive Video/Image Carousel */}
        <Hero onOpenOrderModal={handleOpenOrderModal} />

        {/* How It Works Pipeline */}
        <HowItWorks />

        {/* Dedicated 3 Chef-Engineered Meal Types & Mon-Fri Rotation */}
        <MenuAndPricing onOpenOrderModal={handleOpenOrderModal} />

        {/* Curated Weekly & Monthly Meal Plans + Trial Box */}
        <MealPlanBuilder onOpenOrderModal={handleOpenOrderModal} />

        {/* Video Showcase Section */}
        <ChefVideoSection />

        {/* Macronutrients Deep Dive */}
        <NutritionDeepDive />

        {/* Chef Standards vs Ordinary Tiffins */}
        <ChefStandards />

        {/* Executive Culinary Team */}
        <ChefTeam />

        {/* Delivery Hubs & Postal Lookup */}
        <DeliveryCoverage onOpenOrderModal={handleOpenOrderModal} />

        {/* Subscriber Reviews & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />
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
