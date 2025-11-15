import Image from "next/image";
import { EventPostDoc, FirestoreTimestamp } from "@/types/firestore";

type EventPostProps = {
  post: EventPostDoc;
  venueName: string;
};

const toDate = (timestamp: FirestoreTimestamp) => {
  if (timestamp.toDate) return timestamp.toDate();
  return new Date(timestamp.seconds * 1000);
};

const timeAgo = (timestamp: FirestoreTimestamp) => {
  const diff = Date.now() - toDate(timestamp).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) {
    const minutes = Math.max(1, Math.floor(diff / (1000 * 60)));
    return `${minutes}m ago`;
  }
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export function EventPost({ post, venueName }: EventPostProps) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl border border-white/5 bg-[#090711]/90 p-4 text-white shadow-2xl shadow-black/50">
      {post.mediaUrl && (
        <div className="relative h-56 w-full overflow-hidden rounded-2xl">
          <Image
            src={post.mediaUrl}
            alt={post.caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold uppercase tracking-widest text-white/70">
            {venueName}
          </span>
          <span className="text-white/40">{timeAgo(post.createdAt)}</span>
        </div>
        <p className="text-sm text-white/90">{post.caption}</p>
      </div>
      <div className="flex items-center justify-between text-xs text-white/70">
        <span className="rounded-full bg-white/10 px-3 py-1">{post.vibe}</span>
        <span>{post.likes.toLocaleString()} likes</span>
      </div>
    </article>
  );
}

