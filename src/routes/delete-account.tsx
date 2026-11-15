import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { Clock3, Mail, ShieldCheck, Smartphone } from "lucide-react";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: "Delete your account — Vura" },
      {
        name: "description",
        content:
          "How to permanently delete your Vura Rider or Vura Driver account, what is deleted, and what we are legally required to keep.",
      },
      { name: "theme-color", content: "#FFFFFF" },
    ],
  }),
  component: DeleteAccountPage,
});

const ROLE_STEPS = [
  {
    role: "Vura Rider",
    steps: [
      "Open Vura Rider.",
      "Go to Settings.",
      "Tap Delete account.",
      "Tap Delete my account.",
    ],
  },
  {
    role: "Vura Driver",
    steps: [
      "Open Vura Driver.",
      "Go to Account.",
      "Tap Delete account.",
      "Tap Delete my account.",
    ],
  },
];

function DeleteAccountPage() {
  const mailto =
    "mailto:info@ridevura.com?subject=Delete%20my%20account&body=" +
    encodeURIComponent(
      "Please delete my Vura account.\n\nFull name:\nPhone number:\nEmail on the account:\nAccount type: Rider / Driver\n"
    );

  return (
    <LegalPage
      eyebrow="Account"
      title="Delete your account"
      description="You can permanently delete your Vura Rider or Vura Driver account at any time. Choose the app you use, or email us if you cannot sign in."
    >
      <h2 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        <Smartphone className="h-4 w-4" />
        Delete it in the app
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {ROLE_STEPS.map((item) => (
          <div key={item.role} className="border border-[#E6E1DA] bg-white p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8A837D]">
              {item.role}
            </p>
            <ol className="mt-3 space-y-2">
              {item.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-2.5 text-[12px] leading-relaxed text-[#5F5953]"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-[#FBE9E7] text-[9px] font-black text-[#E1251B]">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <p className="mt-4 border-l-2 border-[#E1251B]/60 pl-4 text-[10px] leading-relaxed text-[#8A837D]">
        In-app deletion is immediate. You will be signed out and the account cannot be recovered.
      </p>

      <h2 className="mt-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        <Mail className="h-4 w-4" />
        If you cannot sign in
      </h2>

      <div className="mt-4 border border-[#E6E1DA] bg-white p-5">
        <p className="text-[12px] leading-relaxed text-[#5F5953]">
          Email <strong className="text-[#0B0B0C]">info@ridevura.com</strong> with the subject{" "}
          <strong className="text-[#0B0B0C]">&ldquo;Delete my account&rdquo;</strong> and include:
        </p>
        <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-[#5F5953]">
          <li>Your full name.</li>
          <li>The phone number and email on the account.</li>
          <li>Whether it is a rider or driver account.</li>
        </ul>
        <p className="mt-3 text-[11px] leading-relaxed text-[#8A837D]">
          We may ask you to verify the account before deleting it. Email requests are completed
          within 7 days after verification.
        </p>
        <a
          href={mailto}
          className="mt-5 inline-flex h-11 items-center justify-center gap-2 bg-[#E1251B] px-5 text-[10px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#0B0B0C]"
        >
          <Mail className="h-3.5 w-3.5" />
          Email the deletion request
        </a>
      </div>

      <h2 className="mt-10 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        What gets deleted
      </h2>
      <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-[#5F5953]">
        {[
          "Your profile, login and phone number.",
          "Your ride history and receipts.",
          "Saved places and payment methods.",
          "Emergency contacts, ratings and messages.",
          "Driver documents and banking details, if you drive with Vura.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1251B]" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        <ShieldCheck className="h-4 w-4" />
        What we keep
      </h2>
      <p className="mt-4 text-[12px] leading-relaxed text-[#5F5953]">
        Records we are legally required to keep — for example completed trip and payment records —
        may be retained for the period required by law. They are no longer linked to an active
        account. Read our{" "}
        <Link to="/privacy" className="font-semibold text-[#E1251B] underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      <div className="mt-10 flex flex-col gap-4 border border-[#E6E1DA] bg-[#F8F6F2] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-[#E1251B]" />
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.12em] text-[#0B0B0C]">
              How long it takes
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#6B6560]">
              In-app deletion is immediate. Email requests take up to 7 days after verification.
            </p>
          </div>
        </div>
        <Link
          to="/contact"
          className="inline-flex h-10 shrink-0 items-center justify-center border border-[#0B0B0C]/20 bg-white px-4 text-[10px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] transition hover:border-[#E1251B] hover:text-[#E1251B]"
        >
          Need help?
        </Link>
      </div>
    </LegalPage>
  );
}
