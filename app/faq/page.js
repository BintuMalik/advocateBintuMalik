import Link from "next/link";
import faq from "@/data/faq";
import site from "@/data/site";
import Accordion from "@/components/Accordion";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "FAQ",
  description: `Answers to common questions about consultations, fees, documents, case timelines, and confidentiality at the office of ${site.name}.`,
};

export default function FaqPage() {
  return (
    <>
      <section className="bg-background py-10 sm:py-14 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">FAQ</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Answers to the questions clients ask most often — about
            consultations, fees, documents, and how cases proceed.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <Accordion items={faq} />
        </div>
      </section>

      <CTA
        heading="Still have questions?"
        subtext="Every case is different — get answers specific to your situation in a confidential consultation."
      />
    </>
  );
}
