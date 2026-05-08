import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const pages = ["", "/sites-tools", "/repositories", "/free-collections", "/contact"];

  return pages.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
