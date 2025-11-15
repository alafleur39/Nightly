import { TonightCard } from "@/components/TonightCard";
import { tonightEvents, venues } from "@/data/mockData";
import { FirestoreTimestamp } from "@/types/firestore";
import { VenueCard } from "@/components/VenueCard";

const toDate = (timestamp: FirestoreTimestamp) => {
  if (timestamp.toDate) return timestamp.toDate();
  return new Date(timestamp.seconds * 1000);
};

const sortedEvents = [...tonightEvents].sort(
  (a, b) => toDate(a.startTime).getTime() - toDate(b.startTime).getTime(),
);

const venueMap = Object.fromEntries(venues.map((venue) => [venue.id, venue]));

export default function TonightPage() {
  return (
    <div className="space-y-8 text-white">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Tonight</p>
        <h1 className="text-3xl font-semibold">Countdown to your next move</h1>
        <p className="text-white/60">
          Events are sorted by start time. Grab entry details before the line fills up.
        </p>
      </header>

      <section className="space-y-4">
        {sortedEvents.map((event) => (
          <TonightCard
            key={event.id}
            event={event}
            venueName={venueMap[event.venueId]?.name ?? "Venue"}
          />
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Afterparty Spots</h2>
            <p className="text-sm text-white/60">
              Venues still taking walk-ins for late-night sets.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {venues.slice(0, 3).map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>
    </div>
  );
}

