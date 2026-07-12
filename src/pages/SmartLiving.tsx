import { Link } from "react-router-dom";
import { Tv, Lightbulb, Speaker, Camera, Plug, Wifi, Settings, Headphones, Star, CheckCircle, ChevronRight, Zap, Shield, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const WA = "https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%27m%20interested%20in%20Smart%20Living%20installation";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Smart TV and Smart Living Solutions",
  "description": "Professional Smart TV configuration, smart home installation, voice automation, entertainment optimization and intelligent living solutions in Nigeria and worldwide.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "AI-Tech Haven International",
    "url": "https://www.ai-techhaven.site",
    "telephone": "+2348088851368",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2c Emenike Street, Mile One, Diobu",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "NG"
    }
  },
  "areaServed": [
    { "@type": "Country", "name": "Nigeria" },
    { "@type": "Country", "name": "Africa" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can I use my existing Smart TV?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We configure, optimize, and automate any smart TV regardless of brand — Samsung, LG, Sony, Hisense, TCL and more." } },
    { "@type": "Question", "name": "Can you install devices I already purchased?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We install, configure, and optimize any smart device you already own, including TV sticks, smart bulbs, cameras, and speakers." } },
    { "@type": "Question", "name": "Do you provide after-sales support?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. All our installations come with ongoing technical support via WhatsApp, remote assistance, and scheduled maintenance visits." } },
    { "@type": "Question", "name": "Can I upgrade my smart home later?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every AI-Tech Haven installation is designed for future expansion. You can add devices anytime and we will integrate them into your existing setup." } },
    { "@type": "Question", "name": "Do you install for hotels?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in hotel smart room solutions including Smart TV configuration, voice control, ambient lighting, and guest experience systems." } },
    { "@type": "Question", "name": "Can you install for offices?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We design and install smart office solutions including presentation systems, smart lighting, automated climate control, and security cameras." } }
  ]
};

const features = [
  { icon: Tv, title: "Smart TV Configuration", desc: "Professional setup of any smart TV, Android TV, or streaming stick for the best picture, sound, and content experience." },
  { icon: Settings, title: "Android TV Optimization", desc: "Deep system tuning, app management, and performance optimization for Android-powered smart TVs." },
  { icon: Wifi, title: "TV Stick Setup", desc: "ONN, Amazon Fire, Roku, Chromecast — complete configuration, app installation, and content setup." },
  { icon: Zap, title: "Voice Automation", desc: "Google Assistant, Amazon Alexa, and custom voice control for lights, TV, locks, fans, and more." },
  { icon: Lightbulb, title: "Smart Lighting", desc: "Ambient, scene-based, and motion-activated smart bulb systems for mood, security, and energy savings." },
  { icon: Speaker, title: "Smart Speakers", desc: "Multi-room audio, smart speaker placement, and whole-home sound system integration." },
  { icon: Camera, title: "Smart Cameras", desc: "Indoor and outdoor IP cameras with real-time monitoring, cloud recording, and mobile access." },
  { icon: Plug, title: "Smart Plugs", desc: "Automate any appliance with smart plugs, energy monitoring, and scheduled control." },
  { icon: Headphones, title: "Remote Support", desc: "24/7 remote troubleshooting and support via WhatsApp, TeamViewer, and AnyDesk." },
];

const packages = [
  {
    name: "Smart Starter",
    badge: "",
    popular: false,
    items: ["Smart TV Stick (ONN or Amazon Fire)", "1 Smart Colour Bulb", "Full Configuration & Setup", "1-Hour Training Session"],
    bg: "bg-slate-900 border-slate-700",
    highlight: "text-yellow-400",
    btn: "bg-slate-700 hover:bg-slate-600 text-white",
  },
  {
    name: "Smart Living Silver",
    badge: "Most Popular",
    popular: true,
    items: ["32\"-55\" Smart TV", "3 Smart Colour Bulbs", "2 Smart Plugs", "Smart Speaker (Google/Alexa)", "Voice Automation Setup", "Professional Installation", "2-Hour Training"],
    bg: "bg-yellow-400 border-yellow-300",
    highlight: "text-black",
    btn: "bg-black hover:bg-gray-900 text-yellow-400",
  },
  {
    name: "Smart Living Gold",
    badge: "Premium",
    popular: false,
    items: ["55\"-75\" 4K Smart TV", "6+ Smart Colour Bulbs", "Smart Speaker System", "4 Smart Plugs", "Indoor Security Camera", "Full Voice Automation", "Complete Installation", "Scene & Mood Programming", "3-Hour Premium Training"],
    bg: "bg-gray-900 border-yellow-600/40",
    highlight: "text-yellow-400",
    btn: "bg-yellow-400 hover:bg-yellow-300 text-black",
  },
];

const gallery = [
  { room: "Living Room", desc: "4K Smart TV, ambient lighting, surround sound, voice control." },
  { room: "Bedroom", desc: "Sleep scenes, smart speaker alarm, blackout automation." },
  { room: "Office", desc: "Focus lighting, presentation screen, automated climate." },
  { room: "Hotel Room", desc: "Guest-controlled TV, lighting scenes, concierge automation." },
  { room: "Kitchen", desc: "Smart plugs, motion lighting, energy monitoring." },
  { room: "Outdoor", desc: "Security cameras, motion-sensor lighting, gate control." },
];

const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your goals, space, and budget to design the perfect smart living solution." },
  { num: "02", title: "Product Recommendation", desc: "We recommend the best devices for your needs — no overbuying, no underselling." },
  { num: "03", title: "Professional Installation", desc: "Our certified technicians install every device cleanly, safely, and professionally." },
  { num: "04", title: "Configuration & Optimization", desc: "Every device is configured, networked, and tested for peak performance." },
  { num: "05", title: "Training & Ongoing Support", desc: "We train you and your household, then stay available for support whenever you need us." },
];

const comparisons = [
  { before: "Manual light switches", after: "Voice-controlled smart lighting" },
  { before: "Basic cable/satellite TV", after: "Full Smart Entertainment Hub" },
  { before: "Multiple remote controls", after: "One unified smart ecosystem" },
  { before: "Ordinary CCTV cameras", after: "AI smart camera with cloud access" },
  { before: "Manual appliance control", after: "Automated smart plug scheduling" },
  { before: "Fixed mood and ambience", after: "Scene-based automated ambience" },
];

const testimonials = [
  { quote: "AI-Tech Haven transformed my living room completely. The Smart TV setup with voice control and ambient lighting is incredible. Guests always ask what we did.", label: "Homeowner", stars: 5 },
  { quote: "We had them install smart TVs and lighting across all 24 rooms. Professional, fast, and every device works perfectly. Our guests love the experience.", label: "Hotel Manager", stars: 5 },
  { quote: "Our conference room now has a full smart system — presentation screen, smart lighting, and voice control. Best investment we made this year.", label: "Business Client", stars: 5 },
  { quote: "I sent my devices from Abuja and they configured everything remotely, then shipped back. Everything worked perfectly on first boot. Excellent service.", label: "Customer Testimonial", stars: 5 },
];

const WA_ICON = (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SmartLiving = () => (
  <>
    <SEOHead
      title="Smart TV and Smart Living Solutions Nigeria | Professional Installation | AI-Tech Haven International"
      description="Professional Smart TV configuration, smart home installation, voice automation, entertainment optimization and intelligent living solutions in Nigeria. Serving Port Harcourt, Lagos, Abuja and Africa."
      canonical="https://ai-techhaven.site/smart-living"
      keywords="smart TV installation Nigeria, smart home Nigeria, voice automation Nigeria, smart lighting Port Harcourt, smart home Lagos, smart TV setup Nigeria, smart living solutions Nigeria, AI smart home Africa"
      schema={serviceSchema}
    />
    <Header />
    <main className="overflow-x-hidden pt-16">

      {/* ===== HERO ===== */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black" />
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/5 blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <ScrollReveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <Zap className="h-3 w-3" /> Premium Smart Living Solutions
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              Upgrade Your Home Into A
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Smarter Living Experience
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Professional Smart TV Configuration, Smart Home Installation, Voice Automation, Entertainment Optimization, and Intelligent Living Solutions — delivered across Nigeria and Africa.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-base font-bold text-black shadow-lg shadow-yellow-400/30 transition-all hover:scale-105 hover:bg-yellow-300">
                <Zap className="h-5 w-5" /> Book Smart Installation
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-yellow-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> Chat on WhatsApp
              </a>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider text-white/40">
              {["Professional Installation", "All Brands Supported", "Ongoing Support", "Nigeria and Africa"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-yellow-400" /> {b}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="bg-white py-20 dark:bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our <span className="text-yellow-500">Smart Services</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              From Smart TV setup to full home automation — everything you need for a connected, intelligent lifestyle.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={f.title}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-lg">
                    <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 shadow-md">
                      <f.icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section className="bg-yellow-400 py-14">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl font-extrabold text-black md:text-3xl">
              Need Expert Smart Living Installation?
            </h2>
            <p className="mt-2 text-black/70">
              Our certified technicians are ready to transform your space anywhere in Nigeria.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-4 font-bold text-yellow-400 shadow-lg transition-all hover:scale-105 hover:bg-gray-900">
              <span className="text-green-400">{WA_ICON}</span> Chat with AI-Tech Haven on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why Choose <span className="text-yellow-500">AI-Tech Haven</span>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Shield, title: "Professional Installation", desc: "Certified technicians with years of smart home and AV installation experience across Nigeria." },
              { icon: Settings, title: "Expert Configuration", desc: "Every device is tuned for peak performance — no generic setup, everything is customized for your space." },
              { icon: Headphones, title: "Ongoing Technical Support", desc: "WhatsApp support, remote access, and scheduled maintenance so you are never left alone." },
              { icon: ArrowRight, title: "Future Expansion Ready", desc: "Every installation is designed to grow. Add new devices anytime and we will integrate them seamlessly." },
              { icon: Star, title: "Trusted Technology Solutions", desc: "We supply, configure, install, and support only proven, reliable smart technology brands." },
              { icon: Zap, title: "End-to-End Service", desc: "From consultation to training to ongoing support — we handle everything so you enjoy the experience, not the setup." },
            ].map((c, i) => (
              <div key={c.title}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-3 inline-flex rounded-lg bg-black p-2.5">
                      <c.icon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Smart Living <span className="text-yellow-400">Packages</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
              Choose the package that fits your lifestyle. All prices are available on request.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <div key={pkg.name}>
                <ScrollReveal delay={i * 0.1}>
                  <div className={`relative rounded-2xl border-2 p-8 ${pkg.bg} ${pkg.popular ? "scale-105 shadow-2xl shadow-yellow-400/20" : ""}`}>
                    {pkg.badge && (
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-bold uppercase tracking-wider ${pkg.highlight}`}>
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className={`font-heading text-xl font-bold ${pkg.highlight}`}>{pkg.name}</h3>
                    <p className={`mt-1 text-sm opacity-70 ${pkg.highlight}`}>Contact us for pricing</p>
                    <ul className="mt-6 space-y-3">
                      {pkg.items.map((item) => (
                        <li key={item} className={`flex items-center gap-2 text-sm ${pkg.highlight}`}>
                          <CheckCircle className="h-4 w-4 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                    <a href={WA} target="_blank" rel="noopener noreferrer"
                      className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-bold transition-all hover:scale-105 ${pkg.btn}`}>
                      Get This Package
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Smart Living <span className="text-yellow-500">Gallery</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Every room, every space transformed into an intelligent, connected environment.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <div key={g.room}>
                <ScrollReveal delay={i * 0.07}>
                  <div className="group overflow-hidden rounded-xl border border-border bg-card">
                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-900 to-black">
                      <Tv className="h-16 w-16 text-yellow-400/40 transition-all duration-300 group-hover:text-yellow-400 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-base font-bold text-foreground">{g.room}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              Our <span className="text-yellow-400">Process</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-white/60">
              From first contact to fully automated home — five seamless steps.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.num}>
                <ScrollReveal delay={i * 0.08}>
                  <div className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                    <span className="font-heading text-4xl font-extrabold text-yellow-400/30">{s.num}</span>
                    <h3 className="mt-2 font-heading text-sm font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/50">{s.desc}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Why <span className="text-yellow-500">Smart Living?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              See the difference between an ordinary home and an AI-Tech Haven Smart Home.
            </p>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {comparisons.map((c, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border border-border bg-card p-4">
                    <div className="rounded-lg bg-muted px-3 py-2 text-center text-sm text-muted-foreground line-through">{c.before}</div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-yellow-500" />
                    <div className="rounded-lg bg-yellow-400/10 px-3 py-2 text-center text-sm font-semibold text-yellow-600 dark:text-yellow-400">{c.after}</div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-white md:text-4xl">
              What Our <span className="text-yellow-400">Clients Say</span>
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.08}>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="flex gap-1">
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">"{t.quote}"</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-yellow-400">{t.label}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
          </ScrollReveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i}>
                <ScrollReveal delay={i * 0.06}>
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-heading text-sm font-semibold text-foreground">{faq.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{faq.acceptedAnswer.text}</p>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative overflow-hidden bg-black py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-black to-blue-500/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold text-white md:text-5xl">
              Ready To Experience
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Smart Living?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Let AI-Tech Haven transform your home or business with intelligent technology solutions designed for convenience, security, and entertainment.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-10 py-4 text-lg font-bold text-black shadow-lg shadow-yellow-400/30 transition-all hover:scale-105 hover:bg-yellow-300">
                <Zap className="h-5 w-5" /> Book Installation
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-10 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-yellow-400/50 hover:bg-white/10">
                <span className="text-green-400">{WA_ICON}</span> WhatsApp Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default SmartLiving;
