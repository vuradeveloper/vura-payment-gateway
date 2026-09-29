import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Siren,
  MapPin,
  Users,
  PhoneCall,
  Star,
  CreditCard,
  CalendarClock,
  Percent,
  Zap,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vura — Defy the Odds. Ride Now, Pay Later." },
      {
        name: "description",
        content:
          "Vura is ride-hailing built around the rider — safe, affordable, and fair to drivers. Ride now, pay later. R5 max commission. Sometimes R0.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Nav ──────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <VuraLogo size={34} />
          </Link>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-36 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
            Defy the
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
              odds.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-semibold tracking-tight text-foreground">
            Impossible is just a word.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Vura is the ride-hailing app built around you — safe, affordable, and fair to the people
            behind the wheel. Ride now, pay later.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="#pay-later">Ride now. Pay later.</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
              <a href="#safety">Safety first</a>
            </Button>
          </div>
        </div>
        <div
          className="absolute -right-20 -bottom-20 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "var(--gradient-vura)" }}
        />
      </section>

      {/* ── Manifesto ────────────────────────────────────────── */}
      <section className="border-t border-b bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-400 mb-8">
            Our philosophy
          </p>
          <blockquote className="text-xl md:text-3xl font-bold leading-snug tracking-tight max-w-3xl mx-auto italic text-white/90">
            "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in
            the square holes. The ones who{" "}
            <em className="not-italic text-amber-400">see things differently.</em>"
          </blockquote>
          <p className="mt-4 text-sm text-white/40 font-medium">— Think Different, 1997</p>
          <p className="mt-8 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            We built Vura the same way — by asking what riders and drivers actually need, ignoring
            how it's always been done, and refusing to ship something that doesn't change things.
            South Africa deserves a ride-hailing app that's genuinely on its side.
          </p>
        </div>
      </section>

      {/* ── Ride now, pay later ───────────────────────────────── */}
      <section id="pay-later" className="border-t py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
            Financial benefits for riders
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
            Ride now.
            <br />
            Pay later.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-md mx-auto">
            Your money, your rules. Vura gives riders the flexibility no other app in South Africa
            does.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
            {[
              {
                icon: CreditCard,
                title: "Ride now, pay later",
                text: "Take the trip you need today and settle at month-end. No upfront balance, no stress.",
              },
              {
                icon: CalendarClock,
                title: "Weekly billing",
                text: "Rides build up and bill once a week — so your cash flow stays in your hands.",
              },
              {
                icon: Percent,
                title: "0% when you pay on time",
                text: "Settle your balance on time and interest stays at exactly zero. Always. No catches.",
              },
              {
                icon: Zap,
                title: "Top up your wallet",
                text: "Top up with zero-fee Instant EFT to stand a chance of discounts and free rides.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border bg-card p-8 shadow-card hover:border-amber-200 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            For Ride Now, Pay Later,{" "}
            <Link
              to="/terms"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              terms and conditions
            </Link>{" "}
            apply.
          </p>
        </div>
      </section>

      {/* ── Safety ────────────────────────────────────────────── */}
      <section id="safety" className="border-t bg-foreground text-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-400 mb-4">
            Safety first
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
            Your safety is
            <br />
            <span className="text-amber-400">non-negotiable.</span>
          </h2>
          <p className="mt-5 text-white/60 max-w-md mx-auto">
            Every ride is protected, from the moment you book to the moment you arrive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 text-left">
            {[
              {
                icon: ShieldCheck,
                title: "Background-checked drivers",
                text: "Every driver is vetted and verified before their first trip. No exceptions.",
              },
              {
                icon: MapPin,
                title: "Real-time trip tracking",
                text: "Every ride is tracked from pickup to drop-off, so you always know where you are.",
              },
              {
                icon: Siren,
                title: "In-app SOS",
                text: "One tap alerts Vura's emergency team and connects you to help in seconds.",
              },
              {
                icon: Users,
                title: "Share your trip",
                text: "Loved ones can follow your ride live from start to finish.",
              },
              {
                icon: PhoneCall,
                title: "24/7 human support",
                text: "Real people on call around the clock — whenever you need them.",
              },
              {
                icon: Star,
                title: "Ratings that matter",
                text: "Riders and drivers rate every trip, keeping standards high for everyone.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center mb-5">
                  <f.icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commission ───────────────────────────────────────── */}
      <section id="drivers" className="border-t bg-foreground text-background py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-400 mb-4">
                For drivers
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
                R5 max
                <br />
                commission.
                <br />
                <span className="text-amber-400">Sometimes R0.</span>
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed max-w-md">
                Other platforms take a growing cut of everything you earn. Vura caps it at R5 per
                trip — and on some trips, we take nothing at all. The more you drive, the more you
                keep.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
              <p className="text-6xl md:text-7xl font-black tracking-tighter text-amber-400 leading-none">
                R5
              </p>
              <p className="mt-2 text-lg font-semibold text-white/50 tracking-tight">
                the most we'll ever take
              </p>
              <div className="mt-8 pt-8 border-t border-white/10 space-y-2 text-sm text-white/60 leading-relaxed">
                <p>
                  On a R200 trip, you keep <span className="text-white font-semibold">R195</span>.
                </p>
                <p>
                  On a R500 trip, you keep <span className="text-white font-semibold">R495</span>.
                </p>
                <p className="mt-3 text-white/40">
                  And when we run R0 promotions, you keep every rand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Move without limits ──────────────────────────────── */}
      <section className="py-20 md:py-32 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Vura
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">
            Move without
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
              limits.
            </span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md mx-auto">
            Join the waitlist. Be first when Vura launches in your city.
          </p>
          <Button size="lg" className="h-12 px-8 text-base mt-8" asChild>
            <a href="#pay-later">
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <VuraLogo size={22} />
          </div>
          <div className="flex flex-wrap gap-6">
            <Link to="/terms" className="hover:text-foreground transition">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link to="/refunds" className="hover:text-foreground transition">
              Refunds
            </Link>
            <Link to="/shipping" className="hover:text-foreground transition">
              Service
            </Link>
            <Link to="/contact" className="hover:text-foreground transition">
              Contact
            </Link>
          </div>
          <p>Instant EFT · South Africa</p>
        </div>
      </footer>
    </div>
  );
}
