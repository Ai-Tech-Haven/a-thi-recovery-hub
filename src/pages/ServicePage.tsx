import { useParams, Link, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { services } from "@/data/services";

const WA_LINK = "https://wa.me/2348088851368?text=Hello%20A-THI%2C%20I%20need%20help%20recovering%20my%20account";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.headline,
    description: service.content,
    provider: {
      "@type": "LocalBusiness",
      name: "AI-TECH HAVEN INTERNATIONAL (A-THI)",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2c Emenike Street, Mile One, Diobu",
        addressLocality: "Port Harcourt",
        addressRegion: "Rivers State",
        addressCountry: "NG",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "City", name: "Lagos" },
      { "@type": "City", name: "Abuja" },
      { "@type": "City", name: "Port Harcourt" },
    ],
  };

  const isGrowth = service.slug === "social-media-growth";
  const isRecovery = service.slug === "accounts-recovery";
  const isAI = service.slug === "ai-bot-development";

  const seoTitle = isGrowth
    ? "Instagram Facebook TikTok Growth Service Nigeria & Worldwide | Real Followers & Engagement | AI-TECH HAVEN INTERNATIONAL"
    : isRecovery
    ? "Instagram, Facebook, Gmail & WhatsApp Account Recovery Nigeria | AI-TECH HAVEN INTERNATIONAL"
    : `${service.headline} | A-THI — Nigeria's Trusted IT Expert`;

  const seoDesc = isGrowth
    ? "Boost your Instagram, Facebook & TikTok with real followers, likes, views and engagement. Safe gradual growth for businesses in Nigeria (Port Harcourt, Lagos, Abuja) and worldwide. Expert team with account recovery backup."
    : isRecovery
    ? "Professional Instagram, Facebook, Gmail, WhatsApp & TikTok account recovery in Nigeria. Fast recovery for disabled, hacked and suspended accounts. Serving Lagos, Abuja, Port Harcourt & worldwide. 50% deposit policy."
    : `${service.content} We provide remote ${service.name.toLowerCase()} services across Nigeria (Lagos, Abuja, Port Harcourt) and globally. Contact A-THI today.`;

  const seoKeywords = isRecovery
    ? "Instagram account recovery Nigeria, Facebook account recovery Lagos, Gmail recovery Nigeria, WhatsApp account recovery, hacked account recovery Nigeria, disabled Instagram account, suspended Facebook account, account recovery expert Nigeria"
    : isGrowth
    ? "Instagram growth service Nigeria, real followers Instagram Lagos, TikTok growth Abuja, safe social media growth worldwide, Facebook page growth Nigeria"
    : isAI
    ? "AI chatbot Nigeria, WhatsApp bot Nigeria, AI automation Nigeria, chatbot development Port Harcourt, AI bot for business Nigeria"
    : `${service.name} Nigeria, ${service.name} Port Harcourt, ${service.name} Lagos`;

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        canonical={`https://ai-techhaven.site/services/${service.slug}`}
        keywords={seoKeywords}
        schema={serviceSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(200 60% 15%) 50%, hsl(222 47% 11%) 100%)' }}>
          <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <ScrollReveal>
              <div className={`mx-auto mb-6 inline-flex rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">{service.headline}</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">{service.content}</p>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
                We provide remote {service.name.toLowerCase()} services across Nigeria (Lagos, Abuja, Rivers State, etc.) and globally via secure virtual assistance.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:brightness-110"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-center font-heading text-2xl font-bold text-foreground md:text-3xl">
                Why Choose Our <span className="text-primary">{service.name}</span> Service
              </h2>
            </ScrollReveal>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {service.benefits.map((b, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16" style={{ background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(200 60% 15%) 50%, hsl(222 47% 11%) 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">Ready to Get Started?</h2>
              <p className="mx-auto mt-3 max-w-lg text-white/70">Chat with us now for a free consultation. 50% deposit policy with full refund guarantee. Serving clients across Nigeria and worldwide.</p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-8 py-4 font-bold text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-105 hover:brightness-110"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  to="/#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  ← Back to Services
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
};

export default ServicePage;
