// NET

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Wifi, Router, Network, Building2, Home, Tv, Camera, Lightbulb, Zap, CheckCircle, Phone, Settings, BarChart2, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const WA = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20need%20Networking%20%26%20Infrastructure%20help";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ai-techhaven.site/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ai-techhaven.site/services" },
    { "@type": "ListItem", position: 3, name: "Networking & Infrastructure Solutions", item: "https://ai-techhaven.site/services/networking-infrastructure" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Networking & Infrastructure Solutions",
  description: "Professional Wi-Fi optimization, network installation, router configuration, and business networking solutions for homes, offices, hotels, and smart environments across Nigeria.",
  provider: {
    "@type": "LocalBusiness",
    name: "AI-Tech Haven International",
    url: "https://ai-techhaven.site",
    telephone: "+2348088851368",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2c Emenike Street, Mile One, Diobu",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG",
    },
  },
  areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Country", name: "Africa" }],
};

const problems = [
  "Weak Wi-Fi coverage and dead zones throughout your space",
  "Slow internet speeds despite a fast broadband connection",
  "Poor network design limiting device performance",
  "Frequent device connection issues and dropouts",
  "Unstable business networks affecting productivity",
];

const solutions = [
  { icon: BarChart2, text: "Network Assessment" },
  { icon: Wifi, text: "Wi-Fi Optimization" },
  { icon: Router, text: "Router Configuration" },
  { icon: Building2, text: "Office Networking" },
  { icon: Tv, text: "Smart Device Connectivity" },
  { icon: Network, text: "Network Expansion Planning" },
];

const packages = [
  {
    icon: Home,
    title: "Home Network Solutions",
    badge: "",
    items: ["Wi-Fi optimization and dead zone elimination", "Router setup and security configuration", "Smart device connectivity (TVs, cameras, speakers)", "Coverage improvement and signal extension"],
    bg: "bg-card border-border",
    accent: "text-orange-500",
    btnClass: "bg-orange-500 hover:bg-orange-400 text-white",
  },
  {
    icon: Building2,
    title: "Business Network Solutions",
    badge: "Most Requested",
    items: ["Professional network planning for your space", "Router and managed switch configuration", "Structured cabling and patch panel setup", "Connectivity improvement for offices, hotels, schools"],
    bg: "bg-orange-500 border-orange-400",
    accent: "text-white",
    btnClass: "bg-white hover:bg-gray-100 text-orange-600 font-bold",
  },
  {
    icon: Zap,
    title: "Smart Technology Networks",
    badge: "",
    items: ["Network design for smart homes and offices", "Smart TV, camera, and automation device connectivity", "Hospitality-grade Wi-Fi for guest environments", "Low-latency networks for smart lighting and automation"],
    bg: "bg-card border-border",
    accent: "text-orange-500",
    btnClass: "bg-orange-500 hover:bg-orange-400 text-white",
  },
  {
    icon: Settings,
    title: "Infrastructure Consulting",
    badge: "",
    items: ["Independent network recommendations", "Technology planning for new builds and offices", "Upgrade guidance and phased implementation plans", "Vendor-neutral advice on routers, switches, and access points"],
    bg: "bg-card border-border",
    accent: "text-orange-500",
    btnClass: "bg-orange-500 hover:bg-orange-400 text-white",
  },
];

const whyUs = [
  { icon: CheckCircle, text: "Reliable network solutions built to last" },
  { icon: Zap, text: "Smart technology integration expertise" },
  { icon: Building2, text: "Business-ready infrastructure design" },
  { icon: Phone, text: "Professional consultation and ongoing support" },
  { icon: Shield, text: "Secure, protected network environments" },
  { icon: Network, text: "Scalable solutions that grow with your needs" },
];

const WA_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Networking = () => (
  <>
    <SEOHead
      title="Networking & Infrastructure Services | Wi-Fi Optimization, Business Networking | AI-Tech Haven"
      description="Professional Wi-Fi optimization, network installation, router configuration and business networking solutions for homes, offices, hotels and smart environments across Nigeria."
      canonical="https://ai-techhaven.site/services/networking-infrastructure"
      keywords="network installation Nigeria, Wi-Fi optimization Nigeria, business networking Port Harcourt, IT infrastructure Nigeria, router configuration, smart home networking, office network setup Nigeria"
      schema={serviceSchema}
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
    <Header />
    <main className="overflow-x-hidden pt-16">

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950" />
        {/* Network topology visual */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          {/* Central router node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-2xl border-2 border-orange-400/50 bg-orange-500/20 flex items-center justify-center">
            <Wifi className="h-8 w-8 text-orange-400/60" />
          </div>
          {/* Connection lines */}
          {[
            "absolute left-1/4 top-1/4 h-10 w-10 rounded-xl border border-orange-400/30 bg-orange-400/10 flex items-center justify-center",
            "absolute right-1/4 top-1/4 h-10 w-10 rounded-xl border border-blue-400/30 bg-blue-400/10 flex items-center justify-center",
            "absolute left-1/4 bottom-1/4 h-10 w-10 rounded-xl border border-orange-400/30 bg-orange-400/10 flex items-center justify-center",
            "absolute right-1/4 bottom-1/4 h-10 w-10 rounded-xl border border-green-400/30 bg-green-400/10 flex items-center justify-center",
            "absolute left-[10%] top-1/2 h-8 w-8 rounded-lg border border-orange-400/20 bg-orange-400/5 flex items-center justify-center",
            "absolute right-[10%] top-1/2 h-8 w-8 rounded-lg border border-blue-400/20 bg-blue-400/5 flex items-center justify-center",
          ].map((cls, i) => (
            <div key={i} className={cls}>
              <Network className="h-4 w-4 text-white/40" />
            </div>
          ))}
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/8 blur-3xl" />
          <div className="absolute -right-20 top-1/4 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-300">
              <Wifi className="h-3 w-3" /> Professional Network Solutions
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Build A Strong
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Technology Foundation.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Every smart home, office, and business depends on reliable connectivity. AI-Tech Haven designs, installs, and optimizes networking solutions that provide stable, secure, and scalable technology infrastructure.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:bg-orange-400">
                <Wifi className="h-5 w-5" /> Get Network Assessment
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-orange-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-white/40">
              {["Homes", "Offices", "Hotels", "Schools", "Smart Environments"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-orange-400" /> {b}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PROBLEMS ===== */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
              Common Problems <span className="text-orange-500">We Solve</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-10 max-w-3xl grid gap-3 sm:grid-cols-2">
            {problems.map((p, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <Network className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                    <span className="text-sm text-foreground">{p}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR SOLUTIONS ===== */}
      <section className="bg-orange-500 py-14">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-2xl font-bold text-white md:text-3xl">
              Our Solutions
            </h2>
            <p className="mt-2 text-center text-white/80 text-sm">AI-Tech Haven provides end-to-end networking services.</p>
          </ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {solutions.map((s, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-3 backdrop-blur-sm border border-white/20">
                    <CheckCircle className="h-4 w-4 text-white shrink-0" />
                    <s.icon className="h-4 w-4 text-white/80 shrink-0" />
                    <span className="text-sm font-semibold text-white">{s.text}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-orange-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-100">
              <span className="text-green-500">{WA_ICON}</span> Chat with AI-Tech Haven on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICE PACKAGES ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Networking <span className="text-orange-500">Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Tailored solutions for every environment — from a single home to a multi-floor office building.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <div key={pkg.title}>
                <ScrollReveal delay={i * 0.09}>
                  <div className={`relative flex h-full flex-col rounded-2xl border-2 p-6 ${pkg.bg}`}>
                    {pkg.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {pkg.badge}
                      </span>
                    )}
                    <div className={`mb-4 inline-flex rounded-xl bg-orange-500/10 p-3`}>
                      <pkg.icon className={`h-6 w-6 ${pkg.accent}`} />
                    </div>
                    <h3 className={`font-heading text-base font-bold ${pkg.accent === "text-white" ? "text-white" : "text-foreground"}`}>
                      {pkg.title}
                    </h3>
                    <ul className="mt-4 flex-1 space-y-2">
                      {pkg.items.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-xs ${pkg.accent === "text-white" ? "text-white/80" : "text-muted-foreground"}`}>
                          <CheckCircle className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${pkg.accent}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className={`mt-6 block rounded-xl px-4 py-2.5 text-center text-sm font-bold transition-all hover:scale-105 ${pkg.btnClass}`}>
                      Get Started
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY AI-TECH HAVEN ===== */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Why Choose <span className="text-orange-400">AI-Tech Haven?</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <w.icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                    <span className="text-sm text-white/80">{w.text}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-5xl">
              Connect Everything
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Better.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Build a secure and reliable technology foundation with AI-Tech Haven. From a single router to a full enterprise network — we do it right.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:bg-orange-400">
                <Wifi className="h-5 w-5" /> Book Network Assessment
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-10 py-4 text-lg font-semibold text-foreground transition-all hover:border-orange-400/50">
                <span className="text-green-500">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <Link to="/services" className="text-sm text-orange-500 hover:underline">
                ← Back to All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Networking;
