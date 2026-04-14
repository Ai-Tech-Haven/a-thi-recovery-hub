import { useParams, Link } from "react-router-dom";
import { blogPosts } from "virtual:blog-posts";
import { marked } from "marked";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

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
            <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "A-THI" },
    publisher: { "@type": "Organization", name: "AI-TECH HAVEN INTERNATIONAL" },
  };

  const htmlContent = marked.parse(post.content) as string;

  return (
    <>
      <SEOHead
        title={`${post.title} | A-THI Blog — Account Recovery Nigeria`}
        description={post.excerpt}
        canonical={`https://ai-techhaven.site/blog/${post.slug}`}
        type="article"
        schema={articleSchema}
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <article className="container mx-auto max-w-3xl px-4">
          <Link to="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>

          {post.image && (
            <div className="aspect-video overflow-hidden rounded-xl">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              {post.category && <> · <span className="text-primary">{post.category}</span></>}
            </p>
            <h1 className="mt-3 font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">{post.title}</h1>
          </div>

          <div
            className="prose prose-invert mt-8 max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          <div className="mt-12 rounded-xl border border-border bg-card p-6 text-center">
            <h3 className="font-heading text-lg font-semibold text-foreground">Need Help With Account Recovery?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Contact A-THI today for fast, professional account recovery services across Nigeria and worldwide.</p>
            <a
              href="https://wa.me/2348088851368?text=Hello%20A-THI%2C%20I%20need%20help%20recovering%20my%20account"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-semibold text-white transition-all hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
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
