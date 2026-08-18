import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  GraduationCap,
  BadgeCheck,
  Clock,
  Library,
  ShieldCheck,
  Target,
  Lock,
  HeartHandshake,
} from "lucide-react";
import site from "@/data/site";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "About",
  description: `Learn about ${site.name} — background, qualifications, and a client-first approach to legal practice across all types of cases.`,
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Education",
    detail: "Bachelor of Laws (LL.B.) and Master of Laws (LL.M.), with continued professional study in current areas of practice.",
  },
  {
    icon: BadgeCheck,
    title: "Bar Council Enrollment",
    detail: `Enrolled advocate — Registration No. ${site.barCouncilNo}.`,
  },
  {
    icon: Clock,
    title: "Years of Practice",
    detail: `${site.experienceYears}+ years of active practice before courts, tribunals, and forums.`,
  },
  {
    icon: Library,
    title: "Areas of Expertise",
    detail: "Criminal, civil, family, property, corporate, recovery, and consumer matters, along with legal documentation.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest assessments of your case — including the risks, not just the strengths.",
  },
  {
    icon: Target,
    title: "Diligence",
    description: "Thorough preparation for every hearing, filing, and negotiation.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description: "Your information stays strictly protected, always.",
  },
  {
    icon: HeartHandshake,
    title: "Client-First",
    description: "Advice guided by your interests, not by prolonging litigation.",
  },
];

export default function AboutPage() {
  const portraitImage = "/images/advocate.jpg";
  const hasImage = fs.existsSync(
    path.join(process.cwd(), "public", portraitImage)
  );

  return (
    <>
      <section className="bg-background py-10 sm:py-14 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">About</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            About {site.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            {site.tagline} — dependable representation and clear, honest counsel
            for every client.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            {hasImage ? (
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={portraitImage}
                  alt={site.name}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent shadow-lg">
                <div className="text-center text-white">
                  <Scale size={56} className="mx-auto text-accent-light" />
                  <p className="mt-4 font-heading text-xl font-semibold">
                    {site.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-200">{site.tagline}</p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Background
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              A Practice Grounded in Preparation and Trust
            </h2>
            <div className="mt-6 space-y-5 text-muted">
              <p>
                {site.name} has practised law for over {site.experienceYears}{" "}
                years, appearing before district courts, tribunals, and forums
                across a wide range of matters. The practice covers criminal
                defence, civil litigation, family and property disputes,
                commercial contracts, and legal documentation — allowing clients
                to bring almost any matter to one trusted office.
              </p>
              <p>
                The approach is simple: understand the client&apos;s situation
                fully before advising, explain the options in plain language,
                and pursue the path that genuinely serves the client&apos;s
                interest — whether that means litigation, negotiation, or
                settlement. Every case begins with a candid assessment of its
                strengths and risks.
              </p>
              <p>
                Clients work directly with the advocate at every stage, from the
                first consultation to the final order. Matters are handled with
                strict confidentiality, transparent fees, and regular updates,
                so clients always know where their case stands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Credentials
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Qualifications at a Glance
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex shrink-0 rounded-lg bg-background p-3 text-accent">
                  <item.icon size={26} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Values
            </p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              What Guides the Practice
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <span className="inline-flex rounded-full bg-white p-4 text-accent shadow-sm">
                  <value.icon size={28} />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Ready to discuss your case?"
        subtext="Book a confidential consultation and get a clear view of your options."
      />
    </>
  );
}
