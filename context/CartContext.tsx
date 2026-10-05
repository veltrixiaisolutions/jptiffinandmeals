"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/data/menuData";

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  selectedPlanType: "subscription" | "alacarte";
  notes?: string;
  extraProtein?: boolean;
  swapCarb?: boolean;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (
    item: MenuItem,
    planType?: "subscription" | "alacarte",
    options?: { extraProtein?: boolean; swapCarb?: boolean; notes?: string }
  ) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedDishForModal: MenuItem | null;
  setSelectedDishForModal: (dish: MenuItem | null) => void;
  discountCode: string;
  setDiscountCode: (code: string) => void;
  discountApplied: boolean;
  applyDiscount: (code: string) => boolean;
  totalItems: number;
  subtotal: number;
  discountAmount: number;
  finalTotal: number;
  estimatedProtein: number;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  orderCompleted: boolean;
  setOrderCompleted: (completed: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Downtown Toronto");
  const [orderCompleted, setOrderCompleted] = useState(false);

  // Load cart from localStorage if available
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("jp_tiffin_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem("jp_tiffin_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (
    item: MenuItem,
    planType: "subscription" | "alacarte" = "subscription",
    options?: { extraProtein?: boolean; swapCarb?: boolean; notes?: string }
  ) => {
    const key = `${item.id}-${planType}-${options?.extraProtein ? "ep" : "noep"}-${options?.swapCarb ? "sc" : "nosc"}`;
    setCart((prev) => {
      const existing = prev.find((i) => i.id === key);
      if (existing) {
        return prev.map((i) =>
          i.id === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: key,
          menuItem: item,
          quantity: 1,
          selectedPlanType: planType,
          extraProtein: options?.extraProtein || false,
          swapCarb: options?.swapCarb || false,
          notes: options?.notes || "",
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === cartItemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscountApplied(false);
  };

  const applyDiscount = (code: string) => {
    if (code.trim().toUpperCase() === "CHEF15" || code.trim().toUpperCase() === "TASTING15") {
      setDiscountApplied(true);
      return true;
    }
    return false;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const basePrice =
      item.selectedPlanType === "subscription"
        ? item.menuItem.subscriptionPrice
        : item.menuItem.price;
    const extraProteinCost = item.extraProtein ? 4.0 : 0;
    const carbSwapCost = item.swapCarb ? 2.0 : 0;
    return sum + (basePrice + extraProteinCost + carbSwapCost) * item.quantity;
  }, 0);

  const discountAmount = discountApplied ? subtotal * 0.15 : 0;
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const estimatedProtein = cart.reduce(
    (sum, item) =>
      sum +
      (item.menuItem.protein + (item.extraProtein ? 15 : 0)) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        selectedDishForModal,
        setSelectedDishForModal,
        discountCode,
        setDiscountCode,
        discountApplied,
        applyDiscount,
        totalItems,
        subtotal,
        discountAmount,
        finalTotal,
        estimatedProtein,
        selectedCity,
        setSelectedCity,
        orderCompleted,
        setOrderCompleted,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
