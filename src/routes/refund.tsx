import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/refund")({
  component: RefundPage,
});

function RefundPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link to="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <div className="prose prose-sm md:prose-base text-muted-foreground">
        <p>This is the Refund Policy for Vura.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Refund Eligibility</h2>
        <p>Refunds may be issued in cases of overcharging, service failure, or other circumstances as determined by Vura. Please contact support within 7 days of the incident to request a refund.</p>
        <h2 className="text-xl font-semibold mt-6 mb-2 text-foreground">Processing Time</h2>
        <p>Approved refunds will be processed within 5-10 business days and credited back to the original payment method.</p>
      </div>
    </div>
  );
}
