import Image from "next/image";
import { Container, SectionLabel } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { differencePoints, images } from "@/lib/site";

export function BigDifference() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src={images.difference}
            alt="Packed room ready for a full property cleanout"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <SectionLabel>The Big Difference</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            More Than Junk Removal. We specialize in clearing properties.
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">
            Some jobs aren&apos;t a couch and a mattress.
          </p>
          <ul className="mt-5 space-y-3">
            {differencePoints.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
          <p className="mt-6 text-lg font-extrabold text-navy">
            That&apos;s what MI Property Cleanouts is built for.
          </p>
        </div>
      </Container>
    </section>
  );
}
