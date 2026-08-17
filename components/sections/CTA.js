import Link from "next/link";

export default function CTA({
  heading = "Have a legal question? Let's talk.",
  subtext = "Get clear, confidential advice on your matter — book a consultation today.",
  buttonLabel = "Contact Now",
  buttonHref = "/contact",
}) {
  return (
    <section className="bg-primary">
      <div className="container-custom flex flex-col items-center gap-6 py-16 text-center md:py-20">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="max-w-xl text-gray-300">{subtext}</p>
        <Link
          href={buttonHref}
          className="inline-block rounded-md bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-accent-light focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
