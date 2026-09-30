import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

// Category colour mapping for badge backgrounds
const categoryColors: Record<string, string> = {
  "Account Recovery": "bg-red-600",
  "Smart Living": "bg-yellow-500 text-black",
  "Technology Tips": "bg-cyan-600",
  "Data Protection": "bg-green-600",
  "Business Technology": "bg-purple-600",
  "AI Trends": "bg-blue-600",
};

const getBadgeClass = (cat: string) =>
  categoryColors[cat] ?? "bg-primary";

const BlogSection = () => (
  <section className="py-24" aria-label="Latest technology insights">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-secondary">
          Stay Informed
        </p>
        <h2 className="mt-2 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
          Latest <span className="text-glow-gold text-secondary">Technology Insights</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
          Technology tips, smart living guides, data protection advice, business technology news, and AI trends from the AI-Tech Haven team.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.1}>
            <Link
              to={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 h-full"
              aria-label={`Read: ${post.title}`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${getBadgeClass(post.category ?? "Account Recovery")}`}
                >
                  {post.category ?? "Account Recovery"}
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-2 font-heading text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read More <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/30 px-8 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            View All Insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default BlogSection;
