import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Vura" },
      {
        name: "description",
        content: "Rules governing the use of Vura's website and ride-hailing services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms and Conditions"
      description="These Terms of Use govern your access to and use of Vura's applications, websites, content, products, and services."
      updated="June 2026"
    >
      <LegalSection index="1" title="Acceptance of Terms">
        <p>
          By accessing or using the Vura platform (website, mobile application, and related
          services), you agree to be bound by these Terms and Conditions. If you do not agree to
          these terms, you may not use our services.
        </p>
      </LegalSection>

      <LegalSection index="2" title="Definitions">
        <p>
          &ldquo;Vura,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo; refers to
          Dorfnew (Pty) Ltd, a company registered in South Africa. &ldquo;User,&rdquo;
          &ldquo;you,&rdquo; or &ldquo;your&rdquo; refers to any person who accesses or uses our
          platform, whether as a rider or driver. &ldquo;Services&rdquo; refers to the ride-hailing
          and related services provided through the Vura platform.
        </p>
      </LegalSection>

      <LegalSection index="3" title="Account Registration">
        <p>
          You must be at least 18 years old to create a Vura account. You are responsible for
          maintaining the confidentiality of your account credentials and for all activity under
          your account. You agree to provide accurate, current, and complete information during
          registration and to update it as necessary.
        </p>
      </LegalSection>

      <LegalSection index="4" title="User Responsibilities">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Treat drivers and fellow riders with respect and courtesy.</li>
          <li>
            Do not use the platform for any unlawful purpose or in violation of any applicable laws.
          </li>
          <li>
            Do not interfere with the proper operation of the platform or attempt to bypass security
            measures.
          </li>
          <li>
            Report any safety concerns, accidents, or incidents immediately through the in-app
            support channel.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="5" title="Payments and Wallet">
        <p>
          Fares are calculated based on distance, time, and demand. You agree to pay all charges
          incurred through your account. Vura cash top-ups are processed via Instant EFT and are
          non-refundable except as set out in our Refund Policy. We reserve the right to adjust
          fares and introduce new charges with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection index="6" title="Cancellations">
        <p>
          You may cancel a ride request at any time before the driver arrives. Cancellation fees may
          apply if a driver is already en route. Repeated cancellations may result in account
          restrictions.
        </p>
      </LegalSection>

      <LegalSection index="7" title="Driver Commission">
        <p>
          Vura charges drivers a flat commission capped at R5 per completed trip, and on some trips
          no commission at all. This rate is subject to change with 30 days&rsquo; notice. Drivers
          are independent contractors and are responsible for their own tax obligations, vehicle
          maintenance, and insurance.
        </p>
      </LegalSection>

      <LegalSection index="8" title="Limitation of Liability">
        <p>
          To the fullest extent permitted by South African law, Vura shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from your use of
          the platform. Our total liability for any claim shall not exceed the value of the fare for
          the trip in question.
        </p>
      </LegalSection>

      <LegalSection index="9" title="Intellectual Property">
        <p>
          The Vura name, logo, and all related branding are trademarks of Dorfnew (Pty) Ltd. You may
          not use our intellectual property without prior written consent. All content on the
          platform is protected by copyright and other intellectual property laws.
        </p>
      </LegalSection>

      <LegalSection index="10" title="Termination">
        <p>
          We may suspend or terminate your account at any time for violation of these terms,
          fraudulent activity, or conduct that may harm Vura, other users, or third parties. You may
          close your account at any time by contacting support.
        </p>
      </LegalSection>

      <LegalSection index="11" title="Governing Law">
        <p>
          These terms are governed by and construed in accordance with the laws of the Republic of
          South Africa. Any disputes arising from these terms shall be subject to the exclusive
          jurisdiction of the courts of South Africa.
        </p>
      </LegalSection>

      <LegalSection index="12" title="Changes to Terms">
        <p>
          We reserve the right to modify these terms at any time. Material changes will be
          communicated via email or in-app notification. Continued use of the platform after changes
          take effect constitutes acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection index="13" title="Contact">
        <p>
          For questions about these Terms and Conditions, please contact us at{" "}
          <Link to="/contact" className="text-primary underline">
            ridevura.com/contact
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
