import { useParams, Link } from "react-router-dom";
import { blogPosts } from "virtual:blog-posts";
import { marked } from "marked";
import { ArrowLeft, MessageCircle, CalendarDays, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const SITE_URL = "https://ai-techhaven.site";

/** Resolve a post image path to a fully-qualified URL for OG/Twitter tags. */
function absoluteImageUrl(image: string): string {
  if (!image) return `${SITE_URL}/favicon.png`;
  // Already absolute (e.g. uploaded via CMS to /assets/ or external URL)
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  // Root-relative path → prepend site origin
  return `${SITE_URL}${image.startsWith("/") ? "" : "/"}${image}`;
}

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="flex min-h-screen items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground">Post Not Found</h1>
            <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const absoluteImage = absoluteImageUrl(post.image);
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  /* ── Article JSON-LD schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "AI-Tech Haven International",
    },
    publisher: {
      "@type": "Organization",
      name: "AI-Tech Haven International",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.png`,
      },
    },
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: absoluteImage,
        description: post.imageAlt || post.title,
      },
    }),
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    ...(post.keywords && {
      keywords: post.keywords,
    }),
  };

  /* ── Breadcrumb JSON-LD ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const htmlContent = marked.parse(post.content) as string;

  /* Build per-article keyword string for <meta name="keywords">.
     Prefer the article-level keywords field; fall back to category + title words. */
  const metaKeywords =
    post.keywords ||
    [post.category, "AI-Tech Haven", "Nigeria"].filter(Boolean).join(", ");

  return (
    <>
      <SEOHead
        title={`${post.title} | AI-Tech Haven Blog`}
        description={post.excerpt}
        canonical={canonicalUrl}
        type="article"
        image={absoluteImage}
        keywords={metaKeywords}
        schema={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="min-h-screen pb-16 pt-24">
        <article className="container mx-auto max-w-3xl px-4">

          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </nav>

          {/* Cover image */}
          {post.image && (
            <div className="aspect-video overflow-hidden rounded-xl">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="h-full w-full object-cover"
                loading="lazy"
                width={1200}
                height={630}
              />
            </div>
          )}

          {/* Post meta */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {post.author}
                </span>
              )}
              {post.category && (
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {post.category}
                </span>
              )}
            </div>

            <h1 className="mt-3 font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Article body */}
          <div
            className="prose prose-invert mt-8 max-w-none
              prose-headings:font-heading prose-headings:text-foreground
              prose-h2:mt-10 prose-h2:text-xl prose-h2:font-bold
              prose-h3:mt-6 prose-h3:text-lg prose-h3:font-semibold
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-a:text-primary prose-a:underline prose-a:underline-offset-2
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* WhatsApp CTA */}
          <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Need Help? Contact AI-Tech Haven
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional technology services across Nigeria and worldwide. Fast, secure, and confidential.
            </p>
            <a
              href="https://wa.me/2348088851368?text=Hello%20AI-Tech%20Haven%2C%20I%20need%20professional%20technology%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-semibold text-white transition-all hover:brightness-110"
              aria-label="Chat with AI-Tech Haven on WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
