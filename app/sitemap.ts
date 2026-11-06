import type { MetadataRoute } from "next";
import { areaPages } from "@/lib/areas";
import { services, site } from "@/lib/site";

const LAST_UPDATED = new Date("2026-11-05");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/areas",
    "/about",
    "/partners",
    "/estimate",
    "/faq",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: LAST_UPDATED,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: LAST_UPDATED,
    })),
    ...areaPages.map((area) => ({
      url: `${site.url}/areas/${area.slug}`,
      lastModified: LAST_UPDATED,
    })),
  ];
}
