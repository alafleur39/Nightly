import Image from "next/image";
import { FirestoreTimestamp, TonightEventDoc } from "@/types/firestore";

type TonightCardProps = {
  event: TonightEventDoc;
  venueName: string;
};

const toDate = (timestamp: FirestoreTimestamp) => {
  if (timestamp.toDate) {
    return timestamp.toDate();
  }
  return new Date(timestamp.seconds * 1000);
};

const getCountdown = (timestamp: FirestoreTimestamp) => {
  const target = toDate(timestamp);
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return "Happening now";
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (hours === 0) {
    return `Starts in ${minutes} min`;
  }

  return `Starts in ${hours} h ${minutes} m`;
};

export function TonightCard({ event, venueName }: TonightCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl border border-white/5 bg-[#090711]/90 p-3 text-white shadow-xl shadow-black/50">
      <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wider text-white/50">{venueName}</p>
        <h4 className="text-sm font-semibold text-white">{event.title}</h4>
        <p className="text-xs text-white/70">{getCountdown(event.startTime)}</p>
      </div>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
        {event.vibe}
      </span>
    </article>
  );
}

