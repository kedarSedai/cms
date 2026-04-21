import { site } from "@/data/site";
import { blogPosts } from "@/data/blogPosts";
import { events } from "@/data/events";
import { pressItems } from "@/data/press";

const staticPaths = [
  "/",
  "/about",
  "/activities",
  "/service-projects",
  "/get-involved",
  "/events",
  "/resources",
  "/blog",
  "/press",
  "/testimonials",
  "/faq",
  "/contact",
];

export default function sitemap() {
  const lastMod = new Date().toISOString();

  const staticEntries = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: lastMod,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventEntries = events.map((e) => ({
    url: `${site.url}/events/${e.slug}`,
    lastModified: e.startDate,
    changeFrequency: "weekly",
    priority: 0.65,
  }));

  const pressEntries = pressItems.map((p) => ({
    url: `${site.url}/press/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: "monthly",
    priority: 0.55,
  }));

  return [...staticEntries, ...blogEntries, ...eventEntries, ...pressEntries];
}
