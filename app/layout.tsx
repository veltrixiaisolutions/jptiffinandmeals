import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jptiffinandmeals.com"),
  title: "JP Tiffin & Meals | 100% Chef-Crafted Gourmet Meal Prep & Nutrition",
  description:
    "Elevate your daily dining with 100% Master Chef-crafted gourmet meals. High-protein, precision-balanced macros, cooked with extra virgin olive oil and zero seed oils. Fresh rapid-chilled delivery across Toronto, Mississauga, Brampton & the GTA.",
  keywords: [
    "chef prepared meals Toronto",
    "gourmet meal prep GTA",
    "high protein tiffin service",
    "chef crafted meals Mississauga",
    "healthy meal delivery Brampton",
    "macro balanced diet box",
    "luxury tiffin service",
  ],
  icons: {
    icon: [
      { url: "/jptiffinImages/jptiffinblackbg.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/jptiffinImages/jptiffinblackbg.png",
    apple: [
      { url: "/jptiffinImages/jptiffinblackbg.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    title: "JP Tiffin & Meals | Master Chef-Engineered Gourmet Dining",
    description:
      "100% Master Chef prepared gourmet meals. High protein, lab-calibrated macros, zero seed oils. Delivered fresh to your door.",
    images: ["/jptiffinImages/image1.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/jptiffinImages/jptiffinblackbg.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/jptiffinImages/jptiffinblackbg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/jptiffinImages/jptiffinblackbg.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a] selection:bg-amber-100 selection:text-amber-900 font-sans relative">
        {children}
        {/* Universal Floating WhatsApp CTA */}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
