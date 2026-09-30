import { ShieldCheck, Wifi, MapPin, Building2, HeartHandshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Professional Technology Solutions",
    desc: "CAC registered (9255386). Verified, expert-led IT services you can rely on.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Confidential",
    desc: "Your data and accounts are handled with strict professional confidentiality.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: Wifi,
    title: "Remote & Onsite Support",
    desc: "Fast remote assistance anywhere in Nigeria or worldwide, plus onsite visits.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Building2,
    title: "Serving Individuals & Businesses",
    desc: "Tailored technology solutions for homes, SMEs, hotels, schools and enterprises.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Solutions",
    desc: "We listen first, then deliver technology that fits your exact needs and budget.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
  },
];

const TrustIndicators = () => (
  <section
    className="relative z-10 -mt-14 py-0 pb-10"
    aria-label="Trust indicators"
  >
    <div className="container mx-auto px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {indicators.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.08}>
            <div
              className={`flex flex-col items-center gap-3 rounded-xl border ${item.border} ${item.bg} bg-card/90 p-5 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`rounded-lg ${item.bg} p-3`}>
                <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-xs font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrustIndicators;
