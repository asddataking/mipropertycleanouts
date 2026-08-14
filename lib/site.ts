export const site = {
  name: "MI Property Cleanouts",
  legalName: "MI Property Cleanouts",
  tagline: "Michigan Property & Estate Cleanout Specialists",
  shortTagline: "Estate, home, rental & property cleanouts throughout Michigan's Blue Water Area.",
  description:
    "Estate, home, rental, and property cleanouts throughout Michigan's Blue Water Area. We empty properties so they are ready for cleaning, repairs, sale, or the next tenant.",
  url: "https://mipropertycleanouts.com",
  phone: "(810) 241-0000",
  phoneHref: "tel:+18102410000",
  email: "info@mipropertycleanouts.com",
  location: "Port Huron, MI",
  operator: "Junk Command of MI",
  estimatePath: "/estimate",
  ghlFormId: "dWTCBGKCP4xzN2lCjyCp",
  ghlFormUrl: "https://api.leadconnectorhq.com/widget/form/dWTCBGKCP4xzN2lCjyCp",
  ghlFormIframeId: "inline-dWTCBGKCP4xzN2lCjyCp",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", children: true },
  { href: "/services/estate-cleanouts", label: "Estate Cleanouts" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/about", label: "About Us" },
] as const;

export const footerQuickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/estate-cleanouts", label: "Estate Cleanouts" },
  { href: "/areas", label: "Areas We Serve" },
  { href: "/about", label: "About Us" },
  { href: "/partners", label: "Property Partners" },
  { href: "/faq", label: "FAQ" },
] as const;

export const heroChecks = [
  "Estate Cleanouts",
  "Whole-Home Cleanouts",
  "Rental & Move-Out Cleanouts",
  "Garage, Basement & Barn Cleanouts",
] as const;

export const differencePoints = [
  "They're an entire basement.",
  "A packed garage.",
  "A house that has to be emptied before it can be sold, rented, or passed on.",
  "A property that is more than a couch and a mattress.",
] as const;

export const howItWorks = [
  {
    title: "Show Us the Property",
    body: "Upload photos or schedule a walkthrough so we can see what you're dealing with.",
    icon: "camera" as const,
  },
  {
    title: "Get a Clear Estimate",
    body: "We'll assess the amount of material, labor, and hauling required.",
    icon: "file" as const,
  },
  {
    title: "We Clear It Out",
    body: "Our crew handles the lifting, loading, and removal.",
    icon: "truck" as const,
  },
  {
    title: "Property Ready",
    body: "You get an emptied-out property ready for cleaning, repairs, sale, or its next tenant.",
    icon: "home" as const,
  },
] as const;

export const partnerValues = [
  {
    title: "Reliable & Professional",
    body: "We show up ready, communicate clearly, and finish the job.",
    icon: "handshake" as const,
  },
  {
    title: "Fully Insured",
    body: "Crew and work are covered so partners and property owners are protected.",
    icon: "shield" as const,
  },
  {
    title: "Respectful & Discreet",
    body: "Estates, rentals, and occupied properties are treated with care.",
    icon: "heart" as const,
  },
  {
    title: "Local & Veteran-Owned",
    body: "A Blue Water Area team that knows the work and the communities we serve.",
    icon: "star" as const,
  },
] as const;

export const cities = [
  "Port Huron",
  "Marysville",
  "Fort Gratiot",
  "St. Clair",
  "Marine City",
  "Kimball",
  "Burtchville",
  "China Township",
  "East China",
  "Ira Township",
  "Algonac",
  "Capac",
  "Yale",
  "Memphis",
  "Emmett",
  "Richmond",
  "New Baltimore",
  "St. Clair Township",
] as const;

export type ServiceIcon =
  | "home"
  | "key"
  | "boxes"
  | "users"
  | "barn"
  | "tag";

export type Service = {
  slug: string;
  title: string;
  short: string;
  cardImage: string;
  icon: ServiceIcon;
  intro: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "estate-cleanouts",
    title: "Estate Cleanouts",
    short:
      "Clear inherited homes with care so families can settle the property, not the clutter.",
    cardImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    icon: "home",
    intro:
      "When a home is left behind, families need the property emptied so it can be sold, transferred, or prepared for the next chapter. We handle full estate cleanouts throughout Michigan's Blue Water Area.",
    points: [
      "Whole-house, attic, basement, garage, and outbuilding cleanouts",
      "Sorting, loading, and hauling handled by our crew",
      "Discreet, respectful work on occupied or vacant estates",
      "Property left empty and ready for cleaning, repairs, or listing",
    ],
  },
  {
    slug: "rental-property-cleanouts",
    title: "Rental Property Cleanouts",
    short:
      "Turn over rentals fast after move-outs, evictions, or abandoned units.",
    cardImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    icon: "key",
    intro:
      "Vacant rentals cost money. We clear leftover furniture, trash, and belongings so the unit is ready for cleaning, repairs, and the next tenant.",
    points: [
      "Move-out, eviction, and abandoned-unit cleanouts",
      "Single rooms or entire properties",
      "Reliable scheduling for property managers and landlords",
      "Emptied units ready for turnover",
    ],
  },
  {
    slug: "whole-home-cleanouts",
    title: "Whole-Home Cleanouts",
    short:
      "Full-property clearing when a house needs to be emptied from top to bottom.",
    cardImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    icon: "boxes",
    intro:
      "Some jobs are not a pickup. They are the entire house. We clear rooms, closets, attics, basements, and garages so the property is empty and usable again.",
    points: [
      "Every room, closet, attic, and basement",
      "Furniture, household goods, debris, and leftover belongings",
      "Crew does the lifting, loading, and hauling",
      "Home left ready for the next step",
    ],
  },
  {
    slug: "hoarding-cleanouts",
    title: "Hoarding Cleanouts",
    short:
      "Discreet, careful clearing of heavily packed homes and properties.",
    cardImage:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
    icon: "users",
    intro:
      "Hoarding and heavy-accumulation cleanouts take patience, labor, and a crew that treats the property and the people involved with respect. That is the work we are built for.",
    points: [
      "Packed rooms, hallways, garages, and outbuildings",
      "Judgment-free, discreet service",
      "Labor-heavy jobs that standard junk pickup cannot handle",
      "Progress toward a livable, empty, or sale-ready property",
    ],
  },
  {
    slug: "garage-barn-cleanouts",
    title: "Garage & Barn Cleanouts",
    short:
      "Clear packed garages, barns, sheds, and outbuildings down to the floor.",
    cardImage:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    icon: "barn",
    intro:
      "Garages, barns, and sheds fill up for years. We empty them so you can park again, sell the property, or put the building back to work.",
    points: [
      "Garages, barns, sheds, pole barns, and storage buildings",
      "Tools, furniture, debris, and leftover materials",
      "Access-aware loading and hauling",
      "Cleared space ready for use or sale",
    ],
  },
  {
    slug: "pre-sale-property-cleanouts",
    title: "Pre-Sale Property Cleanouts",
    short:
      "Empty a house before listing so buyers see the property, not the leftover stuff.",
    cardImage:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    icon: "tag",
    intro:
      "Listings stall when a house is still full. We clear the property before photos, showings, or closing so the home is empty and easier to sell.",
    points: [
      "Pre-listing and pre-closing cleanouts",
      "Whole-home, garage, and outbuilding clearing",
      "Work timed around realtor and seller schedules",
      "Property ready for cleaning, staging, or sale",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const faqs = [
  {
    question: "How do I get a free estimate?",
    answer:
      "Use the estimate form to tell us about the property and upload photos. We review the job and send a clear estimate — no obligation.",
  },
  {
    question: "What is a property cleanout versus junk removal?",
    answer:
      "Junk removal is often a couch, mattress, or a few items. A property cleanout is emptying a house, estate, rental, garage, or barn so the property is ready for cleaning, repairs, sale, or the next tenant.",
  },
  {
    question: "Do I need to be at the property?",
    answer:
      "Not always. Photos or a walkthrough are enough to start an estimate. If access is needed on job day, we will coordinate that with you before we arrive.",
  },
  {
    question: "What kinds of jobs do you take?",
    answer:
      "Estate cleanouts, whole-home cleanouts, rental and move-out cleanouts, hoarding cleanouts, garage and barn cleanouts, and pre-sale property cleanouts throughout Michigan's Blue Water Area.",
  },
  {
    question: "Are you local and insured?",
    answer:
      "Yes. We are a local, veteran-owned, fully insured team based in Port Huron, serving the Blue Water Area. Cleanout services are performed by Junk Command of MI.",
  },
  {
    question: "How long does a cleanout take?",
    answer:
      "It depends on the size of the property and how packed it is. After we see photos or walk the job, we will tell you what the crew and timeline look like.",
  },
  {
    question: "Do you serve my city?",
    answer:
      "We serve Port Huron, Marysville, Fort Gratiot, St. Clair, Marine City, and the surrounding Blue Water Area. If you are nearby and not sure, send the estimate form and we will let you know.",
  },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=2000&q=80",
  difference:
    "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=80",
  about:
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80",
} as const;
