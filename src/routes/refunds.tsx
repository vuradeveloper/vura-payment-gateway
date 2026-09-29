import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund and Return Policy — Vura" },
      {
        name: "description",
        content: "Vura's refund policy — timeframes, eligibility, and how refunds are processed.",
      },
    ],
  }),
  component: RefundsPage,
});

function RefundsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Refund and Return Policy"
      description="At Vura, we want every ride to be a great experience. If something goes wrong, this policy explains when refunds are available, how they are processed, and the timeframes you can expect."
      updated="June 2026"
    >
      <LegalSection index="1" title="Overview">
        <p>
          At Vura, we want every ride to be a great experience. If something goes wrong, this policy
          explains when refunds are available, how they are processed, and the timeframes you can
          expect.
        </p>
      </LegalSection>

      <LegalSection index="2" title="Eligibility for Refunds">
        <p>You may be eligible for a refund in the following circumstances:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-foreground">Fare overcharges:</strong> You were charged more
            than the upfront fare shown at booking without a valid reason (e.g. toll road or
            extended wait time you did not approve).
          </li>
          <li>
            <strong className="text-foreground">Driver no-show:</strong> The assigned driver did not
            arrive at the pickup location and you were charged a cancellation or no-show fee.
          </li>
          <li>
            <strong className="text-foreground">Trip not taken:</strong> You were charged for a trip
            you did not take (e.g. fraudulent use of your account).
          </li>
          <li>
            <strong className="text-foreground">Service failure:</strong> The trip was materially
            deficient &mdash; for example, the driver took a significantly longer route than
            reasonable, or the vehicle condition was unsafe.
          </li>
          <li>
            <strong className="text-foreground">Duplicate charges:</strong> You were charged twice
            for the same trip.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="3" title="Non-Refundable Items">
        <p>The following are generally not eligible for refunds:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Completed trips where the fare matches the upfront quote and the service was provided as
            agreed.
          </li>
          <li>
            Cancellation fees applied when a driver was already en route and you cancelled after the
            grace period.
          </li>
          <li>Vura cash top-ups that have already been spent on valid trips.</li>
          <li>Disputes raised more than 30 days after the trip date.</li>
        </ul>
      </LegalSection>

      <LegalSection index="4" title="Refund Timeframes">
        <p>Once your refund request is approved, refunds are processed as follows:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-foreground">Vura wallet refunds:</strong> Instant &mdash;
            returned to your Vura cash balance immediately upon approval.
          </li>
          <li>
            <strong className="text-foreground">Bank refunds (EFT):</strong> 3&ndash;7 business
            days, depending on your bank&rsquo;s processing time.
          </li>
          <li>
            <strong className="text-foreground">Card refunds:</strong> 5&ndash;10 business days,
            depending on your card issuer.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="5" title="How to Request a Refund">
        <p>
          To request a refund, open the affected trip in the Trips section of the Vura app, tap
          &ldquo;Report an issue,&rdquo; and follow the prompts. Alternatively, contact our support
          team through the{" "}
          <Link to="/contact" className="text-primary underline">
            Contact page
          </Link>
          . Please include your trip details, the reason for the request, and any supporting
          evidence (screenshots, receipts, etc.).
        </p>
      </LegalSection>

      <LegalSection index="6" title="Dispute Resolution">
        <p>
          If your refund request is denied and you disagree with the decision, you may escalate the
          matter by replying to the resolution email. A senior team member will review your case
          within 48 hours. If the issue remains unresolved, you may contact the relevant consumer
          protection authority in South Africa.
        </p>
      </LegalSection>

      <LegalSection index="7" title="Changes to This Policy">
        <p>
          We reserve the right to update this Refund Policy. Material changes will be posted on this
          page with an updated effective date. Continued use of our platform constitutes acceptance
          of the revised policy.
        </p>
      </LegalSection>

      <LegalSection index="8" title="Contact">
        <p>
          For questions about refunds, visit our{" "}
          <Link to="/contact" className="text-primary underline">
            Contact page
          </Link>{" "}
          or email info@ridevura.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
