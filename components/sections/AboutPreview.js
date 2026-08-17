import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { Landmark } from "lucide-react";
import site from "@/data/site";

export default function AboutPreview() {
  const aboutImage = "/images/about.jpg";
  const hasImage = fs.existsSync(path.join(process.cwd(), "public", aboutImage));

  return (
    <section className="section-padding bg-background">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          {hasImage ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={aboutImage}
                alt="Advocate Bintu Malik - law office"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-tr from-primary-dark via-primary to-accent shadow-lg">
              <Landmark size={72} className="text-accent-light" />
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </p>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            Committed to Your Rights, Case After Case
          </h2>
          <p className="mt-5 text-muted sm:mt-6">
            {site.name} has spent over {site.experienceYears} years representing
            clients across a full range of legal matters — from criminal defence
            and civil disputes to family, property, and business law. Every
            client receives clear advice, honest assessments, and dedicated
            attention from start to finish.
          </p>
          <div className="mt-8">
            <Link href="/about" className="btn-outline">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
