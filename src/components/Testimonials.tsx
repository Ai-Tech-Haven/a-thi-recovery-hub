import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Chioma A.", text: "A-THI recovered my disabled Instagram account in just 48 hours! I had given up hope. Highly recommended!", rating: 5 },
  { name: "Emeka O.", text: "Professional service. They set up my Google Business Profile and now I get more customers than ever.", rating: 5 },
  { name: "Blessing N.", text: "My Facebook account was hacked and they recovered it with all my data intact. Amazing team!", rating: 5 },
];

const Testimonials = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          What Our <span className="text-glow-cyan text-primary">Clients Say</span>
        </h2>
      </ScrollReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="card-glow rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 h-full">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-muted-foreground">"{t.text}"</p>
              <p className="mt-4 font-heading text-sm font-semibold text-foreground">{t.name}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
