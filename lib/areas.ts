export type AreaFaq = { question: string; answer: string };

export type AreaPage = {
  slug: string;
  name: string;
  /** Name used in schema and headings */
  placeName: string;
  zips: string[];
  geo: { latitude: number; longitude: number };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lede: string;
  sections: { heading: string; body: string[] }[];
  localNotes: string[];
  faqs: AreaFaq[];
  nearby: string[];
};

/**
 * City pages for estate and pre-sale cleanouts. Local references are limited to
 * well-documented places; nothing here claims a job address or a review.
 */
export const areaPages: AreaPage[] = [
  {
    slug: "port-huron",
    name: "Port Huron",
    placeName: "Port Huron",
    zips: ["48060"],
    geo: { latitude: 42.9709, longitude: -82.4249 },
    metaTitle: "Estate & Property Cleanouts in Port Huron, MI",
    metaDescription:
      "Estate, probate and pre-sale property cleanouts in Port Huron, MI. We empty inherited homes, rentals and houses before listing. Upload photos for a free estimate or call (810) 242-0140.",
    h1: "Estate & property cleanouts in Port Huron, MI",
    lede:
      "Port Huron is our home base. When a family home needs to be emptied after a loss, or a house has to be cleared before it goes on the market, our crew handles the whole property so you can focus on the estate, the sale, and your family.",
    sections: [
      {
        heading: "Estate cleanouts for Port Huron families",
        body: [
          "Many of the estates we clear in Port Huron are older two-story homes with full basements, detached garages, and decades of belongings. We work room by room, set aside anything you flag to keep (photos, paperwork, heirlooms), separate donation-worthy furniture, and haul the rest.",
          "If the estate is going through the St. Clair County Probate Court in Port Huron, we can work on the schedule your attorney or personal representative needs and leave the house empty and broom-swept for the appraisal, the buyer, or the next owner.",
        ],
      },
      {
        heading: "Pre-sale cleanouts before you list",
        body: [
          "Listings photograph and show better when the house is empty or nearly empty. We coordinate with your realtor on timing, clear everything that is not staying, and finish before the photographer arrives.",
          "Selling a rental or a house you have been out of for a while? Send photos of each room and we will give you a single, clear estimate for the whole property.",
        ],
      },
    ],
    localNotes: [
      "Home base: Port Huron, St. Clair County",
      "Neighborhoods we work in often: the South Park area, Old Town, and the neighborhoods along Pine Grove Avenue and Military Street",
      "Estate timing can be coordinated with probate matters handled at the St. Clair County courthouse in Port Huron",
    ],
    faqs: [
      {
        question: "Can you clear a Port Huron estate while we are out of town?",
        answer:
          "Yes. Many families we help live elsewhere. Photos or a video walkthrough are enough to estimate, and we can work with a lockbox, a neighbor, or your realtor for access.",
      },
      {
        question: "Do you set aside paperwork and valuables?",
        answer:
          "Yes. Tell us what to watch for, such as documents, photos, jewelry, or specific furniture, and we will set it aside instead of hauling it.",
      },
      {
        question: "How soon can you start a pre-sale cleanout in Port Huron?",
        answer:
          "Port Huron is our home base, so we can usually schedule quickly. Send photos and your listing date and we will build the job around it.",
      },
    ],
    nearby: ["fort-gratiot", "marysville", "st-clair"],
  },
  {
    slug: "marysville",
    name: "Marysville",
    placeName: "Marysville",
    zips: ["48040"],
    geo: { latitude: 42.9125, longitude: -82.4869 },
    metaTitle: "Estate & Pre-Sale Cleanouts in Marysville, MI",
    metaDescription:
      "Estate and pre-sale property cleanouts in Marysville, MI. Ranch homes, basements and garages emptied before listing or after a loss. Free photo estimate, (810) 242-0140.",
    h1: "Estate & pre-sale cleanouts in Marysville, MI",
    lede:
      "Marysville is full of well-kept ranch homes and family houses that have been in the same hands for decades. When it is time to sell or settle an estate, we clear the house, the basement, and the garage so it is ready for the next step.",
    sections: [
      {
        heading: "Downsizing and estate cleanouts",
        body: [
          "A lot of our Marysville work starts with a parent moving to a smaller home or senior living. We help the family take what is going with them, then clear the rest: furniture, basement storage, garage tools, and the attic.",
          "When the home is part of an estate, we leave it empty and swept so it can be appraised, listed, or handed over without another weekend of hauling.",
        ],
      },
      {
        heading: "Getting a Marysville home ready to list",
        body: [
          "Buyers in Marysville expect move-in-ready homes. We clear out the last of the contents before photos and showings, and we can work around a contractor or cleaning crew that is coming in after us.",
        ],
      },
    ],
    localNotes: [
      "City of Marysville, St. Clair County, along the St. Clair River south of Port Huron",
      "Neighborhoods we work in often: homes off Gratiot Boulevard, Busha Highway, and the residential streets near the riverfront",
      "Close enough to Port Huron that same-week scheduling is common",
    ],
    faqs: [
      {
        question: "Can you help my parents downsize before they move?",
        answer:
          "Yes. We can do the clear-out after the movers leave, or work alongside them. You decide what goes, and we handle everything else.",
      },
      {
        question: "Will you empty the garage and shed too?",
        answer:
          "Yes. Garages, sheds, and outbuildings are part of a whole-property estimate. Include photos of them with your request.",
      },
      {
        question: "Do you donate usable furniture?",
        answer:
          "When items are in good condition we donate them where we can, and we recycle metal. The rest is disposed of properly.",
      },
    ],
    nearby: ["port-huron", "st-clair", "fort-gratiot"],
  },
  {
    slug: "fort-gratiot",
    name: "Fort Gratiot",
    placeName: "Fort Gratiot Township",
    zips: ["48059"],
    geo: { latitude: 43.0214, longitude: -82.4488 },
    metaTitle: "Estate & Property Cleanouts in Fort Gratiot, MI",
    metaDescription:
      "Estate, cottage and pre-sale property cleanouts in Fort Gratiot Township, MI. Lake Huron homes, basements and outbuildings cleared. Free estimate from photos, (810) 242-0140.",
    h1: "Estate & property cleanouts in Fort Gratiot, MI",
    lede:
      "Fort Gratiot Township stretches north from Port Huron along Lake Huron, with lakeside homes, subdivisions, and larger lots with outbuildings. We clear estates and get properties ready for sale, including the pole barns and sheds that come with them.",
    sections: [
      {
        heading: "Lake homes, cottages and larger lots",
        body: [
          "Properties along Lakeshore Road (M-25) and the streets toward the lake often come with seasonal storage, boats and trailers, and an outbuilding or two. We include all of it in one estimate so nothing gets left behind.",
          "For estates, we work through the house first, then the garage and outbuildings, setting aside anything the family wants to keep.",
        ],
      },
      {
        heading: "Pre-sale cleanouts in Fort Gratiot",
        body: [
          "A lake-area listing sells on the view and the space. We empty the rooms, clear the yard of old furniture and debris, and leave the property ready for photos.",
        ],
      },
    ],
    localNotes: [
      "Fort Gratiot Township, St. Clair County, on the Lake Huron shoreline north of Port Huron",
      "Areas we work in often: homes along Lakeshore Road (M-25), Krafft Road, and the subdivisions near Birchwood Mall",
      "Outbuildings, pole barns and sheds can be included in the same estimate",
    ],
    faqs: [
      {
        question: "Can you clear a cottage that has been closed up for years?",
        answer:
          "Yes. Send photos of each room and any outbuildings. We will tell you the crew size and timeline before we schedule.",
      },
      {
        question: "Do you clean out pole barns and sheds?",
        answer:
          "Yes. Pole barns, sheds, and detached garages are common on Fort Gratiot properties, and we price them with the rest of the job.",
      },
      {
        question: "Do I need to be there on cleanout day?",
        answer:
          "Not necessarily. We can work with a lockbox or a key holder, and we send photos when the job is finished.",
      },
    ],
    nearby: ["port-huron", "marysville", "st-clair"],
  },
  {
    slug: "st-clair",
    name: "St. Clair",
    placeName: "St. Clair",
    zips: ["48079"],
    geo: { latitude: 42.8209, longitude: -82.4863 },
    metaTitle: "Estate & Pre-Sale Cleanouts in St. Clair, MI",
    metaDescription:
      "Estate and pre-sale property cleanouts in St. Clair, MI. Riverfront and in-town homes emptied for sale, probate or a new owner. Upload photos for a free estimate, (810) 242-0140.",
    h1: "Estate & pre-sale cleanouts in St. Clair, MI",
    lede:
      "St. Clair's riverfront and historic in-town homes are some of the most sought-after in the county. When one is being sold or settled, we clear it carefully so it shows the way it should.",
    sections: [
      {
        heading: "Careful cleanouts for older homes",
        body: [
          "Many St. Clair homes near downtown have narrow staircases, plaster walls, and original woodwork. Our crew protects floors and railings and carries everything out by hand.",
          "For estates, we sort as we go, with keep, donate, and dispose piles, so the family can make decisions without another trip to the house.",
        ],
      },
      {
        heading: "Pre-sale cleanouts along the river",
        body: [
          "Before a St. Clair listing goes live, we empty the rooms, the basement, and the garage, and we can work around stagers, painters, and cleaners.",
        ],
      },
    ],
    localNotes: [
      "City of St. Clair, St. Clair County, on the St. Clair River",
      "Areas we work in often: in-town homes near downtown and Palmer Park, and riverfront streets north and south of the city",
      "We also serve St. Clair Township properties outside the city limits",
    ],
    faqs: [
      {
        question: "Can you protect original floors and woodwork?",
        answer:
          "Yes. We use floor protection and carry items out by hand. Let us know about anything fragile when you send photos.",
      },
      {
        question: "Can you coordinate with my realtor and stager?",
        answer:
          "Yes. We schedule around photo dates and staging and can finish in a single visit for most homes.",
      },
      {
        question: "Do you serve St. Clair Township too?",
        answer:
          "Yes. We work in the city and the surrounding township. Send the address with your estimate request.",
      },
    ],
    nearby: ["marysville", "port-huron", "fort-gratiot"],
  },
];

export function getAreaPage(slug: string) {
  return areaPages.find((page) => page.slug === slug);
}
