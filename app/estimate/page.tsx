import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";

export const metadata: Metadata = {
  title: "Get a Free Estimate",
  description:
    "Upload photos or request a walkthrough for a property cleanout estimate in Michigan's Blue Water Area.",
  alternates: {
    canonical: "/estimate",
  },
};

export default function EstimatePage() {
  return (
    <>
      <section className="bg-navy py-6 text-white lg:py-10">
        <Container className="max-w-4xl">
          <h1 className="font-serif text-2xl font-medium leading-tight sm:text-4xl">
            Free property cleanout estimate
          </h1>
          <p className="mt-2 text-[15px] leading-6 text-white/80">
            Add a few photos below and we&apos;ll send a clear estimate. No obligation.
          </p>
        </Container>
      </section>
      <section className="py-4 lg:py-12">
        <Container className="max-w-4xl">
          <GhlFormEmbed />
        </Container>
      </section>
    </>
  );
}
