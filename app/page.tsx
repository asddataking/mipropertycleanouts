import type { Metadata } from "next";
import { PropertyCleanoutsIntro } from "@/components/home/PropertyCleanoutsIntro";
import { BigDifference } from "@/components/home/BigDifference";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PartnersBand } from "@/components/home/PartnersBand";
import { PhotoCta } from "@/components/home/PhotoCta";
import { ServiceArea } from "@/components/home/ServiceArea";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: {
    absolute:
      "Property Cleanouts in Michigan | Estate & Home Cleanouts | MI Property Cleanouts",
  },
  description:
    "Property cleanouts in Port Huron and Michigan's Blue Water Area: estate, probate, pre-sale, rental and whole-house cleanouts. Upload photos for a free estimate or call (810) 242-0140.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PropertyCleanoutsIntro />
      <BigDifference />
      <ServicesGrid />
      <HowItWorks />
      <PartnersBand />
      <ServiceArea />
      <PhotoCta />
    </>
  );
}
