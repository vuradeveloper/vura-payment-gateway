import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { VuraLogo } from "@/components/vura-logo";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function LegalPage({
  eyebrow,
  title,
  description,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#0B0B0C]">
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
            <Link to="/" className="transition hover:text-[#E1251B]">
              Home
            </Link>
            <Link to="/" hash="fares" className="transition hover:text-[#E1251B]">
              Fares
            </Link>
            <Link to="/" hash="pay-later" className="text-[#E1251B] transition hover:text-[#0B0B0C]">
              Pay Later
            </Link>
            <Link to="/" hash="safety" className="transition hover:text-[#E1251B]">
              Safety
            </Link>
            <Link to="/contact" className="transition hover:text-[#E1251B]">
              Contact
            </Link>
          </div>

          <Link
            to="/get-the-app"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#E1251B] px-4 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
          >
            Get the app <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="border-b border-[#E6E1DA] bg-[#F8F6F2]">
          <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
            <div className="max-w-4xl">
              {eyebrow && (
                <p className="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#E1251B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
                  {eyebrow}
                </p>
              )}
              <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] uppercase leading-[0.9] tracking-[-0.045em]">
                {title}
              </h1>
              {description && (
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#6B6560] md:text-base">
                  {description}
                </p>
              )}
              {updated && (
                <p className="mt-6 inline-flex items-center gap-2 border border-[#E6E1DA] bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A837D]">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" />
                  Last updated: {updated}
                </p>
              )}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
            <article className="max-w-3xl">{children}</article>

            <aside className="hidden lg:block">
              <div className="sticky top-24 border border-[#E6E1DA] bg-[#F8F6F2] p-5">
                <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#E1251B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
                  Need help?
                </p>
                <h2 className="font-display mt-3 text-2xl uppercase leading-[0.95]">
                  Talk to a human.
                </h2>
                <p className="mt-3 text-[11px] leading-relaxed text-[#6B6560]">
                  Questions about a fare, a refund, your account or a trip? The Vura team is on the
                  other side.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#E1251B] text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
                >
                  Contact support <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="mt-6 border-t border-[#E6E1DA] pt-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#8A837D]">
                    Legal
                  </p>
                  <div className="mt-3 flex flex-col gap-2 text-[11px] font-semibold text-[#5F5953]">
                    <Link to="/terms" className="transition hover:text-[#E1251B]">
                      Terms
                    </Link>
                    <Link to="/privacy" className="transition hover:text-[#E1251B]">
                      Privacy
                    </Link>
                    <Link to="/refunds" className="transition hover:text-[#E1251B]">
                      Refunds
                    </Link>
                    <Link to="/shipping" className="transition hover:text-[#E1251B]">
                      Service delivery
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="bg-[#0B0B0C] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <VuraLogo size={26} />
            <span className="text-[9px] font-bold uppercase leading-tight tracking-[0.18em] text-white/40">
              Ride the night.
              <br />
              Johannesburg.
            </span>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">
            <Link to="/" className="transition hover:text-[#E1251B]">
              Home
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
            <Link to="/shipping" className="transition hover:text-[#E1251B]">
              Service
            </Link>
            <Link to="/contact" className="transition hover:text-[#E1251B]">
              Contact
            </Link>
          </div>
          <p className="text-[9px] text-white/30">
            © {new Date().getFullYear()} Dorfnew (Pty) Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  index,
  title,
  id,
  children,
}: {
  index: string;
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-[#E6E1DA] py-8 first:pt-0 last:border-b-0 last:pb-0"
    >
      <h2 className="flex gap-3 text-base font-black uppercase tracking-[0.02em] text-[#0B0B0C]">
        <span className="font-display text-sm leading-6 text-[#E1251B]">{index}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-[#5F5953]">{children}</div>
    </section>
  );
}
