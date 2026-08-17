import Link from "next/link";
import offices, { getLocalities } from "@/data/offices";
import OfficesGrid from "@/components/OfficesGrid";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Our Offices",
  description:
    "Visit Advocate Bintu Malik at any of our offices across Chandigarh and Panchkula. Find the nearest location and get directions.",
};

export default function OfficesPage() {
  const cities = getLocalities();
  const citiesLine = cities.join(", ").replace(/, ([^,]*)$/, " and $1");

  return (
    <>
      <section className="bg-background py-14 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Our Offices</span>
          </nav>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Our Offices</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            We serve clients across {offices.length} locations in {citiesLine}{" "}
            and nearby areas. Find the office closest to you and get directions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <OfficesGrid />
        </div>
      </section>

      <CTA
        heading="Visit us at a location near you"
        subtext="Prefer to talk first? Book a consultation and we'll guide you to the right office."
      />
    </>
  );
}
