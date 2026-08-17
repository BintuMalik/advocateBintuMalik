import Link from "next/link";

export const metadata = {
  title: "Security",
  description:
    "How enquiries and information shared through the Advocate Bintu Malik website are handled and kept private.",
};

export default function SecurityPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Security</span>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Security</h1>
        <p className="mt-6 text-muted">
          Any enquiries or information you share through this website are handled
          respectfully and kept private. Details submitted via the contact form
          are used only to respond to your enquiry and are never shared with
          third parties, except as required by law.
        </p>
      </div>
    </section>
  );
}
