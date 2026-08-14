import type { Metadata } from "next";
import Image from "next/image";
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
    title: `${service.title} in Michigan`,
    description: `${service.short} Serving Port Huron and Michigan's Blue Water Area.`,
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
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
      <PhotoCta />
    </>
  );
}
