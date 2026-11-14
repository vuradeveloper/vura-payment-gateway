import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  Clock3,
  CreditCard,
  Headphones,
  MapPin,
  HeartHandshake,
  Percent,
  Share2,
  ShieldCheck,
  Siren,
  Smartphone,
  Star,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vura — Rides that work for everyone. Johannesburg ride-hailing." },
      {
        name: "description",
        content:
          "Vura is the e-hailing app South Africa has been waiting for — safe, affordable rides for passengers, and fair earnings for drivers. R5 max commission. Ride now, pay later.",
      },
      { name: "theme-color", content: "#FFFFFF" },
    ],
  }),
  component: LandingPage,
});

const PILOTS = [
  {
    id: "DRIVER 014",
    area: "Sandton",
    car: "Toyota Corolla · White",
    rating: "4.9",
    trips: "1,240 trips",
    image: "/images/car-17120616.jpg",
  },
  {
    id: "DRIVER 027",
    area: "Rosebank",
    car: "VW Polo · Black",
    rating: "4.8",
    trips: "980 trips",
    image: "/images/car-4713813.jpg",
  },
  {
    id: "DRIVER 039",
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
            South Africa
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5F5953] lg:flex">
          <a href="#manifesto" className="transition hover:text-[#E1251B]">
            Our philosophy
          </a>
          <a href="#how" className="transition hover:text-[#E1251B]">
            How it works
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
            to="/get-the-app"
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
    <div className={compact ? "w-[226px]" : "w-[252px]"}>
      <div className="rounded-[2.2rem] border border-white/15 bg-[#0B0B0C] p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
        {/* A real screenshot from the Vura app (booking a ride to Sandton City),
            not a drawing of one. The frame keeps the 19.5:9 phone aspect. */}
        <div
          className="relative overflow-hidden rounded-[1.7rem] bg-[#F6F2EC]"
          style={{ aspectRatio: "390 / 844" }}
        >
          <img
            src="/images/app-booking.png"
            alt="The Vura app booking a ride from Rosebank to Sandton City, with the route on the map and the fare confirmed"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            width={390}
            height={844}
          />
        </div>
      </div>
    </div>
  );
}
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-10 pt-14 md:px-8 md:pb-12 md:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="relative z-10">
          <Eyebrow>Vura / Ride-hailing / South Africa</Eyebrow>

          <h1 className="font-display text-[clamp(3.4rem,8.8vw,7.4rem)] uppercase leading-[0.84] tracking-[-0.05em] text-[#0B0B0C]">
            Defy the
            <br />
            <span className="text-[#E1251B]">odds.</span>
          </h1>

          <blockquote className="mt-7 max-w-xl text-base font-semibold italic leading-snug tracking-tight text-[#0B0B0C] md:text-lg">
            &ldquo;Here&apos;s to the crazy ones. The misfits. The rebels. The troublemakers. The
            round pegs in the square holes. The ones who{" "}
            <span className="not-italic text-[#E1251B]">see things differently.</span>&rdquo;
          </blockquote>
          <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
            — Think Different, 1997
          </p>
          <p className="mt-3 max-w-lg text-xs leading-relaxed text-[#6B6560] md:text-sm">
            We built Vura the way Apple once built computers — by asking what the world actually
            needs, ignoring how it&apos;s always been done, and refusing to ship something that
            doesn&apos;t change things. South Africa deserves a ride-hailing app that&apos;s
            genuinely on its side.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/get-the-app"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
            >
              Get the app <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#0B0B0C]/20 bg-white px-6 text-[11px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
            >
              Become a driver <ArrowUpRight className="h-4 w-4" />
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
              <Users className="h-3.5 w-3.5 text-[#E1251B]" /> For riders and drivers
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
              alt="Johannesburg skyline"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/25 to-[#0B0B0C]/10" />
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-[#0B0B0C] backdrop-blur">
                Johannesburg · South Africa
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-[#E1251B] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.16em] text-white">
                <span className="vura-pulse h-1.5 w-1.5 rounded-full bg-white" />
                Vura dispatch
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

      <div id="manifesto" className="relative mx-auto max-w-7xl px-5 pb-14 md:px-8 md:pb-20">
        <div className="grid gap-5 border-t border-[#E6E1DA] pt-7 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
          <div>
            <p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#E1251B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              Our philosophy
            </p>
            <h2 className="font-display mt-3 text-[clamp(2rem,4.4vw,3.4rem)] uppercase leading-[0.88] tracking-[-0.04em] text-[#0B0B0C]">
              Rides that
              <br />
              work for <span className="text-[#E1251B]">everyone.</span>
            </h2>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A837D]">
              Impossible is just a word.
            </p>
          </div>
          <div className="border-l-2 border-[#E1251B] pl-5">
            <p className="text-sm font-semibold leading-snug tracking-tight text-[#0B0B0C] md:text-base">
              Safe, affordable rides for passengers. Fair earnings for drivers.
            </p>
            <p className="mt-2 max-w-xl text-[11px] leading-relaxed text-[#6B6560]">
              Vura is the e-hailing app South Africa has been waiting for. Built differently, on
              purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="border-b border-[#E6E1DA] bg-[#F8F6F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em] text-[#0B0B0C]">
              On the road
              <br />
              in three steps.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6B6560] md:text-base lg:pb-2">
            From first tap to first trip: no paperwork, no waiting rooms, no hidden steps. Top up
            with zero-fee Instant EFT or pay cash — Vura works however you do.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Smartphone,
              title: "Create an account",
              text: "Sign up with email or Google in under a minute. No paperwork, no waiting.",
            },
            {
              icon: Wallet,
              title: "Top up your wallet",
              text: "Add Vura cash instantly via Instant EFT — straight from your bank, zero fees.",
            },
            {
              icon: MapPin,
              title: "Book and ride",
              text: "Enter your pickup and destination, choose your ride type, and go. No wallet, no problem — select cash when you book. Vura works however you do.",
            },
          ].map((step, i) => (
            <div key={step.title} className="relative border border-[#E6E1DA] bg-white p-6">
              <span className="font-display absolute right-4 top-2 text-5xl leading-none text-[#E6E1DA]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-11 w-11 items-center justify-center bg-[#F8F6F2]">
                <step.icon className="h-5 w-5 text-[#E1251B]" />
              </div>
              <h3 className="mt-5 text-[13px] font-black uppercase tracking-[0.08em] text-[#0B0B0C]">
                {step.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-[#6B6560]">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8A837D]">
          Cash rides welcome · Instant EFT top-ups · No surge
        </p>
      </div>
    </section>
  );
}

function PayLaterBand() {
  return (
    <section
      id="pay-later"
      className="relative overflow-hidden border-b border-[#E6E1DA] bg-[#F8F6F2] text-[#0B0B0C]"
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.26em] text-[#E1251B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              Ride Now, Pay Later · Android only
            </p>
            <h2 className="font-display text-[clamp(2.7rem,5.6vw,4.9rem)] uppercase leading-[0.88] tracking-[-0.045em] text-[#0B0B0C]">
              Ride now.
              <br />
              Pay later.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B6560] md:text-base">
              Your money, your rules. Vura gives riders the flexibility no other app in South Africa
              does. Ride now and settle at month-end with 0% interest and no late fee.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { n: "01", title: "Ride", text: "Book a ride like normal." },
              { n: "02", title: "Rack it up", text: "Your rides collect in one balance." },
              { n: "03", title: "Payday", text: "Settle at month-end. 0% interest." },
            ].map((step) => (
              <div key={step.n} className="border border-[#E6E1DA] bg-white p-3.5">
                <p className="text-[8px] font-black tracking-[0.18em] text-[#8A837D]">{step.n}</p>
                <p className="mt-2 text-[11px] font-black uppercase tracking-[0.06em] text-[#0B0B0C]">
                  {step.title}
                </p>
                <p className="mt-1.5 text-[9px] leading-relaxed text-[#6B6560]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-[#E6E1DA] pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CreditCard,
              title: "Ride now, pay later",
              text: "Take 5 rides with Vura and you qualify. Then ride now and settle at month-end. No interest, no fee, no late fee.",
            },
            {
              icon: CalendarClock,
              title: "Monthly billing",
              text: "Rides build up and bill once a month at month-end, when you get paid.",
            },
            {
              icon: Percent,
              title: "0% interest, always",
              text: "Pay your balance on pay day and interest stays at exactly zero. Always. No catches.",
            },
            {
              icon: Zap,
              title: "Top up your wallet",
              text: "Top up with zero-fee Instant EFT to stand a chance of discounts and free rides.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-[#E6E1DA] bg-white p-4">
              <item.icon className="h-4 w-4 text-[#E1251B]" />
              <h3 className="mt-3 text-[10px] font-black uppercase tracking-[0.08em] text-[#0B0B0C]">
                {item.title}
              </h3>
              <p className="mt-2 text-[10px] leading-relaxed text-[#6B6560]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#E6E1DA] pt-5">
          <Link
            to="/terms"
            className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] underline underline-offset-4 transition hover:text-[#E1251B]"
          >
            See how it works <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8A837D]">
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
          Vura
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
        Typical wait in Johannesburg · live ETA is shown in the app
      </p>
    </div>
  );
}

function Everyone() {
  return (
    <section id="riders" className="border-b border-[#E6E1DA] bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <Eyebrow>For riders and drivers</Eyebrow>
            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em] text-[#0B0B0C]">
              One app.
              <br />
              Both sides.
              <br />
              <span className="text-[#E1251B]">Better for everyone.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#6B6560] md:text-base lg:pb-2">
            Vura is the e-hailing app South Africa has been waiting for — safe, affordable rides
            for passengers, and fair earnings for drivers. Built differently, on purpose.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-[300px] overflow-hidden bg-[#0B0B0C] md:h-[360px]">
              <img
                src={IMG.club}
                alt="A Vura ride in Johannesburg"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/60">
                  A Vura ride
                </p>
                <p className="mt-1 text-lg font-bold text-white">Rides that work for everyone.</p>
              </div>
            </div>

            <div className="relative h-[190px] overflow-hidden bg-[#0B0B0C]">
              <img
                src={IMG.bridgeCar}
                alt="A Vura driver waiting at pickup"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-[0.18em] text-white">
                The pickup
              </p>
            </div>

            <div className="relative h-[190px] overflow-hidden bg-[#0B0B0C]">
              <img
                src={IMG.drive}
                alt="A Vura driver at the wheel"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 text-[9px] font-black uppercase tracking-[0.18em] text-white">
                The driver
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            {[
              {
                icon: Users,
                title: "For riders",
                text: "Safe, affordable rides you can count on. Instant EFT top-ups — top up straight from your South African bank account, no card, no hassle, zero fees.",
              },
              {
                icon: Wallet,
                title: "For drivers",
                text: "Keep what you earn. A flat commission capped at R5 per trip — the more you make, the more you keep.",
              },
              {
                icon: HeartHandshake,
                title: "For everyone",
                text: "One app that works for passengers and drivers, not one at the other's expense.",
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
          alt={pilot.car}
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
          {["Background checked", "ID verified", "Vehicle checked"].map((tag) => (
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
            <Eyebrow tone="dark">For riders</Eyebrow>
            <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em]">
              Verified,
              <br />
              <span className="text-[#E1251B]">safe drivers.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Every driver is background-checked. Real-time trip tracking and in-app SOS so you
            always feel secure.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PILOTS.map((pilot) => (
            <PilotCard key={pilot.id} pilot={pilot} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border border-white/10 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>Illustrative profile layout · live driver identities are protected</span>
          <span className="flex items-center gap-1.5 text-[#E1251B]">
            <BadgeCheck className="h-3.5 w-3.5" /> Every live driver passes the same checks
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
            <Eyebrow>For drivers</Eyebrow>
            <h2 className="font-display text-[clamp(2.7rem,5.8vw,5.2rem)] uppercase leading-[0.88] tracking-[-0.045em] text-[#0B0B0C]">
              R5 max.
              <br />
              Sometimes R0.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#6B6560] md:text-base">
              Other platforms take a growing cut of everything you earn. Vura caps it at R5 per
              trip — and on some trips, we take nothing at all. On a R200 trip, you keep R195. The
              rider pays a 4% booking fee on top, so it never comes out of the driver&apos;s fare.
              The more you drive, the more you keep.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
              <span className="flex items-center gap-1.5">
                <Percent className="h-3.5 w-3.5 text-[#E1251B]" /> 10% commission
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" /> Truly affordable fares
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#E1251B]" /> No surge
              </span>
            </div>
            <p className="mt-4 max-w-md text-[10px] leading-relaxed text-[#8A837D]">
              Because our commission is capped at R5, drivers earn more and passengers pay less.
              Everyone wins.
            </p>
          </div>

          <div className="space-y-4">
            <div className="border border-[#E6E1DA] bg-[#F8F6F2] p-6">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8A837D]">
                  Max commission per trip
                </p>
                <span className="border border-[#E1251B]/25 bg-white px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#E1251B]">
                  On a R200 trip
                </span>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
                    You keep
                  </p>
                  <p className="font-display mt-1 text-5xl leading-none text-[#0B0B0C]">R195</p>
                </div>
                <div className="border-l border-[#E6E1DA] pl-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
                    Vura takes
                  </p>
                  <p className="font-display mt-1 text-5xl leading-none text-[#E1251B]">R5</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8A837D]">
                    flat — always
                  </p>
                </div>
              </div>
              <div className="mt-6 h-2 w-full bg-[#E6E1DA]">
                <div className="h-2 bg-[#E1251B]" style={{ width: "97.5%" }} />
              </div>
              <p className="mt-3 text-[10px] leading-relaxed text-[#8A837D]">
                On a R40 trip, you keep R36 and Vura takes R4. The cap only matters when 10% would be
                more than R5.
              </p>
              <p className="mt-2 text-[10px] leading-relaxed text-[#8A837D]">
                On a R500 trip, you keep R495. When Vura runs R0-commission promotions, you keep
                every rand.
              </p>
              <p className="mt-2 text-[10px] leading-relaxed text-[#8A837D]">
                We grow when you grow — not by taking more from you.
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
          alt="Driver at the wheel"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C] via-[#0B0B0C]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Eyebrow tone="dark">Safety first</Eyebrow>
          <h2 className="font-display text-[clamp(2.6rem,5.8vw,5.1rem)] uppercase leading-[0.9] tracking-[-0.04em]">
            Your safety is
            <br />
            <span className="text-[#E1251B]">non-negotiable.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
            Every ride is protected, from the moment you book to the moment you arrive. Riders and
            drivers rate every trip, so standards stay high for everyone.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3">
          <Feature
            icon={ShieldCheck}
            title="Background-checked drivers"
            text="Every driver is vetted and verified before their first trip. No exceptions."
          />
          <Feature
            icon={MapPin}
            title="Live trip tracking"
            text="Watch your driver approach in real time. Share your trip with anyone you trust."
          />
          <Feature
            icon={Siren}
            title="In-app SOS"
            text="One tap emails your emergency contacts and the Vura on-call inbox with your live location."
          />
          <Feature
            icon={Share2}
            title="Share your trip"
            text="Loved ones can follow your ride live from start to finish."
          />
          <Feature
            icon={Headphones}
            title="In-app support"
            text="Something went wrong? Reach a real person directly in the app. No hold music, no call centres."
          />
          <Feature
            icon={Star}
            title="Ratings that matter"
            text="Riders and drivers rate every trip, keeping standards high for everyone."
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
              Keep what
              <br />
              you
              <br />
              <span className="text-[#E1251B]">earn.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6B6560] md:text-base">
              Every other platform takes a percentage cut that grows as you do — punishing your
              success. Vura does it differently. We charge a flat commission capped at R5 per trip,
              no matter how much you earn. The more you make, the more you keep.
            </p>
            <div className="mt-7 grid gap-2 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, label: "R5 maximum commission — never more, ever" },
                {
                  icon: CreditCard,
                  label: "Transparent pricing — see exactly what you earn before you accept",
                },
                { icon: BadgeCheck, label: "No surprise deductions — your fare is your fare" },
                { icon: Clock3, label: "Flexible hours — drive when it suits you" },
                { icon: Wallet, label: "Request a payout from the app" },
                { icon: Headphones, label: "Priority driver support" },
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
              Apply as a Founding Driver <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-5 max-w-xl text-[9px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-[#8A837D]">
              Founding Driver applications are open in Johannesburg. Approval depends on documents,
              vehicle checks and the driver code. Payouts are requested from the driver app.
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[420px] overflow-hidden bg-[#0B0B0C] md:h-[520px]">
              <img
                src={IMG.blackCar}
                alt="A Vura car"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
              <div className="absolute left-5 top-5 bg-white px-3 py-2">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#8A837D]">
                  For drivers
                </p>
                <p className="mt-1 text-[12px] font-bold text-[#0B0B0C]">Keep what you earn.</p>
              </div>
              <div className="absolute bottom-5 right-5 bg-[#E1251B] px-4 py-3 text-white">
                <p className="text-[8px] font-black uppercase tracking-[0.18em] text-white/70">
                  Vura takes
                </p>
                <p className="font-display text-4xl leading-none">R5</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white/70">
                  max · sometimes R0
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
        alt="Johannesburg skyline"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/70 to-[#0B0B0C]/45" />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E1251B]">
          Ready to ride differently?
        </p>
        <h2 className="font-display mt-5 text-[clamp(3.1rem,8.5vw,7.6rem)] uppercase leading-[0.82] tracking-[-0.05em]">
          Move without
          <br />
          <span className="text-[#E1251B]">limits.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
          The city is waiting.
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55">
          Vura is live in Johannesburg. Get the app to ride, or apply to drive with Vura.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/get-the-app"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#0B0B0C]"
          >
            Get the app <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/25 px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:border-[#E1251B] hover:text-[#E1251B]"
          >
            Become a driver <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30">
          Rider and driver apps for Android · iPhone apps coming soon
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
              Rides that work for everyone. Vura is a ride-hailing platform built in Johannesburg,
              South Africa.
            </p>
            <p className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
              <span className="vura-pulse h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
              Riders and drivers, every day
            </p>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Explore</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-semibold text-white/60">
              <a href="#manifesto" className="transition hover:text-[#E1251B]">
                Our philosophy
              </a>
              <a href="#how" className="transition hover:text-[#E1251B]">
                How it works
              </a>
              <a href="#riders" className="transition hover:text-[#E1251B]">
                For riders and drivers
              </a>
              <a href="#pay-later" className="transition hover:text-[#E1251B]">
                Pay Later & fares
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
                Support &amp; Contact
              </Link>
              <Link to="/terms" className="transition hover:text-[#E1251B]">
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" className="transition hover:text-[#E1251B]">
                Privacy Policy
              </Link>
              <Link to="/refunds" className="transition hover:text-[#E1251B]">
                Refund Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/30">Drivers</p>
            <div className="mt-4 flex flex-col gap-2.5 text-[11px] font-semibold text-white/60">
              <Link to="/contact" className="transition hover:text-[#E1251B]">
                Apply as a driver
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
            Instant EFT · South Africa · Pay Later is an Android-only credit feature. Eligibility
            and terms apply. SOS alerts are email-based and do not automatically contact emergency
            services. Johannesburg photography by Nico Roets / South African Tourism (CC BY 2.0).
            Stock photography via Pexels. Map data © OpenStreetMap contributors.
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
      <PayLaterBand />
      <Everyone />
      <HowItWorks />
      <Pilots />
      <Fares />
      <Safety />
      <Drivers />
      <FinalCta />
      <Footer />
    </div>
  );
}
