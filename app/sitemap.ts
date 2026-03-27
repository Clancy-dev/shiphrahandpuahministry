import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shiphrahandpuahministry.org",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://shiphrahandpuahministry.org/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://shiphrahandpuahministry.org/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://shiphrahandpuahministry.org/membership",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://shiphrahandpuahministry.org/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
     {
      url: "https://shiphrahandpuahministry.org/donate",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    
  ];
}