import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { PhotoCta } from "@/components/home/PhotoCta";
import { PageHero } from "@/components/PageHero";
import { Phone } from "lucide-react";
import { servicePageJsonLd } from "@/lib/schema";
import { areaPages } from "@/lib/areas";
import { getService, services, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle ?? `${service.title} in Michigan`,
    description:
      service.metaDescription ??
      `${service.short} Serving Port Huron and Michigan's Blue Water Area.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicePageJsonLd(service)),
        }}
      />
      <PageHero label="Services" title={service.title} body={service.short} />
      <section className="py-16 lg:py-24">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={service.cardImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <p className="text-[15px] leading-7 text-muted">{service.intro}</p>
            <ul className="mt-6 space-y-3">
              {service.points.map((point) => (
                <CheckItem key={point}>{point}</CheckItem>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.estimatePath}>Get a Free Estimate</Button>
              {service.faqs || service.pricing ? (
                <Button href={site.phoneHref} variant="outline">
                  <Phone className="h-4 w-4" />
                  Call {site.phone}
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
      {service.body?.length ? (
        <section className="pb-16 lg:pb-24">
          <Container className="max-w-3xl space-y-8">
            {service.body.map((block) => (
              <div key={block.heading}>
                <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">{block.heading}</h2>
                <p className="mt-3 text-[15px] leading-7 text-muted">{block.text}</p>
              </div>
            ))}
          </Container>
        </section>
      ) : null}
      {service.pricing?.length ? (
        <section className="pb-16 lg:pb-24">
          <Container className="max-w-3xl">
            <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">How pricing works</h2>
            {service.pricing.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-[15px] leading-7 text-muted">{p}</p>
            ))}
          </Container>
        </section>
      ) : null}
      {service.faqs?.length ? (
        <section className="pb-16 lg:pb-24">
          <Container className="max-w-3xl">
            <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">{service.title} questions</h2>
            <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-cream">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="px-5 py-2">
                  <summary className="cursor-pointer py-3 font-semibold text-navy">{faq.question}</summary>
                  <p className="pb-4 text-sm leading-7 text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <section className="pb-12">
        <Container className="max-w-3xl text-[15px] leading-7 text-muted">
          {service.slug === "property-cleanouts" ? (
            <>
              Property cleanouts are part of the work we do across Michigan&apos;s Blue Water Area, alongside{" "}
              <Link href="/services/estate-cleanouts" className="font-semibold text-green hover:underline">estate cleanouts</Link>,{" "}
              <Link href="/services/rental-property-cleanouts" className="font-semibold text-green hover:underline">rental cleanouts</Link>,{" "}
              <Link href="/services/pre-sale-property-cleanouts" className="font-semibold text-green hover:underline">pre-sale cleanouts</Link>{" "}
              and{" "}
              <Link href="/services/hoarding-cleanouts" className="font-semibold text-green hover:underline">hoarding cleanouts</Link>.
            </>
          ) : service.slug === "hoarding-cleanouts" ? (
            <>
              Hoarding cleanouts are part of our{" "}
              <Link href="/services/property-cleanouts" className="font-semibold text-green hover:underline">property cleanouts</Link>{" "}
              work in Michigan&apos;s Blue Water Area.
            </>
          ) : (
            <>
              Part of our full range of{" "}
              <Link href="/services/property-cleanouts" className="font-semibold text-green hover:underline">property cleanouts in Michigan</Link>.
            </>
          )}
          {" "}We serve{" "}
          {areaPages.map((area, i) => (
            <span key={area.slug}>
              {i ? ", " : ""}
              {i === areaPages.length - 1 ? "and " : ""}
              <Link href={`/areas/${area.slug}`} className="font-semibold text-green hover:underline">{area.name}</Link>
            </span>
          ))}
          .
          {service.slug === "property-cleanouts" || service.slug === "hoarding-cleanouts" ? (
            <>
              {" "}See city pages for{" "}
              <Link href={`/areas/port-huron/${service.slug}`} className="font-semibold text-green hover:underline">Port Huron</Link>,{" "}
              <Link href={`/areas/marysville/${service.slug}`} className="font-semibold text-green hover:underline">Marysville</Link>,{" "}
              <Link href={`/areas/kimball/${service.slug}`} className="font-semibold text-green hover:underline">Kimball</Link>,{" "}
              <Link href={`/areas/st-clair/${service.slug}`} className="font-semibold text-green hover:underline">St. Clair</Link>,{" "}
              <Link href={`/areas/richmond/${service.slug}`} className="font-semibold text-green hover:underline">Richmond</Link>{" "}
              and{" "}
              <Link href={`/areas/marine-city/${service.slug}`} className="font-semibold text-green hover:underline">Marine City</Link>.
            </>
          ) : null}
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
