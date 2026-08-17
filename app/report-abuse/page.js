import Link from "next/link";
import site from "@/data/site";

export const metadata = {
  title: "Report Abuse",
  description:
    "Report any misuse or impersonation of the Advocate Bintu Malik website.",
};

export default function ReportAbusePage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Report Abuse</span>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Report Abuse</h1>
        <p className="mt-6 text-muted">
          If you come across any misuse or impersonation of this website, please
          report it to us at{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-accent transition-colors duration-200 hover:text-primary"
          >
            {site.email}
          </a>
          . We take such reports seriously and will look into them promptly.
        </p>
      </div>
    </section>
  );
}
