import { Zap, ShieldCheck, RefreshCw, Globe, CreditCard } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Zap, title: "Fast Service", desc: "Quick turnaround on all recovery and IT services across Nigeria." },
  { icon: ShieldCheck, title: "Reliable & Trustworthy", desc: "CAC registered business (9255386). Verified and professional." },
  { icon: CreditCard, title: "50% Deposit Policy", desc: "We share the risk. Pay only 50% upfront. Balance after successful delivery." },
  { icon: RefreshCw, title: "Full Refund Guarantee", desc: "If we can't deliver, you get a complete refund. Zero risk." },
  { icon: Globe, title: "Nigeria + Worldwide", desc: "Serving Lagos, Abuja, Port Harcourt & all of Nigeria. Remote support for Nigerians abroad." },
];

const WhyChooseUs = () => (
  <section className="py-20 circuit-bg" aria-label="Why choose A-THI">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Why Choose <span className="text-glow-gold text-secondary">A-THI?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We understand the panic of losing a valuable social media account or critical data. That's why we built our business on transparency, speed, and proven results — serving clients across Nigeria and worldwide.
        </p>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div className="group relative overflow-hidden rounded-xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-xl hover:shadow-secondary/10 h-full">
              <div className="pointer-events-none absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300"
                style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--secondary)) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary/5 blur-2xl transition-all duration-300 group-hover:bg-secondary/15 group-hover:scale-150" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-primary/5 blur-2xl transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-125" />

              <div className="relative z-10 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary/15 transition-all duration-300 group-hover:bg-secondary/25 group-hover:shadow-lg group-hover:shadow-secondary/20">
                  <r.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
