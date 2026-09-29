import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Service Delivery Policy — Vura" },
      {
        name: "description",
        content:
          "Vura's service delivery policy — how our ride-hailing service operates across South Africa.",
      },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Service Delivery Policy"
      description="Vura is a ride-hailing platform connecting riders with drivers across South Africa. This policy outlines how our service operates, including geographic availability, service types, and expected timelines."
      updated="June 2026"
    >
      <LegalSection index="1" title="Overview">
        <p>
          Vura is a ride-hailing platform connecting riders with drivers across South Africa. This
          Service Delivery Policy outlines how our service operates, including geographic
          availability, service types, and expected timelines.
        </p>
      </LegalSection>

      <LegalSection index="2" title="Geographic Availability">
        <p>
          Vura operates in major metropolitan areas across South Africa, including Johannesburg,
          Pretoria, Cape Town, Durban, Port Elizabeth, Bloemfontein, and surrounding regions.
          Service availability in your specific area can be confirmed through the Vura app. We are
          actively expanding to additional cities and towns &mdash; check the app or our website for
          the latest coverage map.
        </p>
      </LegalSection>

      <LegalSection index="3" title="Service Types">
        <p>Vura offers the following ride types, subject to availability in your area:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-foreground">Vura Go:</strong> Affordable everyday rides in
            sedans and hatchbacks. The most budget-friendly option.
          </li>
          <li>
            <strong className="text-foreground">Vura Plus:</strong> Spacious sedans and SUVs with
            extra legroom and higher-rated drivers.
          </li>
          <li>
            <strong className="text-foreground">Vura XL:</strong> Larger vehicles (6&ndash;7 seats)
            for groups or extra luggage.
          </li>
          <li>
            <strong className="text-foreground">Vura Assist:</strong> Rides with accessibility
            features for riders with mobility needs (available in select cities).
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="4" title="Expected Pickup Times">
        <p>
          Pickup times vary based on driver availability, traffic conditions, and your location. The
          Vura app displays an estimated time of arrival (ETA) before you confirm your booking.
          While we strive for accuracy, ETAs are estimates and may change due to real-time road
          conditions. In most urban areas, the average pickup time ranges from 3 to 12 minutes.
        </p>
      </LegalSection>

      <LegalSection index="5" title="Trip Duration and Routing">
        <p>
          Trip duration estimates are based on optimal routing, current traffic data, and historical
          trip patterns. Actual trip times may vary due to traffic, road closures, weather
          conditions, or route changes requested by the rider. Drivers are encouraged to follow the
          route suggested by the Vura navigation system unless the rider requests an alternative.
        </p>
      </LegalSection>

      <LegalSection index="6" title="Service Hours">
        <p>
          Vura operates 24 hours a day, 7 days a week in all active cities. Driver availability may
          be reduced during off-peak hours, which may result in longer wait times. Surge pricing may
          apply during periods of high demand to encourage more drivers to come online.
        </p>
      </LegalSection>

      <LegalSection index="7" title="Service Limitations">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Vura does not operate in areas without network coverage or where it is unsafe for
            drivers or riders.
          </li>
          <li>
            Service may be temporarily suspended during severe weather events, civil unrest, or
            other emergencies.
          </li>
          <li>
            Cross-border trips (e.g. South Africa to neighbouring countries) are not supported at
            this time.
          </li>
          <li>
            Drivers reserve the right to decline a trip if they feel unsafe or if the rider violates
            our terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="8" title="Changes to This Policy">
        <p>
          We may update this Service Delivery Policy as we expand and improve. Changes will be
          posted on this page and, where material, communicated via the app or email.
        </p>
      </LegalSection>

      <LegalSection index="9" title="Contact">
        <p>
          For questions about service availability or delivery timelines, visit our{" "}
          <Link to="/contact" className="text-primary underline">
            Contact page
          </Link>{" "}
          or email info@ridevura.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
