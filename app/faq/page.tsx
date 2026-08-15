import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { faqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about property cleanouts, estimates, photos, and service in Michigan's Blue Water Area.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        label="FAQ"
        title="Common questions about property cleanouts"
        body="Not sure where to start? These are the questions we hear most before an estimate."
      />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="divide-y divide-line overflow-hidden rounded-[1.75rem] border border-line bg-cream">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-2">
                <summary className="cursor-pointer list-none py-4 text-left font-serif text-lg font-medium text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-orange group-open:hidden">+</span>
                    <span className="hidden text-orange group-open:inline">−</span>
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-7 text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href={site.estimatePath}>Get a Free Estimate</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
