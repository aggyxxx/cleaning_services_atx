import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import { CleaningParticles } from "@/components/CleaningParticles";
import { ContactModalProvider } from "@/lib/useContactModal";
import { ContactModal } from "@/components/ContactModal";

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
  metadataBase: new URL("https://cleaning-services-atx-zeta.vercel.app"),
  title:
    "Cozy Clean ATX | Premium Commercial Cleaning in Austin, TX",
  description:
    "Cozy Clean ATX provides calm, reliable, high-end commercial cleaning services for Austin businesses, offices, clinics, and short-term rentals. Trusted teams with flexible scheduling.",
  openGraph: {
    title:
      "Cozy Clean ATX | Premium Commercial Cleaning in Austin, TX",
    description:
      "Calm, reliable, high-end commercial cleaning services for Austin businesses, offices, clinics, and short-term rentals. Trusted teams with personalized care.",
    url: "https://cleaning-services-atx-zeta.vercel.app",
    siteName: "Cozy Clean ATX",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cozy Clean ATX commercial cleaning hero image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cozy Clean ATX | Premium Commercial Cleaning in Austin, TX",
    description:
      "Calm, reliable, high-end commercial cleaning services for Austin businesses, offices, clinics, and short-term rentals.",
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
      <body className="min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-50 text-slate-800">
        <ContactModalProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(93,122,93,0.04),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,_rgba(168,184,168,0.05),transparent_60%)] blur-3xl" />
            <div className="relative flex flex-1 flex-col">
              <CleaningParticles />
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
              >
                Skip to call Cozy Clean ATX
              </a>
              {children}
              <ContactModal />
            </div>
          </div>
        </ContactModalProvider>
      </body>
    </html>
  );
}

