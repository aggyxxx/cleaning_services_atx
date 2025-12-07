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
          <div className="inline-flex items-center gap-2 rounded-full bg-sage-100/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sage-600">
            About us
          </div>
          <h2
            id="about-title"
            className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Rooted in Austin. Dedicated to Elevated Workspaces.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            {siteConfig.businessName} partners with Austin leaders and property managers to keep
            offices, storefronts, professional suites, and vacation rentals impeccably presentable.
            We adapt our hospitality-inspired approach to the unique rhythms of
            your teams, tenants, guests, and Airbnb turnovers.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Every specialist is trained in our commercial protocol—badge
            compliance, secure access, confidentiality, and eco-thoughtful
            product selection. From innovation hubs in The Domain to
            historic storefronts downtown, we maintain work-ready environments
            without disrupting daily operations.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -top-6 left-6 h-72 w-72 rounded-[30px] bg-sage-100/30 opacity-50 blur-3xl" />
          <div className="relative space-y-6 rounded-[28px] bg-white/90 p-8 shadow-soft backdrop-blur">
            <div className="rounded-2xl border border-sage-100 bg-sage-50/60 p-6 text-slate-700">
              <h3 className="font-display text-lg font-semibold text-sage-700">
                A Note from Our Founder
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                "I launched {siteConfig.businessName} to give Austin
                businesses a cleaning partner who understands the on-site experience.
                We listen, document, and execute so your teams can focus on the
                work that matters."
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-sage-500">
                — Jonathan Eckelberry, Founder
              </p>
            </div>
            <div className="rounded-2xl border border-white/60 bg-sage-50/60 p-6 text-slate-700 shadow-inner">
              <h3 className="font-display text-lg font-semibold text-sage-700">
                Our Service Areas
              </h3>
              <p className="mt-3 text-sm leading-relaxed">
                Downtown Austin, South Congress, East Austin, The Domain / North Austin,
                Westlake, Mueller, Pflugerville, Round Rock, Cedar Park, and surrounding
                commercial corridors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

