import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy duplicate of /refunds. Keep the URL alive for old links, but send
 * visitors to the current policy page instead of showing an older design.
 */
export const Route = createFileRoute("/refund")({
  beforeLoad: () => {
    throw redirect({ to: "/refunds" });
  },
  component: () => null,
});
