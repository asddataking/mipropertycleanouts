import { Button } from "@/components/Button";
import { Container, SectionLabel } from "@/components/Container";
import { MichiganMap } from "@/components/MichiganMap";
import { cities } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="bg-band py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center rounded-[2rem] bg-cream p-6">
          <MichiganMap className="h-auto w-full max-w-md" />
        </div>
        <div>
          <SectionLabel>Service Area</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-navy sm:text-5xl">
            Serving Michigan&apos;s Blue Water Area.
          </h2>
          <p className="mt-5 text-[16px] leading-8 text-muted">
            Based in Port Huron and serving the Thumb and surrounding
            communities. If the property is in the Blue Water Area, we can
            likely clear it.
          </p>
          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-3">
            {cities.slice(0, 9).map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href="/areas" variant="outlineDark">
              View All Service Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
