import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MichiganMap } from "@/components/MichiganMap";
import { cities } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="bg-band py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center">
          <MichiganMap className="h-auto w-full max-w-md" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Serving Michigan&apos;s Blue Water Area.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Based in Port Huron and serving the Thumb and surrounding
            communities. If the property is in the Blue Water Area, we can
            likely clear it.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-navy sm:grid-cols-3">
            {cities.slice(0, 9).map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/areas" variant="outlineDark">
              View All Service Areas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
