import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionLabel } from "@/components/Container";
import { services } from "@/lib/site";

export function ServicesGrid({
  heading = "Cleanouts for every type of property.",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-band py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-navy sm:text-5xl">
            {heading}
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`group overflow-hidden rounded-[1.75rem] bg-cream shadow-[0_18px_40px_-28px_rgba(44,42,36,0.4)] transition duration-300 hover:-translate-y-1 ${
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[16/8] sm:aspect-[16/7]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={service.cardImage}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 66vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              </div>
              <div className="flex items-start justify-between gap-4 px-6 py-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-navy group-hover:text-orange">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{service.short}</p>
                </div>
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange text-navy">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
