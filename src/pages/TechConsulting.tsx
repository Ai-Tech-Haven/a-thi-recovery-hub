import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Brain, Cpu, Server, Network, Bot, Cloud, Wifi, Building2,
  CheckCircle, ChevronDown, Building, BookOpen, Heart, Briefcase,
  Landmark, Rocket, Search, ClipboardList, Lightbulb, ShieldCheck,
  TrendingUp, Star, Globe, ArrowRight, Phone, UserCheck, ShoppingBag, Church
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_BOOK = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27d%20like%20to%20book%20a%20Technology%20Consulting%20session";
const WA_CHAT = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20need%20Technology%20Consulting%20advice";
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Technology Consulting and Systems Architecture",
  "description": "Professional technology consulting, systems architecture, IT infrastructure planning, and digital transformation advisory for businesses across Nigeria and globally.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "AI-TECH HAVEN INTERNATIONAL",
    "url": "https://www.ai-techhaven.site",
    "telephone": "+2348088851368"
  },
  "areaServed": [
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Country", "name": "Africa" },
    { "@type": "City", "name": "Lagos" },
    { "@type": "City", "name": "Abuja" },
    { "@type": "City", "name": "Port Harcourt" }
  ],
  "serviceType": [
    "Technology Consulting",
    "IT Strategy",
    "Systems Architecture",
    "Digital Transformation",
    "IT Infrastructure Planning",
    "Business Automation",
    "Cloud Solutions",
    "Networking Design"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AI-TECH HAVEN INTERNATIONAL",
  "url": "https://www.ai-techhaven.site",
  "telephone": "+2348088851368",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2c Emenike Street Mile One Diobu",
    "addressLocality": "Port Harcourt",
    "addressRegion": "Rivers State",
    "addressCountry": "NG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 4.8396,
    "longitude": 7.0174
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is Technology Consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Professional advisory service where experts help businesses evaluate, select, plan, and implement technology solutions. AI-Tech Haven consultants analyze current systems, identify gaps, and design roadmaps." } },
    { "@type": "Question", "name": "What is Systems Architecture?", "acceptedAnswer": { "@type": "Answer", "text": "High-level design of an organization's technology infrastructure including networks, servers, software, cloud services and how they connect. Ensures reliable, scalable, cost-effective technology." } },
    { "@type": "Question", "name": "Can you help businesses that already have IT staff?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We work alongside existing IT teams as strategic partner and independent advisor for planning, architecture review, vendor selection, and long-term roadmaps." } },
    { "@type": "Question", "name": "Do you work with startups?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We help startups build the right technology foundation from day one, avoiding expensive mistakes and designing systems that scale." } },
    { "@type": "Question", "name": "Can you advise before we purchase equipment or software?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, independent vendor-neutral advice before any purchase, avoiding costly mistakes." } },
    { "@type": "Question", "name": "Can you help with digital transformation?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we guide through digital transformation from automating manual processes to cloud migration and system integration." } },
    { "@type": "Question", "name": "Do you provide ongoing consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, retainer-based ongoing advisory services." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ai-techhaven.site/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://ai-techhaven.site/services" },
    { "@type": "ListItem", "position": 3, "name": "Technology Consulting and Systems Architecture", "item": "https://ai-techhaven.site/technology-consulting" }
  ]
};

const combinedSchema = [serviceSchema, localBusinessSchema, faqSchema, breadcrumbSchema];

const faqs = [
  { q: "What is Technology Consulting?", a: "Professional advisory service where experts help businesses evaluate, select, plan, and implement technology solutions. AI-Tech Haven consultants analyze current systems, identify gaps, and design roadmaps." },
  { q: "What is Systems Architecture?", a: "High-level design of an organization's technology infrastructure including networks, servers, software, cloud services and how they connect. Ensures reliable, scalable, cost-effective technology." },
  { q: "Can you help businesses that already have IT staff?", a: "Yes. We work alongside existing IT teams as strategic partner and independent advisor for planning, architecture review, vendor selection, and long-term roadmaps." },
  { q: "Do you work with startups?", a: "Yes. We help startups build the right technology foundation from day one, avoiding expensive mistakes and designing systems that scale." },
  { q: "Can you advise before we purchase equipment or software?", a: "Yes, independent vendor-neutral advice before any purchase, avoiding costly mistakes." },
  { q: "Can you help with digital transformation?", a: "Yes, we guide through digital transformation from automating manual processes to cloud migration and system integration." },
  { q: "Do you provide ongoing consulting?", a: "Yes, retainer-based ongoing advisory services." },
];

const TechConsulting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Technology Consulting and Systems Architecture Nigeria | IT Strategy and Advisory | AI-Tech Haven International"
        description="Need a trusted private IT consultant? AI-Tech Haven provides professional technology consulting, systems architecture, and strategic IT advisory services for businesses, startups, hotels, schools, and organizations across Nigeria, Africa and globally."
        canonical="https://www.ai-techhaven.site/technology-consulting"
        keywords="Technology Consulting Nigeria, IT Strategy Nigeria, Systems Architecture, Digital Transformation Nigeria, Business Technology Consultant, IT Infrastructure Planning, Technology Advisory Nigeria, Business Automation, Private IT Consultant Nigeria, IT Consulting Port Harcourt, Technology Roadmap Nigeria"
        schema={combinedSchema}
      />
      <Header />
      <main className="overflow-x-hidden pt-16">

        {/* ===== SECTION 1: HERO ===== */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(200 60% 15%) 50%, hsl(222 47% 11%) 100%)' }}>
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <ScrollReveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <Globe className="h-3 w-3" /> Trusted Technology Partner - Nigeria and Africa
              </span>
              <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Design Smarter Technology.<br />Build Stronger Businesses.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                AI-Tech Haven helps businesses, startups, hotels, schools, and organizations plan, design, and implement reliable technology solutions that support growth, efficiency, security, and innovation.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
                Need a trusted private IT consultant? AI-Tech Haven provides professional technology consulting, systems architecture, and strategic IT advisory services for individuals, businesses, and organizations.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={WA_BOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:scale-105 hover:bg-green-400">
                  Book a Technology Consultation
                </a>
                <a href={WA_CHAT} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white/5">
                  Chat on WhatsApp
                </a>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-white/40">
                {["10+ Industries Served", "Nigeria and Africa", "Remote and On-site"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-primary" /> {b}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== SECTION 2: CHALLENGES ===== */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Challenges We Solve</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Businesses often struggle without expert technology guidance</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Technology decisions without expert guidance",
                "Disconnected and siloed systems",
                "Poor scalability as businesses grow",
                "Outdated IT infrastructure",
                "Slow digital transformation",
                "Weak cybersecurity practices",
                "Inefficient manual workflows",
                "Lack of automation",
                "Expensive technology mistakes",
              ].map((c, i) => (
                <ScrollReveal key={c} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <p className="text-sm text-foreground">{c}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: SERVICES ===== */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Our Consulting Services</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Strategic technology expertise across every layer of your business</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                { icon: Brain, color: "text-blue-500 bg-blue-500/10", title: "Technology Strategy", desc: "Align your technology investments with long-term business goals" },
                { icon: TrendingUp, color: "text-purple-500 bg-purple-500/10", title: "Digital Transformation Planning", desc: "Guide your organization from legacy systems to modern digital workflows" },
                { icon: Cpu, color: "text-teal-500 bg-teal-500/10", title: "Systems Architecture", desc: "Design scalable, reliable infrastructure blueprints for your organization" },
                { icon: Server, color: "text-orange-500 bg-orange-500/10", title: "IT Infrastructure Planning", desc: "Plan networks, servers, storage, and cloud environments built for growth" },
                { icon: Bot, color: "text-green-500 bg-green-500/10", title: "Business Process Automation", desc: "Identify and automate repetitive processes to improve speed and reduce costs" },
                { icon: Cloud, color: "text-sky-500 bg-sky-500/10", title: "Cloud and Collaboration Solutions", desc: "Migrate to cloud platforms and enable seamless team collaboration" },
                { icon: Network, color: "text-indigo-500 bg-indigo-500/10", title: "Networking Design", desc: "Design secure, high-performance networks for offices and campuses" },
                { icon: Wifi, color: "text-amber-500 bg-amber-500/10", title: "Smart Office Planning", desc: "Transform your workplace with intelligent connected technology" },
                { icon: Rocket, color: "text-rose-500 bg-rose-500/10", title: "Technology Roadmaps", desc: "Create clear multi-year technology plans aligned with your growth strategy" },
                { icon: ShieldCheck, color: "text-emerald-500 bg-emerald-500/10", title: "Vendor and Technology Advisory", desc: "Get independent, unbiased recommendations before any technology purchase" },
              ].map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.06}>
                  <div className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <div className={`mb-4 inline-flex rounded-xl p-3 ${s.color}`}>
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: OUTCOMES ===== */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(200 60% 15%) 50%, hsl(222 47% 11%) 100%)' }}>
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">What We Help You Achieve</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-white/70">Measurable outcomes from strategic technology planning</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                "Reduce operational inefficiencies",
                "Choose the right technology investments",
                "Improve business productivity",
                "Plan scalable infrastructure",
                "Integrate systems effectively",
                "Prepare for future growth",
                "Enable secure and reliable operations",
              ].map((o, i) => (
                <ScrollReveal key={o} delay={i * 0.06}>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-6">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-white">{o}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: INDUSTRIES ===== */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Industries We Serve</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">Trusted technology consulting across every sector</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { icon: Building2, label: "Small and Medium Businesses" },
                { icon: Landmark, label: "Corporate Organizations" },
                { icon: Star, label: "Hotels and Hospitality" },
                { icon: BookOpen, label: "Schools and Educational Institutions" },
                { icon: Heart, label: "Healthcare Providers" },
                { icon: Church, label: "Churches and Faith-Based Organizations" },
                { icon: ShoppingBag, label: "Retail Businesses" },
                { icon: Briefcase, label: "Professional Firms" },
                { icon: Globe, label: "Government Agencies" },
                { icon: Rocket, label: "Technology Startups" },
              ].map((ind, i) => (
                <ScrollReveal key={ind.label} delay={i * 0.05}>
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition hover:border-primary/50">
                    <ind.icon className="h-8 w-8 text-primary" />
                    <p className="text-xs font-medium text-foreground">{ind.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: PROCESS ===== */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Our Consulting Process</h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">A structured approach to delivering technology results</p>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { num: "01", title: "Discovery and Business Assessment", desc: "We learn your business, goals, and current technology landscape" },
                { num: "02", title: "Technology Audit", desc: "Evaluate existing systems, identify gaps, risks, and opportunities" },
                { num: "03", title: "Strategy and Solution Design", desc: "Design a tailored technology strategy and architecture blueprint" },
                { num: "04", title: "Implementation Roadmap", desc: "Deliver a clear, prioritized action plan with timelines and budgets" },
                { num: "05", title: "Ongoing Advisory and Optimization", desc: "Provide continuous guidance as your technology evolves" },
              ].map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.08}>
                  <div className="rounded-xl border border-border bg-card p-6 text-center">
                    <span className="font-heading text-4xl font-extrabold text-primary/30">{step.num}</span>
                    <h3 className="mt-2 font-heading text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: WHY CHOOSE ===== */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Why Choose AI-Tech Haven</h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <ul className="space-y-4">
                  {[
                    "Professional technology expertise with business focus",
                    "Business-focused recommendations, not just technical ones",
                    "Scalable technology planning for any stage of growth",
                    "Independent vendor-neutral advice",
                    "Future-ready solutions designed to last",
                    "Long-term partnership, not one-time engagements",
                  ].map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground">Your Trusted Technology Partner</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    AI-Tech Haven works with businesses, startups, hotels, educational institutions, and professionals across Nigeria and Africa to build technology foundations that last. As your private IT consultant and strategic advisor, we are with you at every stage.
                  </p>
                  <a href={WA_BOOK} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105">
                    Start Your Technology Journey
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: FAQ ===== */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
            </ScrollReveal>
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border border-border bg-card overflow-hidden">
                    <button
                      className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-muted/50"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>