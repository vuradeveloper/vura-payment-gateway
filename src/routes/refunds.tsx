import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund and Return Policy — Vura" },
      { name: "description", content: "Vura's refund policy — timeframes, eligibility, and how refunds are processed." },
    ],
  }),
  component: RefundsPage,
});

function RefundsPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Refund and Return Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Overview</h2>
            <p className="text-muted-foreground">
              At Vura, we want every ride to be a great experience. If something goes wrong, this policy explains
              when refunds are available, how they are processed, and the timeframes you can expect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Eligibility for Refunds</h2>
            <p className="text-muted-foreground mb-2">You may be eligible for a refund in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Fare overcharges:</strong> You were charged more than the upfront fare shown at booking without a valid reason (e.g. toll road or extended wait time you did not approve).</li>
              <li><strong>Driver no-show:</strong> The assigned driver did not arrive at the pickup location and you were charged a cancellation or no-show fee.</li>
              <li><strong>Trip not taken:</strong> You were charged for a trip you did not take (e.g. fraudulent use of your account).</li>
              <li><strong>Service failure:</strong> The trip was materially deficient &mdash; for example, the driver took a significantly longer route than reasonable, or the vehicle condition was unsafe.</li>
              <li><strong>Duplicate charges:</strong> You were charged twice for the same trip.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Non-Refundable Items</h2>
            <p className="text-muted-foreground mb-2">The following are generally not eligible for refunds:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Completed trips where the fare matches the upfront quote and the service was provided as agreed.</li>
              <li>Cancellation fees applied when a driver was already en route and you cancelled after the grace period.</li>
              <li>Vura cash top-ups that have already been spent on valid trips.</li>
              <li>Disputes raised more than 30 days after the trip date.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Refund Timeframes</h2>
            <p className="text-muted-foreground">
              Once your refund request is approved, refunds are processed as follows:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-2">
              <li><strong>Vura wallet refunds:</strong> Instant &mdash; returned to your Vura cash balance immediately upon approval.</li>
              <li><strong>Bank refunds (EFT):</strong> 3&ndash;7 business days, depending on your bank&rsquo;s processing time.</li>
              <li><strong>Card refunds:</strong> 5&ndash;10 business days, depending on your card issuer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. How to Request a Refund</h2>
            <p className="text-muted-foreground">
              To request a refund, open the affected trip in the Trips section of the Vura app, tap &ldquo;Report an
              issue,&rdquo; and follow the prompts. Alternatively, contact our support team through the{" "}
              <Link to="/contact" className="text-primary underline">Contact page</Link>. Please include your trip
              details, the reason for the request, and any supporting evidence (screenshots, receipts, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Dispute Resolution</h2>
            <p className="text-muted-foreground">
              If your refund request is denied and you disagree with the decision, you may escalate the matter by
              replying to the resolution email. A senior team member will review your case within 48 hours. If the
              issue remains unresolved, you may contact the relevant consumer protection authority in South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We reserve the right to update this Refund Policy. Material changes will be posted on this page with
              an updated effective date. Continued use of our platform constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Contact</h2>
            <p className="text-muted-foreground">
              For questions about refunds, visit our{" "}
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
