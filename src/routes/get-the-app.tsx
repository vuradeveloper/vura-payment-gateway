import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import {
  ArrowLeft,
  ArrowUpRight,
  Car,
  CreditCard,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/get-the-app")({
  head: () => ({
    meta: [
      { title: "Get the app — Vura Rider and Vura Driver" },
      {
        name: "description",
        content:
          "Choose the Vura app for you. Riders and drivers can download for iPhone or Android.",
      },
      { name: "theme-color", content: "#FFFFFF" },
    ],
  }),
  component: GetTheAppPage,
});

/**
 * Store links live here so they can be updated in one place.
 *
 * The driver app is live on Google Play. The rider Android app is served as a
 * direct download while its Play listing is prepared. Paste the App Store URLs
 * and the rider Play URL here when they are available.
 */
const RIDER_LINKS = {
  ios: null as string | null,
  androidStore: null as string | null,
  androidApk: "/downloads/vura-rider.apk",
};

const DRIVER_LINKS = {
  ios: null as string | null,
  androidStore: "https://play.google.com/store/apps/details?id=app.vura.driver",
  androidApk: null as string | null,
};

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.365 1.43c0 1.14-.463 2.26-1.23 3.06-.77.8-2.03 1.42-3.08 1.34-.13-1.09.44-2.24 1.17-3.01.82-.86 2.22-1.47 3.14-1.39zM20.94 17.1c-.6 1.38-.89 1.99-1.66 3.21-1.08 1.71-2.6 3.84-4.48 3.85-1.67.01-2.1-1.09-4.37-1.08-2.27.01-2.74 1.1-4.41 1.09-1.88-.01-3.32-1.94-4.4-3.65C-1.4 16.9-1.74 11.6 1.16 8.77c1.44-1.41 2.89-2.28 4.55-2.28 1.69 0 2.75 1.09 4.15 1.09 1.36 0 2.19-1.09 4.14-1.09 1.48 0 3.05.81 4.17 2.2-3.66 2.01-3.07 7.24 2.77 8.41z" />
    </svg>
  );
}

function PlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M3.2 1.9c-.3.3-.5.7-.5 1.3v17.6c0 .6.2 1 .5 1.3l.1.1 9.9-9.9v-.2L3.3 1.8l-.1.1zM16.8 15.4l-3.4-3.4 3.4-3.4 4 2.3c1.1.6 1.1 1.7 0 2.3l-4 2.2zM4 22.3l9.5-9.5 3.3 3.3-8.9 5c-1 .6-1.8.9-3.9 1.2zM4 1.7c2.1.3 2.9.6 3.9 1.2l8.9 5-3.3 3.3L4 1.7z" />
    </svg>
  );
}

function AndroidLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6 9h12v7a2 2 0 0 1-2 2h-1v3h-2v-3h-2v3H9v-3H8a2 2 0 0 1-2-2V9zm-3 0h2v9H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zm18 0h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2V9zM7.5 7c.4-1.5 1.7-2.6 3.3-2.9l-.8-1.4.6-.3 1 1.7c.5-.1 1-.1 1.5 0l1-1.7.6.3-.8 1.4c1.6.3 2.9 1.4 3.3 2.9H7.5zm2.2-1.5a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2zm5.6 0a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2z" />
    </svg>
  );
}

function StoreBadge({
  store,
  href,
}: {
  store: "apple" | "play";
  href: string | null;
}) {
  const isApple = store === "apple";
  const logo = isApple ? <AppleLogo className="h-6 w-6" /> : <PlayLogo className="h-6 w-6" />;
  const top = isApple ? "Download on the" : "Get it on";
  const comingSoon = isApple ? "Coming soon to the" : "Coming soon to";
  const bottom = isApple ? "App Store" : "Google Play";
  const base =
    "flex items-center gap-3 border px-4 py-3 text-left transition";

  if (!href) {
    return (
      <div
        aria-disabled="true"
        className={`${base} cursor-not-allowed border-[#E6E1DA] bg-[#F8F6F2] text-[#A39C95]`}
      >
        <span className="opacity-45">{logo}</span>
        <span>
          <span className="block text-[8px] font-bold uppercase tracking-[0.18em]">
            {comingSoon}
          </span>
          <span className="block text-[14px] font-bold leading-tight">{bottom}</span>
        </span>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`${base} border-[#0B0B0C] bg-[#0B0B0C] text-white hover:border-[#E1251B] hover:bg-[#E1251B]`}
    >
      {logo}
      <span>
        <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-white/60">
          {top}
        </span>
        <span className="block text-[14px] font-bold leading-tight">{bottom}</span>
      </span>
      <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
    </a>
  );
}

function ApkBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      download
      className="flex items-center gap-3 border border-[#0B0B0C] bg-white px-4 py-3 text-left text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
    >
      <AndroidLogo className="h-6 w-6" />
      <span>
        <span className="block text-[8px] font-bold uppercase tracking-[0.18em] text-[#8A837D]">
          Direct download
        </span>
        <span className="block text-[14px] font-bold leading-tight">Android APK</span>
      </span>
      <ArrowUpRight className="ml-auto h-3.5 w-3.5 opacity-60" />
    </a>
  );
}

function AppCard({ role }: { role: "rider" | "driver" }) {
  const isRider = role === "rider";
  const links = isRider ? RIDER_LINKS : DRIVER_LINKS;

  return (
    <div className="border border-[#E6E1DA] bg-white p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center bg-[#FBE9E7]">
          {isRider ? (
            <Users className="h-5 w-5 text-[#E1251B]" />
          ) : (
            <Car className="h-5 w-5 text-[#E1251B]" />
          )}
        </div>
        <span className="border border-[#E6E1DA] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.18em] text-[#8A837D]">
          {isRider ? "Rider" : "Driver"}
        </span>
      </div>

      <h2 className="font-display mt-6 text-[clamp(2.3rem,4.2vw,3.4rem)] uppercase leading-[0.9] tracking-[-0.035em] text-[#0B0B0C]">
        {isRider ? (
          <>
            Book a
            <br />
            <span className="text-[#E1251B]">ride.</span>
          </>
        ) : (
          <>
            Drive and
            <br />
            <span className="text-[#E1251B]">earn.</span>
          </>
        )}
      </h2>

      <p className="mt-4 text-sm leading-relaxed text-[#6B6560]">
        {isRider
          ? "Safe, affordable rides with verified drivers, live tracking and Pay Later on Android."
          : "Accept trips, track your earnings and get paid. Commission capped at R5 per trip."}
      </p>

      <div className="mt-6 space-y-2.5">
        <StoreBadge store="apple" href={links.ios} />
        <StoreBadge store="play" href={links.androidStore} />
        {links.androidApk ? <ApkBadge href={links.androidApk} /> : null}
      </div>

      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A39C95]">
        {isRider ? "iPhone and Android" : "iPhone and Android · Driver sign-up in the app"}
      </p>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E1DA] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Vura home">
          <VuraLogo size={30} />
          <span className="hidden border-l border-[#E6E1DA] pl-3 text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#7A736D] sm:block">
            Johannesburg
            <br />
            South Africa
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden text-[10px] font-bold uppercase tracking-[0.14em] text-[#5F5953] transition hover:text-[#0B0B0C] sm:block"
          >
            Need help?
          </Link>
          <Link
            to="/"
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[#0B0B0C]/20 bg-white px-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back home
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <VuraLogo size={24} />
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
            Rides that work for everyone
          </span>
        </div>
        <div className="flex flex-wrap gap-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
          <Link to="/terms" className="transition hover:text-[#E1251B]">
            Terms
          </Link>
          <Link to="/privacy" className="transition hover:text-[#E1251B]">
            Privacy
          </Link>
          <Link to="/refunds" className="transition hover:text-[#E1251B]">
            Refunds
          </Link>
          <Link to="/contact" className="transition hover:text-[#E1251B]">
            Contact
          </Link>
        </div>
        <p className="text-[9px] uppercase tracking-[0.14em] text-white/30">
          © {new Date().getFullYear()} Dorfnew (Pty) Ltd
        </p>
      </div>
    </footer>
  );
}

function GetTheAppPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] selection:bg-[#E1251B] selection:text-white">
      <SiteHeader />

      <main>
        <section className="border-b border-[#E6E1DA] bg-white">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
            <p className="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#E1251B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              Get the app
            </p>
            <h1 className="font-display text-[clamp(3.1rem,8.5vw,6.4rem)] uppercase leading-[0.84] tracking-[-0.05em] text-[#0B0B0C]">
              Pick your
              <br />
              <span className="text-[#E1251B]">app.</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6B6560] md:text-base">
              Ride with Vura, or drive and earn. Choose the app that fits you, then pick your
              phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" /> Verified drivers
              </span>
              <span className="flex items-center gap-1.5">
                <CreditCard className="h-3.5 w-3.5 text-[#E1251B]" /> Pay Later on Android
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-[#E1251B]" /> Riders and drivers
              </span>
            </div>
          </div>
        </section>

        <section className="bg-[#F8F6F2] py-14 md:py-20">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="grid gap-4 md:grid-cols-2">
              <AppCard role="rider" />
              <AppCard role="driver" />
            </div>

            <div className="mt-6 border border-[#E6E1DA] bg-white p-5 md:p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
                Which one is mine?
              </p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <p className="text-[12px] leading-relaxed text-[#6B6560]">
                  <strong className="text-[#0B0B0C]">Riders</strong> book a ride, track it live and
                  pay with cash, wallet or Pay Later.
                </p>
                <p className="text-[12px] leading-relaxed text-[#6B6560]">
                  <strong className="text-[#0B0B0C]">Drivers</strong> accept trips, see their net
                  before they accept and request payouts from the app.
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl border-l-2 border-[#E1251B]/60 pl-4 text-[10px] leading-relaxed text-[#8A837D]">
              The iPhone apps are coming soon. On Android, the driver app is live on Google Play.
              The rider Android app is available as a direct download while its Play listing is
              prepared.
            </p>

            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold text-[#8A837D]">
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-[#E1251B]" />
                <a href="mailto:info@ridevura.com" className="underline underline-offset-2">
                  info@ridevura.com
                </a>
              </span>
              <span>072 779 5460</span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}