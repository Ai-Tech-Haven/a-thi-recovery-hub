import { MapPin, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cities = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Kano",
  "Ibadan",
  "Benin City",
  "Enugu",
];

const CoverageSection = () => (
  <section className="py-20 circuit-bg">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          We Serve All of Nigeria <span className="text-glow-cyan text-primary">& Worldwide</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Based in Port Harcourt with fast remote and virtual support across Lagos, Abuja, and every state in Nigeria. We also serve Nigerians abroad worldwide via secure virtual assistance.
        </p>
      </ScrollReveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cities.map((city, i) => (
          <ScrollReveal key={city} delay={i * 0.06}>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-heading text-sm font-semibold text-foreground">{city}</span>
            </div>
          </ScrollReveal>
        ))}
        <ScrollReveal delay={cities.length * 0.06}>
          <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
            <Globe className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-heading text-sm font-semibold text-primary">Worldwide</span>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.5}>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted-foreground">
          Whether you're in Nigeria or abroad, our remote account recovery and IT services are just a WhatsApp message away. We provide secure virtual assistance to Nigerians in the UK, USA, Canada, and across the globe.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default CoverageSection;
