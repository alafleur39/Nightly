import {
  EventPostDoc,
  FirestoreTimestamp,
  TonightEventDoc,
  VenueDoc,
  VibeTag,
} from "@/types/firestore";

const toTimestamp = (date: Date): FirestoreTimestamp => ({
  seconds: Math.floor(date.getTime() / 1000),
  nanoseconds: 0,
  toDate: () => date,
});

const hoursFromNow = (hours: number) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  return toTimestamp(date);
};

export const vibeFilters: VibeTag[] = [
  "Chill",
  "Hip-Hop",
  "Latin",
  "House",
  "Afrobeats",
  "Lounge",
];

export const venues: VenueDoc[] = [
  {
    id: "sunset-lounge",
    name: "Sunset Lounge",
    city: "New York",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    vibes: ["Chill", "Lounge"],
    priceTier: 2,
    entryPrice: 25,
    followerCount: 1250,
    shortDescription: "Skyline lounge with rooftop DJs and crafted cocktails.",
    coordinates: { lat: 40.7128, lng: -74.006 },
    createdAt: toTimestamp(new Date()),
    updatedAt: toTimestamp(new Date()),
  },
  {
    id: "club-eclipse",
    name: "Club Eclipse",
    city: "New York",
    coverImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    vibes: ["Hip-Hop", "House"],
    priceTier: 3,
    entryPrice: 40,
    followerCount: 2044,
    shortDescription: "Late night club with immersive lighting and guest DJs.",
    coordinates: { lat: 40.7228, lng: -74.016 },
    createdAt: toTimestamp(new Date()),
    updatedAt: toTimestamp(new Date()),
  },
  {
    id: "havana-nights",
    name: "Havana Nights",
    city: "New York",
    coverImage:
      "https://images.unsplash.com/photo-1514361892635-6e122620eaff?auto=format&fit=crop&w=800&q=80",
    vibes: ["Latin", "Chill"],
    priceTier: 1,
    entryPrice: 15,
    followerCount: 980,
    shortDescription: "Live percussion, mojitos, and a packed dance floor.",
    coordinates: { lat: 40.7028, lng: -73.996 },
    createdAt: toTimestamp(new Date()),
    updatedAt: toTimestamp(new Date()),
  },
  {
    id: "rooftop-212",
    name: "Rooftop 212",
    city: "New York",
    coverImage:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    vibes: ["House", "Chill"],
    priceTier: 2,
    entryPrice: 30,
    followerCount: 1320,
    shortDescription: "High-energy rooftop parties overlooking Midtown.",
    coordinates: { lat: 40.7528, lng: -73.9857 },
    createdAt: toTimestamp(new Date()),
    updatedAt: toTimestamp(new Date()),
  },
];

export const tonightEvents: TonightEventDoc[] = [
  {
    id: "event-1",
    venueId: "club-eclipse",
    title: "Neon Pulse w/ DJ Rayna",
    startTime: hoursFromNow(1),
    endTime: hoursFromNow(5),
    coverImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    vibe: "Hip-Hop",
    headliner: "DJ Rayna",
    specialNotes: "VIP tables 20% off before midnight.",
  },
  {
    id: "event-2",
    venueId: "havana-nights",
    title: "Latin Fire Live Band",
    startTime: hoursFromNow(3),
    endTime: hoursFromNow(7),
    coverImage:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    vibe: "Latin",
    headliner: "Salsa Collective",
    specialNotes: "Free dance class at 9 PM.",
  },
  {
    id: "event-3",
    venueId: "sunset-lounge",
    title: "Golden Hour Sessions",
    startTime: hoursFromNow(5),
    endTime: hoursFromNow(8),
    coverImage:
      "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=600&q=80",
    vibe: "Chill",
    headliner: "DJ Mira",
    specialNotes: "2-for-1 spritzers until 11 PM.",
  },
];

export const posts: EventPostDoc[] = [
  {
    id: "post-1",
    venueId: "sunset-lounge",
    caption: "Tonight's view is unreal. Grab a spot before sunset.",
    mediaUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    vibe: "Chill",
    createdAt: hoursFromNow(-5),
    likes: 320,
  },
  {
    id: "post-2",
    venueId: "club-eclipse",
    caption: "Lights down, bass up. Table packages almost sold out.",
    mediaUrl:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=600&q=80",
    vibe: "Hip-Hop",
    createdAt: hoursFromNow(-2),
    likes: 450,
  },
  {
    id: "post-3",
    venueId: "havana-nights",
    caption: "Live percussion starts at 10. First 50 guests get a free mojito.",
    mediaUrl:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
    vibe: "Latin",
    createdAt: hoursFromNow(-1),
    likes: 288,
  },
];

export const priceFilters = ["$", "$$", "$$$"];
export const musicFilters = ["Live DJs", "Live Band", "Open Format"];

