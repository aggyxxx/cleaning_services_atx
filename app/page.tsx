import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuoteSection } from "@/components/QuoteSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StickyMobileCallBar } from "@/components/StickyMobileCallBar";

export default function HomePage() {
  return (
    <main className="flex flex-col pb-20 lg:pb-0">
      <Navbar />
      <Hero />
      <QuoteSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutSection />
      <ProcessTimeline />
      <PricingSection />
      <ContactSection id="consultation" />
      <Footer />
      <StickyMobileCallBar />
    </main>
  );
}

