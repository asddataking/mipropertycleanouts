import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { PhotoCta } from "@/components/home/PhotoCta";
import { getAreaPage } from "@/lib/areas";
import {
  cityServiceLabel,
  cityServicePath,
  generateCityServiceParams,
  getCityServicePage,
  nearbyCityServices,
  siblingCityService,
} from "@/lib/city-services";
import { cityServiceJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return generateCityServiceParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, service } = await params;
  const page = getCityServicePage(slug, service);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: cityServicePath(page) },
    openGraph: {
      title: `${page.metaTitle} | ${site.name}`,
      description: page.metaDescription,
      url: `${site.url}${cityServicePath(page)}`,
    },
  };
}

export default async function CityServicePage({ params }: Props) {
  const { slug, service } = await params;
  const page = getCityServicePage(slug, service);
  const area = getAreaPage(slug);
  if (!page || !area) notFound();

  const sibling = siblingCityService(page);
  const nearby = nearbyCityServices(page);
  const parentService =
    page.kind === "hoarding-cleanouts"
      ? { href: "/services/hoarding-cleanouts", label: "Hoarding cleanouts" }
      : { href: "/services/property-cleanouts", label: "Property cleanouts" };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cityServiceJsonLd(page, area.geo)),
        }}
      />
      <section className="bg-navy py-10 text-white lg:py-16">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-white">Areas We Serve</Link>
            <span className="mx-2">/</span>
            <Link href={`/areas/${page.citySlug}`} className="hover:text-white">{page.cityName}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">
              {page.kind === "hoarding-cleanouts" ? "Hoarding cleanouts" : "Property cleanouts"}
            </span>
          </nav>
          <h1 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-white/80">{page.lede}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={site.estimatePath}>
              <Camera className="h-4 w-4" />
              Upload Photos for a Free Estimate
            </Button>
            <Button href={site.phoneHref} variant="outlineLight">
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                {page.includedHeading}
              </h2>
              <ul className="mt-5 space-y-3">
                {page.included.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                {page.pricingHeading}
              </h2>
              {page.pricing.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-[15px] leading-7 text-muted">{p}</p>
              ))}
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                {page.cityName} questions
              </h2>
              <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-cream">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="px-5 py-2">
                    <summary className="cursor-pointer py-3 font-semibold text-navy">{faq.question}</summary>
                    <p className="pb-4 text-sm leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <p className="text-[15px] leading-7 text-muted">
              Learn more about our{" "}
              <Link href={parentService.href} className="font-semibold text-green hover:underline">
                {parentService.label}
              </Link>
              {sibling ? (
                <>
                  {" "}or see{" "}
                  <Link href={cityServicePath(sibling)} className="font-semibold text-green hover:underline">
                    {cityServiceLabel(sibling.kind, sibling.cityName)}
                  </Link>
                </>
              ) : null}
              . Cleanout services are performed by {site.operator}.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h2 className="font-serif text-xl text-navy">{site.name}</h2>
              <p className="mt-2 text-sm text-muted">{site.location}</p>
              <a href={site.phoneHref} className="mt-2 block text-lg font-bold text-navy">{site.phone}</a>
              <p className="mt-4 text-sm text-muted">
                Serving {page.placeName}, Michigan. Free estimates from photos.
              </p>
              <div className="mt-5 space-y-3">
                <Button href={site.estimatePath} className="w-full">Get a Free Estimate</Button>
                <Button href={site.phoneHref} variant="outline" className="w-full">
                  <Phone className="h-4 w-4" />
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <h2 className="font-serif text-xl text-navy">More in {page.cityName}</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href={`/areas/${page.citySlug}`} className="font-semibold text-green hover:underline">
                    All {page.cityName} cleanout pages
                  </Link>
                </li>
                {sibling ? (
                  <li>
                    <Link href={cityServicePath(sibling)} className="font-semibold text-green hover:underline">
                      {cityServiceLabel(sibling.kind, sibling.cityName)}
                    </Link>
                  </li>
                ) : null}
                <li>
                  <Link href="/services/property-cleanouts" className="font-semibold text-green hover:underline">
                    Property cleanouts
                  </Link>
                </li>
                <li>
                  <Link href="/services/hoarding-cleanouts" className="font-semibold text-green hover:underline">
                    Hoarding cleanouts
                  </Link>
                </li>
              </ul>
            </div>
            {nearby.length ? (
              <div className="rounded-2xl border border-line p-6">
                <h2 className="font-serif text-xl text-navy">Nearby cities</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {nearby.map((n) => (
                    <li key={`${n.citySlug}-${n.kind}`}>
                      <Link href={cityServicePath(n)} className="font-semibold text-green hover:underline">
                        {cityServiceLabel(n.kind, n.cityName)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
