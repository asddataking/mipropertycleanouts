import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CheckItem } from "@/components/Icons";
import { PhotoCta } from "@/components/home/PhotoCta";
import { PageHero } from "@/components/PageHero";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MI Property Cleanouts is a local, veteran-owned, fully insured team for estate, probate, hoarding, rental, and foreclosure cleanouts in Michigan's Blue Water Area.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Local. Veteran-owned. Built for full-property cleanouts."
        body="MI Property Cleanouts exists for jobs that are bigger than junk removal — entire homes, estates, rentals, garages, and barns that need to be emptied."
      />
      <section className="py-16 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={images.about}
              alt="Michigan home ready for a property cleanout"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy">
              More than a pickup. We clear the property.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Families, landlords, and realtors in the Blue Water Area often
              need a whole house emptied — not a single item hauled away. We
              bring the crew, the labor, and the hauling so the property is
              empty and ready for what comes next.
            </p>
            <ul className="mt-6 space-y-3">
              <CheckItem>Local to Port Huron and the Blue Water Area</CheckItem>
              <CheckItem>Veteran-owned and fully insured</CheckItem>
              <CheckItem>
                Estate, rental, hoarding, garage, barn, and pre-sale cleanouts
              </CheckItem>
              <CheckItem>
                Cleanout services performed by {site.operator}
              </CheckItem>
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
