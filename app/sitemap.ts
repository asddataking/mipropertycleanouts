import type { MetadataRoute } from "next";
import { areaPages } from "@/lib/areas";
import { cityServicePages, cityServicePath } from "@/lib/city-services";
import { services, site } from "@/lib/site";

const LAST_UPDATED = new Date("2026-11-05");
const NEW_PAGES = new Date("2026-11-19");

const existingStatic = new Set([
  "",
  "/services",
  "/areas",
  "/about",
  "/partners",
  "/estimate",
  "/faq",
]);

const existingServices = new Set([
  "estate-cleanouts",
  "rental-property-cleanouts",
  "whole-home-cleanouts",
  "hoarding-cleanouts",
  "garage-barn-cleanouts",
  "pre-sale-property-cleanouts",
]);

const existingAreas = new Set([
  "port-huron",
  "marysville",
  "fort-gratiot",
  "st-clair",
]);

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
      lastModified: existingStatic.has(path) ? LAST_UPDATED : NEW_PAGES,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: existingServices.has(service.slug) ? LAST_UPDATED : NEW_PAGES,
    })),
    ...areaPages.map((area) => ({
      url: `${site.url}/areas/${area.slug}`,
      lastModified: existingAreas.has(area.slug) ? LAST_UPDATED : NEW_PAGES,
    })),
    ...cityServicePages.map((page) => ({
      url: `${site.url}${cityServicePath(page)}`,
      lastModified: NEW_PAGES,
    })),
  ];
}
