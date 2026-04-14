// Vite virtual module plugin — reads all markdown files from public/content/blog/
// and exposes them as a typed virtual module: "virtual:blog-posts"
import type { Plugin } from "vite";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const VIRTUAL_ID = "virtual:blog-posts";
const RESOLVED_ID = "\0" + VIRTUAL_ID;

function slugify(filename: string) {
  return filename.replace(/\.md$/, "");
}

function loadPosts(blogDir: string) {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        id: slugify(file),
        slug: slugify(file),
        title: data.title ?? "",
        date: data.date ? String(data.date).slice(0, 10) : "",
        category: data.category ?? "",
        excerpt: data.excerpt ?? "",
        image: data.image ?? "",
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function blogPlugin(): Plugin {
  let blogDir: string;

  return {
    name: "vite-plugin-blog",
    configResolved(config) {
      blogDir = path.resolve(config.root, "public/content/blog");
    },
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;
      const posts = loadPosts(blogDir);
      return `export const blogPosts = ${JSON.stringify(posts)};`;
    },
    configureServer(server) {
      // Hot-reload when any .md file changes
      server.watcher.add(blogDir);
      server.watcher.on("change", (file) => {
        if (file.includes("content/blog") && file.endsWith(".md")) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
      server.watcher.on("add", (file) => {
        if (file.includes("content/blog") && file.endsWith(".md")) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
