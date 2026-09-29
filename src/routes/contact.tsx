import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MessageCircle, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Vura" },
      {
        name: "description",
        content: "Get in touch with Vura — email, phone, address, and support channels.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LegalPage
      eyebrow="Help Center"
      title="Contact Us"
      description="We're here to help. Reach out through any of the channels below — or find answers in our quick links."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
        {[
          {
            icon: Mail,
            label: "Email",
            value: "info@ridevura.com",
            href: "mailto:info@ridevura.com",
            description: "We reply within 24 hours",
          },
          {
            icon: Phone,
            label: "Phone & SMS",
            value: "072 779 5460",
            href: "tel:+27727795460",
            description: "Call or text us anytime",
          },
          {
            icon: Clock,
            label: "Business Hours",
            value: "Online 24/7",
            description: "In-app & phone support anytime",
          },
        ].map((item) => (
          <Card key={item.label} className="rounded-2xl border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-amber-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-base font-semibold text-foreground hover:text-primary transition break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold text-foreground">{item.value}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold tracking-tight mt-12 mb-5">Support Channels</h2>
      <div className="space-y-3">
        {[
          {
            icon: MessageCircle,
            title: "In-app support",
            text: "The fastest way to get help. Open the app, go to Help, and start a conversation with our support team. Available 24/7 for urgent issues like safety concerns or live trip problems.",
          },
          {
            icon: Mail,
            title: "Email support",
            text: "For non-urgent enquiries, billing questions, or formal complaints, email us at info@ridevura.com. We aim to respond within one business day.",
          },
          {
            icon: Phone,
            title: "Phone & SMS support",
            text: "Call or text us at 072 779 5460. Speak with a team member or send a message — we're here to help. For emergencies during a trip, use the in-app SOS button instead.",
          },
        ].map((channel) => (
          <Card key={channel.title} className="rounded-2xl border shadow-card">
            <CardContent className="p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <channel.icon className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold">{channel.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{channel.text}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-bold tracking-tight mt-12 mb-5">Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { label: "Terms and Conditions", to: "/terms" },
          { label: "Privacy Policy", to: "/privacy" },
          { label: "Refund Policy", to: "/refunds" },
          { label: "Service Delivery Policy", to: "/shipping" },
        ].map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium hover:border-amber-200 hover:bg-amber-50/30 transition"
          >
            {link.label}
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        ))}
      </div>

      <Card className="rounded-2xl border bg-muted/30 mt-8">
        <CardContent className="p-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Data privacy:</strong> Information you provide
            through our support channels is handled in accordance with our{" "}
            <Link to="/privacy" className="text-primary underline">
              Privacy Policy
            </Link>
            . We will never ask for your password or full bank details via email or phone.
          </p>
        </CardContent>
      </Card>
    </LegalPage>
  );
}
