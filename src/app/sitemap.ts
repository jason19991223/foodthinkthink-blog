import type { MetadataRoute } from "next";
import { getAllCategories, getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://foodthinkthink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/posts",
    "/about",
    "/contact",
    "/disclaimer",
    "/privacy"
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date()
  }));

  const postPages = getAllPosts().map((post) => ({
    url: `${siteUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  const categoryPages = getAllCategories().map((category) => ({
    url: `${siteUrl}/categories/${category.slug}`,
    lastModified: new Date()
  }));

  return [...staticPages, ...postPages, ...categoryPages];
}
