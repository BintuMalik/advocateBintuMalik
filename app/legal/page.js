import Link from "next/link";
import { Info, UserX, FileCheck, Lock, Landmark } from "lucide-react";
import site from "@/data/site";

export const metadata = {
  title: "Legal",
  description:
    "Legal disclaimer — this website is for general information only, does not constitute legal advice, and does not create an attorney–client relationship.",
};

const disclaimers = [
  {
    icon: Info,
    title: "No Legal Advice",
    description:
      "The content here is general information only, not advice tailored to any specific situation or matter.",
  },
  {
    icon: UserX,
    title: "No Attorney–Client Relationship",
    description:
      "Contacting us through this site or the enquiry form does not by itself create a formal client relationship until you are formally engaged.",
  },
  {
    icon: FileCheck,
    title: "Accuracy of Information",
    description:
      "Information is provided in good faith but may not be complete or current, and should not be relied upon as a substitute for professional consultation.",
  },
  {
    icon: Lock,
    title: "Confidential Consultation",
    description:
      "For advice on a specific matter, please book a consultation where your details can be discussed privately.",
  },
];

export default function LegalPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Legal</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Legal</h1>
        <p className="mt-6 text-muted">
          This website is provided for general information only and does not
          constitute legal advice. Nothing on this site should be treated as a
          substitute for consulting a qualified advocate about your particular
          circumstances. Viewing this website, or contacting the office of{" "}
          {site.name} through it, does not create an attorney–client
          relationship.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {disclaimers.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex rounded-lg bg-background p-3 text-accent">
                <item.icon size={24} />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <Landmark size={20} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <h2 className="text-base font-semibold text-primary">
              Bar Council Rules
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-body">
              In accordance with the rules of the Bar Council of India, this
              website is intended only to provide information and is not an
              advertisement or solicitation of work. By accessing this site, the
              user acknowledges that they are doing so of their own accord, for
              their own information, and that no lawyer–client relationship is
              created merely by visiting.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl">Use of This Website</h2>
          <p className="mt-4 text-muted">
            The content of this website — including its text and layout — is
            provided for personal, non-commercial, informational use only. Any
            third-party links offered for your convenience, such as map
            directions or WhatsApp, lead to external services; this website is
            not responsible for the content, accuracy, or practices of those
            external sites.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl">Governing Law</h2>
          <p className="mt-4 text-muted">
            Any matters relating to this website are subject to the applicable
            laws of India, and the courts at Chandigarh shall have jurisdiction.
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-muted">
            Have a question about this disclaimer or anything on this website? We
            are happy to help.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
