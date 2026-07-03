import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Vura" },
      { name: "description", content: "Rules governing the use of Vura's website and ride-hailing services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Terms and Conditions</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the Vura platform (website, mobile application, and related services), you agree to
              be bound by these Terms and Conditions. If you do not agree to these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Definitions</h2>
            <p className="text-muted-foreground">
              &ldquo;Vura,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo; refers to Dorfnew (Pty) Ltd,
              a company registered in South Africa. &ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo; refers
              to any person who accesses or uses our platform, whether as a rider or driver. &ldquo;Services&rdquo;
              refers to the ride-hailing and related services provided through the Vura platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. Account Registration</h2>
            <p className="text-muted-foreground">
              You must be at least 18 years old to create a Vura account. You are responsible for maintaining the
              confidentiality of your account credentials and for all activity under your account. You agree to provide
              accurate, current, and complete information during registration and to update it as necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. User Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Treat drivers and fellow riders with respect and courtesy.</li>
              <li>Do not use the platform for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Do not interfere with the proper operation of the platform or attempt to bypass security measures.</li>
              <li>Report any safety concerns, accidents, or incidents immediately through the in-app support channel.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Payments and Wallet</h2>
            <p className="text-muted-foreground">
              Fares are calculated based on distance, time, and demand. You agree to pay all charges incurred through
              your account. Vura cash top-ups are processed via Instant EFT and are non-refundable except as set out in
              our Refund Policy. We reserve the right to adjust fares and introduce new charges with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Cancellations</h2>
            <p className="text-muted-foreground">
              You may cancel a ride request at any time before the driver arrives. Cancellation fees may apply if a
              driver is already en route. Repeated cancellations may result in account restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Driver Commission</h2>
            <p className="text-muted-foreground">
              Vura charges drivers a flat commission capped at R5 per completed trip. This rate is subject to change
              with 30 days&rsquo; notice. Drivers are independent contractors and are responsible for their own tax
              obligations, vehicle maintenance, and insurance.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the fullest extent permitted by South African law, Vura shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use of the platform. Our total
              liability for any claim shall not exceed the value of the fare for the trip in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Vura name, logo, and all related branding are trademarks of Dorfnew (Pty) Ltd. You may not use our
              intellectual property without prior written consent. All content on the platform is protected by copyright
              and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Termination</h2>
            <p className="text-muted-foreground">
              We may suspend or terminate your account at any time for violation of these terms, fraudulent activity,
              or conduct that may harm Vura, other users, or third parties. You may close your account at any time by
              contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by and construed in accordance with the laws of the Republic of South Africa.
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of
              South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">12. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Material changes will be communicated via email
              or in-app notification. Continued use of the platform after changes take effect constitutes acceptance
              of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">13. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms and Conditions, please contact us at{" "}
              <Link to="/contact" className="text-primary underline">ridevura.com/contact</Link>.
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
