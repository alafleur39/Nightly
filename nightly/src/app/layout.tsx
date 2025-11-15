import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/BottomNav";
import { SearchBar } from "@/components/SearchBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { label: "Discover", href: "/discover" },
  { label: "Tonight", href: "/tonight" },
  { label: "Feed", href: "/feed" },
];

const icons = {
  home: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.5 12 4l9 6.5M5 10v9h5v-5h4v5h5v-9"
      />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  ),
  feed: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 7h14M5 12h14M5 17h9"
      />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c1.5-3 4-4 6-4s4.5 1 6 4" />
    </svg>
  ),
};

export const metadata: Metadata = {
  title: "Nightly | Discover Nightlife",
  description: "Find trending nightlife, events, and venue drops around you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030108] text-white`}
      >
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-24 pt-6 sm:px-6 lg:px-10 lg:pb-10">
          <header className="hidden items-center justify-between rounded-3xl border border-white/10 bg-[#05020a]/80 px-8 py-4 text-sm font-medium text-white/70 shadow-2xl shadow-black/50 backdrop-blur lg:flex">
            <div className="flex items-center gap-6">
              <Link href="/discover" className="text-lg font-semibold tracking-[0.35em] text-white">
                NIGHTLY
              </Link>
              <nav className="flex items-center gap-6 text-white/70">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <SearchBar className="w-64" placeholder="Search venues, vibes..." />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                aria-label="Profile"
              >
                {icons.user}
              </button>
            </div>
          </header>

          <main className="flex-1 py-6 lg:py-10">{children}</main>
        </div>

        <div className="lg:hidden">
          <BottomNav
            items={[
              { label: "Home", href: "/discover", icon: icons.home },
              { label: "Tonight", href: "/tonight", icon: icons.clock },
              { label: "Feed", href: "/feed", icon: icons.feed },
              { label: "Profile", href: "/profile", icon: icons.user },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
