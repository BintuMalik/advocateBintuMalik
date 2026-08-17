import Link from "next/link";
import { Lock, ShieldCheck, Users, Server, Info } from "lucide-react";
import site from "@/data/site";

export const metadata = {
  title: "Security",
  description:
    "Security & Privacy — how information you share through the Advocate Bintu Malik website is collected, used, and kept confidential.",
};

const principles = [
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Enquiry details are treated as confidential and used only to respond to your query.",
  },
  {
    icon: ShieldCheck,
    title: "Limited Use",
    description:
      "Your information is used solely to understand and respond to your enquiry — never for marketing.",
  },
  {
    icon: Users,
    title: "No Third-Party Sharing",
    description:
      "Your details are not sold or shared with third parties, except where required by law.",
  },
  {
    icon: Server,
    title: "Secure Handling",
    description:
      "Reasonable care is taken to keep the information you submit protected.",
  },
];

export default function SecurityPage() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">Security</span>
        </nav>

        <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Security
        </h1>
        <p className="mt-6 text-muted">
          Your privacy and confidentiality are taken seriously. We understand
          that legal matters are personal, and any information you share with
          this office deserves care and discretion. This page explains, in
          simple terms, how information shared through this website is handled.
        </p>

        <div className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl">
            What Information We Collect
          </h2>
          <p className="mt-4 text-muted">
            This website only collects the details you voluntarily submit through
            the contact or enquiry form — your name, phone number, email, case
            type, and message. Simply browsing the site does not require you to
            provide any personal information.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex rounded-lg bg-background p-3 text-accent">
                <item.icon size={24} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold sm:text-2xl">Your Choices</h2>
          <p className="mt-4 text-muted">
            You are never required to use the enquiry form. If you prefer, you can
            reach the office directly by phone, email, or WhatsApp. If you have
            already submitted an enquiry and would like your details removed, you
            can request deletion at any time by emailing{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-medium text-accent transition-colors duration-200 hover:text-primary"
            >
              {site.email}
            </a>
            .
          </p>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-5">
          <Info size={20} className="mt-0.5 shrink-0 text-accent" />
          <p className="text-sm leading-relaxed text-body">
            Please note: submitting the enquiry form is for general enquiries only
            and does not, by itself, create an attorney–client relationship. For
            your own protection, kindly avoid sharing highly sensitive case
            details through the website form — those are best discussed directly
            during a consultation.
          </p>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-muted">
            Have a question about your privacy or how your information is handled?
            We are happy to help.
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
