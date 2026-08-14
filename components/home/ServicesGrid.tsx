import Image from "next/image";
import Link from "next/link";
import { Container, SectionLabel } from "@/components/Container";
import { CircleIcon, ServiceGlyph } from "@/components/Icons";
import { services } from "@/lib/site";

export function ServicesGrid({
  heading = "Cleanouts for Every Type of Property.",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-band py-16 lg:py-24">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            {heading}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-sm bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <CircleIcon className="absolute -bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 shadow-md">
                  <ServiceGlyph name={service.icon} />
                </CircleIcon>
              </div>
              <div className="px-6 pb-7 pt-10 text-center">
                <h3 className="text-lg font-extrabold text-navy group-hover:text-green">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {service.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
