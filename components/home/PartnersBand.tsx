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
    <section className="bg-navy py-16 text-white lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <Users className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Have Properties That Regularly Need Cleared?
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/75">
            We work with realtors, property managers, estate attorneys, and
            landlords who need a reliable crew for full-property cleanouts —
            not one-item junk pickups.
          </p>
          <div className="mt-7">
            <Button href="/partners" variant="outlineLight">
              Become a Property Partner
            </Button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {partnerValues.map((value) => {
            const Icon = icons[value.icon];
            return (
              <div key={value.title} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-extrabold">{value.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    {value.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
