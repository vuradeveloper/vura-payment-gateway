import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { Mail, Phone, Clock, MessageCircle, ChevronRight, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Vura" },
      {
        name: "description",
        content: "Get in touch with Vura — email, phone and in-app support.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LegalPage
      eyebrow="Help Centre"
      title="Contact Us"
      description="We're here to help. Reach out through any of the channels below, or find answers in the quick links."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "info@ridevura.com",
            href: "mailto:info@ridevura.com",
            description: "We aim to reply within one business day",
          },
          {
            icon: Phone,
            label: "Phone & SMS",
            value: "072 779 5460",
            href: "tel:+27727795460",
            description: "Call or text the Vura team",
          },
          {
            icon: Clock,
            label: "In-app support",
            value: "Open the app",
            description: "Target 2 hours for urgent issues",
          },
        ].map((item) => (
          <div key={item.label} className="border border-[#E6E1DA] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center bg-[#FBE9E7]">
              <item.icon className="h-5 w-5 text-[#E1251B]" />
            </div>
            <p className="mt-4 text-[9px] font-black uppercase tracking-[0.18em] text-[#8A837D]">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                className="mt-1 block break-all text-sm font-bold text-[#0B0B0C] transition hover:text-[#E1251B]"
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-sm font-bold text-[#0B0B0C]">{item.value}</p>
            )}
            <p className="mt-1.5 text-[10px] leading-relaxed text-[#6B6560]">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        Support channels
      </h2>
      <div className="mt-4 space-y-3">
        {[
          {
            icon: MessageCircle,
            title: "In-app support",
            text: "The fastest way to get help. Open the app, go to Help and start a conversation with the Vura team. For an emergency during a trip, use the in-app SOS button.",
          },
          {
            icon: Mail,
            title: "Email support",
            text: "For non-urgent enquiries, billing questions or formal complaints, email info@ridevura.com. We aim to respond within one business day.",
          },
          {
            icon: Phone,
            title: "Phone & SMS support",
            text: "Call or text 072 779 5460. For emergencies during a trip, use the in-app SOS button instead of waiting for a call-back.",
          },
        ].map((channel) => (
          <div key={channel.title} className="flex gap-4 border border-[#E6E1DA] bg-white p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#FBE9E7]">
              <channel.icon className="h-5 w-5 text-[#E1251B]" />
            </div>
            <div>
              <h3 className="text-[13px] font-black uppercase tracking-[0.04em] text-[#0B0B0C]">
                {channel.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-relaxed text-[#6B6560]">{channel.text}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-[11px] font-black uppercase tracking-[0.18em] text-[#E1251B]">
        Quick links
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {[
          { label: "Terms and Conditions", to: "/terms" },
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Refund Policy", to: "/refunds" },
          { label: "Service Delivery Policy", to: "/shipping" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="group flex items-center justify-between border border-[#E6E1DA] bg-white px-4 py-3.5 text-[11px] font-bold text-[#0B0B0C] transition hover:border-[#E1251B]/50 hover:bg-[#F8F6F2]"
          >
            {link.label}
            <ChevronRight className="h-4 w-4 text-[#8A837D] transition group-hover:translate-x-0.5 group-hover:text-[#E1251B]" />
          </Link>
        ))}
      </div>

      <div className="mt-8 border border-[#E6E1DA] bg-[#F8F6F2] p-5">
        <p className="text-[11px] leading-relaxed text-[#6B6560]">
          <strong className="text-[#0B0B0C]">Data privacy:</strong> Information you provide through
          our support channels is handled in accordance with our{" "}
          <Link to="/privacy" className="font-semibold text-[#E1251B] underline">
            Privacy Policy
          </Link>
          . We will never ask for your password or full bank details via email or phone.
        </p>
      </div>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-[#E1251B] underline underline-offset-4"
      >
        Back to Vura <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </LegalPage>
  );
}
