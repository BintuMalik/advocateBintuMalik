import Link from "next/link";
import * as Icons from "lucide-react";
import {
  MessageSquare,
  FileSearch,
  ClipboardList,
  Landmark,
  ArrowRight,
} from "lucide-react";
import practiceAreas from "@/data/practiceAreas";
import site from "@/data/site";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Practice Areas",
  description: `Explore the legal services offered by ${site.name} — criminal, civil, family, property, corporate, recovery, consumer, and documentation matters.`,
};

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "A confidential discussion to understand your situation and goals.",
  },
  {
    icon: FileSearch,
    title: "Case Review",
    description: "Careful study of your documents, facts, and the applicable law.",
  },
  {
    icon: ClipboardList,
    title: "Strategy & Filing",
    description: "A clear plan of action, with drafting and filings done right.",
  },
  {
    icon: Landmark,
    title: "Representation",
    description: "Committed advocacy at every hearing until the matter concludes.",
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-background py-10 sm:py-14 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Practice Areas</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Practice Areas
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {site.name} handles a wide range of matters across all types of
            cases — bringing the same preparation and attention to each one,
            whether it is a court dispute or a single document.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = Icons[area.icon] ?? Icons.Scale;
              return (
                <div
                  key={area.slug}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="inline-flex w-fit rounded-lg bg-background p-3 text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    <Icon size={28} />
                  </span>
                  <h2 className="mt-5 text-xl font-semibold">{area.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-primary"
                  >
                    Consult on this
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              The Process
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              How I Work
            </h2>
            <p className="mt-4 text-muted">
              Every matter follows a clear, structured path — so you always know
              what happens next.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-xl border border-gray-200 bg-white p-6 pt-9 text-center shadow-sm"
              >
                <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white ring-4 ring-background">
                  {index + 1}
                </span>
                <span className="inline-flex rounded-full bg-background p-3 text-accent">
                  <step.icon size={24} />
                </span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Not sure which area your case falls under?"
        subtext="Describe your situation in a consultation and get clear direction on the right way forward."
      />
    </>
  );
}
