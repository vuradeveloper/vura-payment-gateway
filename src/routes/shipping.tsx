import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Service Delivery Policy — Vura" },
      { name: "description", content: "Vura's service delivery policy — how our ride-hailing service operates across South Africa." },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="max-w-3xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <VuraLogo size={28} />
            <span className="text-lg font-bold tracking-tight">Vura</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            &larr; Back home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Service Delivery Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Overview</h2>
            <p className="text-muted-foreground">
              Vura is a ride-hailing platform connecting riders with drivers across South Africa. This Service Delivery
              Policy outlines how our service operates, including geographic availability, service types, and expected
              timelines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Geographic Availability</h2>
            <p className="text-muted-foreground">
              Vura operates in major metropolitan areas across South Africa, including Johannesburg, Pretoria, Cape Town,
              Durban, Port Elizabeth, Bloemfontein, and surrounding regions. Service availability in your specific area
              can be confirmed through the Vura app. We are actively expanding to additional cities and towns &mdash;
              check the app or our website for the latest coverage map.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Service Types</h2>
            <p className="text-muted-foreground mb-2">Vura offers the following ride types, subject to availability in your area:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Vura Go:</strong> Affordable everyday rides in sedans and hatchbacks. The most budget-friendly option.</li>
              <li><strong>Vura Plus:</strong> Spacious sedans and SUVs with extra legroom and higher-rated drivers.</li>
              <li><strong>Vura XL:</strong> Larger vehicles (6&ndash;7 seats) for groups or extra luggage.</li>
              <li><strong>Vura Assist:</strong> Rides with accessibility features for riders with mobility needs (available in select cities).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Expected Pickup Times</h2>
            <p className="text-muted-foreground">
              Pickup times vary based on driver availability, traffic conditions, and your location. The Vura app
              displays an estimated time of arrival (ETA) before you confirm your booking. While we strive for accuracy,
              ETAs are estimates and may change due to real-time road conditions. In most urban areas, the average
              pickup time ranges from 3 to 12 minutes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Trip Duration and Routing</h2>
            <p className="text-muted-foreground">
              Trip duration estimates are based on optimal routing, current traffic data, and historical trip patterns.
              Actual trip times may vary due to traffic, road closures, weather conditions, or route changes requested
              by the rider. Drivers are encouraged to follow the route suggested by the Vura navigation system unless
              the rider requests an alternative.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Service Hours</h2>
            <p className="text-muted-foreground">
              Vura operates 24 hours a day, 7 days a week in all active cities. Driver availability may be reduced
              during off-peak hours, which may result in longer wait times. Surge pricing may apply during periods of
              high demand to encourage more drivers to come online.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Service Limitations</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Vura does not operate in areas without network coverage or where it is unsafe for drivers or riders.</li>
              <li>Service may be temporarily suspended during severe weather events, civil unrest, or other emergencies.</li>
              <li>Cross-border trips (e.g. South Africa to neighbouring countries) are not supported at this time.</li>
              <li>Drivers reserve the right to decline a trip if they feel unsafe or if the rider violates our terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Service Delivery Policy as we expand and improve. Changes will be posted on this page
              and, where material, communicated via the app or email.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Contact</h2>
            <p className="text-muted-foreground">
              For questions about service availability or delivery timelines, visit our{" "}
              <Link to="/contact" className="text-primary underline">Contact page</Link> or email
              info@ridevura.com.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Dorfnew (Pty) Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
