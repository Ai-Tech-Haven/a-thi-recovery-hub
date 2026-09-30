import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";

const Services = () => (
  <section id="services" className="py-24" aria-label="Our technology services">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          What We Do
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Complete <span className="text-glow-cyan text-primary">Technology Solutions</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          From account recovery and data recovery to AI automation, smart living, and IT infrastructure — AI-Tech Haven delivers comprehensive technology services for individuals, businesses, and organisations across Nigeria and worldwide.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const isSmartLiving = s.slug === "smart-living";
          return (
            <div key={s.slug} className={isSmartLiving ? "sm:col-span-2 lg:col-span-1" : ""}>
              <ScrollReveal delay={i * 0.07}>
                <Link
                  to={(s as any).customPath ?? `/services/${s.slug}`}
                  className={`service-card group relative block overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${s.glow} h-full ${
                    isSmartLiving
                      ? "border-yellow-500/50 bg-gradient-to-br from-yellow-500/5 to-card hover:border-yellow-400/70"
                      : "border-border hover:border-primary/40"
                  }`}
                  aria-label={`Learn more about ${s.name}`}
                >
                  {/* Grid pattern */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.07]"
                    style={{
                      backgroundImage: `
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(0deg, hsl(var(--primary)) 1px, transparent 1px)
                      `,
                      backgroundSize: "28px 28px",
                    }}
                    aria-hidden="true"
                  />
                  {/* Glow blobs */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:bg-primary/15" aria-hidden="true" />

                  <div className="relative z-10">
                    {/* NEW badge for Smart Living */}
                    {isSmartLiving && (
                      <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-yellow-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black">
                        <Sparkles className="h-3 w-3" aria-hidden="true" /> NEW
                      </span>
                    )}

                    <div
                      className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${s.color} p-3 shadow-lg`}
                    >
                      <s.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {s.name}
                    </h3>
                    <p className="text-xs font-semibold text-primary">{s.subtitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all group-hover:gap-2">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
