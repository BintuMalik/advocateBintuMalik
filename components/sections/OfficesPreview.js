import Link from "next/link";
import { MapPin } from "lucide-react";
import offices, { getLocalities } from "@/data/offices";

export default function OfficesPreview() {
  const cities = getLocalities();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="max-w-xl text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Our Offices
              </p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                {offices.length} offices across the region
              </h2>
              <p className="mt-4 text-muted">
                Conveniently located to serve you — visit the office nearest to
                you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-1.5 rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    <MapPin size={14} className="text-accent" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <Link href="/offices" className="btn-primary">
                View All Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
