/// <reference types="vite/client" />

declare module "virtual:blog-posts" {
  export interface BlogPostMd {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    /** Alt text for the cover image — used in <img> and OG image:alt */
    imageAlt: string;
    /** Author name displayed on the post and in Article schema */
    author: string;
    /** Comma-separated keyword string for <meta name="keywords"> */
    keywords: string;
    /** Array of tag strings for filtering and display */
    tags: string[];
    content: string;
  }
  export const blogPosts: BlogPostMd[];
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}
