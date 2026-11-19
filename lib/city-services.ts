import { getAreaPage } from "@/lib/areas";
import { site } from "@/lib/site";

export type CityServiceKind = "property-cleanouts" | "hoarding-cleanouts";

export type CityServiceFaq = { question: string; answer: string };

export type CityServicePage = {
  citySlug: string;
  kind: CityServiceKind;
  cityName: string;
  placeName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  includedHeading: string;
  included: string[];
  pricingHeading: string;
  pricing: string[];
  faqs: CityServiceFaq[];
};

export const CITY_SERVICE_KINDS = [
  "property-cleanouts",
  "hoarding-cleanouts",
] as const;

/** Cities Dan requested that are already on the site's Blue Water service list. Armada is not. */
export const cityServiceCitySlugs = [
  "port-huron",
  "marysville",
  "kimball",
  "st-clair",
  "richmond",
  "marine-city",
] as const;

export const cityServicePages: CityServicePage[] = [
  {
    citySlug: "port-huron",
    kind: "property-cleanouts",
    cityName: "Port Huron",
    placeName: "Port Huron",
    metaTitle: "Property Cleanouts in Port Huron, MI",
    metaDescription:
      "Property cleanouts in Port Huron, MI for estates, rentals, foreclosures and realtor listings. Upload photos for a free estimate or call (810) 242-0140.",
    h1: "Property cleanouts in Port Huron, MI",
    lede:
      "Port Huron is our home base, and a property cleanout here usually means emptying a whole house so it can be sold, rented, transferred or turned over. That includes estate and probate homes, rentals after a move-out, foreclosure properties and houses a realtor needs empty before photos or closing.",
    includedHeading: "What a Port Huron property cleanout includes",
    included: [
      "Whole-house clearing of furniture, household goods and leftover belongings",
      "Attics, basements, garages and outbuildings when they are part of the job",
      "Estate, rental, landlord, foreclosure and realtor-requested cleanouts",
      "Items you flag to keep set aside; donation of usable furniture where we can",
      "Property left empty and broom-swept for cleaning, repairs, listing or the next occupant",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "There is no published price list, because every property is different. We estimate from photos or a walkthrough, then give you a written estimate before we start.",
      "The estimate is based on how much has to come out, the labor and hauling involved, and access to the house. Send photos of each room and any outbuildings, or call (810) 242-0140, and we will tell you what the job looks like.",
    ],
    faqs: [
      {
        question: "What counts as a property cleanout in Port Huron?",
        answer:
          "A property cleanout is emptying a house or building so it is ready for sale, rent, transfer or the next occupant. In Port Huron that often means an inherited home, a rental turnover, a foreclosure, or a listing that has to be empty for photos and showings.",
      },
      {
        question: "Do you work with realtors and landlords in Port Huron?",
        answer:
          "Yes. Realtors, landlords and property managers can send photos and access instructions. We give one written estimate for the property and can work around a listing date, a turnover date or a lockbox.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Upload photos or call (810) 242-0140. We do not quote a standard rate because volume, labor and access change from house to house. The estimate is written and agreed before we start.",
      },
    ],
  },
  {
    citySlug: "port-huron",
    kind: "hoarding-cleanouts",
    cityName: "Port Huron",
    placeName: "Port Huron",
    metaTitle: "Hoarding Cleanouts in Port Huron, MI",
    metaDescription:
      "Discreet hoarding and heavy-accumulation cleanouts in Port Huron, MI. Patient, judgment-free crews. Upload photos for a free estimate or call (810) 242-0140.",
    h1: "Hoarding cleanouts in Port Huron, MI",
    lede:
      "Hoarding and heavy-accumulation cleanouts in Port Huron take a crew that can work patiently, privately and without judgment. We clear packed rooms, hallways, garages and outbuildings so the home can be lived in, sold or turned over, and we treat the people involved with respect.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Labor-heavy clearing of packed rooms, closets, hallways and stairs",
      "Garages, basements, attics and outbuildings when they are part of the job",
      "Sorting as we go, and setting aside paperwork, photos or items you ask us to watch for",
      "Discreet arrival and work on an occupied or vacant home",
      "Progress toward a livable, empty or sale-ready property",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Hoarding cleanouts are estimated from photos or a walkthrough, not from a published rate. The price depends on how packed the property is, how much labor and hauling the job takes, and how we can access the house.",
      "We give you a written estimate before we start. Call (810) 242-0140 or upload photos for a free estimate. If the situation is larger than a single visit, we will say so up front.",
    ],
    faqs: [
      {
        question: "Will you be discreet in Port Huron?",
        answer:
          "Yes. This is a small city, and we work quietly. We do not advertise the nature of the job on the street, and we treat the household and the neighbors with respect.",
      },
      {
        question: "Do we have to have the house empty in one day?",
        answer:
          "Not always. Some hoarding cleanouts are a single visit; some are planned in stages. After we see photos or walk the property, we will tell you what a realistic plan looks like.",
      },
      {
        question: "Can family members who live out of town hire you?",
        answer:
          "Yes. Many of the hoarding and heavy-accumulation jobs we take start with photos from a family member who is not local. We can coordinate access and send photos when the work is done.",
      },
    ],
  },
  {
    citySlug: "marysville",
    kind: "property-cleanouts",
    cityName: "Marysville",
    placeName: "Marysville",
    metaTitle: "Property Cleanouts in Marysville, MI",
    metaDescription:
      "Property cleanouts in Marysville, MI for estates, rentals, foreclosures and homes going on the market. Free photo estimate or call (810) 242-0140.",
    h1: "Property cleanouts in Marysville, MI",
    lede:
      "Marysville property cleanouts are often ranch homes and family houses that need to be emptied before a sale, a new tenant or an estate transfer. We clear the house, basement and garage for families, landlords, foreclosure work and realtors along the St. Clair River just south of Port Huron.",
    includedHeading: "What a Marysville property cleanout includes",
    included: [
      "Whole-home clearing, including basements and attached or detached garages",
      "Estate, rental, landlord, foreclosure and pre-listing cleanouts",
      "Sorting and hauling by our crew, with keep items set aside when you ask",
      "Donation of usable furniture where we can",
      "A broom-swept house ready for cleaning, repairs, photos or the next occupant",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "We price Marysville jobs from photos or a walkthrough, not a posted menu of rates. The estimate reflects the volume of material, the labor and hauling, and access to the property.",
      "You get a written estimate before the crew starts. Upload photos or call (810) 242-0140 for a free estimate. Marysville is close to our Port Huron base, which helps with scheduling, but the price is still based on the property itself.",
    ],
    faqs: [
      {
        question: "Can you empty a Marysville rental after a tenant leaves?",
        answer:
          "Yes. Leftover furniture, trash and belongings are a common rental cleanout. Landlords and property managers can send photos and a target turnover date.",
      },
      {
        question: "Do you clear homes before they are listed in Marysville?",
        answer:
          "Yes. We can finish before listing photos and showings, and we can work around a realtor, painter or cleaning crew.",
      },
      {
        question: "Is there a standard price for a ranch home?",
        answer:
          "No. Even similar houses pack out differently. Photos of each room and the garage are the fastest way to get an accurate written estimate.",
      },
    ],
  },
  {
    citySlug: "marysville",
    kind: "hoarding-cleanouts",
    cityName: "Marysville",
    placeName: "Marysville",
    metaTitle: "Hoarding Cleanouts in Marysville, MI",
    metaDescription:
      "Discreet hoarding cleanouts in Marysville, MI. Patient crews for packed homes, basements and garages. Upload photos or call (810) 242-0140.",
    h1: "Hoarding cleanouts in Marysville, MI",
    lede:
      "When a Marysville home has become too packed to live in, sell or turn over, we provide a discreet hoarding cleanout. The work is labor-heavy and handled without judgment, whether the house is a longtime family ranch or a property a relative is trying to settle from out of town.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Clearing packed rooms, hallways, basements and garages",
      "Careful sorting, with keepsakes and paperwork set aside when you ask",
      "Judgment-free, discreet service in a close-knit river city",
      "Hauling and disposal handled by our crew",
      "A plan for a livable, empty or sale-ready home",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Hoarding cleanouts are quoted from photos or a walkthrough. We do not publish a flat rate, because the labor depends on how full the house is and how the crew can move through it.",
      "The written estimate comes before we start. Call (810) 242-0140 or upload photos. If the job should be staged over more than one visit, we will say that clearly.",
    ],
    faqs: [
      {
        question: "Can you start from photos if we do not want a walkthrough yet?",
        answer:
          "Yes. Photos of each room, including the garage and basement, are often enough to estimate. We can schedule a walkthrough later if we need a closer look.",
      },
      {
        question: "Will neighbors know what kind of job it is?",
        answer:
          "We work discreetly. We do not label the job as a hoarding cleanout on the street, and we keep the work respectful of the household and the block.",
      },
      {
        question: "Do you take garages and sheds on the same visit?",
        answer:
          "Yes, when they are part of the estimate. Include photos of those buildings so the written price covers the whole property.",
      },
    ],
  },
  {
    citySlug: "kimball",
    kind: "property-cleanouts",
    cityName: "Kimball",
    placeName: "Kimball Township",
    metaTitle: "Property Cleanouts in Kimball Township, MI",
    metaDescription:
      "Property cleanouts in Kimball Township, MI, including Smiths Creek and Wadhams. Estates, rentals, foreclosures and realtor listings. Call (810) 242-0140.",
    h1: "Property cleanouts in Kimball Township, MI",
    lede:
      "Kimball Township sits just west of Port Huron, with homes in Smiths Creek, Wadhams and along the I-69 and Lapeer Road corridors. A property cleanout here often includes the house plus a garage, shed or pole barn, whether the job is an estate, a rental turnover, a foreclosure or a realtor preparing a listing.",
    includedHeading: "What a Kimball property cleanout includes",
    included: [
      "Clearing the house and, when they are part of the job, garages, sheds and pole barns",
      "Estate, rental, landlord, foreclosure and pre-sale cleanouts",
      "Sorting, loading and hauling by our crew",
      "Keep items set aside; usable furniture donated where we can",
      "Property left empty and swept for the next step",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Kimball properties vary from township lots with outbuildings to smaller homes, so we do not use a posted price list. We estimate from photos or a walkthrough and put the number in writing before work begins.",
      "The estimate covers volume, labor, hauling and access. Include photos of outbuildings with the house. Call (810) 242-0140 or upload photos for a free estimate.",
    ],
    faqs: [
      {
        question: "Do you serve Smiths Creek and Wadhams?",
        answer:
          "Yes. Both are part of Kimball Township, and they are on our Blue Water Area service list. Send the address with your photos so we can confirm the location.",
      },
      {
        question: "Can a pole barn or shed be included?",
        answer:
          "Yes. Outbuildings are common in the township. Photograph them with the rest of the property so the written estimate includes everything.",
      },
      {
        question: "Do you work with realtors on Kimball listings?",
        answer:
          "Yes. We can schedule around photo dates and closings and work from a lockbox when that is how access is set up.",
      },
    ],
  },
  {
    citySlug: "kimball",
    kind: "hoarding-cleanouts",
    cityName: "Kimball",
    placeName: "Kimball Township",
    metaTitle: "Hoarding Cleanouts in Kimball Township, MI",
    metaDescription:
      "Discreet hoarding cleanouts in Kimball Township, MI, including homes with garages and outbuildings. Upload photos or call (810) 242-0140.",
    h1: "Hoarding cleanouts in Kimball Township, MI",
    lede:
      "Hoarding cleanouts in Kimball Township are often on larger lots, where the house is packed and a garage or outbuilding is too. We work discreetly, at a pace the household can handle, and we leave the property closer to livable, empty or ready to sell.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Labor-heavy clearing of packed living space, garages and outbuildings",
      "Judgment-free, discreet work in the township, including Smiths Creek and Wadhams",
      "Sorting and setting aside items you ask us to keep",
      "Hauling handled by our crew",
      "A clear plan after we see photos or walk the property",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "We estimate hoarding cleanouts from photos or a walkthrough. There is no flat published rate, because packed outbuildings and tight access change the labor.",
      "You receive a written estimate before we start. Call (810) 242-0140 or upload photos, and include the house and any barns, sheds or garages.",
    ],
    faqs: [
      {
        question: "The house and the outbuilding are both packed. Can you do both?",
        answer:
          "Yes. We can include both in one estimate if you send photos of each. If the work should be split into visits, we will say so before we schedule.",
      },
      {
        question: "Do we have to be there on the day of the cleanout?",
        answer:
          "Not always. We can work out access ahead of time. We will tell you whether someone needs to be present after we see the job.",
      },
      {
        question: "Is this handled privately?",
        answer:
          "Yes. We treat hoarding cleanouts as private household work and do not draw extra attention to the job.",
      },
    ],
  },
  {
    citySlug: "st-clair",
    kind: "property-cleanouts",
    cityName: "St. Clair",
    placeName: "St. Clair",
    metaTitle: "Property Cleanouts in St. Clair, MI",
    metaDescription:
      "Property cleanouts in St. Clair, MI for estates, rentals, foreclosures and realtor listings, in town and in St. Clair Township. Call (810) 242-0140.",
    h1: "Property cleanouts in St. Clair, MI",
    lede:
      "Property cleanouts in St. Clair cover in-town and riverfront homes as well as properties in St. Clair Township. We empty houses for families settling an estate, landlords turning over a rental, foreclosure work and realtors who need a home empty before photos, staging or closing.",
    includedHeading: "What a St. Clair property cleanout includes",
    included: [
      "Whole-house clearing, including basements and garages",
      "Careful carrying in older in-town homes with tight stairs when that is the property",
      "Estate, rental, landlord, foreclosure and pre-sale cleanouts",
      "Keep items set aside; usable furniture donated where we can",
      "A swept, empty property ready for cleaning, staging or the next owner",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "We do not post a standard cleanout price. St. Clair homes vary, and the estimate is based on photos or a walkthrough, plus labor, hauling and access.",
      "The number is written and agreed before we begin. Call (810) 242-0140 or upload photos. If a realtor or closing date is driving the schedule, include that with the request.",
    ],
    faqs: [
      {
        question: "Do you serve St. Clair Township as well as the city?",
        answer:
          "Yes. The city and the surrounding township are both in our service area. Include the address with your estimate request.",
      },
      {
        question: "Can you work around staging or listing photos?",
        answer:
          "Yes. We schedule pre-sale and realtor cleanouts around photo dates, staging and contractors when you give us the timeline.",
      },
      {
        question: "How do foreclosure or bank-owned cleanouts work?",
        answer:
          "Send photos and access instructions. We provide a written estimate for the property and can document the finished job with photos when it is empty.",
      },
    ],
  },
  {
    citySlug: "st-clair",
    kind: "hoarding-cleanouts",
    cityName: "St. Clair",
    placeName: "St. Clair",
    metaTitle: "Hoarding Cleanouts in St. Clair, MI",
    metaDescription:
      "Discreet hoarding cleanouts in St. Clair, MI, including older in-town homes. Patient, judgment-free crews. Upload photos or call (810) 242-0140.",
    h1: "Hoarding cleanouts in St. Clair, MI",
    lede:
      "A hoarding cleanout in St. Clair has to be careful as well as thorough, especially in older in-town homes with narrow stairs and original woodwork. We work discreetly, protect the house as we carry items out, and help families or property owners get a packed home back under control.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Patient clearing of packed rooms and hallways",
      "Careful carrying in older homes, with floor and stair protection when needed",
      "Garages, basements and attics included when they are part of the job",
      "Items you want kept set aside as we go",
      "Discreet, judgment-free service",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Pricing is from photos or a walkthrough, not a published rate card. Tight stairs, packed rooms and the amount of hauling all affect the labor.",
      "We provide a written estimate before starting. Call (810) 242-0140 or upload photos of each room, including stairs and the garage if they are in use.",
    ],
    faqs: [
      {
        question: "Can you protect plaster, floors and woodwork?",
        answer:
          "Yes. Tell us about original floors, railings or tight stairs when you send photos. We use floor protection and carry items out by hand.",
      },
      {
        question: "Is the work confidential?",
        answer:
          "Yes. We treat hoarding cleanouts as private work and keep the job discreet in town.",
      },
      {
        question: "Can this be done in more than one visit?",
        answer:
          "If the house needs a staged approach, we will plan that after we see photos or walk the property, and we will price the work before we start.",
      },
    ],
  },
  {
    citySlug: "richmond",
    kind: "property-cleanouts",
    cityName: "Richmond",
    placeName: "Richmond",
    metaTitle: "Property Cleanouts in Richmond, MI",
    metaDescription:
      "Property cleanouts in Richmond, MI, on the Macomb–St. Clair county line. Estates, rentals, foreclosures and realtor listings. Call (810) 242-0140.",
    h1: "Property cleanouts in Richmond, MI",
    lede:
      "Richmond sits on the Macomb–St. Clair county line and is part of the Blue Water Area communities we serve from Port Huron. We empty houses for estate and probate cleanouts, rental and landlord turnovers, foreclosure work and realtors who need a property cleared before listing or closing.",
    includedHeading: "What a Richmond property cleanout includes",
    included: [
      "Whole-house, garage and outbuilding clearing when they are part of the job",
      "Estate, rental, landlord, foreclosure and pre-sale cleanouts",
      "Sorting, loading and hauling by our crew",
      "Keep items set aside; donation of usable furniture where we can",
      "An empty, swept property ready for cleaning, repairs or the market",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "We estimate Richmond cleanouts from photos or a walkthrough. There is no published price list, because volume, labor and access change from house to house.",
      "The estimate is written before we start. Call (810) 242-0140 or upload photos. Richmond is on our regular service list; send the address so we can confirm it with the request.",
    ],
    faqs: [
      {
        question: "Do you serve Richmond even though it sits on the county line?",
        answer:
          "Yes. Richmond is on our Blue Water Area service list. We work from Port Huron and take jobs in Richmond when the property is a fit. Send the address with your photos.",
      },
      {
        question: "Can landlords and realtors request a cleanout?",
        answer:
          "Yes. We can work from photos, a lockbox and a deadline. We send photos when the job is finished if you cannot be there.",
      },
      {
        question: "How quickly can you give an estimate?",
        answer:
          "Once we have photos of the rooms and outbuildings, we can usually put a written estimate together quickly. A walkthrough is only needed if the photos are not enough.",
      },
    ],
  },
  {
    citySlug: "richmond",
    kind: "hoarding-cleanouts",
    cityName: "Richmond",
    placeName: "Richmond",
    metaTitle: "Hoarding Cleanouts in Richmond, MI",
    metaDescription:
      "Discreet hoarding cleanouts in Richmond, MI. Patient crews for packed homes on the Macomb–St. Clair line. Upload photos or call (810) 242-0140.",
    h1: "Hoarding cleanouts in Richmond, MI",
    lede:
      "For hoarding and heavy-accumulation cleanouts in Richmond, we bring a discreet crew from our Port Huron base. The work is patient and judgment-free, whether you are clearing a packed family home or helping a relative who cannot do the labor alone.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Clearing packed rooms, hallways, basements and garages",
      "Sorting and setting aside items you want kept",
      "Discreet, respectful service",
      "Labor and hauling handled by our crew",
      "A written plan after photos or a walkthrough",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Hoarding cleanouts are priced from photos or a walkthrough, not a flat published fee. How packed the house is, and how the crew can move through it, drives the labor.",
      "We give you a written estimate before we start. Call (810) 242-0140 or upload photos of each room.",
    ],
    faqs: [
      {
        question: "Can someone who lives outside Richmond hire you for a family home?",
        answer:
          "Yes. Photos are enough to start an estimate, and we can arrange access with a key holder, a lockbox or a family member.",
      },
      {
        question: "Will the work be discreet?",
        answer:
          "Yes. We do not advertise the nature of the cleanout, and we treat the household as private work.",
      },
      {
        question: "What if the job is larger than one day?",
        answer:
          "We will say so in the estimate and propose a realistic schedule before any work begins.",
      },
    ],
  },
  {
    citySlug: "marine-city",
    kind: "property-cleanouts",
    cityName: "Marine City",
    placeName: "Marine City",
    metaTitle: "Property Cleanouts in Marine City, MI",
    metaDescription:
      "Property cleanouts in Marine City, MI for estates, rentals, foreclosures and realtor listings along the St. Clair River. Call (810) 242-0140.",
    h1: "Property cleanouts in Marine City, MI",
    lede:
      "Marine City is a St. Clair River community south of St. Clair, and it is on our Blue Water Area service list. We handle property cleanouts here for inherited homes, rental turnovers, foreclosure properties and realtors who need a house emptied before listing photos or closing.",
    includedHeading: "What a Marine City property cleanout includes",
    included: [
      "Whole-house clearing, including basements and garages",
      "Estate, rental, landlord, foreclosure and pre-sale cleanouts",
      "Sorting, loading and hauling by our crew",
      "Keep items set aside; usable furniture donated where we can",
      "A broom-swept property ready for cleaning, repairs or sale",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "Marine City cleanouts are estimated from photos or a walkthrough. We do not publish a standard price, because each house packs out differently.",
      "You get a written estimate before we start. Call (810) 242-0140 or upload photos of each room and the garage. Include your timeline if a listing or turnover date is set.",
    ],
    faqs: [
      {
        question: "Do you come down to Marine City from Port Huron?",
        answer:
          "Yes. Marine City is on our regular service list. Send the address and photos and we will confirm the job and the schedule in the estimate.",
      },
      {
        question: "Can you empty a house before it is listed along the river?",
        answer:
          "Yes. Pre-sale cleanouts can be timed before photographs and showings, and we can work around your realtor or contractor.",
      },
      {
        question: "Do you take rental and foreclosure cleanouts?",
        answer:
          "Yes. Landlords, property managers and asset managers can request a written estimate from photos and access instructions.",
      },
    ],
  },
  {
    citySlug: "marine-city",
    kind: "hoarding-cleanouts",
    cityName: "Marine City",
    placeName: "Marine City",
    metaTitle: "Hoarding Cleanouts in Marine City, MI",
    metaDescription:
      "Discreet hoarding cleanouts in Marine City, MI. Patient, judgment-free crews for packed river-city homes. Upload photos or call (810) 242-0140.",
    h1: "Hoarding cleanouts in Marine City, MI",
    lede:
      "Hoarding cleanouts in Marine City are handled quietly in a small river city where privacy matters. We clear packed homes with a patient crew, set aside what you want to keep, and help the property become livable, empty or ready for the next step.",
    includedHeading: "What a hoarding cleanout includes",
    included: [
      "Labor-heavy clearing of packed rooms, hallways and storage areas",
      "Garages and basements when they are part of the job",
      "Discreet, judgment-free service",
      "Sorting and setting aside requested keepsakes and paperwork",
      "Hauling completed by our crew",
    ],
    pricingHeading: "How pricing works",
    pricing: [
      "We quote hoarding cleanouts from photos or a walkthrough, not a published price list. The labor depends on how packed the home is and how we can work through it.",
      "A written estimate comes first. Call (810) 242-0140 or upload photos. If the work should be staged, we will include that in the plan.",
    ],
    faqs: [
      {
        question: "Can you keep this private in Marine City?",
        answer:
          "Yes. We work discreetly and do not draw extra attention to the nature of the job.",
      },
      {
        question: "Do I need to be at the house?",
        answer:
          "Not always. Photos can start the estimate, and we can arrange access with you before the crew arrives.",
      },
      {
        question: "What happens to items we want to keep?",
        answer:
          "Tell us what to watch for. We set those items aside instead of hauling them, and we can donate usable furniture where it is in good condition.",
      },
    ],
  },
];

export function getCityServicePage(citySlug: string, kind: string) {
  return cityServicePages.find(
    (page) => page.citySlug === citySlug && page.kind === kind,
  );
}

export function cityServicePath(page: Pick<CityServicePage, "citySlug" | "kind">) {
  return `/areas/${page.citySlug}/${page.kind}`;
}

export function cityServiceLabel(kind: CityServiceKind, cityName: string) {
  return kind === "hoarding-cleanouts"
    ? `Hoarding cleanouts in ${cityName}`
    : `Property cleanouts in ${cityName}`;
}

export function generateCityServiceParams() {
  return cityServicePages.map((page) => ({
    slug: page.citySlug,
    service: page.kind,
  }));
}

export function siblingCityService(page: CityServicePage) {
  const otherKind: CityServiceKind =
    page.kind === "property-cleanouts"
      ? "hoarding-cleanouts"
      : "property-cleanouts";
  return getCityServicePage(page.citySlug, otherKind);
}

export function nearbyCityServices(page: CityServicePage) {
  const area = getAreaPage(page.citySlug);
  const slugs = area?.nearby ?? [];
  return slugs
    .map((slug) => getCityServicePage(slug, page.kind))
    .filter((p): p is CityServicePage => Boolean(p));
}

export const pricingDisclaimer = `Estimates are free and based on the property. Cleanout services are performed by ${site.operator}.`;
