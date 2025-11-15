import { EventPost } from "@/components/EventPost";
import { SearchBar } from "@/components/SearchBar";
import { posts, venues, vibeFilters } from "@/data/mockData";

const venueMap = Object.fromEntries(venues.map((venue) => [venue.id, venue]));

export default function FeedPage() {
  return (
    <div className="space-y-8 text-white">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">Feed</p>
        <h1 className="text-3xl font-semibold">Drops from venues you follow</h1>
        <p className="text-white/60">
          Swipe through updates, set reminders, and jump into RSVPs without leaving Nightly.
        </p>
        <SearchBar placeholder="Search posts or venues..." />
        <div className="flex flex-wrap gap-2 text-xs">
          {vibeFilters.map((vibe) => (
            <button
              key={vibe}
              type="button"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 transition hover:border-white/30 hover:text-white"
            >
              {vibe}
            </button>
          ))}
        </div>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <EventPost
            key={post.id}
            post={post}
            venueName={venueMap[post.venueId]?.name ?? "Venue"}
          />
        ))}
      </section>
    </div>
  );
}

