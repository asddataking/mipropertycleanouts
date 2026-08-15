import type { Metadata } from "next";
import { Handshake, Heart, Shield, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PhotoCta } from "@/components/home/PhotoCta";
import { PageHero } from "@/components/PageHero";
import { partnerValues, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Partners",
  description:
    "Work with MI Property Cleanouts for recurring estate, rental, and pre-sale property cleanouts in Michigan's Blue Water Area.",
};

const icons = {
  handshake: Handshake,
  shield: Shield,
  heart: Heart,
  star: Star,
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Property Partners"
        title="Have properties that regularly need cleared?"
        body="Realtors, property managers, estate attorneys, and landlords use MI Property Cleanouts when a house, unit, or outbuilding has to be emptied."
      />
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {partnerValues.map((value) => {
              const Icon = icons[value.icon];
              return (
                <div
                  key={value.title}
                  className="rounded-[1.75rem] border border-line bg-cream p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-serif text-2xl font-medium text-navy">
                    {value.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {value.body}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 rounded-[2rem] bg-band p-8 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight text-navy">
              Ready to send us a property?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
              Share photos or a walkthrough and we will put together a clear
              estimate. Recurring partners get a crew that already knows how
              you work.
            </p>
            <div className="mt-6">
              <Button href={site.estimatePath}>Become a Property Partner</Button>
            </div>
          </div>
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
