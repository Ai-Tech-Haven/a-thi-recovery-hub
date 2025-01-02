import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/data/services";

const Services = () => (
  <section id="services" className="py-20" aria-label="Our IT services">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Premium IT <span className="text-glow-cyan text-primary">Services</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Comprehensive digital solutions designed for absolute security, reliability, and growth — serving clients across Nigeria and worldwide.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.slug}>
            <ScrollReveal delay={i * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className={`service-card group relative block overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl ${s.glow} h-full`}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
                      linear-gradient(0deg, hsl(var(--primary)) 1px, transparent 1px)
                    `,
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-150" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-secondary/5 blur-2xl transition-all duration-300 group-hover:bg-secondary/10 group-hover:scale-125" />

                <div className="relative z-10">
                  <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${s.color} p-3 shadow-lg`}>
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{s.name}</h3>
                  <p className="text-xs font-medium text-primary">{s.subtitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
