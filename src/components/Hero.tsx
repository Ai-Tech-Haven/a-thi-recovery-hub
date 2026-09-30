import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Zap, CalendarCheck, ShieldCheck } from "lucide-react";
import slide1 from "@/assets/hero-slide-1.jpg";
import slide2 from "@/assets/hero-slide-2.jpg";
import slide3 from "@/assets/hero-slide-3.jpg";
import slide4 from "@/assets/hero-slide-4.jpg";
import slide5 from "@/assets/hero-slide-5.jpg";
import { Link } from "react-router-dom";

const WA_LINK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20need%20help%20recovering%20my%20account";
const WA_BOOK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20would%20like%20to%20book%20a%20consultation";

const slides = [
  {
    image: slide1,
    badge: "Intelligent Technology Solutions",
    headline: "Intelligent Technology Solutions For Homes, Businesses & Organisations",
    sub: "From Account Recovery and Data Recovery to AI Smart Living, Business Automation, and Professional IT Services — AI-Tech Haven helps you recover, protect, optimise, and transform your technology.",
  },
  {
    image: slide2,
    badge: "Account & Data Recovery",
    headline: "Professional Account Recovery — Fast, Secure & Reliable",
    sub: "Disabled Instagram, hacked Facebook, locked Gmail or lost data? Our expert team recovers your accounts and data with a proven process. Remote support nationwide and worldwide.",
  },
  {
    image: slide3,
    badge: "Smart Living Solutions",
    headline: "Experience the Future of Smart Living",
    sub: "We supply, configure, install, and support intelligent home and office technology — Smart TV systems, voice automation, smart lighting, security cameras, and full home automation.",
  },
  {
    image: slide4,
    badge: "Business Technology",
    headline: "Powering Businesses With Intelligent Technology",
    sub: "AI chatbots, custom web development, Google Business Profile, networking infrastructure, and IT support — complete technology solutions for Nigerian businesses ready to grow.",
  },
  {
    image: slide5,
    badge: "Trusted Technology Partner",
    headline: "Your Long-Term Technology Partner in Nigeria & Beyond",
    sub: "CAC registered (9255386). Serving individuals, homes, businesses, hotels, schools, and organisations across Nigeria and worldwide with premium, professional technology solutions.",
  },
];

const WA_ICON = (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const s = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-label="Hero — AI-Tech Haven International"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
          {/* Rich gradient overlay: dark at bottom, slight tint top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
          {/* Subtle side vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
        </div>
      ))}

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 pb-24 pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            {s.badge}
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {s.headline}
          </h1>

          {/* Sub */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {s.sub}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-red-500"
              aria-label="Recover my account via WhatsApp"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Recover My Account
            </a>
            <Link
              to="/smart-living"
              className="flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-3.5 text-sm font-bold text-black shadow-lg transition-all hover:scale-105 hover:bg-yellow-400"
            >
              <Zap className="h-4 w-4" aria-hidden="true" />
              Explore Smart Living
            </Link>
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:scale-105 hover:bg-white/20"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Consultation
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition-all hover:scale-105 hover:brightness-110"
              aria-label="Chat on WhatsApp"
            >
              {WA_ICON}
              WhatsApp Now
            </a>
          </div>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["CAC Registered", "50% Deposit Policy", "Remote & Onsite", "Nigeria & Worldwide"].map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur transition hover:bg-black/60"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-2.5 text-white backdrop-blur transition hover:bg-black/60"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-yellow-400" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
