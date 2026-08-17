import site from "@/data/site";

const stats = [
  { value: `${site.experienceYears}+`, label: "Years of Experience" },
  { value: `${site.casesHandled}+`, label: "Cases Handled" },
  { value: "100%", label: "Confidential" },
];

export default function Stats() {
  return (
    <section className="bg-background">
      <div className="container-custom grid grid-cols-1 divide-y divide-gray-200 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="py-4 text-center sm:py-0">
            <p className="font-heading text-4xl font-bold text-primary">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-wide text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
