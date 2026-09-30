import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "AI-Tech Haven recovered my disabled Instagram account in just 48 hours. I had already tried everything else and given up. Their team was professional, kept me updated throughout, and delivered exactly what they promised.",
    name: "Satisfied Customer",
    role: "Instagram Recovery — Lagos",
    rating: 5,
  },
  {
    text: "They set up my entire Google Business Profile, optimised it for local search, and within two weeks I was getting significantly more enquiries. Outstanding service and excellent communication.",
    name: "Business Owner",
    role: "Google Business Profile — Port Harcourt",
    rating: 5,
  },
  {
    text: "My Facebook account was hacked and I was devastated — years of content and connections gone. AI-Tech Haven recovered it with all my data completely intact. Amazing, trustworthy team.",
    name: "Satisfied Customer",
    role: "Facebook Recovery — Abuja",
    rating: 5,
  },
  {
    text: "They installed a complete smart home system for my apartment — smart lighting, TV automation, Google Home, and cameras. Everything works flawlessly. Professional installation and great after-service support.",
    name: "Homeowner",
    role: "Smart Living Installation — Lagos",
    rating: 5,
  },
  {
    text: "The WhatsApp AI chatbot they built for my business handles over 80% of customer enquiries automatically. It has saved me hours every day and helped me close more sales. Highly recommended.",
    name: "Business Owner",
    role: "AI Chatbot — Nigeria",
    rating: 5,
  },
  {
    text: "I had critical client data on a dead hard drive. AI-Tech Haven recovered 100% of it when two other places had given up. Their data recovery service is exceptional.",
    name: "Professional",
    role: "Data Recovery — Port Harcourt",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const visibleCount = 3; // show 3 at a time on large screens; 1 on mobile
  const maxIndex = testimonials.length - 1;

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="py-24 circuit-bg"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-primary">
            Client Stories
          </p>
          <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
            What Our <span className="text-glow-cyan text-primary">Clients Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Real results from real clients across Nigeria and worldwide.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative mt-14 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            role="list"
            aria-live="polite"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-full shrink-0 px-2"
                role="listitem"
                aria-hidden={i !== current}
              >
                <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-xl">
                  <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-secondary text-secondary" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-4 text-base italic leading-relaxed text-muted-foreground">
                    "{t.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-heading text-sm font-bold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-card p-2.5 text-foreground shadow transition-all hover:border-primary/40 hover:text-primary"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        {/* Trust note */}
        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Serving clients across{" "}
            <span className="font-semibold text-foreground">Lagos, Abuja, Port Harcourt</span> and{" "}
            <span className="font-semibold text-foreground">worldwide</span>. Remote support available 24/7 via WhatsApp.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
