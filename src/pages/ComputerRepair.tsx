// CR

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Monitor, Laptop, Settings, HardDrive, Shield, Wifi,
  Wrench, CheckCircle, AlertTriangle, Zap, Users,
  Building2, RefreshCw, Download, Cpu
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const WA = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20need%20Computer%20Repair%20%26%20IT%20Support";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ai-techhaven.site/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ai-techhaven.site/services" },
    { "@type": "ListItem", position: 3, name: "Computer Repair & IT Support", item: "https://ai-techhaven.site/services/computer-repair-support" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Computer Repair & IT Support Services",
  description: "Professional computer repair, laptop maintenance, formatting, software installation, optimization and IT support services for individuals, businesses, and organizations across Nigeria.",
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
  "Slow computers and laptops affecting daily work",
  "Frequent system errors, crashes, and freezing",
  "Operating system problems and boot failures",
  "Software installation and compatibility issues",
  "Driver problems causing hardware malfunction",
  "Virus and malware infections",
  "Computer formatting and fresh setup needs",
  "Hardware performance issues and upgrade needs",
  "Startup failures and system recovery requirements",
  "General technology support and technical challenges",
];

const services = [
  {
    icon: Monitor,
    title: "Computer & Laptop Diagnostics",
    badge: "",
    items: [
      "Desktop computers, laptops and workstations",
      "Hardware inspection and performance testing",
      "Problem identification and root cause analysis",
      "Detailed repair recommendations",
    ],
  },
  {
    icon: RefreshCw,
    title: "OS Installation & Formatting",
    badge: "Most Requested",
    items: [
      "Windows installation and system formatting",
      "Operating system upgrades",
      "Driver installation and system configuration",
      "User account setup and software restoration",
    ],
  },
  {
    icon: Zap,
    title: "Computer Optimization",
    badge: "",
    items: [
      "System cleanup and junk file removal",
      "Startup optimization for faster boot times",
      "Software management and conflict resolution",
      "Storage and performance tuning",
    ],
  },
  {
    icon: HardDrive,
    title: "Hardware Repair & Upgrades",
    badge: "",
    items: [
      "RAM upgrade guidance and installation",
      "SSD and hard drive replacement",
      "Battery replacement guidance",
      "Hardware troubleshooting and component recommendations",
    ],
  },
  {
    icon: Download,
    title: "Software Installation",
    badge: "",
    items: [
      "Office and productivity applications",
      "Business and specialized software",
      "Security and antivirus software",
      "Development tools and utility applications",
    ],
  },
  {
    icon: Shield,
    title: "Virus & Malware Protection",
    badge: "",
    items: [
      "Malware detection and removal",
      "Security software installation and configuration",
      "System protection recommendations",
      "Safe computing guidance and best practices",
    ],
  },
  {
    icon: Wifi,
    title: "Remote & Onsite IT Support",
    badge: "",
    items: [
      "Remote troubleshooting via WhatsApp or AnyDesk",
      "System assistance for individuals and businesses",
      "Technical consultation and advice",
      "Maintenance support for offices and organizations",
    ],
  },
  {
    icon: Building2,
    title: "Business IT Maintenance",
    badge: "",
    items: [
      "Scheduled computer maintenance programs",
      "Software updates and patch management",
      "User support and staff technology assistance",
      "Preventive maintenance and technology recommendations",
    ],
  },
];

const whyUs = [
  { icon: Cpu, text: "Professional technical expertise with proven results" },
  { icon: Monitor, text: "Computer and business technology support specialists" },
  { icon: HardDrive, text: "Hardware and software assistance under one team" },
  { icon: Wifi, text: "Remote and onsite support options available" },
  { icon: CheckCircle, text: "Practical solutions for everyday technology problems" },
  { icon: Users, text: "Trusted by individuals, businesses, and organizations" },
];

const WA_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ComputerRepair = () => (
  <>
    <SEOHead
      title="Computer Repair & IT Support Services | AI-Tech Haven International"
      description="Professional computer repair, laptop maintenance, formatting, software installation, optimization and IT support services for individuals, businesses, and organizations across Nigeria."
      canonical="https://ai-techhaven.site/services/computer-repair-support"
      keywords="computer repair Nigeria, laptop repair Port Harcourt, computer maintenance Nigeria, Windows installation Nigeria, computer formatting, IT support services Nigeria, remote IT support, virus removal Nigeria"
      schema={serviceSchema}
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
    <Header />
    <main className="overflow-x-hidden pt-16">

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950" />
        {/* Tech visual — desk setup scene */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          {/* Monitor frame */}
          <div className="absolute left-1/2 top-[12%] -translate-x-1/2 w-[40%] max-w-[400px]">
            <div className="rounded-xl border-4 border-blue-400/30 bg-slate-900/60 aspect-video flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-4 w-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`h-8 rounded ${i % 2 === 0 ? "bg-blue-500/20" : "bg-slate-700/40"}`} />
                ))}
              </div>
            </div>
            <div className="mx-auto mt-1 h-3 w-10 rounded-b bg-slate-700/50" />
            <div className="mx-auto h-1 w-16 rounded bg-slate-700/50" />
          </div>
          {/* Left panel: diagnostics */}
          <div className="absolute left-[8%] top-[20%] w-44 rounded-xl border border-blue-400/20 bg-slate-900/50 p-3">
            <div className="mb-2 h-1.5 w-16 rounded bg-blue-400/40" />
            <div className="space-y-1.5">
              {[90, 45, 78, 30, 60].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="h-1.5 rounded bg-blue-400/40" style={{ width: `${w}%` }} />
                  <span className="text-[8px] text-blue-300/50">{w}%</span>
                </div>
              ))}
            </div>
          </div>
          {/* Right panel: status */}
          <div className="absolute right-[8%] top-[20%] w-40 rounded-xl border border-green-400/20 bg-slate-900/50 p-3">
            <div className="mb-2 h-1.5 w-14 rounded bg-green-400/40" />
            {["CPU OK", "RAM OK", "HDD OK", "NET OK"].map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 mb-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                <span className="text-[8px] text-green-300/50">{s}</span>
              </div>
            ))}
          </div>
          {/* Glow */}
          <div className="absolute left-1/2 top-1/3 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <Monitor className="h-3 w-3" /> Professional Computer & IT Support
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Professional Computer Repair
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                & IT Support Services
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              When technology fails, productivity stops. AI-Tech Haven International provides professional computer repair, laptop maintenance, software support, system optimization, and IT assistance for individuals, businesses, and organizations.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/45">
              From slow computers and software issues to system failures, we help restore performance and keep your technology working efficiently.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:bg-blue-400">
                <Wrench className="h-5 w-5" /> Get Computer Support
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-blue-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-white/40">
              {["Individuals", "Businesses", "Offices", "Organizations"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-400" /> {b}
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
              Common Problems <span className="text-blue-500">We Solve</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground text-sm">
              Customers come to us with these everyday technology challenges — and we fix them fast.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {problems.map((p, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span className="text-sm text-foreground">{p}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Our Computer Repair &amp; <span className="text-blue-400">Maintenance Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/60 text-sm">
              Every service is designed to restore performance, protect your data, and keep your technology running smoothly.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={s.title}>
                <ScrollReveal delay={i * 0.07}>
                  <div className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${s.badge ? "border-blue-400/40 bg-blue-500/10 scale-[1.02]" : "border-white/10 bg-white/5"}`}>
                    {s.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                        {s.badge}
                      </span>
                    )}
                    <div className="mb-4 inline-flex rounded-xl bg-blue-500/15 p-3">
                      <s.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-white">{s.title}</h3>
                    <ul className="mt-3 flex-1 space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-white/55">
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className="mt-5 block rounded-xl bg-blue-500 px-4 py-2.5 text-center text-xs font-bold text-white transition-all hover:bg-blue-400 hover:scale-105">
                      Get This Service
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section className="bg-blue-500 py-14">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-extrabold text-white md:text-3xl">
              Is Your Computer Slow, Faulty, or Not Performing?
            </h2>
            <p className="mt-2 text-white/80">
              Get professional computer repair and IT support from AI-Tech Haven. Restore your technology. Improve your productivity.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-all hover:scale-105 hover:bg-gray-100">
              <span className="text-green-500">{WA_ICON}</span> Chat with AI-Tech Haven on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose <span className="text-blue-500">AI-Tech Haven?</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-blue-400/30 hover:shadow-md">
                    <div className="inline-flex rounded-lg bg-blue-500/10 p-2">
                      <w.icon className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm text-foreground">{w.text}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-slate-950 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-5xl">
              Restore Your Technology.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Improve Your Productivity.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Whether you need a quick fix, a full system format, or ongoing IT maintenance, AI-Tech Haven is ready to help you get back to work — fast.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-105 hover:bg-blue-400">
                <Wrench className="h-5 w-5" /> Get Computer Support
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-blue-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-8">
              <Link to="/services" className="text-sm text-blue-400 hover:underline">
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

export default ComputerRepair;
