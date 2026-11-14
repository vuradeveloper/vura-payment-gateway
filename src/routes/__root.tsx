import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { supabase } from "@/integrations/supabase/client";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-[#0B0B0C]">
      <div className="max-w-md text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E1251B]">
          Vura / 404
        </p>
        <h1 className="font-display mt-3 text-8xl uppercase leading-none tracking-[-0.05em]">
          404
        </h1>
        <h2 className="font-display mt-4 text-2xl uppercase tracking-[-0.02em]">Page not found</h2>
        <p className="mt-2 text-sm text-[#6B6560]">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const err = error instanceof Error ? error : new Error(String(error));
  console.error(err);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(err, { boundary: "tanstack_root_error_component" });
  }, [err]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-[#0B0B0C]">
      <div className="max-w-md text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E1251B]">
          Vura / Error
        </p>
        <h1 className="font-display mt-3 text-3xl uppercase leading-[0.95] tracking-[-0.035em]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[#6B6560]">
          Something went wrong. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#E1251B] px-6 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#E6E1DA] bg-white px-6 text-[11px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/** Structured data: brand + local business. Google uses this for the brand
 *  panel, the logo and the "Johannesburg" area; without it the site is just
 *  text to a crawler. Keep the URLs absolute — relative ones are ignored. */
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ridevura.com/#organization",
      name: "Vura",
      url: "https://www.ridevura.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ridevura.com/favicon-512.png",
        width: 512,
        height: 512,
      },
      image: "https://www.ridevura.com/og-image.png",
      description:
        "Vura is a Johannesburg ride-hailing app with verified drivers, a commission capped at R5 and Pay Later for riders.",
      email: "info@ridevura.com",
      areaServed: { "@type": "City", name: "Johannesburg" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Johannesburg",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ridevura.com/#website",
      url: "https://www.ridevura.com",
      name: "Vura",
      publisher: { "@id": "https://www.ridevura.com/#organization" },
      inLanguage: "en-ZA",
    },
    {
      "@type": "Service",
      name: "Vura ride-hailing",
      serviceType: "Ride-hailing",
      provider: { "@id": "https://www.ridevura.com/#organization" },
      areaServed: { "@type": "City", name: "Johannesburg" },
      offers: {
        "@type": "Offer",
        description:
          "Verified drivers, commission capped at R5 per ride, no surge, and Ride Now Pay Later.",
        priceCurrency: "ZAR",
      },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vura — Rides that work for everyone. Johannesburg ride-hailing." },
      {
        name: "description",
        content:
          "Vura is the e-hailing app South Africa has been waiting for — safe, affordable rides for passengers, and fair earnings for drivers. R5 max commission. Ride now, pay later.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#E1251B" },
      // Social cards: without these, WhatsApp/X/LinkedIn show a bare link.
      { property: "og:site_name", content: "Vura" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { property: "og:url", content: "https://www.ridevura.com/" },
      { property: "og:title", content: "Vura — Rides that work for everyone." },
      {
        property: "og:description",
        content:
          "Safe, affordable rides for passengers. Fair earnings for drivers. Commission capped at R5. Ride Now Pay Later.",
      },
      { property: "og:image", content: "https://www.ridevura.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Vura — ride-hailing Johannesburg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vura — Rides that work for everyone." },
      {
        name: "twitter:description",
        content:
          "Safe, affordable rides for passengers. Fair earnings for drivers. Commission capped at R5.",
      },
      { name: "twitter:image", content: "https://www.ridevura.com/og-image.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96.png" },
      { rel: "icon", type: "image/png", sizes: "144x144", href: "/favicon-144.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const canonical = `https://www.ridevura.com${
    pathname === "/" ? "/" : pathname.replace(/\/+$/, "")
  }`;

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
      router.invalidate();
      if (event !== "SIGNED_OUT") queryClient.invalidateQueries();
    });
    return () => sub.subscription.unsubscribe();
  }, [router, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
