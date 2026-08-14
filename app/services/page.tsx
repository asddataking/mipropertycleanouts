import type { Metadata } from "next";
import { PhotoCta } from "@/components/home/PhotoCta";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Property Cleanout Services",
  description:
    "Estate, rental, whole-home, hoarding, garage, barn, and pre-sale property cleanouts throughout Michigan's Blue Water Area.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Cleanouts for Every Type of Property"
        body="From inherited homes to rental turnovers, we clear entire properties — not just a couch and a mattress."
      />
      <ServicesGrid heading="Choose the cleanout that matches the property." />
      <PhotoCta />
    </>
  );
}
