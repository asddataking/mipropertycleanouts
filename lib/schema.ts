import type { AreaPage } from "@/lib/areas";
import type { CityServicePage } from "@/lib/city-services";
import { cityServicePath } from "@/lib/city-services";
import { cities, services, site } from "@/lib/site";

const extraServices = [
  {
    name: "Probate Property Cleanouts",
    url: "/services/estate-cleanouts",
  },
  {
    name: "Eviction Cleanouts",
    url: "/services/rental-property-cleanouts",
  },
  {
    name: "Foreclosure Cleanouts",
    url: "/services/pre-sale-property-cleanouts",
  },
] as const;

const catalogServices = [
  ...services.map((service) => ({
    name: service.title,
    url: `/services/${service.slug}`,
  })),
  ...extraServices,
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${site.url}/#business`,
      name: site.name,
      legalName: site.legalName,
      description: site.description,
      slogan: site.brandTagline,
      url: site.url,
      image: `${site.url}/logo.png`,
      logo: `${site.url}/logo.png`,
      telephone: site.phoneSchema,
      email: site.email,
      priceRange: "$$",
      currenciesAccepted: "USD",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Port Huron",
        addressRegion: "MI",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 42.9709,
        longitude: -82.4249,
      },
      areaServed: [
        {
          "@type": "State",
          name: "Michigan",
        },
        {
          "@type": "AdministrativeArea",
          name: "Blue Water Area",
          containedInPlace: { "@type": "State", name: "Michigan" },
        },
        {
          "@type": "AdministrativeArea",
          name: "St. Clair County",
          containedInPlace: { "@type": "State", name: "Michigan" },
        },
        ...cities.map((city) => ({
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: "Michigan" },
        })),
      ],
      knowsAbout: [
        "Estate cleanouts",
        "Probate property cleanouts",
        "Hoarding cleanouts",
        "Rental and eviction cleanouts",
        "Foreclosure cleanouts",
        "Whole-home cleanouts",
        "Garage and barn cleanouts",
        "Pre-sale property cleanouts",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Michigan Property Cleanout Services",
        itemListElement: catalogServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            url: `${site.url}${service.url}`,
            areaServed: { "@type": "State", name: "Michigan" },
            provider: { "@id": `${site.url}/#business` },
          },
        })),
      },
      brand: {
        "@type": "Brand",
        name: site.name,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en-US",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export function serviceJsonLd(service: {
  slug: string;
  title: string;
  short: string;
  intro: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.title,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      { "@type": "State", name: "Michigan" },
      {
        "@type": "AdministrativeArea",
        name: "Blue Water Area",
        containedInPlace: { "@type": "State", name: "Michigan" },
      },
    ],
  };
}

export function areaJsonLd(page: AreaPage) {
  const url = `${site.url}/areas/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Estate & Property Cleanouts in ${page.placeName}, MI`,
        serviceType: "Property cleanout",
        description: page.metaDescription,
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: {
          "@type": "City",
          name: page.placeName,
          containedInPlace: { "@type": "State", name: "Michigan" },
          geo: {
            "@type": "GeoCoordinates",
            latitude: page.geo.latitude,
            longitude: page.geo.longitude,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${site.url}/areas` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}


function faqEntities(faqs: { question: string; answer: string }[]) {
  return faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  }));
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities(faqs),
  };
}

export function pageLocalBusinessJsonLd(opts: {
  url: string;
  description: string;
  areaName: string;
  geo?: { latitude: number; longitude: number };
}) {
  const areaServed: Record<string, unknown> = {
    "@type": "City",
    name: opts.areaName,
    containedInPlace: { "@type": "State", name: "Michigan" },
  };
  if (opts.geo) {
    areaServed.geo = {
      "@type": "GeoCoordinates",
      latitude: opts.geo.latitude,
      longitude: opts.geo.longitude,
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${opts.url}#localbusiness`,
    name: site.name,
    url: opts.url,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    telephone: site.phoneSchema,
    email: site.email,
    description: opts.description,
    parentOrganization: { "@id": `${site.url}/#business` },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Huron",
      addressRegion: "MI",
      addressCountry: "US",
    },
    areaServed,
  };
}

export function servicePageJsonLd(service: {
  slug: string;
  title: string;
  short: string;
  intro: string;
  faqs?: { question: string; answer: string }[];
}) {
  const url = `${site.url}/services/${service.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      ...serviceJsonLd(service),
    },
    pageLocalBusinessJsonLd({
      url,
      description: service.intro,
      areaName: "Port Huron",
      geo: { latitude: 42.9709, longitude: -82.4249 },
    }),
  ];
  if (service.faqs?.length) {
    graph.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqEntities(service.faqs),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

export function cityServiceJsonLd(page: CityServicePage, geo: { latitude: number; longitude: number }) {
  const path = cityServicePath(page);
  const url = `${site.url}${path}`;
  const serviceName =
    page.kind === "hoarding-cleanouts"
      ? `Hoarding Cleanouts in ${page.placeName}, MI`
      : `Property Cleanouts in ${page.placeName}, MI`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        serviceType: page.kind === "hoarding-cleanouts" ? "Hoarding cleanout" : "Property cleanout",
        description: page.metaDescription,
        url,
        provider: { "@id": `${site.url}/#business` },
        areaServed: {
          "@type": "City",
          name: page.placeName,
          containedInPlace: { "@type": "State", name: "Michigan" },
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        },
      },
      pageLocalBusinessJsonLd({
        url,
        description: page.metaDescription,
        areaName: page.placeName,
        geo,
      }),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${site.url}/areas` },
          { "@type": "ListItem", position: 3, name: page.cityName, item: `${site.url}/areas/${page.citySlug}` },
          { "@type": "ListItem", position: 4, name: serviceName, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqEntities(page.faqs),
      },
    ],
  };
}
