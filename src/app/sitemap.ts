import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blog";
import { SERVICE_CATALOG } from "./data/services";

const SITE_URL = "https://www.infinitysoftwarelabs.com";

export const dynamic = "force-static";

const toSiteUrl = (path: string): string =>
  new URL(path, SITE_URL).toString();

const sitemapEntries: MetadataRoute.Sitemap = [
  {
    url: toSiteUrl("/"),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: toSiteUrl("/page-about"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: toSiteUrl("/services"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: toSiteUrl("/page-testimonial"),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: toSiteUrl("/page-contact"),
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: toSiteUrl("/page-blog"),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  ...SERVICE_CATALOG.map((service) => ({
    url: service.canonical,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...blogPosts.map((post) => ({
    url: post.canonicalUrl,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueEntries = new Map(
    sitemapEntries.map((entry) => [entry.url, entry])
  );

  return Array.from(uniqueEntries.values());
}