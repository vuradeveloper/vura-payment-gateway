import { createFileRoute, Link } from "@tanstack/react-router";
import { VuraLogo } from "@/components/vura-logo";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, MessageCircle, ChevronRight, Mail, Phone, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Vura" },
      { name: "description", content: "Get in touch with Vura — email, phone, address, and support channels." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-muted/30 py-12 md:py-20 border-b">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-sm text-primary font-medium mb-4 uppercase tracking-wider">
              Help Center
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Support & Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We're here to help. Get in touch with our support team or find answers to common
              questions about using Vura.
            </p>
          </div>
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md aspect-video bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center">
              <MessageSquare className="w-20 h-20 text-primary opacity-80" />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Contact Us</h1>
        <p className="text-sm text-muted-foreground mb-10">
          We&rsquo;re here to help. Reach out through any of the channels below.
        </p>

        {/* ── Contact Info Cards ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
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
            <Card key={item.label} className="rounded-xl border">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mt-0.5">
                    <item.icon className="h-4 w-4 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-foreground hover:text-primary transition break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Support Channels ─────────────────────────────────── */}
        <h2 className="text-xl font-bold tracking-tight mb-4">Support Channels</h2>
        <div className="space-y-3 mb-12">
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
            <Card key={channel.title} className="rounded-xl border">
              <CardContent className="p-5 flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                  <channel.icon className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{channel.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{channel.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ── Quick Links ──────────────────────────────────────── */}
        <h2 className="text-xl font-bold tracking-tight mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            { label: "Terms and Conditions", to: "/terms" },
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Refund Policy", to: "/refunds" },
            { label: "Service Delivery Policy", to: "/shipping" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium hover:border-amber-200 hover:bg-amber-50/30 transition"
            >
              {link.label}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>

        {/* ── Privacy note ─────────────────────────────────────── */}
        <Card className="rounded-xl border bg-muted/30">
          <CardContent className="p-5">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Data privacy:</strong> Information you provide through our support channels is handled in
              accordance with our{" "}
              <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>. We will never ask for
              your password or full bank details via email or phone.
            </p>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t py-6 mt-12">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Dorfnew (Pty) Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
