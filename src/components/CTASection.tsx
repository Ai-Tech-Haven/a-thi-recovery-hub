import { Zap, Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";

const WA_LINK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27d%20like%20to%20upgrade%20my%20technology";
const WA_BOOK =
  "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20would%20like%20to%20book%20a%20consultation";

const WA_ICON = (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CTASection = () => (
  <section
    className="relative overflow-hidden py-28"
    style={{
      background:
        "linear-gradient(135deg, hsl(222 47% 9%) 0%, hsl(222 60% 13%) 50%, hsl(222 47% 9%) 100%)",
    }}
    aria-label="Call to action — ready to upgrade your technology"
  >
    {/* Decorative glows */}
    <div
      className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-yellow-400/8 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
      aria-hidden="true"
    />

    {/* Top accent line */}
    <div
      className="absolute left-0 top-0 h-0.5 w-full"
      style={{ background: "linear-gradient(90deg, transparent, #f5c518, #0ea5e9, transparent)" }}
      aria-hidden="true"
    />

    <div className="container relative z-10 mx-auto px-4 text-center">
      <ScrollReveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400">
          <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Get Started Today
        </span>

        <h2 className="mt-6 font-heading text-3xl font-bold text-white md:text-5xl">
          Ready To Upgrade<br />
          <span className="text-yellow-400">Your Technology?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          Whether you need professional account recovery, advanced data recovery, computer repair, AI automation, or smart home installation, AI-Tech Haven is ready to help. Let's build your technology future together.
        </p>

        {/* 3 CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-sm font-bold text-white shadow-lg shadow-green-900/30 transition-all hover:scale-105 hover:brightness-110"
          >
            {WA_ICON}
            Chat on WhatsApp
          </a>
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-8 py-4 text-sm font-bold text-yellow-400 transition-all hover:scale-105 hover:bg-yellow-400/20"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Book Consultation
          </a>
          <Link
            to="/services"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-white/10"
          >
            Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/40">
          ✓ Free consultation &nbsp; ✓ 50% deposit policy &nbsp; ✓ Remote & onsite support &nbsp; ✓ Nigeria & worldwide
        </p>
      </ScrollReveal>
    </div>

    {/* Bottom accent line */}
    <div
      className="absolute bottom-0 left-0 h-0.5 w-full"
      style={{ background: "linear-gradient(90deg, transparent, #0ea5e9, #f5c518, transparent)" }}
      aria-hidden="true"
    />
  </section>
);

export default CTASection;
