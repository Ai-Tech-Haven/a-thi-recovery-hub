import {
  Zap,
  ShieldCheck,
  Layers,
  Rocket,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: Rocket,
    title: "Professional Expertise",
    desc: "CAC-registered (9255386) technology company with proven specialists across account recovery, IT services, smart living, and digital solutions.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "group-hover:shadow-cyan-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Technology Partner",
    desc: "Transparent pricing, 50% deposit policy, and a full refund guarantee. Your trust and results come first — every single time.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    glow: "group-hover:shadow-yellow-400/10",
  },
  {
    icon: Layers,
    title: "Complete Technology Solutions",
    desc: "One company for everything: account recovery, data recovery, smart living, web development, networking, AI, and IT consulting.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    glow: "group-hover:shadow-purple-400/10",
  },
  {
    icon: Zap,
    title: "Future-Ready Innovation",
    desc: "We stay ahead of technology so you don't have to. From AI automation to smart home systems, we bring the future to you today.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    glow: "group-hover:shadow-green-400/10",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Centred Support",
    desc: "We listen, understand your goals, and deliver solutions built around your real needs — not a generic package. Available via WhatsApp 24/7.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    glow: "group-hover:shadow-rose-400/10",
  },
  {
    icon: RefreshCw,
    title: "Reliable After-Sales Service",
    desc: "Our relationship doesn't end at delivery. We provide ongoing support, maintenance, and optimisation so your technology keeps performing.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/20",
    glow: "group-hover:shadow-orange-400/10",
  },
];

const WhyChooseUs = () => (
  <section id="about-section" className="py-24 circuit-bg" aria-label="Why choose AI-Tech Haven">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-secondary">
          Our Advantage
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Why Choose <span className="text-glow-gold text-secondary">AI-Tech Haven?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We combine deep technical expertise with a genuine commitment to your success — delivering technology solutions that recover, protect, optimise, and transform.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div
              className={`group relative overflow-hidden rounded-2xl border ${r.border} bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${r.glow} h-full`}
            >
              {/* Glow blob */}
              <div
                className={`pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full ${r.bg} blur-2xl transition-all duration-300 group-hover:scale-150`}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className={`mb-4 inline-flex rounded-xl ${r.bg} p-3`}>
                  <r.icon className={`h-6 w-6 ${r.color}`} aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
