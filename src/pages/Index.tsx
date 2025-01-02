import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
  description: "Professional account recovery and IT services across Nigeria. Instagram, Facebook & Email account recovery expert serving Lagos, Abuja, Port Harcourt, and worldwide.",
  url: "https://a-thi.com",
  telephone: "+2348088851368",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 2 Emenike Street",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
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
  ],
  openingHours: "Mo-Sa 08:00-20:00",
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
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
    ],
  },
};

const Index = () => (
  <>
    <SEOHead
      title="A-THI | #1 Account Recovery Expert in Nigeria — Instagram, Facebook & Email Recovery"
      description="Professional Instagram account recovery Nigeria, Facebook account recovery Lagos & Abuja. A-THI is Nigeria's trusted account recovery expert serving Lagos, Abuja, Port Harcourt & worldwide. Fast remote recovery. CAC: 9255386."
      canonical="https://a-thi.com/"
      schema={localBusinessSchema}
    />
    <Header />
    <Hero />
    <Services />
    <WhyChooseUs />
    <CoverageSection />
    <Testimonials />
    <BlogSection />
    <CTASection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
