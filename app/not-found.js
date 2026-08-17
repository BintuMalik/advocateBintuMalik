import Link from "next/link";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom flex flex-col items-center py-16 text-center">
        <Scale size={48} className="text-accent" />
        <h1 className="mt-6 font-heading text-7xl font-bold text-primary sm:text-8xl">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-primary">
          Page not found
        </p>
        <p className="mt-3 max-w-md text-muted">
          The page you are looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
