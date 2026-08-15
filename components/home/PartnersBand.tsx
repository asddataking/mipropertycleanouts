import { Handshake, Heart, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { partnerValues } from "@/lib/site";

const icons = {
  handshake: Handshake,
  shield: Shield,
  heart: Heart,
  star: Star,
};

export function PartnersBand() {
  return (
    <section className="relative overflow-hidden bg-green py-20 text-cream lg:py-24">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-orange/15 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange text-cream">
            <Users className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Have properties that regularly need cleared?
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-8 text-cream/80">
            We work with realtors, property managers, estate attorneys, and
            landlords who need a reliable crew for full-property cleanouts —
            not one-item junk pickups.
          </p>
          <div className="mt-8">
            <Button href="/partners" variant="outlineLight">
              Become a Property Partner
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {partnerValues.map((value) => {
            const Icon = icons[value.icon];
            return (
              <div
                key={value.title}
                className="rounded-3xl border border-cream/15 bg-cream/5 p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange/90 text-cream">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-medium">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/70">{value.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
