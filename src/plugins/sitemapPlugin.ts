/**
 * Vite plugin — sitemapPlugin
 *
 * Generates dist/sitemap.xml at the end of every production build.
 * Reads all .md files from public/content/blog/ to include individual
 * blog post URLs automatically — no manual editing required when new
 * posts are published through Decap CMS.
 *
 * Static pages are defined in STATIC_PAGES below.
 * Blog post URLs use the article's `date` frontmatter as <lastmod>.
 */
import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SITE_URL = "https://ai-techhaven.site";

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

/** All non-blog pages in priority order. */
const STATIC_PAGES: SitemapEntry[] = [
  { loc: "/",                                      lastmod: "2026-05-04", changefreq: "weekly",  priority: "1.0" },
  { loc: "/contact",                               lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services",                              lastmod: "2026-05-04", changefreq: "weekly",  priority: "0.9" },
  { loc: "/blog",                                  lastmod: "2026-05-04", changefreq: "weekly",  priority: "0.8" },
  { loc: "/smart-living",                          lastmod: "2026-05-04", changefreq: "monthly", priority: "0.9" },
  { loc: "/services/accounts-recovery",            lastmod: "2026-05-04", changefreq: "monthly", priority: "0.9" },
  { loc: "/services/data-recovery",                lastmod: "2026-05-04", changefreq: "monthly", priority: "0.9" },
  { loc: "/services/technology-consulting",        lastmod: "2026-05-04", changefreq: "monthly", priority: "0.9" },
  { loc: "/services/networking-infrastructure",    lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/computer-repair-support",      lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/gmail-whatsapp-security",      lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/ai-bot-development",           lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/social-media-growth",          lastmod: "2026-05-04", changefreq: "monthly", priority: "0.8" },
  { loc: "/services/web-apps-development",         lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/google-business-profile",      lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/virtual-remote-assistance",    lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/online-advertising",           lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/networking",                   lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/computer-repair",              lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
  { loc: "/services/private-it-consultant",        lastmod: "2026-05-04", changefreq: "monthly", priority: "0.7" },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildEntry(e: SitemapEntry): string {
  return [
    "  <url>",
    `    <loc>${escapeXml(SITE_URL + e.loc)}</loc>`,
    `    <lastmod>${e.lastmod}</lastmod>`,
    `    <changefreq>${e.changefreq}</changefreq>`,
    `    <priority>${e.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function loadBlogEntries(blogDir: string): SitemapEntry[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      const lastmod = data.date ? String(data.date).slice(0, 10) : new Date().toISOString().slice(0, 10);
      return {
        loc: `/blog/${slug}`,
        lastmod,
        changefreq: "monthly",
        priority: "0.7",
      };
    })
    .sort((a, b) => (a.lastmod < b.lastmod ? 1 : -1)); // newest first
}

export function sitemapPlugin(): Plugin {
  let root: string;
  let outDir: string;

  return {
    name: "vite-plugin-sitemap",
    apply: "build", // only runs during `vite build`, not dev server
    configResolved(config) {
      root = config.root;
      outDir = config.build.outDir;
    },
    closeBundle() {
      const blogDir = path.resolve(root, "public/content/blog");
      const blogEntries = loadBlogEntries(blogDir);
      const allEntries = [...STATIC_PAGES, ...blogEntries];

      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...allEntries.map(buildEntry),
        "</urlset>",
        "",
      ].join("\n");

      const outPath = path.resolve(root, outDir, "sitemap.xml");
      fs.writeFileSync(outPath, xml, "utf-8");

      // Also keep public/sitemap.xml in sync so it's served in dev and committed to git
      const publicPath = path.resolve(root, "public/sitemap.xml");
      fs.writeFileSync(publicPath, xml, "utf-8");

      console.log(
        `[vite-plugin-sitemap] Generated sitemap with ${allEntries.length} URLs ` +
        `(${STATIC_PAGES.length} static + ${blogEntries.length} blog posts) → ${outPath}`
      );
    },
  };
}
