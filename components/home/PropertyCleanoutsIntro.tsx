import Link from "next/link";
import { Container } from "@/components/Container";

export function PropertyCleanoutsIntro() {
  return (
    <section className="py-14 lg:py-20">
      <Container className="max-w-3xl">
        <h2 className="font-serif text-3xl font-medium leading-tight text-navy sm:text-4xl">
          Property cleanouts in Michigan&apos;s Blue Water Area
        </h2>
        <p className="mt-4 text-[16px] leading-8 text-muted">
          A property cleanout is more than junk pickup. It means emptying an
          entire house, estate, rental, garage or barn so the property is ready
          for cleaning, repairs, sale or the next tenant. Our local,
          veteran-owned crew handles the sorting, lifting, loading and hauling.
        </p>
        <p className="mt-4 text-[16px] leading-8 text-muted">
          Most of our work is{" "}
          <Link href="/services/property-cleanouts" className="font-semibold text-green hover:underline">property cleanouts</Link>,{" "}
          <Link href="/services/estate-cleanouts" className="font-semibold text-green hover:underline">estate cleanouts</Link>,{" "}
          <Link href="/services/pre-sale-property-cleanouts" className="font-semibold text-green hover:underline">pre-sale cleanouts</Link>,{" "}
          <Link href="/services/rental-property-cleanouts" className="font-semibold text-green hover:underline">rental property cleanouts</Link>,{" "}
          <Link href="/services/whole-home-cleanouts" className="font-semibold text-green hover:underline">whole-house cleanouts</Link>
          {" "}and{" "}
          <Link href="/services/hoarding-cleanouts" className="font-semibold text-green hover:underline">hoarding cleanouts</Link>{" "}
          in{" "}
          <Link href="/areas/port-huron" className="font-semibold text-green hover:underline">Port Huron</Link>,{" "}
          <Link href="/areas/marysville" className="font-semibold text-green hover:underline">Marysville</Link>,{" "}
          <Link href="/areas/fort-gratiot" className="font-semibold text-green hover:underline">Fort Gratiot</Link>,{" "}
          <Link href="/areas/st-clair" className="font-semibold text-green hover:underline">St. Clair</Link>,{" "}
          <Link href="/areas/kimball" className="font-semibold text-green hover:underline">Kimball</Link>,{" "}
          <Link href="/areas/richmond" className="font-semibold text-green hover:underline">Richmond</Link>{" "}
          and{" "}
          <Link href="/areas/marine-city" className="font-semibold text-green hover:underline">Marine City</Link>.
        </p>
      </Container>
    </section>
  );
}
