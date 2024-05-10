import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://aes.shenlu.me/sitemap.xml",
    host: "https://aes.shenlu.me",
  };
}
