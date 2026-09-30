import { Link } from "react-router-dom";
import { Zap, Tv, Mic2, Lightbulb, Camera, Wifi, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import slide3 from "@/assets/hero-slide-3.jpg";

const features = [
  { icon: Tv, label: "Smart TV Systems", desc: "All brands configured & optimised" },
  { icon: Mic2, label: "Voice Automation", desc: "Google Assistant & Amazon Alexa" },
  { icon: Lightbulb, label: "Smart Lighting", desc: "Ambient, scene-based, motion-activated" },
  { icon: Camera, label: "Connected Security", desc: "Smart cameras & monitoring systems" },
  { icon: Wifi, label: "Smart Connectivity", desc: "Seamless device networking" },
  { icon: Zap, label: "Full Automation", desc: "Homes, offices, hotels & more" },
];

const FeaturedSmartLiving = () => (
  <section
    className="relative overflow-hidden py-28"
    aria-label="Featured Smart Living Solutions"
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={slide3}
        alt="Luxury smart living environment"
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
    </div>

    {/* Decorative yellow accent line */}
    <div
      className="absolute left-0 top-0 h-1 w-full"
      style={{ background: "linear-gradient(90deg, #f5c518, #e6a800, transparent)" }}
      aria-hidden="true"
    />

    <div className="container relative z-10 mx-auto px-4">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left: text */}
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow-400">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Smart Living Solutions
          </span>

          <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Experience the Future<br />
            <span className="text-yellow-400">of Smart Living</span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            We supply, configure, install, optimise, and support intelligent technology solutions including Smart TV systems, voice automation, smart lighting, connected security, and automation for homes, offices, and hotels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/smart-living"
              className="flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-3.5 text-sm font-bold text-black shadow-lg shadow-yellow-500/30 transition-all hover:scale-105 hover:bg-yellow-400"
            >
              Explore Smart Living <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="https://wa.me/2348088851368?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20Smart%20Living%20solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-white/50">
            ✓ Professional installation &nbsp;✓ Ongoing support &nbsp;✓ Homes, offices & hotels
          </p>
        </ScrollReveal>

        {/* Right: feature grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
          {features.map((f, i) => (
            <ScrollReveal key={f.label} delay={i * 0.1}>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/10">
                <div className="mb-3 inline-flex rounded-lg bg-yellow-400/10 p-2.5">
                  <f.icon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <p className="font-heading text-sm font-bold text-white">{f.label}</p>
                <p className="mt-1 text-xs text-white/60">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-0 h-1 w-full"
      style={{ background: "linear-gradient(90deg, transparent, #e6a800, #f5c518)" }}
      aria-hidden="true"
    />
  </section>
);

export default FeaturedSmartLiving;
