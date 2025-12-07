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
    "Chattanooga Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Chattanooga, TN",
  description:
    "Premium commercial and office cleaning services, plus Airbnb and vacation rental cleaning in Chattanooga, TN. Reliable crews, flexible scheduling, and personalized service for businesses and property managers.",
  openGraph: {
    title:
      "Chattanooga Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Chattanooga, TN",
    description:
      "Premium commercial, office, storefront, and Airbnb cleaning services for Chattanooga businesses and property managers. Trusted teams, polished results, and personalized care.",
    url: "https://chattanoogacommercialcleaning.vercel.app",
    siteName: "Chattanooga Commercial Cleaning",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Chattanooga Commercial Cleaning commercial cleaning hero image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Chattanooga Commercial Cleaning | Premium Commercial Cleaning & Airbnb Cleaning in Chattanooga, TN",
    description:
      "Elevated commercial, office, and Airbnb cleaning in Chattanooga, TN with flexible scheduling and personalized service for businesses and property managers.",
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
      <body className="min-h-screen bg-gradient-to-br from-blossom-50 via-cream-50 to-lavender-50 text-slate-800">
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(233,137,197,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(115,224,192,0.2),transparent_60%)] blur-3xl" />
          <div className="relative flex flex-1 flex-col">
            <CleaningParticles />
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
            >
              Skip to call Chattanooga Commercial Cleaning
            </a>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

