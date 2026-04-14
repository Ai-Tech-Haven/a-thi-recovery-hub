import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecoveryCTA from "@/components/RecoveryCTA";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoverageSection from "@/components/CoverageSection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI-TECH HAVEN INTERNATIONAL (A-THI)",
  description: "Professional account recovery and IT services across Nigeria. Instagram, Facebook, Gmail, WhatsApp & Email account recovery expert serving Lagos, Abuja, Port Harcourt, and worldwide.",
  url: "https://ai-techhaven.site",
  telephone: "+2348088851368",
  email: "aitechhaveninternational@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2c Emenike Street, Mile One, Diobu",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    postalCode: "500211",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "4.8156",
    longitude: "7.0498",
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "City", name: "Lagos" },
    { "@type": "City", name: "Abuja" },
    { "@type": "City", name: "Port Harcourt" },
    { "@type": "Country", name: "Worldwide" },
  ],
  openingHours: "Mo-Sa 08:00-20:00",
  priceRange: "$$",
  image: "https://ai-techhaven.site/favicon.png",
  sameAs: [
    "https://www.facebook.com/Athionline",
    "https://www.instagram.com/a_thi.site",
    "https://twitter.com/A_THIonline",
    "https://www.tiktok.com/@ai_techhaven",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Account Recovery & IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instagram Account Recovery Nigeria",
          description: "Professional recovery of disabled, hacked, and suspended Instagram accounts across Nigeria and worldwide.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Facebook Account Recovery Nigeria",
          description: "Expert Facebook account recovery for suspended, disabled, and hacked accounts in Lagos, Abuja, and all of Nigeria.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gmail & Email Account Recovery Nigeria",
          description: "Professional Gmail and email account recovery for locked, hacked, and inaccessible accounts across Nigeria.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "WhatsApp Account Recovery Nigeria",
          description: "Fast WhatsApp account recovery for banned, hacked, and inaccessible accounts across Nigeria and worldwide.",
        },
      },
    ],
  },
};

const Index = () => (
  <>
    <SEOHead
      title="Account Recovery Expert Nigeria | Instagram, Facebook, Gmail, WhatsApp Recovery | AI-TECH HAVEN INTERNATIONAL"
      description="Professional account recovery services for Instagram, Facebook, Gmail, WhatsApp, TikTok and all social media. Fast recovery for disabled, hacked and suspended accounts in Port Harcourt, Lagos, Abuja and worldwide. Safe & reliable."
      canonical="https://ai-techhaven.site/"
      keywords="account recovery Nigeria, Instagram account recovery Nigeria, Facebook account recovery Lagos, Gmail recovery Nigeria, WhatsApp account recovery, TikTok recovery Nigeria, Instagram recovery Abuja, Facebook recovery Port Harcourt, social media recovery Nigeria, hacked account recovery Nigeria, disabled Instagram account recovery, suspended Facebook account Nigeria, remote account recovery worldwide, IT specialist Port Harcourt"
      schema={localBusinessSchema}
    />
    <Header />
    <Hero />
    <RecoveryCTA />
    <Services />
    <WhyChooseUs />
    <CoverageSection />
    <Testimonials />
    <BlogSection />
    <CTASection />
    <RecoveryCTA />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
