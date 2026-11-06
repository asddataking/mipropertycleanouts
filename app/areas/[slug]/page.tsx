import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MapEmbed } from "@/components/MapEmbed";
import { PhotoCta } from "@/components/home/PhotoCta";
import { areaPages, getAreaPage } from "@/lib/areas";
import { areaJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getAreaPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/areas/${page.slug}` },
    openGraph: {
      title: `${page.metaTitle} | ${site.name}`,
      description: page.metaDescription,
      url: `${site.url}/areas/${page.slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const page = getAreaPage(slug);
  if (!page) notFound();

  const nearby = page.nearby
    .map((s) => getAreaPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd(page)) }}
      />
      <section className="bg-navy py-10 text-white lg:py-16">
        <Container className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/areas" className="hover:text-white">Areas We Serve</Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{page.name}</span>
          </nav>
          <h1 className="mt-3 font-serif text-3xl font-medium leading-tight sm:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-4 text-[16px] leading-7 text-white/80">{page.lede}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={site.estimatePath}>
              <Camera className="h-4 w-4" />
              Upload Photos for a Free Estimate
            </Button>
            <Button href={site.phoneHref} variant="outlineLight">
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            {page.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-7 text-muted">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div>
              <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                Cleanout services in {page.name}
              </h2>
              <ul className="mt-4 grid gap-2 text-[15px] sm:grid-cols-2">
                <li><Link className="font-semibold text-green hover:underline" href="/services/estate-cleanouts">Estate cleanouts in {page.name}</Link></li>
                <li><Link className="font-semibold text-green hover:underline" href="/services/pre-sale-property-cleanouts">Pre-sale property cleanouts</Link></li>
                <li><Link className="font-semibold text-green hover:underline" href="/services/whole-home-cleanouts">Whole-house cleanouts</Link></li>
                <li><Link className="font-semibold text-green hover:underline" href="/services/rental-property-cleanouts">Rental &amp; move-out cleanouts</Link></li>
              </ul>
              <p className="mt-4 text-[15px] leading-7 text-muted">
                Not sure which fits? See all of our{" "}
                <Link href="/" className="font-semibold text-green hover:underline">property cleanouts</Link>{" "}
                across Michigan&apos;s Blue Water Area.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-navy sm:text-3xl">
                {page.name} cleanout questions
              </h2>
              <div className="mt-4 divide-y divide-line rounded-2xl border border-line bg-cream">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="px-5 py-2">
                    <summary className="cursor-pointer py-3 font-semibold text-navy">{faq.question}</summary>
                    <p className="pb-4 text-sm leading-7 text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-cream p-6">
              <h2 className="font-serif text-xl text-navy">{site.name}</h2>
              <p className="mt-2 text-sm text-muted">{site.location}</p>
              <a href={site.phoneHref} className="mt-2 block text-lg font-bold text-navy">{site.phone}</a>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {page.localNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className="mt-5">
                <Button href={site.estimatePath} className="w-full">Get a Free Estimate</Button>
              </div>
            </div>
            <MapEmbed />
            {nearby.length ? (
              <div className="rounded-2xl border border-line p-6">
                <h2 className="font-serif text-xl text-navy">Nearby areas</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {nearby.map((n) => (
                    <li key={n.slug}>
                      <Link href={`/areas/${n.slug}`} className="font-semibold text-green hover:underline">
                        Property cleanouts in {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>
      <PhotoCta />
    </>
  );
}
