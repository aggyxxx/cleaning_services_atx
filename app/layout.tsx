import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { CleaningParticles } from "@/components/CleaningParticles";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

const ogImage =
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  metadataBase: new URL("https://chattanoogacommercialcleaning.vercel.app"),
  title:
    "Austin Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Austin, TX",
  description:
    "Premium commercial and office cleaning services, plus Airbnb and vacation rental cleaning in Austin, TX. Reliable crews, flexible scheduling, and personalized service for businesses and property managers.",
  openGraph: {
    title:
      "Austin Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Austin, TX",
    description:
      "Premium commercial, office, storefront, and Airbnb cleaning services for Austin businesses and property managers. Trusted teams, polished results, and personalized care.",
    url: "https://chattanoogacommercialcleaning.vercel.app",
    siteName: "Austin Commercial Cleaning",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Austin Commercial Cleaning commercial cleaning hero image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Austin Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Austin, TX",
    description:
      "Elevated commercial, office, and Airbnb cleaning in Austin, TX with flexible scheduling and personalized service for businesses and property managers.",
    images: [ogImage]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 text-slate-800">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(134,239,172,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(94,234,212,0.2),transparent_60%)] blur-3xl" />
          <div className="relative flex flex-1 flex-col">
            <CleaningParticles />
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
            >
              Skip to call Austin Commercial Cleaning
            </a>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

