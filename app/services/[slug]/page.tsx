import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { PhotoCta } from "@/components/home/PhotoCta";
import { PageHero } from "@/components/PageHero";
import { serviceJsonLd } from "@/lib/schema";
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
          __html: JSON.stringify(serviceJsonLd(service)),
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
            <div className="mt-8">
              <Button href={site.estimatePath}>Get a Free Estimate</Button>
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
      <section className="pb-12">
        <Container className="max-w-3xl text-[15px] leading-7 text-muted">
          Part of our full range of{" "}
          <Link href="/" className="font-semibold text-green hover:underline">property cleanouts in Michigan</Link>
          . We serve{" "}
          <Link href="/areas/port-huron" className="font-semibold text-green hover:underline">Port Huron</Link>,{" "}
          <Link href="/areas/marysville" className="font-semibold text-green hover:underline">Marysville</Link>,{" "}
          <Link href="/areas/fort-gratiot" className="font-semibold text-green hover:underline">Fort Gratiot</Link> and{" "}
          <Link href="/areas/st-clair" className="font-semibold text-green hover:underline">St. Clair</Link>.
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
