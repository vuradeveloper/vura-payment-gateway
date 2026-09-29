import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Vura" },
      {
        name: "description",
        content: "How Vura collects, stores, and protects your personal data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="When you use Vura, you trust us with your personal data. We're committed to keeping that trust — and to helping you understand how your data is handled."
      updated="July 2026"
    >
      <LegalSection index="1" title="Introduction">
        <p>
          Dorfnew (Pty) Ltd (&ldquo;Vura,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, store, and protect your personal data when you use our platform, in
          compliance with the Protection of Personal Information Act (POPIA) of South Africa.
        </p>
      </LegalSection>

      <LegalSection index="2" title="Information We Collect">
        <p>We collect the following categories of personal data:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-foreground">Account information:</strong> Name, email address,
            phone number, and profile photo.
          </li>
          <li>
            <strong className="text-foreground">Location data:</strong> Real-time GPS location for
            ride matching and trip tracking (only while the app is in use).
          </li>
          <li>
            <strong className="text-foreground">Payment information:</strong> Transaction history
            and wallet balance. We do not store your bank account number or card details &mdash;
            payments are processed via secure third-party Instant EFT providers.
          </li>
          <li>
            <strong className="text-foreground">Trip data:</strong> Pickup and drop-off addresses,
            route information, driver details, and trip timestamps.
          </li>
          <li>
            <strong className="text-foreground">Device information:</strong> Device model, operating
            system, IP address, and app version for diagnostics and security.
          </li>
          <li>
            <strong className="text-foreground">Communications:</strong> Messages sent to drivers or
            support, and records of your interactions with us.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="3" title="How We Use Your Data">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>To provide, maintain, and improve our ride-hailing services.</li>
          <li>To process payments, top-ups, and refunds.</li>
          <li>To match you with nearby drivers and facilitate safe, efficient trips.</li>
          <li>
            To communicate with you about your account, trips, promotions, and service updates.
          </li>
          <li>To ensure platform safety, prevent fraud, and comply with legal obligations.</li>
          <li>
            To personalise your experience and analyse usage patterns to improve our features.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="4" title="Data Sharing">
        <p>
          We do not sell your personal data. We may share your information only in the following
          circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong className="text-foreground">With drivers:</strong> Your first name and pickup
            location are shared with the driver assigned to your trip.
          </li>
          <li>
            <strong className="text-foreground">With service providers:</strong> Trusted third
            parties who help us operate the platform (payment processors, cloud infrastructure,
            analytics) under strict data processing agreements.
          </li>
          <li>
            <strong className="text-foreground">Legal compliance:</strong> When required by law,
            court order, or government authority.
          </li>
          <li>
            <strong className="text-foreground">Business transfers:</strong> In the event of a
            merger, acquisition, or sale of assets, your data may be transferred as part of the
            transaction.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="5" title="Data Security">
        <p>
          We implement industry-standard security measures to protect your data, including
          encryption in transit and at rest, access controls, and regular security audits. Payment
          transactions are processed through PCI DSS Level 1 compliant providers. While we strive to
          protect your data, no method of electronic storage or transmission is 100% secure.
        </p>
      </LegalSection>

      <LegalSection index="6" title="Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as needed to provide
          services. Trip and transaction records are retained for a minimum of 5 years as required
          by South African tax and financial regulations. You may request deletion of your account
          and associated data at any time, subject to our legal obligations.
        </p>
      </LegalSection>

      <LegalSection index="7" title="Your Rights Under POPIA">
        <p>As a data subject under South African law, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Request access to the personal data we hold about you.</li>
          <li>Request correction or deletion of inaccurate or outdated information.</li>
          <li>Object to the processing of your personal data.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Lodge a complaint with the Information Regulator of South Africa.</li>
        </ul>
      </LegalSection>

      <LegalSection index="8" title="Cookies and Tracking">
        <p>
          Our website and app may use cookies and similar technologies for authentication,
          analytics, and improving user experience. You can control cookie preferences through your
          browser settings. Essential cookies required for the platform to function cannot be
          disabled.
        </p>
      </LegalSection>

      <LegalSection index="9" title="Third-Party Links">
        <p>
          Our platform may contain links to third-party websites or services. We are not responsible
          for the privacy practices of these third parties. We encourage you to review their privacy
          policies before providing any personal data.
        </p>
      </LegalSection>

      <LegalSection index="10" title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Material changes will be communicated
          via email or in-app notification. The date at the top of this page indicates when the
          policy was last revised.
        </p>
      </LegalSection>

      <LegalSection index="11" title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or wish to exercise your data rights,
          please visit our{" "}
          <Link to="/contact" className="text-primary underline">
            Contact page
          </Link>{" "}
          or email us at info@ridevura.com.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
