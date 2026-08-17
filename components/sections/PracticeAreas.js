import Link from "next/link";
import * as Icons from "lucide-react";
import practiceAreas from "@/data/practiceAreas";

export default function PracticeAreas() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Handle
          </p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Practice Areas
          </h2>
          <p className="mt-4 text-muted">
            Comprehensive legal services under one roof — whatever your matter,
            it starts with a clear conversation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = Icons[area.icon] ?? Icons.Scale;
            return (
              <Link
                key={area.slug}
                href="/practice-areas"
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <span className="inline-flex rounded-lg bg-background p-3 text-primary transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
