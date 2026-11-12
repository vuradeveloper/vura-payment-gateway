import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Clock3,
  CreditCard,
  Fingerprint,
  Headphones,
  LockKeyhole,
  MapPin,
  Moon,
  Music2,
  Percent,
  Route as RouteIcon,
  Share2,
  ShieldCheck,
  Siren,
  Star,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vura — Your night is not over. Johannesburg ride-hailing." },
      {
        name: "description",
        content:
          "Ride-hailing built for Johannesburg after dark. Verified pilots, a commission capped at R5, zero surge surprises and Pay Later on Android.",
      },
      { name: "theme-color", content: "#FFFFFF" },
    ],
  }),
  component: LandingPage,
});

const PILOTS = [
  {
    id: "PILOT 014",
    area: "Sandton",
    car: "Toyota Corolla · White",
    rating: "4.9",
    trips: "1,240 trips",
    image: "/images/car-17120616.jpg",
  },
  {
    id: "PILOT 027",
    area: "Rosebank",
    car: "VW Polo · Black",
    rating: "4.8",
    trips: "980 trips",
    image: "/images/car-4713813.jpg",
  },
  {
    id: "PILOT 039",
    area: "Braamfontein",
    car: "Suzuki Swift · Silver",
    rating: "5.0",
    trips: "640 trips",
    image: "/images/car-9572026.jpg",
  },
];

const TICKER = [
  { area: "Sandton", time: "3 min" },
  { area: "Rosebank", time: "4 min" },
  { area: "Braamfontein", time: "5 min" },
  { area: "Maboneng", time: "6 min" },
  { area: "Midrand", time: "7 min" },
  { area: "Melrose", time: "5 min" },
];

const IMG = {
  city: "/images/joburg-night.jpg",
  skyline: "/images/joburg-skyline-night.jpg",
  club: "/images/club-red.jpg",
  bridgeCar: "/images/car-9572026.jpg",
  drive: "/images/drive-night.jpg",
  blackCar: "/images/car-9572026.jpg",
  twilightCar: "/images/car-4713813.jpg",
};

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <p
      className={`mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] ${
        isDark ? "text-white/55" : "text-[#E1251B]"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-[#E1251B]" : "bg-[#E1251B]"}`} />
      {children}
    </p>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E6E1DA] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Vura home">
          <VuraLogo size={30} />
          <span className="hidden border-l border-[#E6E1DA] pl-3 text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#7A736D] sm:block">
            Johannesburg
            <br />
            After dark
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5F5953] lg:flex">
          <a href="#night" className="transition hover:text-[#E1251B]">
            The Night Shift
          </a>
          <a href="#pilots" className="transition hover:text-[#E1251B]">
            Pilots
          </a>
          <a href="#fares" className="transition hover:text-[#E1251B]">
            Fares
          </a>
          <a href="#pay-later" className="text-[#E1251B] transition hover:text-[#0B0B0C]">
            Pay Later
          </a>
          <a href="#safety" className="transition hover:text-[#E1251B]">
            Safety
          </a>
          <a href="#drivers" className="transition hover:text-[#E1251B]">
            Drivers
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden text-[11px] font-bold uppercase tracking-[0.14em] text-[#5F5953] transition hover:text-[#0B0B0C] xl:block"
          >
            Driver sign-up
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#E1251B] px-4 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
          >
            Get the app <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneMock({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "w-[250px]" : "w-[290px]"}>
      <div className="rounded-[2.1rem] border border-white/15 bg-[#0B0B0C] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
        <div className="relative h-[420px] overflow-hidden rounded-[1.65rem] bg-[#F6F2EC]">
          {/* map treatment */}
          <div className="absolute inset-0 bg-[#F6F2EC]" />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,11,12,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,11,12,0.06) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="absolute left-[12%] top-[20%] h-px w-[82%] -rotate-12 bg-[#0B0B0C]/15" />
          <div className="absolute left-[18%] top-[52%] h-px w-[76%] rotate-6 bg-[#0B0B0C]/15" />
          <div className="absolute left-[30%] top-[6%] h-[82%] w-px rotate-[10deg] bg-[#0B0B0C]/15" />
          <div className="absolute left-[68%] top-[8%] h-[78%] w-px -rotate-[12deg] bg-[#0B0B0C]/15" />

          <svg
            viewBox="0 0 300 420"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden
          >
            <path
              d="M 56 330 C 86 292 102 278 126 252 C 154 222 180 228 198 194 C 218 156 232 128 252 76"
              stroke="#FFFFFF"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 56 330 C 86 292 102 278 126 252 C 154 222 180 228 198 194 C 218 156 232 128 252 76"
              stroke="#E1251B"
              strokeWidth="4"
              strokeLinecap="round"
              className="vura-route"
            />
          </svg>

          <div className="absolute left-[13%] top-[74%] flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border-2 border-white bg-[#E1251B] shadow-[0_0_0_4px_rgba(225,37,27,0.16)]" />
            <span className="rounded bg-white px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#0B0B0C] shadow-sm">
              Pickup
            </span>
          </div>
          <div className="absolute right-[10%] top-[12%]">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0B0C] shadow-lg">
              <MapPin className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
            <span className="rounded-full border border-[#0B0B0C]/10 bg-white/85 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#5F5953] backdrop-blur">
              Fri · 22:48
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#E1251B]/20 bg-white/85 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#E1251B] backdrop-blur">
              <span className="vura-pulse h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              Live
            </span>
          </div>

          <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-[#0B0B0C]/8 bg-white p-4 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#8A837D]">
                  Pilot 014 · Verified
                </p>
                <p className="mt-1 text-sm font-bold text-[#0B0B0C]">Arriving 3 min</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-[#F6F2EC] px-2.5 py-1 text-[#0B0B0C]">
                <Star className="h-3 w-3 fill-[#E1251B] text-[#E1251B]" />
                <span className="text-[10px] font-bold">4.9</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3 border-t border-[#E6E1DA] pt-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1251B] text-[10px] font-black text-white">
                P14
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-[#0B0B0C]">Toyota Corolla</p>
                <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-[#8A837D]">
                  CA 123 456
                </p>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold uppercase tracking-wider text-[#8A837D]">
                  Max fee
                </p>
                <p className="text-lg font-black leading-none text-[#E1251B]">R5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="relative z-10">
          <Eyebrow>Vura / Johannesburg / After dark</Eyebrow>

          <h1 className="font-display text-[clamp(3.4rem,8.8vw,7.4rem)] uppercase leading-[0.84] tracking-[-0.05em] text-[#0B0B0C]">
            Your night
            <br />
            is not
            <br />
            <span className="text-[#E1251B]">over.</span>
          </h1>

          <p className="mt-7 max-w-xl text-xl font-semibold leading-snug tracking-tight text-[#0B0B0C] md:text-2xl">
            Verified pilots. Instant dispatch. Zero surge surprises at 2 AM.
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#6B6560] md:text-base">
            Vura is ride-hailing built for the city after the last song. For the people who close
            the venue, not the night.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
            >
              Get early access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0B0B0C]/20 bg-white px-6 text-[11px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
            >
              Become a Founding Pilot <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" /> R5 max commission
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="h-3.5 w-3.5 text-[#E1251B]" /> Pay Later on Android
            </span>
            <span className="flex items-center gap-1.5">
              <Moon className="h-3.5 w-3.5 text-[#E1251B]" /> Built for the night shift
            </span>
          </div>

          <a
            href="#pay-later"
            className="group mt-7 flex w-fit max-w-full items-center gap-3 border-l-2 border-[#E1251B] pl-4"
          >
            <div>
              <p className="text-[8px] font-black uppercase tracking-[0.22em] text-[#E1251B]">
                Ride Now, Pay Later
              </p>
              <p className="mt-0.5 text-[13px] font-bold text-[#0B0B0C] transition group-hover:text-[#E1251B]">
                Ride all month. Pay on payday.{" "}
                <span className="text-[10px] font-semibold text-[#8A837D]">Android only</span>
              </p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-[#E1251B] transition group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative">
          <div className="relative h-[520px] overflow-hidden bg-[#0B0B0C] sm:h-[560px]">
            <img
              src={IMG.city}
              alt="Johannesburg skyline at night"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/25 to-[#0B0B0C]/10" />
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#0B0B0C] backdrop-blur">
                Johannesburg · 22:48
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-[#E1251B] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white">
                <span className="vura-pulse h-1.5 w-1.5 rounded-full bg-white" />
                Night dispatch
              </span>
            </div>

            <div className="absolute bottom-5 left-4 origin-bottom-left sm:bottom-7 sm:left-6">
              <PhoneMock compact />
            </div>

            <div className="absolute bottom-6 right-4 hidden border border-white/20 bg-[#E1251B] p-3 text-white backdrop-blur sm:block">
              <p className="text-[8px] font-black uppercase tracking-[0.18em] text-white/70">
                Ride Now, Pay Later
              </p>
              <p className="mt-0.5 text-[12px] font-bold">0% interest</p>
              <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Android only
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-2 hidden h-20 w-20 border-l-2 border-b-2 border-[#E1251B] sm:block" />
          <div className="absolute -right-2 -top-2 hidden h-20 w-20 border-r-2 border-t-2 border-[#0B0B0C] sm:block" />
        </div>
      </div>
    </section>
  );
}

function PayLaterBand() {
  return (
    <section id="pay-later" className="relative overflow-hidden bg-[#E1251B] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.26em] text-white/65">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Ride Now, Pay Later · Android only
            </p>
            <h2 className="font-display text-[clamp(2.7rem,5.6vw,4.9rem)] uppercase leading-[0.88] tracking-[-0.045em]">
              Ride all month.
              <br />
              Pay on payday.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              Split the month, not your night. Eligible riders can settle at month-end with 0%
              interest and no late fee. Your rides, your money, your timing.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { n: "01", title: "Ride", text: "Book the night like normal." },
              { n: "02", title: "Rack it up", text: "Your rides collect in one balance." },
              { n: "03", title: "Payday", text: "Settle at month-end. 0% interest." },
            ].map((step) => (
              <div key={step.n} className="border border-white/20 bg-white/[0.06] p-3.5">
                <p className="text-[8px] font-black tracking-[0.18em] text-white/60">{step.n}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.06em] text-white">
                  {step.title}
                </p>
                <p className="mt-1.5 text-[9px] leading-relaxed text-white/75">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5">
          <Link
            to="/terms"
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] underline underline-offset-4"
          >
            See how it works <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/60">
            0% interest · No late fee · Eligibility and terms apply
          </span>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const row = TICKER.map((item) => (
    <span key={item.area} className="flex items-center gap-2.5">
      <span>{item.area}</span>
      <span className="text-white/50">{item.time} typ.</span>
      <span className="h-1 w-1 rounded-full bg-white/30" />
    </span>
  ));

  return (
    <div className="border-y border-white/10 bg-[#0B0B0C] text-white">
      <div className="flex overflow-hidden">
        <div className="hidden shrink-0 items-center border-r border-white/15 px-5 py-3 text-[9px] font-black uppercase leading-tight tracking-[0.2em] text-[#E1251B] sm:flex">
          Night shift
          <br />
          index
        </div>
        <div className="relative flex-1 overflow-hidden py-3">
          <div className="vura-marquee flex w-max items-center gap-7 whitespace-nowrap px-5 text-[10px] font-black uppercase tracking-[0.16em]">
            {row}
            <span aria-hidden className="flex items-center gap-7">
              {row}
            </span>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/40">
        Typical Friday-night wait · live ETA is shown in the app
      </p>
    </div>
  );
}

function NightShift() {
  return (
    <section id="night" className="border-b border-[#E6E1DA] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Eyebrow>The night shift</Eyebrow>
            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em] text-[#0B0B0C]">
              The city doesn&apos;t
              <br />
              clock out.
              <br />
              <span className="text-[#E1251B]">Neither do we.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6B6560] md:text-base lg:pb-2">
            Most ride apps are built for the 9-to-5. Vura is built for 22:00 to 03:00 — the venue
            exits, the late studio sessions, the people who make this city worth staying out for.
            Not a utility. A way home that belongs to the night.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-[300px] overflow-hidden bg-[#0B0B0C] md:h-[360px]">
              <img
                src={IMG.club}
                alt="A packed Johannesburg club in red light"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                  02:00 · The exit
                </p>
                <p className="mt-1 text-lg font-bold text-white">The night is still going.</p>
              </div>
            </div>

            <div className="relative h-[190px] overflow-hidden bg-[#0B0B0C]">
              <img
                src={IMG.bridgeCar}
                alt="Black car waiting under a city bridge at night"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-[0.18em] text-white">
                The secure pickup
              </p>
            </div>

            <div className="relative h-[190px] overflow-hidden bg-[#0B0B0C]">
              <img
                src={IMG.drive}
                alt="Driver at the wheel in the city at night"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-[0.18em] text-white">
                The night shift
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {[
              {
                icon: Moon,
                title: "The Night Shift",
                text: "Late-night hospitality, creators and venue crews. Cars staged when the city empties, not after it has already given up.",
              },
              {
                icon: Music2,
                title: "The Music Circuit",
                text: "From Braamfontein to Rosebank. One app for the nights that do not fit a timetable — and the people who make them happen.",
              },
              {
                icon: MapPin,
                title: "The City Insider",
                text: "Pilots who know the shortcuts, the secure pickups and the streets that actually move at 2 AM.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group border border-[#E6E1DA] bg-[#F8F6F2] p-5 transition hover:border-[#E1251B]/50 hover:bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-white shadow-sm">
                    <card.icon className="h-5 w-5 text-[#E1251B]" />
                  </div>
                  <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-[#0B0B0C]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#6B6560]">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PilotCard({ pilot }: { pilot: (typeof PILOTS)[number] }) {
  return (
    <div className="group overflow-hidden border border-white/10 bg-white transition hover:-translate-y-1">
      <div className="relative h-32 overflow-hidden bg-[#161616]">
        <img
          src={pilot.image}
          alt={`${pilot.car} at night`}
          className="h-full w-full object-cover opacity-80 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[#E1251B]/15 mix-blend-multiply" />
        <span className="absolute right-3 top-3 border border-white/25 bg-[#0B0B0C]/70 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[0.18em] text-white/65 backdrop-blur">
          Profile preview
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-[#E1251B] px-2 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-white">
          <BadgeCheck className="h-3 w-3" /> Verified
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B0B0C] text-[11px] font-black text-white">
            {pilot.id.split(" ")[1]}
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-black uppercase tracking-wide text-[#0B0B0C]">
              {pilot.id}
            </p>
            <p className="mt-0.5 truncate text-[10px] font-medium text-[#8A837D]">
              {pilot.area} · {pilot.car}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-end gap-2">
          <p className="font-display text-3xl leading-none text-[#E1251B]">{pilot.rating}</p>
          <div className="flex gap-0.5 pb-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-2.5 w-2.5 fill-[#E1251B] text-[#E1251B]" />
            ))}
          </div>
          <p className="pb-1 text-[9px] font-semibold uppercase tracking-wider text-[#8A837D]">
            {pilot.trips}
          </p>
        </div>

        <div className="mt-4 space-y-1.5 border-t border-[#E6E1DA] pt-3">
          {["ID verified", "Vehicle checked", "Face verified"].map((tag) => (
            <p
              key={tag}
              className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#6B6560]"
            >
              <Check className="h-3 w-3 text-[#E1251B]" />
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pilots() {
  return (
    <section id="pilots" className="bg-[#0B0B0C] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Proof, not promises</Eyebrow>
            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em]">
              Verified
              <br />
              <span className="text-[#E1251B]">Founding Pilots.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Every pilot is ID-checked, licence-checked and vehicle-checked before their first trip.
            This is the profile card riders see.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PILOTS.map((pilot) => (
            <PilotCard key={pilot.id} pilot={pilot} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border border-white/10 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Illustrative profile layout · live pilot identities are protected</span>
          <span className="flex items-center gap-1.5 text-[#E1251B]">
            <BadgeCheck className="h-3.5 w-3.5" /> Every live pilot passes the same checks
          </span>
        </div>
      </div>
    </section>
  );
}

function Fares() {
  return (
    <section id="fares" className="border-b border-[#E6E1DA] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>The split</Eyebrow>
            <h2 className="font-display text-[clamp(2.7rem,5.8vw,5.2rem)] uppercase leading-[0.88] tracking-[-0.045em] text-[#0B0B0C]">
              R5 max.
              <br />
              Not 25%.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#6B6560] md:text-base">
              Other platforms take a growing cut of everything you earn. Vura&apos;s commission is
              10% of the fare, capped at R5. On a R200 trip, the pilot keeps R195. The rider pays a
              4% booking fee on top — it never comes out of the pilot&apos;s fare.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
              <span className="flex items-center gap-1.5">
                <Percent className="h-3.5 w-3.5 text-[#E1251B]" /> 10% commission
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" /> Capped at R5
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#E1251B]" /> No surge
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E6E1DA] bg-[#F8F6F2] p-6">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A837D]">
                  On a R200 trip
                </p>
                <span className="border border-[#E1251B]/25 bg-white px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#E1251B]">
                  The split
                </span>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
                    Driver keeps
                  </p>
                  <p className="font-display mt-1 text-5xl leading-none text-[#0B0B0C]">R195</p>
                </div>
                <div className="border-l border-[#E6E1DA] pl-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
                    Vura takes
                  </p>
                  <p className="font-display mt-1 text-5xl leading-none text-[#E1251B]">R5</p>
                </div>
              </div>
              <div className="mt-6 h-2 w-full bg-[#E6E1DA]">
                <div className="h-2 bg-[#E1251B]" style={{ width: "97.5%" }} />
              </div>
              <p className="mt-3 text-[10px] leading-relaxed text-[#8A837D]">
                On a R40 trip, the pilot keeps R36 and Vura takes R4. The cap only matters when 10%
                would be more than R5.
              </p>
            </div>

            <div className="bg-[#E1251B] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/65">
                  Android only
                </p>
                <CreditCard className="h-5 w-5 text-white/65" />
              </div>
              <h3 className="font-display mt-5 text-[clamp(1.9rem,3.8vw,2.8rem)] uppercase leading-[0.9]">
                Payday
                <br />
                freedom.
              </h3>
              <p className="mt-3 max-w-sm text-[12px] leading-relaxed text-white/75">
                Ride now and settle at month-end. 0% interest. No late fee. Eligibility and terms
                apply.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  to="/terms"
                  className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] underline underline-offset-4"
                >
                  Read the terms <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-[9px] font-semibold uppercase tracking-wider text-white/55">
                  Subject to eligibility
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#E1251B]/50 hover:bg-white/[0.07]">
      <Icon className="h-5 w-5 text-[#E1251B]" />
      <h3 className="mt-4 text-[12px] font-black uppercase tracking-[0.08em] text-white">{title}</h3>
      <p className="mt-2 text-[11px] leading-relaxed text-white/60">{text}</p>
    </div>
  );
}

function Safety() {
  return (
    <section id="safety" className="relative overflow-hidden bg-[#0B0B0C] py-20 text-white md:py-28">
      <div className="absolute inset-y-0 right-0 hidden w-[38%] opacity-25 lg:block">
        <img
          src={IMG.drive}
          alt="Driver at the wheel at night"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Eyebrow tone="dark">After dark mode</Eyebrow>
          <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em]">
            The safety net,
            <br />
            <span className="text-[#E1251B]">not the sales pitch.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
            Every trip carries a start PIN, live tracking, trip sharing and an SOS that reaches your
            people and our on-call team. The safety features are in the app, not buried in a press
            release.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
          <Feature
            icon={LockKeyhole}
            title="Start PIN"
            text="The trip cannot start until the rider's PIN is entered. The right car, the right trip."
          />
          <Feature
            icon={Share2}
            title="Live trip share"
            text="Send a live link to someone you trust. They see the route, the car and the pilot."
          />
          <Feature
            icon={Siren}
            title="SOS to your people"
            text="One tap emails your emergency contacts and the Vura on-call inbox with your live location."
          />
          <Feature
            icon={RouteIcon}
            title="RideCheck"
            text="If a trip stops responding, Vura checks in and escalates to the on-call team."
          />
          <Feature
            icon={Fingerprint}
            title="Verified pilots"
            text="ID, licence and vehicle checks before the first trip. No unchecked cars."
          />
          <Feature
            icon={Headphones}
            title="In-app support"
            text="Report an issue, appeal a decision or reach the team without leaving the app."
          />
        </div>

        <p className="mt-6 max-w-2xl border-l-2 border-[#E1251B]/60 pl-4 text-[10px] leading-relaxed text-white/35">
          SOS alerts your saved contacts and the Vura on-call team by email. It does not
          automatically call police or emergency services.
        </p>
      </div>
    </section>
  );
}

function Drivers() {
  return (
    <section id="drivers" className="border-b border-[#E6E1DA] bg-[#F8F6F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Eyebrow>For drivers</Eyebrow>
            <h2 className="font-display text-[clamp(2.7rem,5.8vw,5.2rem)] uppercase leading-[0.88] tracking-[-0.045em] text-[#0B0B0C]">
              Stop paying
              <br />
              25% to be
              <br />
              <span className="text-[#E1251B]">a number.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6B6560] md:text-base">
              Vura pilots keep the fare minus a commission capped at R5. See the split before you
              accept, get a receipt that shows the maths, and build a rating that means something.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "R5 max commission" },
                { icon: CreditCard, label: "See your net before you accept" },
                { icon: BadgeCheck, label: "Founding Pilot badge" },
                { icon: Clock3, label: "Request a payout from the app" },
                { icon: Star, label: "A rating that means something" },
                { icon: Headphones, label: "Priority pilot support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border border-[#E6E1DA] bg-white px-4 py-3"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-[#E1251B]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.08em] text-[#0B0B0C]/80">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
            >
              Apply as a Founding Pilot <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-5 max-w-xl text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#8A837D]">
              Founding Pilot applications are open in Johannesburg. Approval depends on documents,
              vehicle checks and the pilot code. Payouts are requested from the driver app.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[420px] overflow-hidden bg-[#0B0B0C] md:h-[520px]">
              <img
                src={IMG.blackCar}
                alt="Black Vura car at night"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <div className="absolute left-5 top-5 bg-white px-3 py-2">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A837D]">
                  The driver rebellion
                </p>
                <p className="mt-1 text-[12px] font-bold text-[#0B0B0C]">Keep the night's earnings.</p>
              </div>
              <div className="absolute bottom-5 right-5 bg-[#E1251B] px-4 py-3 text-white">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-white/70">
                  Vura takes
                </p>
                <p className="font-display text-4xl leading-none">R5</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/70">
                  max · from the fare
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 hidden h-20 w-20 border-l-2 border-b-2 border-[#E1251B] sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="access" className="relative overflow-hidden bg-[#0B0B0C] py-20 text-white md:py-28">
      <img
        src={IMG.skyline}
        alt="Johannesburg skyline at night"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/70 to-[#0B0B0C]/45" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E1251B]">
          Johannesburg · Founding access
        </p>
        <h2 className="font-display mt-5 text-[clamp(3.1rem,8.5vw,7.6rem)] uppercase leading-[0.82] tracking-[-0.05em]">
          The city
          <br />
          is <span className="text-[#E1251B]">waiting.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-white/55">
          Get early access to Vura in Johannesburg, or apply to drive the night shift.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#0B0B0C]"
          >
            Get early access <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:border-[#E1251B] hover:text-[#E1251B]"
          >
            Become a Founding Pilot <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
          iOS coming soon · Pay Later is Android-only
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0B0B0C] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <VuraLogo size={28} />
            <p className="mt-4 max-w-xs text-[11px] leading-relaxed text-white/45">
              Ride the night. Vura is a ride-hailing platform built in Johannesburg, South Africa.
            </p>
            <p className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
              <span className="vura-pulse h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              After dark, every night
            </p>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-semibold text-white/60">
              <a href="#night" className="transition hover:text-[#E1251B]">
                The Night Shift
              </a>
              <a href="#pilots" className="transition hover:text-[#E1251B]">
                Founding Pilots
              </a>
              <a href="#fares" className="transition hover:text-[#E1251B]">
                Fares & Pay Later
              </a>
              <a href="#safety" className="transition hover:text-[#E1251B]">
                Safety
              </a>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Company</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-semibold text-white/60">
              <Link to="/contact" className="transition hover:text-[#E1251B]">
                Contact
              </Link>
              <Link to="/terms" className="transition hover:text-[#E1251B]">
                Terms
              </Link>
              <Link to="/privacy" className="transition hover:text-[#E1251B]">
                Privacy
              </Link>
              <Link to="/refunds" className="transition hover:text-[#E1251B]">
                Refunds
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Drivers</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-semibold text-white/60">
              <Link to="/contact" className="transition hover:text-[#E1251B]">
                Apply as a pilot
              </Link>
              <Link to="/contact" className="transition hover:text-[#E1251B]">
                Driver support
              </Link>
              <a href="mailto:info@ridevura.com" className="transition hover:text-[#E1251B]">
                info@ridevura.com
              </a>
              <a href="tel:+27727795460" className="transition hover:text-[#E1251B]">
                072 779 5460
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] leading-relaxed text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dorfnew (Pty) Ltd. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Pay Later is an Android-only credit feature. Eligibility and terms apply. SOS alerts are
            email-based and do not automatically contact emergency services. Johannesburg night
            photography by Nico Roets / South African Tourism (CC BY 2.0). Stock photography via
            Pexels. Map data © OpenStreetMap contributors.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] selection:bg-[#E1251B] selection:text-white">
      <SiteHeader />
      <Hero />
      <Ticker />
      <NightShift />
      <PayLaterBand />
      <Pilots />
      <Fares />
      <Safety />
      <Drivers />
      <FinalCta />
      <Footer />
    </div>
  );
}
