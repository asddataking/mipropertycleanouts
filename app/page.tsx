import { BigDifference } from "@/components/home/BigDifference";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PartnersBand } from "@/components/home/PartnersBand";
import { PhotoCta } from "@/components/home/PhotoCta";
import { ServiceArea } from "@/components/home/ServiceArea";
import { ServicesGrid } from "@/components/home/ServicesGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BigDifference />
      <ServicesGrid />
      <HowItWorks />
      <PartnersBand />
      <ServiceArea />
      <PhotoCta />
    </>
  );
}
