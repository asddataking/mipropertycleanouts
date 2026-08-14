import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PhotoCta } from "@/components/home/PhotoCta";
import { MichiganMap } from "@/components/MichiganMap";
import { PageHero } from "@/components/PageHero";
import { cities, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "MI Property Cleanouts serves Port Huron, Marysville, Fort Gratiot, St. Clair County, and Michigan's Blue Water Area for estate, hoarding, rental, and property cleanouts.",
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        label="Service Area"
        title="Serving Michigan's Blue Water Area"
        body="Based in Port Huron and working throughout the Thumb and surrounding communities."
      />
      <section className="py-16 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <MichiganMap className="h-auto w-full max-w-md justify-self-center" />
          <div>
            <h2 className="text-2xl font-extrabold text-navy">
              Cities and townships we regularly serve
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              If your property is nearby and not listed, still send photos. We
              cover the Blue Water Area and will tell you quickly if we can
              take the job.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-3">
              {cities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={site.estimatePath}>Request Your Estimate</Button>
            </div>
          </div>
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
