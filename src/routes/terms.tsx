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

      <LegalSection index="13" title="Pay Later (Monthly Ride Account)" id="pay-later">
        <p>
          <strong>13.1 What it is.</strong> Pay Later lets eligible riders take Vura rides and pay for
          them on a monthly account instead of at the time of each ride. It is a billing option for
          Vura ride fares only. It cannot be used for cash, transfers, wallet top-ups, or purchases
          from third parties.
        </p>
        <p>
          <strong>13.2 Eligibility.</strong> Pay Later unlocks after at least{" "}
          <strong>5 completed paid rides</strong> on the same saved card, subject to our eligibility
          checks. We may refuse or withdraw Pay Later at any time.
        </p>
        <p>
          <strong>13.3 Account limit.</strong> Your outstanding Pay Later balance may not exceed the
          limit shown in the app. The limit starts at R100 and may increase up to R1,000 based on
          usage. It is a cap on the amount you owe, not a promise of credit.
        </p>
        <p>
          <strong>13.4 No charge for using Pay Later.</strong> The fare is the same whether you pay by
          Pay Later, card, or cash. We charge no interest, no fee, and no late fee.
        </p>
        <p>
          <strong>13.5 Billing and due date.</strong> Pay Later fares are recorded in the app and
          added to your balance. The amount is due by the last day of the month in which the ride was
          taken. You may repay earlier through the app.
        </p>
        <p>
          <strong>13.6 Payment.</strong> You repay from your saved card. You may pay manually at any
          time. Auto-debit is optional and requires your separate consent. If auto-debit is on, we
          may collect the amount due on or after the due date. If it is off, you must pay manually.
        </p>
        <p>
          <strong>13.7 Ride-to-repay.</strong> While you owe a balance, every{" "}
          <strong>4 completed rides</strong> automatically settles <strong>R25</strong> of that
          balance. This is a partial repayment of money you already owe. It has no cash value, does
          not increase your limit, and does not extend your due date.
        </p>
        <p>
          <strong>13.8 If you do not pay.</strong> We do not charge a late fee or interest. If your
          balance is not paid by the due date, we may suspend Pay Later access and your Vura account
          until it is paid. After failed collection attempts, your account may be frozen and your
          identity may be blocked from using Pay Later in future. Cash and card rides are unaffected.
        </p>
        <p>
          <strong>13.9 Restrictions.</strong> Pay Later is only for Vura rides, is non-transferable,
          and may not be used by another person.
        </p>
        <p>
          <strong>13.10 Disputes.</strong> If you believe a ride on your balance is wrong, contact
          support within 7 days. Disputed amounts will not be treated as late while we review them.
        </p>
        <p>
          <strong>13.11 Changes and ending Pay Later.</strong> We may change or end Pay Later on 30
          days&rsquo; notice. Amounts for rides already taken remain payable.
        </p>
        <p>
          <strong>13.12 Acceptance.</strong> You must accept this section in the app before your first
          Pay Later ride.
        </p>
      </LegalSection>

      <LegalSection index="14" title="Contact">
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
