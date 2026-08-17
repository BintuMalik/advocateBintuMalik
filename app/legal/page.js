import Link from "next/link";

export const metadata = {
  title: "Legal",
  description:
    "This website is for general information only and does not constitute legal advice.",
};

export default function LegalPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Legal</span>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Legal</h1>
        <p className="mt-6 text-muted">
          This website is provided for general information only and does not
          constitute legal advice. Viewing this website, or contacting us
          through it, does not create an attorney-client relationship. For advice
          on your specific matter, please book a consultation.
        </p>
      </div>
    </section>
  );
}
