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
