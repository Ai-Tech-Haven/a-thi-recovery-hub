import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
  /** Accept a single schema object or an array of schema objects */
  schema?: object | object[];
  keywords?: string;
}

const DEFAULT_IMAGE = "https://ai-techhaven.site/favicon.png";
const DEFAULT_KEYWORDS =
  "intelligent technology solutions Nigeria, account recovery Nigeria, data recovery Nigeria, smart living Nigeria, smart home Nigeria, IT support Nigeria, web development Nigeria, computer repair Nigeria, technology consulting Nigeria, AI solutions Nigeria";

const SEOHead = ({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  schema,
  keywords = DEFAULT_KEYWORDS,
}: SEOHeadProps) => {
  // Normalise schema to always be an array for consistent rendering
  const schemas: object[] = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
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
      <meta property="og:image:alt" content="AI-Tech Haven International — Intelligent Technology Solutions Company Nigeria" />
      <meta property="og:site_name" content="AI-Tech Haven International" />
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

      {/* Render each schema block as its own JSON-LD script */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
