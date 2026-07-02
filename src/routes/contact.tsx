import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <Link to="/" className="text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Support & Contact Info</h1>
      <div className="prose prose-sm md:prose-base text-muted-foreground">
        <p>If you have any questions or need assistance, please reach out to our support team.</p>
        
        <div className="mt-8 p-6 bg-card rounded-lg border">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Contact Details</h2>
          <ul className="space-y-4">
            <li>
              <strong>Email Support:</strong> <a href="mailto:support@vura.com" className="text-primary hover:underline">support@vura.com</a>
            </li>
            <li>
              <strong>Phone:</strong> +27 (0) 12 345 6789
            </li>
            <li>
              <strong>Address:</strong> 123 Innovation Drive, Sandton, Johannesburg, South Africa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
