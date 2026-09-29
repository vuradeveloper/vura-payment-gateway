import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { VuraLogo } from "@/components/vura-logo";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <VuraLogo size={28} />
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      <main className="flex-1 max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20 w-full">
        {eyebrow && (
          <p className="text-xs font-bold tracking-[0.15em] uppercase text-amber-600 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">{title}</h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {description}
          </p>
        )}
        {updated && (
          <p className="mt-6 text-xs font-medium text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1">
            Last updated: {updated}
          </p>
        )}
        <div className="mt-10 border-t">{children}</div>
      </main>

      <footer className="border-t py-8">
        <div className="max-w-3xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dorfnew (Pty) Ltd. All rights reserved.</p>
          <p>Instant EFT &middot; South Africa</p>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="py-7 first:pt-0 border-b last:border-b-0">
      <h2 className="text-base font-bold tracking-tight mb-3">
        <span className="text-amber-600 font-black mr-1.5">{index}.</span>
        {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2.5">{children}</div>
    </section>
  );
}
