import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jptiffinandmeals.vercel.app"),
  title: "JP Tiffin & Meals | Chef-Made Meals in Toronto & GTA",
  description:
    "Explore chef-made Veg and Non-Veg meal plans with a main, side and Indian meal. Choose Lean, Balanced or Power. Monday-Friday GTA delivery.",
  keywords: [
    "tiffin service Toronto",
    "healthy meal plan GTA",
    "chef prepared meals Mississauga",
    "Brampton tiffin",
    "Indian meal plan Toronto",
    "Lean Balanced Power meals",
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
    title: "JP Tiffin & Meals | Chef-Made Meals in Toronto & GTA",
    description:
      "Explore chef-made Veg and Non-Veg meal plans with a main, side and Indian meal. Choose Lean, Balanced or Power. Monday-Friday GTA delivery.",
    images: [
      {
        url: "/jptiffinImages/jptiffinandmeals detailed.png",
        width: 1200,
        height: 630,
        alt: "JP Balanced meal package with a main bowl, side, Indian dish and three tawa rotis.",
      },
    ],
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
      className={`${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/jptiffinImages/jptiffinblackbg.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/jptiffinImages/jptiffinblackbg.png" type="image/png" />
        <link rel="apple-touch-icon" href="/jptiffinImages/jptiffinblackbg.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#111111] font-sans relative selection:bg-[#B69A59]/20 selection:text-[#111111]">
        {children}
        {/* Floating WhatsApp CTA */}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
