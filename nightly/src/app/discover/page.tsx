import { SearchBar } from "@/components/SearchBar";
import { VenueCard } from "@/components/VenueCard";
import { TonightCard } from "@/components/TonightCard";
import {
  musicFilters,
  priceFilters,
  tonightEvents,
  venues,
  vibeFilters,
} from "@/data/mockData";
import { FirestoreTimestamp } from "@/types/firestore";

const venueMap = Object.fromEntries(venues.map((venue) => [venue.id, venue]));
const toDate = (timestamp: FirestoreTimestamp) =>
  timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
const sortedTonight = [...tonightEvents].sort(
  (a, b) => toDate(a.startTime).getTime() - toDate(b.startTime).getTime(),
);

export default function DiscoverPage() {
  return (
    <div className="space-y-8 text-white">
      <section className="lg:hidden">
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">
          Nightly
        </p>
        <h1 className="mt-1 text-3xl font-semibold">Discover</h1>
        <p className="text-white/60">Find trending lounges, clubs, and pop-ups.</p>
      </section>

      <div className="lg:hidden">
        <SearchBar placeholder="Search venues, vibes..." />
      </div>

      <div className="grid gap-6 lg:grid-cols-[230px,1fr,280px]">
        <aside className="hidden flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/50 lg:flex">
          <FilterGroup title="Vibe" options={vibeFilters} />
          <FilterGroup title="Price" options={priceFilters} />
          <FilterGroup title="Music" options={musicFilters} />
        </aside>

        <section className="space-y-6">
          <div className="hidden lg:block">
            <SearchBar placeholder="Search venues, vibes..." />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {venues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
        </section>

        <aside className="hidden flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/50 lg:flex">
          <h3 className="text-lg font-semibold">Tonight</h3>
          <p className="text-sm text-white/60">
            Events starting soon. Sorted by countdown.
          </p>
          <div className="space-y-3">
            {sortedTonight.map((event) => (
              <TonightCard
                key={event.id}
                event={event}
                venueName={venueMap[event.venueId]?.name ?? "Venue"}
              />
            ))}
          </div>
        </aside>
      </div>

      <section className="space-y-3 lg:hidden">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Tonight</h3>
          <span className="text-sm text-white/50">View all</span>
        </div>
        <div className="space-y-3">
          {sortedTonight.map((event) => (
            <TonightCard
              key={event.id}
              event={event}
              venueName={venueMap[event.venueId]?.name ?? "Venue"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

type FilterGroupProps = {
  title: string;
  options: string[];
};

function FilterGroup({ title, options }: FilterGroupProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
        {title}
      </h4>
      <ul className="mt-3 space-y-2 text-sm text-white/75">
        {options.map((option) => (
          <li
            key={option}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
          >
            <span className="h-4 w-4 rounded-lg border border-white/20 bg-black/20" />
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
