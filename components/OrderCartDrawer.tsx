"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CITIES_SERVED } from "@/data/menuData";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
  Phone,
  MapPin,
  CheckCircle,
  Tag,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function OrderCartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discountAmount,
    finalTotal,
    discountApplied,
    applyDiscount,
    estimatedProtein,
    selectedCity,
    setSelectedCity,
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const success = applyDiscount(couponInput);
    if (!success) {
      setCouponError(true);
      setTimeout(() => setCouponError(false), 3000);
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*NEW ORDER - JP TIFFIN & MEALS*\n`;
    message += `--------------------------------\n`;
    message += `*Customer:* ${customerName || "Customer"}\n`;
    message += `*Phone:* ${customerPhone || "Provided in chat"}\n`;
    message += `*City:* ${selectedCity}\n`;
    message += `*Address:* ${customerAddress || "To be confirmed"}\n\n`;
    message += `*ORDER ITEMS:*\n`;

    cart.forEach((item, idx) => {
      const base =
        item.selectedPlanType === "subscription"
          ? item.menuItem.subscriptionPrice
          : item.menuItem.price;
      const extras = (item.extraProtein ? 4 : 0) + (item.swapCarb ? 2 : 0);
      const itemPrice = (base + extras) * item.quantity;

      message += `${idx + 1}. *${item.menuItem.name}* (x${item.quantity}) - $${itemPrice.toFixed(2)}\n`;
      if (item.extraProtein) message += `   + Extra Protein (+$4.00)\n`;
      if (item.swapCarb) message += `   + Keto Cauliflower Rice (+$2.00)\n`;
      if (item.notes) message += `   Note: ${item.notes}\n`;
    });

    message += `\n--------------------------------\n`;
    message += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (discountApplied) {
      message += `*Discount (TASTING15 - 15%):* -$${discountAmount.toFixed(2)}\n`;
    }
    message += `*Estimated Total Protein:* ${estimatedProtein}g\n`;
    message += `*Delivery:* FREE Insulated Rapid-Chilled\n`;
    message += `*Total Amount:* $${finalTotal.toFixed(2)}\n`;
    message += `--------------------------------\n`;
    message += `Please confirm my order and next available delivery schedule!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/14377576969?text=${encoded}`, "_blank");
  };

  const handleSimulatedCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) {
      alert("Please enter your name, phone number, and delivery address.");
      return;
    }
    setOrderSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md sm:max-w-lg bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-400 p-0.5">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <div>
                <h2 className="text-base font-black text-slate-900">Your Chef Box</h2>
                <p className="text-xs text-slate-500 font-medium">
                  {cart.length} unique dish{cart.length === 1 ? "" : "es"} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {orderSubmitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Order Confirmed!</h3>
                <p className="text-sm text-slate-600">
                  Thank you, <span className="text-amber-700 font-bold">{customerName}</span>. Your chef-crafted meal box is scheduled for fresh chilled delivery in{" "}
                  <span className="text-slate-900 font-bold">{selectedCity}</span>.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 text-left font-medium">
                  <p><span className="text-slate-900 font-bold">Order Number:</span> #JP-{Math.floor(100000 + Math.random() * 900000)}</p>
                  <p><span className="text-slate-900 font-bold">Phone:</span> {customerPhone}</p>
                  <p><span className="text-slate-900 font-bold">Address:</span> {customerAddress}</p>
                  <p><span className="text-slate-900 font-bold">Total Paid:</span> ${finalTotal.toFixed(2)}</p>
                </div>
                <button
                  onClick={() => {
                    clearCart();
                    setOrderSubmitted(false);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 shadow-md"
                >
                  Done & Back to Menu
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Your Box is Empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Explore our Master Chef menu and add gourmet meals to build your weekly nutrition box.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-amber-500 hover:bg-amber-400 shadow-sm"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* Protein Goal Progress Bar */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <Flame className="w-3.5 h-3.5 text-amber-600" />
                      Box Total Protein
                    </span>
                    <span className="font-black text-slate-900">{estimatedProtein}g Protein</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (estimatedProtein / 250) * 100)}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium">
                    Target: 250g+ for optimal weekly fitness & recovery
                  </p>
                </div>

                {/* Items List in Light Mode */}
                <div className="space-y-3">
                  {cart.map((item) => {
                    const basePrice =
                      item.selectedPlanType === "subscription"
                        ? item.menuItem.subscriptionPrice
                        : item.menuItem.price;
                    const extras = (item.extraProtein ? 4 : 0) + (item.swapCarb ? 2 : 0);
                    const itemTotal = (basePrice + extras) * item.quantity;

                    return (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex gap-3 items-center justify-between"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-slate-200 flex-shrink-0">
                          <Image
                            src={item.menuItem.image}
                            alt={item.menuItem.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {item.menuItem.name}
                          </h4>
                          <div className="flex flex-wrap items-center gap-1 mt-0.5">
                            <span className="text-[10px] text-amber-700 font-bold">
                              ${(basePrice + extras).toFixed(2)} each
                            </span>
                            {item.extraProtein && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">
                                +Extra Pro
                              </span>
                            )}
                            {item.swapCarb && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">
                                Cauliflower
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 p-1 rounded-lg bg-white border border-slate-200 shadow-sm">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-slate-600 hover:text-slate-900"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-slate-900 px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-slate-600 hover:text-slate-900"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                            title="Remove dish"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Coupon Code Section */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Coupon Code (try TASTING15)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 text-slate-900 border border-slate-200 uppercase placeholder-slate-400 focus:outline-none focus:border-amber-500 font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-sm"
                  >
                    Apply
                  </button>
                </form>
                {couponError && (
                  <p className="text-[11px] text-red-600 -mt-4 font-semibold">
                    Invalid code. Use <span className="font-bold">TASTING15</span> for 15% discount.
                  </p>
                )}
                {discountApplied && (
                  <p className="text-[11px] text-emerald-700 flex items-center gap-1 -mt-4 font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    15% Chef Tasting Discount Applied!
                  </p>
                )}

                {/* Customer Delivery Details Form in Light Mode */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    Delivery Location & Details
                  </h4>

                  <div>
                    <label className="text-[10px] text-slate-500 block mb-1 font-semibold">Select Delivery City</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 focus:outline-none focus:border-amber-500 font-medium"
                    >
                      {CITIES_SERVED.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name} (Fresh drop: {c.days})
                        </option>
                      ))}
                    </select>
                  </div>

                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Phone / WhatsApp Number *"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />

                  <input
                    type="text"
                    placeholder="Delivery Address (Street, Unit, Buzz Code) *"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </>
            )}
          </div>

          {/* Cart Footer in Light Mode */}
          {!orderSubmitted && cart.length > 0 && (
            <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="space-y-1.5 text-xs font-medium">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">${subtotal.toFixed(2)}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Chef Discount (15%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span className="text-emerald-700 font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-black pt-2 border-t border-slate-200 text-slate-900">
                  <span>Total Amount</span>
                  <span className="text-xl gold-gradient-text">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Instant Order via WhatsApp &rarr;</span>
                </button>

                <button
                  onClick={handleSimulatedCheckout}
                  className="w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 hover:brightness-105 shadow-md shadow-amber-500/20 transition-all"
                >
                  Place Direct Order Online
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
