import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import site from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — book a consultation by phone, WhatsApp, email, or the enquiry form. Office hours: ${site.officeHours}.`,
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: site.phone },
  { icon: Mail, label: "Email", value: site.email },
  { icon: MapPin, label: "Office Address", value: site.address },
  { icon: Clock, label: "Office Hours", value: site.officeHours },
];

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;

  return (
    <>
      <section className="bg-background py-10 sm:py-14 md:py-20">
        <div className="container-custom">
          <nav className="text-sm text-muted" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Contact</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
            Share a few details about your matter and the office will get back
            to you — or reach out directly by phone or WhatsApp.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Send an Enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              All fields are required. Your details stay confidential.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-primary p-6 text-gray-200 shadow-lg sm:p-8">
              <h2 className="font-heading text-2xl font-bold text-white">
                Contact Information
              </h2>
              <ul className="mt-6 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="inline-flex shrink-0 rounded-lg bg-white/10 p-2.5 text-accent-light">
                      <item.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-white">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-light"
                >
                  <Phone size={17} />
                  Call Now
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-accent px-5 py-3 text-sm font-semibold text-accent-light transition-colors duration-200 hover:bg-accent hover:text-white"
                >
                  <MessageCircle size={17} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-6 flex aspect-[16/9] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-background text-center">
              <MapPin size={32} className="text-accent" />
              <p className="mt-3 font-heading text-lg font-semibold text-primary">
                Map
              </p>
              <p className="mt-1 max-w-xs px-4 text-sm text-muted">
                Office location: {site.address}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
