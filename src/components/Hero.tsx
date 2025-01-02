import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";

const WA_LINK = "https://wa.me/2348088851368?text=Hello%20A-THI%2C%20I%20need%20help%20recovering%20my%20account";

const slides = [
  {
    image: slide1,
    headline: "Nigeria's #1 Account & Data Recovery Expert",
    sub: "Fast, reliable recovery for disabled, hacked, and suspended Instagram, Facebook, Email & social media accounts. Serving clients across Lagos, Abuja, Port Harcourt, and all of Nigeria with fast remote support. Also serving Nigerians abroad worldwide.",
    cta: "Chat on WhatsApp Now",
    href: WA_LINK,
  },
  {
    image: slide2,
    headline: "Instagram & Facebook Account Recovery Nigeria",
    sub: "Got a disabled, suspended or hacked account? We recover it even after wrong ID or repeated blocks. Remote recovery for clients in Lagos, Abuja, Port Harcourt & nationwide. Most accounts restored within 24–72 hours.",
    cta: "Get Your Account Back Today",
    href: WA_LINK,
  },
  {
    image: slide3,
    headline: "Real Results. Real People.",
    sub: '"A-THI recovered my disabled Instagram account in just 48 hours!" — Chioma A. Trusted by individuals and businesses across Nigeria and worldwide.',
    cta: "See Success Stories",
    href: "#testimonials",
  },
  {
    image: slide4,
    headline: "50% Deposit • Full Refund Guarantee",
    sub: "Pay only 50% upfront. Balance after successful recovery. Zero risk with our professional service. Remote account recovery available across Nigeria.",
    cta: "Start Recovery Now",
    href: WA_LINK,
  },
  {
    image: slide5,
    headline: "Complete IT Solutions Across Nigeria",
    sub: "Account recovery, web development, Google Business Profile setup, computer repair, and more — serving Lagos, Abuja, Port Harcourt, and Nigerians abroad.",
    cta: "Explore All Services",
    href: "#services",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const s = slides[current];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16" aria-label="Hero section">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={`A-THI ${slide.headline} - Account Recovery Expert Nigeria`} className="h-full w-full object-cover" width={1920} height={800} loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
      ))}

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {s.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {s.sub}
          </p>

          <a
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:brightness-110"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {s.cta}
          </a>
        </div>
      </div>

      <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40">
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40">
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2.5 bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
