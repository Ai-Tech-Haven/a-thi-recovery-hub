import { MessageSquare, Search, Lightbulb, Wrench, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Consultation",
    desc: "We start with a free, no-obligation consultation to understand exactly what you need. Contact us via WhatsApp, call, or our website anytime.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
  },
  {
    step: "02",
    icon: Search,
    title: "Assessment",
    desc: "Our specialists assess your situation — whether it's a locked account, failed drive, a home to automate, or a business to connect — we diagnose it properly.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/30",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Solution Design",
    desc: "We design the right solution for your specific needs and budget. No generic packages — every solution is tailored to deliver real results.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Professional Installation & Service Delivery",
    desc: "We execute with precision — whether it's remote account recovery, onsite smart home installation, network setup, or AI deployment.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/30",
  },
  {
    step: "05",
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Our relationship doesn't end at delivery. We provide ongoing maintenance, optimisation, and priority WhatsApp support to keep your technology performing.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
  },
];

const OurProcess = () => (
  <section className="py-24" aria-label="Our service process">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
          How We Work
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Our <span className="text-glow-cyan text-primary">5-Step Process</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Every engagement follows a clear, professional process designed to deliver results efficiently and transparently.
        </p>
      </ScrollReveal>

      {/* Desktop: horizontal timeline */}
      <div className="mt-16 hidden gap-4 lg:flex">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.12} className="flex-1">
            <div className="relative flex flex-col items-center text-center">
              {/* Connector line (not on last) */}
              {i < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2.5rem)] top-10 h-0.5 w-[calc(100%-5rem)] bg-gradient-to-r from-border to-border/30"
                  aria-hidden="true"
                />
              )}

              {/* Step circle */}
              <div className={`relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-2 ${s.border} ${s.bg} shadow-lg`}>
                <s.icon className={`h-7 w-7 ${s.color}`} aria-hidden="true" />
                <span className={`mt-0.5 font-heading text-[10px] font-bold ${s.color}`}>{s.step}</span>
              </div>

              <h3 className="mt-4 font-heading text-sm font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile: vertical list */}
      <div className="mt-10 space-y-6 lg:hidden">
        {steps.map((s, i) => (
          <ScrollReveal key={s.step} delay={i * 0.1}>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border-2 ${s.border} ${s.bg}`}>
                  <s.icon className={`h-5 w-5 ${s.color}`} aria-hidden="true" />
                  <span className={`font-heading text-[9px] font-bold ${s.color}`}>{s.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-border" aria-hidden="true" />
                )}
              </div>
              <div className="pb-4 pt-1">
                <h3 className="font-heading text-sm font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OurProcess;
