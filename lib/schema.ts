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
      telephone: "+1-810-241-0000",
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
