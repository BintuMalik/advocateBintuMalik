import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container-custom flex flex-col items-center py-5">
        <Link href="/" className="text-center">
          <span className="block font-heading text-xl font-bold text-primary sm:text-2xl">
            Advocate Bintu Malik
          </span>
          <span className="block text-xs text-muted sm:text-sm">
            Advocate &amp; Legal Consultant
          </span>
        </Link>
      </div>
    </header>
  );
}
