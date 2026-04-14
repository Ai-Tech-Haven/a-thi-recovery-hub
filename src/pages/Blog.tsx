import { Link } from "react-router-dom";
import { blogPosts } from "virtual:blog-posts";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const Blog = () => (
  <>
    <SEOHead
      title="A-THI Blog | Account Recovery Tips, IT Security & Digital Solutions Nigeria"
      description="Expert tips on Instagram account recovery, Facebook account recovery, IT security, and digital solutions for businesses across Nigeria. Stay informed with A-THI."
      canonical="https://ai-techhaven.site/blog"
    />
    <Header />
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          A-THI <span className="text-primary">Blog</span>
        </h1>
        <p className="mt-3 text-muted-foreground">Tips, guides, and insights on account recovery and IT security across Nigeria</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
              )}
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                {post.category && <span className="mt-1 inline-block rounded bg-primary/10 px-1.5 py-0.5 text-xs text-primary">{post.category}</span>}
                <h2 className="mt-2 font-heading text-sm font-semibold leading-snug text-foreground group-hover:text-primary">{post.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="mt-20 text-center text-muted-foreground">No posts yet. Check back soon!</div>
        )}
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Blog;
