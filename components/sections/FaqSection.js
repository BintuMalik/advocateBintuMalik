import faq from "@/data/faq";
import Accordion from "@/components/Accordion";

export default function FaqSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            FAQ
          </p>
          <h2 className="mt-4 font-heading text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted">
            Quick answers to the questions clients ask most often — about
            consultations, fees, documents, and how cases proceed.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <Accordion items={faq} />
        </div>
      </div>
    </section>
  );
}
