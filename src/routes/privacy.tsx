import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vura" },
      { name: "description", content: "How Vura collects, stores, and protects your personal data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              Dorfnew (Pty) Ltd (&ldquo;Vura,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
              to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your
              personal data when you use our platform, in compliance with the Protection of Personal Information Act
              (POPIA) of South Africa.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-2">We collect the following categories of personal data:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li><strong>Account Information:</strong> Name, email address, phone number, and profile photo.</li>
              <li><strong>Location Data:</strong> Real-time GPS location for ride matching and trip tracking (only while the app is in use).</li>
              <li><strong>Payment Information:</strong> Transaction history and wallet balance. We do not store your bank account number or card details &mdash; payments are processed via secure third-party Instant EFT providers.</li>
              <li><strong>Trip Data:</strong> Pickup and drop-off addresses, route information, driver details, and trip timestamps.</li>
              <li><strong>Device Information:</strong> Device model, operating system, IP address, and app version for diagnostics and security.</li>
              <li><strong>Communications:</strong> Messages sent to drivers or support, and records of your interactions with us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>To provide, maintain, and improve our ride-hailing services.</li>
              <li>To process payments, top-ups, and refunds.</li>
              <li>To match you with nearby drivers and facilitate safe, efficient trips.</li>
              <li>To communicate with you about your account, trips, promotions, and service updates.</li>
              <li>To ensure platform safety, prevent fraud, and comply with legal obligations.</li>
              <li>To personalise your experience and analyse usage patterns to improve our features.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal data. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-2">
              <li><strong>With drivers:</strong> Your first name and pickup location are shared with the driver assigned to your trip.</li>
              <li><strong>With service providers:</strong> Trusted third parties who help us operate the platform (payment processors, cloud infrastructure, analytics) under strict data processing agreements.</li>
              <li><strong>Legal compliance:</strong> When required by law, court order, or government authority.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your data, including encryption in transit
              and at rest, access controls, and regular security audits. Payment transactions are processed through
              PCI DSS Level 1 compliant providers. While we strive to protect your data, no method of electronic
              storage or transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">6. Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal data for as long as your account is active or as needed to provide services.
              Trip and transaction records are retained for a minimum of 5 years as required by South African tax and
              financial regulations. You may request deletion of your account and associated data at any time, subject
              to our legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">7. Your Rights Under POPIA</h2>
            <p className="text-muted-foreground mb-2">As a data subject under South African law, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of inaccurate or outdated information.</li>
              <li>Object to the processing of your personal data.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Lodge a complaint with the Information Regulator of South Africa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">8. Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              Our website and app may use cookies and similar technologies for authentication, analytics, and
              improving user experience. You can control cookie preferences through your browser settings. Essential
              cookies required for the platform to function cannot be disabled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">9. Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our platform may contain links to third-party websites or services. We are not responsible for the
              privacy practices of these third parties. We encourage you to review their privacy policies before
              providing any personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Material changes will be communicated via email or
              in-app notification. The date at the top of this page indicates when the policy was last revised.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">11. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please visit our{" "}
              <Link to="/contact" className="text-primary underline">Contact page</Link> or email us at
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
