import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description:
    "Upload photos or request a walkthrough for a property cleanout estimate in Michigan's Blue Water Area.",
};

export default function EstimatePage() {
  return (
    <>
      <PageHero
        label="Free Estimate"
        title="Show us the property. We'll put together a clear estimate."
        body="Upload photos or tell us what you're dealing with. No obligation. Local Michigan service."
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-4xl">
          <GhlFormEmbed />
        </Container>
      </section>
    </>
  );
}
