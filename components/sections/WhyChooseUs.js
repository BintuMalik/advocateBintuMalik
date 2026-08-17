import { Award, IndianRupee, UserCheck, Lock } from "lucide-react";
import site from "@/data/site";

const reasons = [
  {
    icon: Award,
    title: "Experienced",
    description: `Over ${site.experienceYears} years of practice across courts, tribunals, and forums.`,
  },
  {
    icon: IndianRupee,
    title: "Transparent Fees",
    description: "Costs discussed clearly before any work begins — no surprises.",
  },
  {
    icon: UserCheck,
    title: "Personal Attention",
    description: "Your case is handled directly, not passed down the line.",
  },
  {
    icon: Lock,
    title: "Confidential",
    description: "Everything you share stays strictly between advocate and client.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            A Practice Built on Trust
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <span className="inline-flex rounded-full bg-white p-4 text-accent shadow-sm">
                <reason.icon size={28} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
