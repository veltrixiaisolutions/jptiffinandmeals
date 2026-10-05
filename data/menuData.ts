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
  tagline?: string;
  description?: string;
  chefNotes?: string;
  calories?: number | string;
  protein: number;
  carbs?: number | string;
  fats?: number | string;
  price: number;
  subscriptionPrice: number;
  image: string;
  badges?: string[];
  ingredients?: string[];
  layerBreakdown?: { layer: string; desc: string }[];
  type?: "non-veg" | "veg";
}

export const MEAL_TYPES: MealType[] = [
  {
    id: "balanced",
    name: "The Balanced Meal",
    tagline: "Optimal macronutrient harmony for steady daytime energy and peak cognitive focus",
    badge: "Most Popular",
    idealFor: "Busy professionals, entrepreneurs & daily clean eaters seeking steady energy",
    calories: "480 – 520 kcal",
    protein: "42g – 48g",
    carbs: "45g – 52g",
    fats: "12g – 14g",
    image: "/jptiffinImages/jptiffinandmeals detailed.png",
    description:
      "Precision-crafted by our master chefs with a scientific 40:40:20 macro ratio. Clean lean proteins paired with slow-burning complex carbohydrates (aged basmati, tricolor quinoa) and healthy fats (Spanish EVOO & cold-pressed ghee). Keeps you satiated for hours with zero post-meal sluggishness.",
    features: [
      "42g–48g Lab-Weighed Clean Protein",
      "Low-Glycemic Slow-Release Carbohydrates",
      "Cooked solely in Extra Virgin Olive Oil & Ghee",
      "Zero commercial seed oils or heavy cream",
      "Available in Non-Veg & Gourmet Vegetarian"
    ],
    sampleNonVeg: "Chef's Chicken Tikka Rice Bowl with Spiced Basmati & Creamy Herb Drizzle",
    sampleVeg: "Charred Saffron Paneer Tikka with Golden Turmeric Pilaf & Mint Chutney"
  },
  {
    id: "lean",
    name: "The Lean Meal",
    tagline: "High-protein, reduced-carb culinary cut box engineered for fat loss and muscle definition",
    badge: "Fat Loss & Shred",
    idealFor: "Athletes cutting body fat, fitness enthusiasts, and ketogenic/low-carb protocols",
    calories: "340 – 390 kcal",
    protein: "48g – 52g",
    carbs: "12g – 20g",
    fats: "6g – 9g",
    image: "/images/chef-herb-chicken.jpg",
    description:
      "Stripped of empty calories without sacrificing five-star flavor. We maximize bioavailable protein while dramatically trimming carbohydrates and dietary fats. Packed with blistered green beans, oven-roasted asparagus, cauliflower swaps, and succulent herb-grilled cutlets.",
    features: [
      "48g–52g Maximum Lean Protein Concentration",
      "Ultra-low carbohydrate impact (<20g net carbs)",
      "High natural prebiotic fiber (8g–10g) for zero bloat",
      "Zero refined sugars, zero artificial thickeners",
      "Oven-roasted lean cuts & steamed crisp vegetables"
    ],
    sampleNonVeg: "Herb-Crusted Grilled Chicken Steak with Charred Asparagus & Chimichurri",
    sampleVeg: "Crisp Smoked Organic Tofu with Edamame & Steamed French Greens"
  },
  {
    id: "performance",
    name: "The High-Protein Performance Meal",
    tagline: "Maximum amino acid density and clean glycogen fuel for athletes and heavy trainers",
    badge: "Athletic Power",
    idealFor: "Bodybuilders, CrossFit athletes & high-caloric expenditure active lifestyles",
    calories: "530 – 580 kcal",
    protein: "50g – 55g",
    carbs: "48g – 58g",
    fats: "14g – 16g",
    image: "/images/chef-salmon-bowl.jpg",
    description:
      "Engineered for intense physical output and muscular repair. Generous portions of wild-caught salmon, triple-trimmed chicken breast, or grass-fed lamb served with nutrient-dense roasted sweet potatoes, quinoa, and cold-pressed avocado dressings.",
    features: [
      "50g–55g Pure Bioavailable Protein per container",
      "Complex slow-burn carbs for muscular glycogen replenishment",
      "Rich in natural Omega-3s, Iron, and Zinc",
      "Optimized for post-workout recovery and strength",
      "Hearty, deeply satisfying gourmet portions"
    ],
    sampleNonVeg: "Pan-Seared Atlantic Salmon over Andean Quinoa & Avocado Wedges",
    sampleVeg: "Artisan High-Protein Paneer Steak with Saffron Quinoa & Sautéed Edamame"
  }
];

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

export const WEEKLY_MENU_ROTATION: WeeklyScheduleDay[] = [
  {
    day: "Monday",
    shortDay: "MON",
    balancedNonVeg: "Chef's Chicken Tikka Rice Bowl with Spiced Basmati & Light Herb Cream",
    balancedVeg: "Charred Saffron Paneer Tikka Bowl with Turmeric Pilaf & Mint Emulsion",
    leanNonVeg: "Grilled Lemon Garlic Chicken Medallions with Roasted Green Beans",
    leanVeg: "Smoked Organic Tofu Steak with Steamed Edamame & Blistered Peppers",
    proteinRange: "46g – 50g",
    caloriesRange: "360 – 510 kcal",
    image: "/jptiffinImages/jptiffinandmeals detailed.png"
  },
  {
    day: "Tuesday",
    shortDay: "TUE",
    balancedNonVeg: "Pan-Seared Atlantic Salmon Fillet over Andean Tricolor Quinoa",
    balancedVeg: "Grilled Saffron Paneer Steaks with Quinoa Pilaf & Cucumber Ribbons",
    leanNonVeg: "Herb-Crusted Chicken Cutlets with Blistered Asparagus & Chimichurri",
    leanVeg: "Crispy Sautéed Tofu & Broccoli Florets with Ginger Sesame Aminos",
    proteinRange: "44g – 52g",
    caloriesRange: "350 – 490 kcal",
    image: "/images/chef-salmon-bowl.jpg"
  },
  {
    day: "Wednesday",
    shortDay: "WED",
    balancedNonVeg: "Royal Chef Cashew Butter Chicken with Aged Cumin Basmati",
    balancedVeg: "Velvety Cashew Paneer Makhani with Steamed Jeera Rice",
    leanNonVeg: "Flame-Kissed Chicken Breast with Roasted Sweet Potato Wedges & Greens",
    leanVeg: "Organic Edamame & Lentil Protein Bowl with Fire-Roasted Zucchini",
    proteinRange: "48g – 52g",
    caloriesRange: "370 – 520 kcal",
    image: "/images/chef-herb-chicken.jpg"
  },
  {
    day: "Thursday",
    shortDay: "THU",
    balancedNonVeg: "Slow-Braised Grass-Fed Lamb Shank Morsels with Herb-Infused Pilaf",
    balancedVeg: "Artisanal Paneer & Bell Pepper Jalfrezi with Herb Brown Basmati",
    leanNonVeg: "Black Truffle Grilled Chicken Breast with Garlic French Beans",
    leanVeg: "Marinated Smoked Tofu Cubes with Sautéed Asparagus & Cauliflower",
    proteinRange: "45g – 50g",
    caloriesRange: "350 – 530 kcal",
    image: "/images/chef-kitchen-plating.jpg"
  },
  {
    day: "Friday",
    shortDay: "FRI",
    balancedNonVeg: "Tandoori Spiced Chicken Thigh & Breast Medley with Saffron Rice",
    balancedVeg: "Char-Grilled Paneer Tikka with Roasted Corn & Bell Pepper Pilaf",
    leanNonVeg: "Cilantro-Lime Charred Chicken Cutlets with Steamed Broccoli Florets",
    leanVeg: "High-Protein Tofu & Spinach Saag with Riced Cauliflower",
    proteinRange: "46g – 52g",
    caloriesRange: "360 – 510 kcal",
    image: "/jptiffinImages/image1.png"
  },
  {
    day: "Saturday",
    shortDay: "SAT",
    balancedNonVeg: "Smoked Paprika Grilled Chicken Medallions with Wild Rice & Asparagus",
    balancedVeg: "Artisanal Grilled Paneer Tikka Masala Bowl with Saffron Wild Pilaf",
    leanNonVeg: "Rosemary Garlic Chicken Breast with Steamed French Beans & Roasted Cherry Tomatoes",
    leanVeg: "Edamame & Organic Smoked Tofu Scramble with Grilled Zucchini",
    proteinRange: "46g – 52g",
    caloriesRange: "360 – 520 kcal",
    image: "/images/chef-paneer-bowl.jpg"
  },
  {
    day: "Sunday",
    shortDay: "SUN",
    balancedNonVeg: "Royal Saffron Braised Chicken with Aged Jeera Basmati & Fresh Herbs",
    balancedVeg: "Artisan Dal Makhani & Charred Paneer with Golden Turmeric Pilaf",
    leanNonVeg: "Pan-Seared Herb Chicken Medallions with Blistered Broccoli & Lemon EVOO",
    leanVeg: "Crisp Sesame Crusted Organic Tofu with Steamed French Beans & Asparagus",
    proteinRange: "45g – 51g",
    caloriesRange: "350 – 510 kcal",
    image: "/jptiffinImages/jptiffinandmeals detailed.png"
  }
];

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

export const MEAL_PLANS: MealPlan[] = [
  {
    id: "trial-pack",
    name: "Chef Tasting Trial Box",
    mealsPerWeek: "2 Meals (Trial)",
    pricePerWeek: 29.99,
    pricePerMeal: 14.99,
    savings: "Zero Commitment",
    badge: "TRY BEFORE YOU SUBSCRIBE",
    description: "Experience the difference of 100% master chef food. 2 fresh gourmet meals delivered chilled to your doorstep.",
    features: [
      "2 Fresh Master Chef Meals of your choice",
      "Choose any Balanced or Lean meal",
      "Full macro & nutrition label on each box",
      "Free rapid-chilled doorstep delivery",
      "No subscription, zero recurring charge"
    ],
    recommendedFor: "New customers wanting to taste the quality",
    isTrial: true,
    isPopular: false
  },
  {
    id: "weekday-box",
    name: "Executive Weekday Plan",
    mealsPerWeek: 5,
    pricePerWeek: 79.99,
    pricePerMeal: 15.99,
    savings: "Save $15/wk",
    badge: "MON - FRI LUNCH",
    description: "5 Gourmet Chef Meals delivered fresh (including Saturday & Sunday weekend deliveries) for your busy work lunches.",
    features: [
      "5 Chef-Crafted Meals per week",
      "Choose Balanced, Lean, or High-Protein",
      "42g–52g Average Protein per meal",
      "15-Day Menu Rotation (Never boring)",
      "Free Delivery across Toronto & GTA"
    ],
    recommendedFor: "Busy Executives & Tech Professionals",
    isPopular: false
  },
  {
    id: "signature-performance",
    name: "Athlete & Performance Plan",
    mealsPerWeek: 10,
    pricePerWeek: 139.99,
    pricePerMeal: 13.99,
    savings: "Save $35/wk",
    badge: "MOST POPULAR",
    description: "10 Master Chef Meals (Lunch & Dinner Mon-Fri). Quantified macros, peak nutrition, zero cooking.",
    features: [
      "10 Chef Meals per week (Lunch + Dinner)",
      "Bi-Weekly split delivery for maximum crispness",
      "Mix & match Balanced and Lean options",
      "Full Macronutrient Breakdown on every container",
      "Pause, skip, or cancel anytime with 1 click",
      "Free Insulated Rapid-Chilled Delivery"
    ],
    recommendedFor: "Athletes, Fitness Enthusiasts & Busy Couples",
    isPopular: true
  },
  {
    id: "complete-lifestyle",
    name: "Full Week Elite Nutrition Plan",
    mealsPerWeek: 14,
    pricePerWeek: 189.99,
    pricePerMeal: 13.57,
    savings: "Save $55/wk",
    badge: "7-DAY NOURISHMENT",
    description: "14 Chef Meals for total 7-day culinary fuel. Complete dietary freedom with zero time spent cooking.",
    features: [
      "14 Chef Meals per week (Lunch & Dinner 7 Days)",
      "2-3 fresh deliveries per week (Never frozen)",
      "Complimentary High-Protein Chef Snack weekly",
      "Dedicated WhatsApp culinary concierge",
      "Maximum value & 100% macro accountability",
      "VIP Delivery priority"
    ],
    recommendedFor: "Total Body Transformation & Dedicated Dieters",
    isPopular: false
  }
];

export const CITIES_SERVED = [
  { name: "Downtown Toronto", postalPrefix: ["M4", "M5", "M6"], days: "Wed, Sat & Sun" },
  { name: "North York & Scarborough", postalPrefix: ["M2", "M3", "M1"], days: "Wed, Sat & Sun" },
  { name: "Mississauga", postalPrefix: ["L4", "L5"], days: "Wed, Sat & Sun" },
  { name: "Brampton", postalPrefix: ["L6", "L7"], days: "Wed, Sat & Sun" },
  { name: "Oakville", postalPrefix: ["L6H", "L6J", "L6K"], days: "Wed, Sat & Sun" },
  { name: "Burlington", postalPrefix: ["L7L", "L7M", "L7N"], days: "Wed, Sat & Sun" },
  { name: "Hamilton", postalPrefix: ["L8", "L9"], days: "Wed, Sat & Sun" },
  { name: "Vaughan & Richmond Hill", postalPrefix: ["L4K", "L4C"], days: "Wed, Sat & Sun" }
];

export const TESTIMONIALS = [
  {
    name: "Marcus Sterling",
    role: "Senior Tech Director, Financial District",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "I started with the 2-meal trial box and was immediately hooked. The Balanced Meal Chicken Tikka and Lean Salmon taste like fine dining. No oily grease, zero bloating, and my energy during afternoon meetings has skyrocketed.",
    plan: "10 Meals/Week Athlete Plan"
  },
  {
    name: "Dr. Priya Varma",
    role: "Radiologist, Mississauga Hospital",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Most meal services in the GTA are drenched in cheap seed oils and lack proper protein. JP's food is clearly cooked by real chefs with top-tier culinary standards. The Lean Meal keeps me full and lean during 14-hour hospital shifts.",
    plan: "Full Week Elite 14 Meals"
  },
  {
    name: "Alexandre Dupont",
    role: "Competitive CrossFit Athlete, Oakville",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment:
      "Hitting 200g of protein daily without spending 6 hours meal prepping on Sundays was impossible until I found JP Tiffin & Meals. The portions are generous, the meat is incredibly tender, and the nutrition label is 100% accurate.",
    plan: "10 Meals/Week High Protein"
  }
];

export const FAQS = [
  {
    q: "What types of meals do you offer?",
    a: "We specialize in 3 chef-crafted meal types: The Balanced Meal (optimal macronutrient harmony for all-day energy), The Lean Meal (high-protein, reduced-carb, low-calorie cut box for fat loss), and The High-Protein Performance Meal. We also offer a 2-Meal Chef Tasting Trial Box so you can experience the quality before committing to a weekly plan."
  },
  {
    q: "How does the Trial Meal offer work?",
    a: "Our Trial Box gives you 2 fresh chef-prepared meals for just $29.99 with free delivery. There is zero subscription lock-in and zero recurring charge. It allows you to test the taste, tenderness, and freshness first-hand."
  },
  {
    q: "How does JP Tiffin & Meals differ from ordinary tiffin services?",
    a: "We do not prepare ordinary home-style food. Every dish is engineered and crafted by professionally trained culinary chefs in state-of-the-art commercial kitchens. We use cold-pressed extra virgin olive oil and avocado oil (strictly zero industrial seed oils), precision-weigh all macronutrients with certified nutritionists, and blast-chill every container to lock in five-star restaurant flavor."
  },
  {
    q: "How long do the meals stay fresh, and what days do you deliver?",
    a: "Our meals arrive cold in temperature-controlled, insulated eco-containers. Stored in your refrigerator at 2–4°C, they stay fresh, crisp, and delicious for 4 to 5 days. We offer delivery throughout the week including Saturdays, Sundays, and midweek (Wednesdays) so you always have fresh meals ready for both the weekend and work week."
  },
  {
    q: "How do I reheat the meals?",
    a: "Our containers are 100% BPA-free and microwave-safe. Simply remove the lid or loosen it, microwave on high for 90 to 120 seconds, and enjoy. You can also transfer the meal to a skillet or oven-safe dish for an authentic stovetop sizzle."
  },
  {
    q: "Can I pause, skip, or cancel my subscription?",
    a: "Yes, you have total flexibility. You can pause or cancel anytime before Friday 5:00 PM for the upcoming week's delivery with zero lock-in contracts or hidden fees."
  },
  {
    q: "Where do you source your meats and fresh ingredients?",
    a: "All poultry, lamb, and beef used in our kitchen are 100% hormone-free, antibiotic-free, and ethically sourced from local Ontario farms and Canadian fisheries."
  }
];
