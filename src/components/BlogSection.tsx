import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BlogSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Latest from Our <span className="text-glow-gold text-secondary">Blog</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Tips, guides, and insights on account recovery and IT security
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.1}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {post.category || "Account Recovery"}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                <h3 className="mt-2 font-heading text-sm font-semibold leading-snug text-foreground group-hover:text-primary">{post.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary">
                  Read More <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-10 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10">
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogSection;
