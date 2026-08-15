import { Container, SectionLabel } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { ParallaxImage } from "@/components/ParallaxImage";
import { differencePoints, images } from "@/lib/site";

export function BigDifference() {
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[4/3] lg:aspect-[4/5]">
            <ParallaxImage
              src={images.difference}
              alt="Packed room ready for a full property cleanout"
              sizes="(min-width: 1024px) 50vw, 100vw"
              speed={0.22}
            />
          </div>
          <div
            className="absolute -bottom-5 -right-4 hidden h-28 w-28 rounded-[1.5rem] bg-orange lg:block"
            aria-hidden="true"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionLabel>The Big Difference</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-navy sm:text-5xl">
            More than junk removal. We clear the whole property.
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-muted">
            Some jobs aren&apos;t a couch and a mattress.
          </p>
          <ul className="mt-6 space-y-3">
            {differencePoints.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
          <p className="mt-8 font-serif text-2xl font-medium text-green">
            That&apos;s what MI Property Cleanouts is built for.
          </p>
        </div>
      </Container>
    </section>
  );
}
