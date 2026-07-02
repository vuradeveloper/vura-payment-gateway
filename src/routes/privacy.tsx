import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link to="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-sm md:prose-base text-muted-foreground">
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use Vura.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Information We Collect</h2>
        <p>We may collect personal information that you provide to us when you register for an account, such as your name, email address, and phone number.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>
      </div>
    </div>
  );
}
