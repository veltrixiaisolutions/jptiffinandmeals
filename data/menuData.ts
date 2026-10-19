export interface PlanPrices {
  trial: number;
  weekly: number | null; // null means quote required
  monthly: number;
}

export interface PlanTier {
  id: "lean" | "balanced" | "power";
  name: string;
  portion: string;
  accompaniments: string;
  vegDescription: string;
  nonVegDescription: string;
  images: {
    veg: string;
    "non-veg": string;
  };
  prices: {
    veg: PlanPrices;
    "non-veg": PlanPrices;
  };
}

export const PLAN_TIERS: PlanTier[] = [
  {
    id: "lean",
    name: "Lean",
    portion: "One 16-oz bowl",
    accompaniments: "8-oz side + Indian meal + 3 tawa rotis",
    vegDescription:
      "A compact 16-oz vegetarian main, paired with an 8-oz side and an Indian meal with 3 tawa rotis.",
    nonVegDescription:
      "A compact 16-oz non-vegetarian main, paired with an 8-oz side and an Indian meal with 3 tawa rotis.",
    images: {
      veg: "/jptiffinImages/image1.png",
      "non-veg": "/images/chef-herb-chicken.jpg",
    },
    prices: {
      veg: {
        trial: 13.99,
        weekly: 74.99,
        monthly: 249.0,
      },
      "non-veg": {
        trial: 13.99,
        weekly: 84.99,
        monthly: 289.0,
      },
    },
  },
  {
    id: "balanced",
    name: "Balanced",
    portion: "One 24-oz bowl",
    accompaniments: "8-oz side + Indian meal + 3 tawa rotis",
    vegDescription:
      "A generous 24-oz vegetarian main, paired with an 8-oz side and an Indian meal with 3 tawa rotis.",
    nonVegDescription:
      "A generous 24-oz non-vegetarian main, paired with an 8-oz side and an Indian meal with 3 tawa rotis.",
    images: {
      veg: "/jptiffinImages/jptiffinandmeals detailed.png",
      "non-veg": "/jptiffinImages/image1.png",
    },
    prices: {
      veg: {
        trial: 15.99,
        weekly: 82.99,
        monthly: 279.0,
      },
      "non-veg": {
        trial: 15.99,
        weekly: null, // Quote required
        monthly: 329.0,
      },
    },
  },
  {
    id: "power",
    name: "Power",
    portion: "Two 16-oz bowls (32 oz total)",
    accompaniments: "8-oz side + Indian meal + 3 tawa rotis",
    vegDescription:
      "Two 16-oz vegetarian main bowls for a bigger appetite, plus an 8-oz side and an Indian meal with 3 tawa rotis.",
    nonVegDescription:
      "Two 16-oz non-vegetarian main bowls for a bigger appetite, plus an 8-oz side and an Indian meal with 3 tawa rotis.",
    images: {
      veg: "/images/chef-paneer-bowl.jpg",
      "non-veg": "/images/chef-kitchen-plating.jpg",
    },
    prices: {
      veg: {
        trial: 17.99,
        weekly: 92.99,
        monthly: 309.0,
      },
      "non-veg": {
        trial: 17.99,
        weekly: null, // Quote required
        monthly: 369.0,
      },
    },
  },
];

export const PLAN_INCLUSION_NOTE =
  "Container sizes describe capacity, not food weight or nutrition. Power includes two main bowls, not two complete packages. The Indian meal in this offering is dal OR sabji; do not claim both every day.";

export const DURATION_COPY = {
  trial: "One-day trial: 1 complete daily package.",
  weekly: "Weekly: 5 complete daily packages on scheduled weekdays.",
  monthly: "Monthly: 20 complete daily packages on scheduled weekdays.",
  schedule: "Standard delivery is Monday-Friday. Holidays and approved pauses can affect your schedule.",
};

export const CLASSIC_INDIAN_TIFFIN = {
  title: "Classic Indian Tiffin",
  subtitle: "Your familiar Indian meal combination",
  description:
    "Your familiar Indian meal combination: dal, sabji and rotis, with rice depending on your plan. Ask us for the available options, current pricing and delivery availability.",
  ctaText: "Get My Tiffin Quote",
};

export const CUSTOMIZATION_COPY = {
  title: "Need a different combination?",
  description:
    "Ask about mixed Veg and Non-Veg days, extra portions or a custom duration. Availability and pricing are confirmed before your plan starts.",
};

export interface RecentMenuDay {
  dayName: string;
  tag: string;
  vegMain: string;
  nonVegMain: string;
  sideAndIndianMeal: string;
}

export const RECENT_MENU_EXAMPLES: RecentMenuDay[] = [
  {
    dayName: "Peri-Peri Day",
    tag: "Example Menu",
    vegMain: "Peri-Peri Paneer Bowl with fajita vegetables",
    nonVegMain: "Peri-Peri Chicken Bowl with fajita vegetables",
    sideAndIndianMeal: "Kerala-style Upma / Punjabi Baingan Bharta with Tawa Roti",
  },
  {
    dayName: "Afghani Day",
    tag: "Example Menu",
    vegMain: "Afghani Malai Paneer Bowl with Sriracha Lime Sauce",
    nonVegMain: "Afghani Malai Chicken Bowl with Sriracha Lime Sauce",
    sideAndIndianMeal: "Peanut Poha / Mixed Vegetable Korma with Tawa Roti",
  },
  {
    dayName: "Pasta Day",
    tag: "Example Menu",
    vegMain: "Sweet Corn Red Sauce Paneer Pasta with Feta",
    nonVegMain: "Sweet Corn Red Sauce Chicken Pasta with Feta",
    sideAndIndianMeal: "Cocoa Chocolate Banana Oats / Tari Wale Kale Chole with Tawa Roti",
  },
];

export const SERVICE_AREAS = [
  "Downtown Toronto",
  "Mississauga",
  "Brampton",
  "North York",
  "Vaughan",
  "Etobicoke",
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: "What is included in a Healthy Meal Plan?",
    a: "Each daily package includes a main protein meal, one 8-oz side and an Indian meal of dal or sabji with 3 tawa rotis.",
  },
  {
    q: "What is the difference between Lean, Balanced and Power?",
    a: "Lean has one 16-oz main bowl. Balanced has one 24-oz main bowl. Power has two 16-oz main bowls, totalling 32 oz. The side and Indian meal are included with all three.",
  },
  {
    q: "Do you offer vegetarian and non-vegetarian plans?",
    a: "Yes. Healthy Meal Plans are available in Veg and Non-Veg options. The dishes and main protein choice depend on the daily menu.",
  },
  {
    q: "Can I try the food before taking a longer plan?",
    a: "Yes. Choose a one-day trial of Lean, Balanced or Power. Your trial includes the complete daily package for your chosen size.",
  },
  {
    q: "How many deliveries are in a weekly or monthly plan?",
    a: "A standard weekly plan includes 5 daily packages. A standard monthly plan includes 20 daily packages. Delivery is scheduled Monday-Friday; holidays and approved pauses can affect the dates.",
  },
  {
    q: "How is Classic Indian Tiffin different?",
    a: "Classic Indian Tiffin includes dal, sabji and rotis, with rice depending on the plan. Healthy Meal Plans include a main protein meal, a side and an Indian meal. Contact us for current Classic Tiffin options and prices.",
  },
  {
    q: "Where and when do you deliver?",
    a: "We serve selected areas across Toronto and the GTA, Monday-Friday. Share your postal code to confirm coverage. Delivery times vary with the route; please discuss special timing requests before ordering.",
  },
  {
    q: "Where can I see the daily menu?",
    a: "We post the daily menu on WhatsApp Status and Instagram Story at @jptiffinandmeals. Check these for the latest menu updates.",
  },
  {
    q: "Can I customize my meals or mix Veg and Non-Veg days?",
    a: "Please contact us with your request. We will confirm availability, any price adjustment and the exact arrangement before your plan starts.",
  },
  {
    q: "Can I pause my plan?",
    a: "Up to four pauses per month are allowed under our current policy. Contact us in advance so we can confirm whether your requested pause can be accommodated and update your schedule.",
  },
  {
    q: "Are active plans refundable?",
    a: "No refunds on active plans. If there is a problem with your order or delivery, please contact us so we can review it and help resolve the issue.",
  },
  {
    q: "What if I have an allergy or dietary restriction?",
    a: "Tell us before ordering. We will check the ingredients and preparation arrangements before confirming whether we can accommodate you. Please do not assume a meal is suitable based on its name or photograph.",
  },
];

export const CONTACT_DETAILS = {
  phoneDisplay: "+1 (437) 757-6969",
  whatsappNumber: "14377576969",
  email: "jpmealsandco@gmail.com",
  instagramUrl: "https://www.instagram.com/jptiffinandmeals/",
  instagramHandle: "@jptiffinandmeals",
};

// ============================================================================
// Legacy Type & Data Stubs for Unused Components (Prevents TS compile break)
// ============================================================================
export interface MealType {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  idealFor: string;
  calories: string;
  protein: string;
  carbs: string;
  fats: string;
  image: string;
  description: string;
  features: string[];
  sampleNonVeg: string;
  sampleVeg: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  protein: number;
  subscriptionPrice: number;
  image: string;
  tagline?: string;
  description?: string;
  chefNotes?: string;
  calories?: number | string;
  carbs?: number | string;
  fats?: number | string;
  badges?: string[];
  ingredients?: string[];
  layerBreakdown?: { layer: string; desc: string }[];
  type?: "non-veg" | "veg";
}

export interface WeeklyScheduleDay {
  day: string;
  shortDay: string;
  balancedNonVeg: string;
  balancedVeg: string;
  leanNonVeg: string;
  leanVeg: string;
  proteinRange: string;
  caloriesRange: string;
  image: string;
}

export interface MealPlan {
  id: string;
  name: string;
  mealsPerWeek: number | string;
  pricePerWeek: number;
  pricePerMeal: number;
  savings: string;
  description: string;
  badge?: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
  isTrial?: boolean;
}

export const MEAL_TYPES: MealType[] = [];
export const WEEKLY_MENU_ROTATION: WeeklyScheduleDay[] = [];
export const MEAL_PLANS: MealPlan[] = [];
export const TESTIMONIALS: any[] = [];
export const CITIES_SERVED = SERVICE_AREAS.map((c) => ({
  name: c,
  days: "Monday–Friday",
}));
