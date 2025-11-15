export type FirestoreTimestamp = {
  seconds: number;
  nanoseconds: number;
  toDate?: () => Date;
};

export type VibeTag =
  | "Chill"
  | "Hip-Hop"
  | "Latin"
  | "House"
  | "Afrobeats"
  | "Lounge";

export interface VenueDoc {
  id: string;
  name: string;
  city: string;
  coverImage: string;
  vibes: VibeTag[];
  priceTier: 1 | 2 | 3;
  entryPrice: number;
  followerCount: number;
  shortDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
}

export interface TonightEventDoc {
  id: string;
  venueId: string;
  title: string;
  startTime: FirestoreTimestamp;
  endTime: FirestoreTimestamp;
  coverImage: string;
  vibe: VibeTag;
  headliner?: string;
  specialNotes?: string;
}

export interface VenueFollowDoc {
  id: string;
  userId: string;
  venueId: string;
  createdAt: FirestoreTimestamp;
}

export interface EventPostDoc {
  id: string;
  venueId: string;
  caption: string;
  mediaUrl?: string;
  vibe: VibeTag;
  createdAt: FirestoreTimestamp;
  likes: number;
}

