// TC

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Brain, BarChart2, Network, Server, Zap, Cloud, Wifi, Monitor,
  Map, CheckCircle, ArrowRight, Users, Building2, Hotel,
  GraduationCap, HeartPulse, Church, ShoppingCart, Briefcase,
  Landmark, Rocket, AlertTriangle, BookOpen, Settings
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const WA = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27d%20like%20a%20Technology%20Consulting%20session";

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ai-techhaven.site/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://ai-techhaven.site/services" },
    { "@type": "ListItem", position: 3, name: "Technology Consulting & Systems Architecture", item: "https://ai-techhaven.site/services/technology-consulting" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI-Tech Haven International",
  url: "https://ai-techhaven.site",
  telephone: "+2348088851368",
  email: "aitechhaveninternational@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2c Emenike Street, Mile One, Diobu",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  areaServed: [{ "@type": "Country", name: "Nigeria" }, { "@type": "Country", name: "Africa" }],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Technology Consulting?", acceptedAnswer: { "@type": "Answer", text: "Technology consulting is the practice of advising businesses on how to use technology to meet their goals. At AI-Tech Haven, we assess your current systems, understand your business objectives, and design tailored technology strategies that drive growth, efficiency, and security." } },
    { "@type": "Question", name: "What is Systems Architecture?", acceptedAnswer: { "@type": "Answer", text: "Systems architecture refers to the design of your overall technology infrastructure — how your hardware, software, networks, and data systems connect and work together. We design scalable, reliable architectures that align with your business size and future growth." } },
    { "@type": "Question", name: "Can you help businesses that already have IT staff?", acceptedAnswer: { "@type": "Answer", text: "Yes. We complement your existing IT team by providing strategic direction, independent technology assessments, and expert advisory on major decisions like infrastructure upgrades, cloud migration, or digital transformation." } },
    { "@type": "Question", name: "Do you work with startups?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We help startups build the right technology foundation from day one — avoiding costly mistakes and ensuring your systems are ready to scale as your business grows." } },
    { "@type": "Question", name: "Can you advise before we purchase equipment?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide vendor-neutral technology advisory before any purchase so you invest in the right solutions for your specific needs and budget." } },
    { "@type": "Question", name: "Can you help with digital transformation?", acceptedAnswer: { "@type": "Answer", text: "Yes. Digital transformation is one of our core specialties. We help organizations transition from manual or outdated processes to modern, automated, and cloud-enabled workflows that improve efficiency and competitiveness." } },
    { "@type": "Question", name: "Do you provide ongoing consulting?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer monthly and quarterly advisory retainer packages so your business has a trusted technology partner available for guidance, reviews, and optimization at every stage of growth." } },
  ],
};

const consultingServices = [
  { icon: Brain, title: "Technology Strategy", desc: "Long-term IT strategy aligned with your business goals, growth plans, and competitive landscape." },
  { icon: Rocket, title: "Digital Transformation", desc: "End-to-end planning to modernize your operations, automate processes, and move your business into the digital era." },
  { icon: Server, title: "Systems Architecture", desc: "Scalable, reliable technology infrastructure design — hardware, software, networks, and data systems built to last." },
  { icon: Network, title: "IT Infrastructure Planning", desc: "Professional assessment and design of your physical and cloud IT infrastructure for reliability, security, and performance." },
  { icon: Zap, title: "Business Process Automation", desc: "Identify and automate repetitive workflows to reduce costs, eliminate errors, and free your team for high-value work." },
  { icon: Cloud, title: "Cloud & Collaboration", desc: "Advisory on cloud platforms, remote work infrastructure, and collaboration tools tailored to your team size and budget." },
  { icon: Wifi, title: "Networking Design", desc: "Structured cabling, Wi-Fi architecture, and LAN/WAN design for offices, hotels, schools, and large facilities." },
  { icon: Monitor, title: "Smart Office Planning", desc: "Design intelligent, connected office environments with smart displays, automation, and unified communication systems." },
  { icon: Map, title: "Technology Roadmaps", desc: "Phased, budget-aware technology investment plans that guide your organization from where you are to where you want to be." },
  { icon: BookOpen, title: "Vendor & Tech Advisory", desc: "Independent, vendor-neutral recommendations so you buy the right tools — not just the most expensive or heavily marketed ones." },
];

const challenges = [
  "Technology decisions without expert guidance",
  "Disconnected and siloed systems",
  "Poor scalability as the business grows",
  "Outdated and unreliable IT infrastructure",
  "Slow or stalled digital transformation",
  "Weak cybersecurity practices and exposure",
  "Inefficient workflows consuming time and money",
  "Lack of automation and process optimization",
  "Expensive technology mistakes from uninformed purchasing",
];

const outcomes = [
  { icon: BarChart2, text: "Reduce operational inefficiencies and cut IT waste" },
  { icon: CheckCircle, text: "Choose the right technology investments with confidence" },
  { icon: Zap, text: "Improve business productivity through smart automation" },
  { icon: Server, text: "Plan scalable infrastructure that grows with your business" },
  { icon: Network, text: "Integrate systems effectively for seamless data flow" },
  { icon: Rocket, text: "Prepare your organization for sustainable future growth" },
  { icon: Settings, text: "Enable secure, reliable, and resilient operations" },
];

const industries = [
  { icon: Briefcase, name: "Small & Medium Businesses", desc: "Smart technology planning without enterprise-level budgets." },
  { icon: Building2, name: "Corporate Organizations", desc: "Enterprise IT strategy, systems integration, and digital transformation." },
  { icon: Hotel, name: "Hotels & Hospitality", desc: "Guest experience technology, smart rooms, and hospitality systems." },
  { icon: GraduationCap, name: "Schools & Institutions", desc: "E-learning infrastructure, school management systems, and smart classrooms." },
  { icon: HeartPulse, name: "Healthcare Providers", desc: "Secure, compliant health IT systems and patient data management." },
  { icon: Church, name: "Churches & Faith Organizations", desc: "AV systems, live streaming, and digital ministry infrastructure." },
  { icon: ShoppingCart, name: "Retail Businesses", desc: "POS systems, inventory management, and e-commerce technology." },
  { icon: Users, name: "Professional Firms", desc: "Law firms, accounting practices, and consultancy technology solutions." },
  { icon: Landmark, name: "Government Agencies", desc: "Public sector IT modernization, e-governance, and digital services." },
  { icon: Rocket, name: "Technology Startups", desc: "Lean, scalable tech foundations built for rapid growth and investor readiness." },
];

const steps = [
  { num: "01", title: "Discovery & Business Assessment", desc: "We begin by deeply understanding your business — goals, challenges, existing systems, team size, and technology budget." },
  { num: "02", title: "Technology Audit", desc: "We assess your current IT infrastructure, software stack, processes, and security posture to identify gaps and opportunities." },
  { num: "03", title: "Strategy & Solution Design", desc: "We design a tailored technology strategy and architecture blueprint aligned with your specific business context." },
  { num: "04", title: "Implementation Roadmap", desc: "We create a phased, prioritized, and budget-conscious implementation plan — so you know exactly what to do and when." },
  { num: "05", title: "Ongoing Advisory & Optimization", desc: "We stay with you as a trusted partner — reviewing progress, adapting to changes, and continuously optimizing your technology investments." },
];

const whyUs = [
  "Professional technology expertise and proven methodology",
  "Business-focused recommendations — not just technical jargon",
  "Scalable technology planning that grows with your organization",
  "Independent, vendor-neutral advice — we work for you, not vendors",
  "Future-ready solutions that anticipate tomorrow's challenges",
  "Long-term partnership and ongoing advisory support",
];

const WA_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TechnologyConsulting = () => (
  <>
    <SEOHead
      title="Technology Consulting & Systems Architecture Nigeria | IT Strategy, Digital Transformation | AI-Tech Haven International"
      description="Professional technology consulting, systems architecture, and IT strategy advisory for businesses, startups, hotels, schools, and organizations across Nigeria, Africa, and worldwide. Need a private IT consultant? AI-Tech Haven delivers expert technology planning and long-term advisory."
      canonical="https://ai-techhaven.site/services/technology-consulting"
      keywords="technology consulting Nigeria, IT strategy Nigeria, systems architecture Nigeria, digital transformation Nigeria, business technology consultant, IT infrastructure planning, technology advisory Nigeria, business automation, private IT consultant Nigeria"
      schema={localBusiness}
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
    <Header />
    <main className="overflow-x-hidden pt-16">

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden bg-slate-950">
        {/* Executive office scene - layered CSS */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
        {/* Dashboard panels - background detail */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
          {/* Left panel: networking diagram */}
          <div className="absolute left-4 top-[15%] w-52 rounded-xl border border-blue-500/30 bg-slate-900/60 p-3 backdrop-blur-sm">
            <div className="mb-2 h-2 w-20 rounded bg-blue-400/40" />
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`h-6 rounded ${i % 3 === 0 ? "bg-blue-500/30" : "bg-slate-700/50"}`} />
              ))}
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1 w-full rounded bg-blue-400/20" />
              <div className="h-1 w-3/4 rounded bg-blue-400/15" />
            </div>
          </div>
          {/* Right panel: cloud infra */}
          <div className="absolute right-4 top-[20%] w-48 rounded-xl border border-amber-400/20 bg-slate-900/60 p-3 backdrop-blur-sm">
            <div className="mb-2 h-2 w-16 rounded bg-amber-400/40" />
            <div className="space-y-1.5">
              {[80, 55, 92, 40, 70].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`h-1.5 rounded bg-amber-400/40`} style={{ width: `${w}%` }} />
                  <span className="text-[8px] text-amber-400/50">{w}%</span>
                </div>
              ))}
            </div>
          </div>
          {/* Center: large dashboard */}
          <div className="absolute left-1/2 top-[8%] w-[45%] -translate-x-1/2 rounded-2xl border border-blue-400/20 bg-slate-900/50 p-4 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400/60" />
              <div className="h-1.5 w-24 rounded bg-slate-600/60" />
              <div className="ml-auto h-1.5 w-12 rounded bg-blue-400/30" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`h-10 rounded-lg ${i % 2 === 0 ? "bg-blue-500/15" : "bg-slate-700/30"}`} />
              ))}
            </div>
          </div>
          {/* Bottom collaboration bar */}
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 w-10 rounded-full border border-blue-400/20 bg-slate-800/50" />
            ))}
          </div>
          {/* Glow accents */}
          <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-amber-400/8 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <Brain className="h-3 w-3" /> Strategic Technology Advisory
            </span>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Design Smarter Technology.
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                Build Stronger Businesses.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              AI-Tech Haven helps businesses, startups, hotels, schools, and organizations plan, design, and implement reliable technology solutions that support growth, efficiency, security, and innovation.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/40 italic">
              Need a trusted private IT consultant? AI-Tech Haven provides professional technology consulting, systems architecture, and strategic IT advisory services for individuals, businesses, and organizations.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-amber-400/30 transition-all hover:scale-105 hover:bg-amber-300">
                <Brain className="h-5 w-5" /> Book a Technology Consultation
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-amber-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-white/35">
              {["Nigeria", "Africa", "Global"].map((m) => (
                <span key={m} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-amber-400" /> {m}
                </span>
              ))}
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-amber-400" /> Vendor-Neutral Advisory
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CHALLENGES ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Is Your Business Facing <span className="text-amber-500">These Challenges?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Most businesses don't fail from lack of ambition — they struggle from technology decisions made without expert guidance.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((c, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-sm text-foreground">{c}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm font-medium text-primary">AI-Tech Haven solves all of these — and more.</p>
          </div>
        </div>
      </section>

      {/* ===== CONSULTING SERVICES ===== */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Our <span className="text-amber-400">Consulting Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
              From strategy to implementation — every technology discipline your business needs under one advisory partnership.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {consultingServices.map((s, i) => (
              <div key={s.title}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/8">
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-3 shadow-md">
                      <s.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">{s.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUTCOMES ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              What We Help You <span className="text-amber-500">Achieve</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Our consulting doesn't just produce reports — it delivers measurable results for your business.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {outcomes.map((o, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-amber-400/30 hover:shadow-md">
                    <div className="inline-flex rounded-lg bg-amber-400/10 p-2">
                      <o.icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{o.text}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section className="bg-amber-400 py-14">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-extrabold text-black md:text-3xl">
              Ready to Make Better Technology Decisions?
            </h2>
            <p className="mt-2 text-black/70">Book a free initial consultation with AI-Tech Haven today.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 font-bold text-amber-400 shadow-lg transition-all hover:scale-105 hover:bg-gray-900">
              <span className="text-green-400">{WA_ICON}</span> Chat with AI-Tech Haven on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Industries We <span className="text-amber-500">Serve</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              We have worked with organizations across diverse sectors — each with unique technology challenges we understand deeply.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((ind, i) => (
              <div key={ind.name}>
                <ScrollReveal delay={i * 0.05}>
                  <div className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-md">
                    <div className="mx-auto mb-3 inline-flex rounded-xl bg-amber-400/10 p-3">
                      <ind.icon className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="font-heading text-xs font-semibold text-foreground">{ind.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{ind.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Our Consulting <span className="text-amber-400">Process</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
              A structured, proven methodology from first meeting to long-term partnership.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.num}>
                <ScrollReveal delay={i * 0.08}>
                  <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                    <span className="font-heading text-4xl font-extrabold text-amber-400/25">{s.num}</span>
                    <h3 className="mt-2 font-heading text-sm font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">{s.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY AI-TECH HAVEN ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose <span className="text-amber-500">AI-Tech Haven</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-sm text-foreground">{w}</span>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Frequently Asked <span className="text-amber-400">Questions</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-heading text-sm font-semibold text-white">{faq.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{faq.acceptedAnswer.text}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-blue-500/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-5xl">
              Ready to Build a Smarter
              <br />
              <span className="bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                Technology Strategy?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Whether you're launching a startup, upgrading your office, automating a hotel, or planning future technology investments, AI-Tech Haven is ready to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-10 py-4 text-lg font-bold text-black shadow-lg shadow-amber-400/30 transition-all hover:scale-105 hover:bg-amber-300">
                <Brain className="h-5 w-5" /> Book Consultation
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-10 py-4 text-lg font-semibold text-foreground transition-all hover:border-amber-400/50 hover:bg-muted">
                <span className="text-green-500">{WA_ICON}</span> Chat on WhatsApp
              </a>
              <Link to="/services"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-10 py-4 text-lg font-semibold text-foreground transition-all hover:border-amber-400/50 hover:bg-muted">
                <ArrowRight className="h-5 w-5 text-amber-500" /> Explore Business Solutions
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

export default TechnologyConsulting;
