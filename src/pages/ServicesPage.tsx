import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

const WA_LINK = "https://wa.me/2348088851368?text=Hello%20A-THI%2C%20I%20need%20help%20recovering%20my%20account";

const ServicesPage = () => (
  <>
    <SEOHead
      title="All IT Services | Account Recovery, AI Bots, Web Dev & More | AI-TECH HAVEN INTERNATIONAL Nigeria"
      description="Browse all professional IT services by AI-TECH HAVEN INTERNATIONAL — account recovery, AI chatbots, web development, social media growth, computer repair and more. Serving Lagos, Abuja, Port Harcourt & worldwide."
      canonical="https://ai-techhaven.site/services"
      keywords="IT services Nigeria, account recovery Nigeria, AI bot development Nigeria, web development Port Harcourt, social media growth Nigeria, computer repair Lagos"
    />
    <Header />
    <main className="pt-20 min-h-screen">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h1 className="text-center font-heading text-3xl font-bold text-foreground md:text-5xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Comprehensive digital solutions for individuals and businesses across Nigeria and worldwide.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`service-card group relative block overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl ${s.glow} h-full`}
                >
                  <div className="relative z-10">
                    <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${s.color} p-3 shadow-lg`}>
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="font-heading text-lg font-semibold text-foreground">{s.name}</h2>
                    <p className="text-xs font-medium text-primary">{s.subtitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <span className="mt-4 inline-block text-xs font-semibold text-primary group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-white">Need Help Right Now?</h2>
              <p className="mt-2 text-orange-100/80">Chat with us on WhatsApp — we respond within 15 minutes.</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-extrabold text-red-600 shadow-lg transition-all hover:scale-105"
              >
                🚨 Recover My Account Now
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

export default ServicesPage;
