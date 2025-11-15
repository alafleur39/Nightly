import Link from "next/link";
import Image from "next/image";
import { VenueDoc } from "@/types/firestore";

type VenueCardProps = {
  venue: VenueDoc;
};

const priceMap: Record<VenueDoc["priceTier"], string> = {
  1: "$",
  2: "$$",
  3: "$$$",
};

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#0d0b12] via-[#0c0a11] to-[#05030a] shadow-2xl shadow-black/60 transition hover:-translate-y-1 hover:border-white/15">
      <Link
        href={`/venue/${venue.id}`}
        className="relative block h-56 overflow-hidden"
      >
        <Image
          src={venue.coverImage}
          alt={venue.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-white/90">
          {venue.vibes.map((vibe) => (
            <span
              key={vibe}
              className="rounded-full border border-white/15 bg-black/40 px-3 py-1"
            >
              {vibe}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">{venue.name}</h3>
            <span className="text-sm text-white/60">{priceMap[venue.priceTier]}</span>
          </div>
          <p className="mt-1 text-sm text-white/70">{venue.shortDescription}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-white/70">
          <span>{venue.entryPrice ? `$${venue.entryPrice} entry` : "Free entry"}</span>
          <span>{venue.followerCount.toLocaleString()} followers</span>
        </div>

        <button
          type="button"
          className="mt-auto rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          Follow
        </button>
      </div>
    </div>
  );
}

