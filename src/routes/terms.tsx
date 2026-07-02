import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link to="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-sm md:prose-base text-muted-foreground">
        <p>Welcome to Vura. By using our application, you agree to comply with and be bound by the following terms and conditions.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Use of the Service</h2>
        <p>You agree to use our services only for lawful purposes and in accordance with these terms.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Account Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
      </div>
    </div>
  );
}
