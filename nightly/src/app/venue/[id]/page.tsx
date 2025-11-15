import Image from "next/image";
import { notFound } from "next/navigation";
import { EventPost } from "@/components/EventPost";
import { TonightCard } from "@/components/TonightCard";
import { SearchBar } from "@/components/SearchBar";
import { posts, tonightEvents, venues } from "@/data/mockData";

type VenuePageProps = {
  params: { id: string };
};

export default function VenueDetail({ params }: VenuePageProps) {
  const venue = venues.find((item) => item.id === params.id);

  if (!venue) {
    notFound();
  }

  const relatedEvents = tonightEvents.filter(
    (event) => event.venueId === venue.id,
  );
  const relatedPosts = posts.filter((post) => post.venueId === venue.id);

  return (
    <div className="space-y-8 text-white">
      <section className="space-y-4">
        <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={venue.coverImage}
            alt={venue.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                {venue.city}
              </p>
              <h1 className="text-3xl font-semibold">{venue.name}</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <span className="rounded-full bg-white/10 px-3 py-1">
                {venue.vibes.join(" / ")}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                {venue.entryPrice ? `$${venue.entryPrice} entry` : "Free entry"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80 md:flex-row md:items-center md:justify-between">
          <p>{venue.shortDescription}</p>
          <button className="rounded-2xl border border-white/30 bg-white/10 px-5 py-2 text-white transition hover:bg-white/20">
            Follow {venue.name}
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Updates</h2>
          <SearchBar placeholder="Search posts..." />
          <div className="space-y-4">
            {relatedPosts.length === 0 && (
              <p className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-6 text-white/60">
                This venue has not posted yet. Follow to get alerts.
              </p>
            )}
            {relatedPosts.map((post) => (
              <EventPost key={post.id} post={post} venueName={venue.name} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Tonight</h3>
          {relatedEvents.length === 0 && (
            <p className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
              No scheduled events tonight. Check back soon.
            </p>
          )}
          {relatedEvents.map((event) => (
            <TonightCard key={event.id} event={event} venueName={venue.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
