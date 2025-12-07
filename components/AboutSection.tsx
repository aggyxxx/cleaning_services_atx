import { SectionWrapper } from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";

export function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="mx-auto mt-12 max-w-6xl px-6 py-16 sm:py-20 lg:py-24 md:px-8 lg:max-w-7xl xl:max-w-[1400px] bg-white"
    >
      <div className="grid gap-8 rounded-[36px] border border-white/60 bg-white/90 p-8 shadow-[0_40px_110px_-60px_rgba(233,137,197,0.55)] backdrop-blur-lg lg:grid-cols-[1fr_0.9fr] lg:p-12">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blossom-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blossom-600">
            About us
          </div>
          <h2
            id="about-title"
            className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Rooted in Chattanooga. Dedicated to Elevated Workspaces.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            {siteConfig.businessName} partners with Chattanooga leaders and property managers to keep
            offices, storefronts, professional suites, and vacation rentals impeccably presentable.
            We adapt our hospitality-inspired approach to the unique rhythms of
            your teams, tenants, guests, and Airbnb turnovers.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Every specialist is trained in our commercial protocol—badge
            compliance, secure access, confidentiality, and eco-thoughtful
            product selection. From innovation hubs on the North Shore to
            historic storefronts downtown, we maintain work-ready environments
            without disrupting daily operations.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-6 left-6 h-72 w-72 rounded-[30px] bg-gradient-to-br from-lavender-200 via-blossom-200 to-mint-200 opacity-70 blur-3xl" />
          <div className="relative space-y-6 rounded-[28px] bg-white/90 p-8 shadow-glow backdrop-blur">
            <div className="rounded-2xl border border-lavender-100 bg-lavender-50/60 p-6 text-slate-700">
              <h3 className="font-display text-lg font-semibold text-lavender-700">
                A Note from Our Founder
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                "I launched {siteConfig.businessName} to give Chattanooga
                businesses a cleaning partner who understands the on-site experience.
                We listen, document, and execute so your teams can focus on the
                work that matters."
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-lavender-500">
                — Jonathan Eckelberry, Founder
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-cream-50/60 p-6 text-slate-700 shadow-inner">
              <h3 className="font-display text-lg font-semibold text-cream-700">
                Our Service Areas
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Downtown Chattanooga, West Village, North Shore, Hamilton Place,
                Ooltewah, Signal Mountain, Hixson, East Brainerd, and surrounding
                commercial corridors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

