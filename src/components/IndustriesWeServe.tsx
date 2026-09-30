import { Home, Building2, Hotel, GraduationCap, HeartPulse, Church, Landmark, Store, Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  { icon: Home, label: "Residential", desc: "Smart homes, personal IT & account recovery", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
  { icon: Building2, label: "Businesses", desc: "IT support, AI tools & digital transformation", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
  { icon: Hotel, label: "Hotels", desc: "Smart rooms, networking & guest technology", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { icon: GraduationCap, label: "Schools", desc: "Campus networking, tech labs & digital tools", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { icon: HeartPulse, label: "Healthcare", desc: "Secure IT infrastructure & data management", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
  { icon: Church, label: "Churches", desc: "AV systems, smart displays & automation", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
  { icon: Landmark, label: "Government", desc: "Enterprise networking & consulting", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
  { icon: Store, label: "SMEs", desc: "Affordable IT packages for growing businesses", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20" },
  { icon: Briefcase, label: "Corporate Organisations", desc: "Enterprise solutions & systems architecture", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" },
];

const IndustriesWeServe = () => (
  <section className="py-24 circuit-bg" aria-label="Industries we serve">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-secondary">
          Who We Serve
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Industries <span className="text-glow-gold text-secondary">We Serve</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          AI-Tech Haven delivers tailored technology solutions across a wide range of industries and customer types, serving clients across Nigeria and worldwide.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {industries.map((ind, i) => (
          <ScrollReveal key={ind.label} delay={i * 0.07}>
            <div
              className={`group flex flex-col items-center gap-3 rounded-2xl border ${ind.border} ${ind.bg} p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg`}
            >
              <div className={`rounded-xl ${ind.bg} p-3 transition-transform duration-300 group-hover:scale-110`}>
                <ind.icon className={`h-7 w-7 ${ind.color}`} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">{ind.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesWeServe;
