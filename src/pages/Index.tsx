import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import FeaturedSmartLiving from "@/components/FeaturedSmartLiving";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonials from "@/components/Testimonials";
import TechShowcase from "@/components/TechShowcase";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

/* ─── Structured Data ─── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AI-TECH HAVEN INTERNATIONAL",
  alternateName: "A-THI",
  description:
    "Intelligent Technology Solutions Company providing Account Recovery, Data Recovery, Smart Living, AI Automation, Web Development, Networking, Computer Repair, and IT Consulting for individuals, homes, businesses, hotels, and organisations across Nigeria and worldwide.",
  url: "https://ai-techhaven.site",
  telephone: "+2348088851368",
  email: "aitechhaveninternational@gmail.com",
  logo: "https://ai-techhaven.site/favicon.png",
  image: "https://ai-techhaven.site/favicon.png",
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
    { "@type": "Continent", name: "Africa" },
    { "@type": "Country", name: "Worldwide" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "NGN, USD",
  paymentAccepted: "Cash, Bank Transfer, Mobile Money",
  sameAs: [
    "https://www.facebook.com/Athionline",
    "https://www.instagram.com/a_thi.site",
    "https://twitter.com/A_THIonline",
    "https://www.tiktok.com/@ai_techhaven",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Intelligent Technology Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Account Recovery Nigeria",
          description:
            "Professional recovery of disabled, hacked, and suspended Instagram, Facebook, Gmail, WhatsApp, and social media accounts across Nigeria and worldwide.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Recovery Nigeria",
          description:
            "Professional HDD, SSD, RAID, phone and digital asset data recovery in Nigeria and worldwide.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Living Solutions Nigeria",
          description:
            "Supply, installation, and support of Smart TV systems, voice automation, smart lighting, security cameras, and home automation for homes, offices, and hotels.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation Solutions Nigeria",
          description:
            "Custom AI chatbots, WhatsApp automation, business process automation, and intelligent digital solutions for Nigerian businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & App Development Nigeria",
          description:
            "Premium, responsive website and mobile app development for businesses across Nigeria.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Networking & Infrastructure Nigeria",
          description:
            "Professional Wi-Fi, LAN, and business networking solutions for homes, offices, hotels, and enterprises.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Computer Repair & IT Support Nigeria",
          description:
            "Professional computer repair, maintenance, and IT support for individuals and businesses across Nigeria.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology Consulting Nigeria",
          description:
            "Strategic technology consulting, systems architecture, and digital transformation advisory for businesses and organisations in Nigeria.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does AI-Tech Haven International offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-Tech Haven International is an Intelligent Technology Solutions Company offering Account Recovery, Data Recovery, Smart Living Solutions, Computer Repair & IT Support, AI & Bot Development, Web & App Development, Networking & Infrastructure, Google Business Profile Setup, Social Media Growth, and Technology Consulting.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI-Tech Haven recover a disabled Instagram or Facebook account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in recovering disabled, hacked, suspended, and deleted Instagram, Facebook, Gmail, WhatsApp, and social media accounts. We offer remote recovery across Nigeria and worldwide with a 50% deposit policy and full refund guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Smart Living service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Smart Living service covers the supply, configuration, installation, and support of intelligent home and office technology — including Smart TV systems, voice automation with Google Assistant and Alexa, smart lighting, connected security cameras, and complete home and hotel automation.",
      },
    },
    {
      "@type": "Question",
      name: "Does AI-Tech Haven serve clients outside Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While we are based in Port Harcourt, Nigeria, we provide remote services to clients across Africa and worldwide via WhatsApp, video call, and remote desktop support.",
      },
    },
    {
      "@type": "Question",
      name: "How do I contact AI-Tech Haven International?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach us via WhatsApp at +234 808 885 1368, email at aitechhaveninternational@gmail.com, or visit us at 2c Emenike Street, Mile One, Diobu, Port Harcourt, Rivers State, Nigeria.",
      },
    },
    {
      "@type": "Question",
      name: "What is AI-Tech Haven's payment policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate a transparent 50% deposit policy — you pay 50% upfront and the balance only after successful delivery of the service. We also offer a full refund guarantee if we cannot complete the job.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ai-techhaven.site/",
    },
  ],
};

const combinedSchema = [localBusinessSchema, faqSchema, breadcrumbSchema];

/* ─── Page ─── */

const Index = () => (
  <>
    <SEOHead
      title="AI-Tech Haven International | Intelligent Technology Solutions — Account Recovery, Smart Living, IT Services Nigeria"
      description="AI-Tech Haven International is Nigeria's leading Intelligent Technology Solutions Company. We provide Account Recovery, Data Recovery, Smart Living, AI Automation, Web Development, Networking, and IT Consulting for homes, businesses, and organisations across Nigeria and worldwide."
      canonical="https://ai-techhaven.site/"
      keywords="intelligent technology solutions Nigeria, account recovery Nigeria, data recovery Nigeria, smart living Nigeria, smart home Nigeria, AI solutions Nigeria, web development Nigeria, networking Nigeria, IT support Nigeria, computer repair Nigeria, technology consulting Nigeria, Instagram account recovery Nigeria, Facebook account recovery Lagos, Gmail recovery Nigeria, WhatsApp recovery Nigeria, smart TV installation Nigeria, home automation Nigeria, AI chatbot Nigeria, Google Business Profile Nigeria"
      schema={combinedSchema}
    />

    {/* Announcement bar sits above everything */}
    <AnnouncementBar />

    {/* Header sticks below announcement bar */}
    <Header />

    {/* Main content */}
    <main id="main-content">
      {/* 1 – Full-screen hero */}
      <Hero />

      {/* 2 – Trust indicators (overlaps hero bottom) */}
      <TrustIndicators />

      {/* 3 – Featured services grid */}
      <Services />

      {/* 4 – Smart Living feature section (large) */}
      <FeaturedSmartLiving />

      {/* 5 – Why choose us (6 cards) */}
      <WhyChooseUs />

      {/* 6 – 5-step process */}
      <OurProcess />

      {/* 7 – Industries we serve */}
      <IndustriesWeServe />

      {/* 8 – Testimonials carousel */}
      <Testimonials />

      {/* 9 – Technology showcase */}
      <TechShowcase />

      {/* 10 – Latest insights / blog */}
      <BlogSection />

      {/* 11 – Final CTA */}
      <CTASection />
    </main>

    <Footer />

    {/* Floating WhatsApp button */}
    <WhatsAppButton />
  </>
);

export default Index;
