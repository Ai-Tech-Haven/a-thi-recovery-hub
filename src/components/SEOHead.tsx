import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  schema?: object;
  keywords?: string;
}

const DEFAULT_IMAGE = "https://ai-techhaven.site/favicon.png";
const DEFAULT_KEYWORDS = "account recovery Nigeria, Instagram account recovery Nigeria, Facebook account recovery Lagos, Gmail recovery Nigeria, WhatsApp recovery, social media recovery Nigeria, hacked account recovery, disabled account recovery, IT specialist Port Harcourt";

const SEOHead = ({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  schema,
  keywords = DEFAULT_KEYWORDS,
}: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content="AI-TECH HAVEN INTERNATIONAL - Account Recovery Expert Nigeria" />
    <meta property="og:site_name" content="AI-TECH HAVEN INTERNATIONAL" />
    <meta property="og:locale" content="en_NG" />
    {canonical && <meta property="og:url" content={canonical} />}

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@A_THIonline" />
    <meta name="twitter:creator" content="@A_THIonline" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {canonical && <link rel="canonical" href={canonical} />}

    {schema && (
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    )}
  </Helmet>
);

export default SEOHead;
