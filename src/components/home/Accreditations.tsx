import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@/components/ui/icons";

const badges = [
  { src: "/memberof/advance-payment-guarantee.png", name: "British Association of Removers (BAR)" },
  { src: "/memberof/ngrs.png", name: "National Guild of Removers and Storers (NGRS)" },
  { src: "/memberof/IAM.png", name: "International Association of Movers (IAM)" },
  { src: "/memberof/removals-ombudsman.png", name: "The Furniture Ombudsman" },
  { src: "/memberof/quality-assured.png", name: "QSS-DW Approved Mover" },
  { src: "/memberof/checkatrade.webp", name: "Checkatrade" },
];

export default function Accreditations() {
  return (
    <section className="bg-brand-sand py-14">
      <div className="mx-auto max-w-[88rem] px-4">

        {/* Trustpilot */}
        <div className="flex flex-col items-center gap-2" data-reveal>
          <div className="flex gap-1 text-brand-orange" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-7 w-7" />
            ))}
          </div>
          <p className="text-xl font-bold text-brand-navy">Excellent</p>
          <Link
            href="https://uk.trustpilot.com/review/removalsnationwide.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-orange underline underline-offset-2 transition hover:text-brand-navy"
          >
            View all reviews on Trustpilot
          </Link>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <span className="flex-1 border-t border-black/10" />
          <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/50">
            Trusted and certified by{" "}
            <Link
              href="/certificates"
              className="normal-case text-brand-orange underline underline-offset-2 transition hover:text-brand-navy"
            >
              view all certificates
            </Link>
          </p>
          <span className="flex-1 border-t border-black/10" />
        </div>

        {/* Badge row */}
        <ul className="flex flex-wrap items-center justify-center gap-5" data-reveal>
          {badges.map((badge) => (
            <li
              key={badge.name}
              className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={badge.src}
                alt={`${badge.name} accreditation badge`}
                width={180}
                height={90}
                className="h-[72px] w-auto object-contain"
              />
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
