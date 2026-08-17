import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Scale } from "lucide-react";
import site from "@/data/site";

export default function Hero() {
  const heroImage = "/images/hero.jpg";
  const hasImage = fs.existsSync(path.join(process.cwd(), "public", heroImage));

  return (
    <section className="section-padding bg-background">
      <div className="container-custom grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
            {site.tagline}
          </p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            Trusted Legal Guidance for Every Case
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted sm:mt-6 sm:text-lg">
            Dependable representation and honest counsel across criminal, civil,
            family, property, and business matters — from the first consultation
            to the final order.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href="/contact" className="btn-primary w-full text-center sm:w-auto">
              Book a Consultation
            </Link>
            <Link
              href="/practice-areas"
              className="btn-outline w-full text-center sm:w-auto"
            >
              View Practice Areas
            </Link>
          </div>
        </div>

        <div className="relative">
          {hasImage ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={heroImage}
                alt={`${site.name} — ${site.tagline}`}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary-light to-accent shadow-lg">
              <div className="text-center text-white">
                <Scale size={64} className="mx-auto text-accent-light" />
                <p className="mt-4 font-heading text-2xl font-semibold">
                  {site.name}
                </p>
                <p className="mt-1 text-sm text-gray-200">{site.tagline}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
