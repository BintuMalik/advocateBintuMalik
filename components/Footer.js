import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import site from "@/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/offices", label: "Offices" },
];

const trustLinks = [
  { href: "/security", label: "Security" },
  { href: "/legal", label: "Legal" },
  { href: "/report-abuse", label: "Report Abuse" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-200">
      <div className="container-custom grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-bold text-white">
            Advocate Bintu Malik
          </p>
          <p className="mt-1 text-sm text-accent-light">
            Advocate &amp; Legal Consultant
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-300">
            Trusted legal help across all types of cases — committed to
            protecting your rights with honest counsel and dedicated
            representation.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">
            Trust &amp; Legal
          </h3>
          <ul className="mt-4 space-y-2.5">
            {trustLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors duration-200 hover:text-accent-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg font-semibold text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-accent-light" />
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="transition-colors duration-200 hover:text-accent-light"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-accent-light" />
              <a
                href={`mailto:${site.email}`}
                className="break-all transition-colors duration-200 hover:text-accent-light"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-light" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center gap-2 py-5 text-center text-xs text-gray-400 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; 2026 Advocate Bintu Malik. All rights reserved.</p>
          <p>
            This website is for informational purposes only and does not
            constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
