import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

// ── iVeri payment return proxy ─────────────────────────────────────────────
// iVeri forces HTTPS on all redirect/callback URLs. The Oracle VM (92.4.135.243)
// has no HTTPS listener, so we proxy through Vercel (which has valid HTTPS).
// The browser redirects and S2S callbacks both arrive here:
//   GET  /api/payments/return?result=0&...  — browser (WebView) redirect
//   POST /api/payments/return               — server-to-server callback
// Both are forwarded to the Oracle Express backend over HTTP.

const ORACLE_RETURN_URL = "http://92.4.135.243/api/payments/return";

async function handlePaymentReturn(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  if (!url.pathname.startsWith("/api/payments/return")) return null;

  // ── POST (S2S callback) ──────────────────────────────────────────────────
  // Forward the body as-is to the Oracle backend. iVeri sends
  // application/x-www-form-urlencoded with fields like ECOM_CONSUMERORDERID
  // and LITE_PAYMENT_CARD_STATUS.
  if (request.method === "POST") {
    try {
      const body = await request.text();
      const res = await fetch(`${ORACLE_RETURN_URL}${url.search}`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body,
      });
      const text = await res.text();
      return new Response(text, {
        status: res.status,
        headers: { "content-type": res.headers.get("content-type") || "text/plain" },
      });
    } catch (err: unknown) {
      console.error("[payment-return] POST proxy error:", err);
      return new Response(JSON.stringify({ error: "upstream unreachable" }), {
        status: 502,
        headers: { "content-type": "application/json" },
      });
    }
  }

  // ── GET (browser redirect) ───────────────────────────────────────────────
  // iVeri redirects the phone browser here after payment. The app's WebView
  // intercepts this via onShouldStartLoadWithRequest. For any request that
  // reaches here (e.g. the user's browser), forward to Oracle (best-effort)
  // and return a minimal result page.
  fetch(`${ORACLE_RETURN_URL}${url.search}`, { method: "GET" }).catch(() => {});

  const result = url.searchParams.get("result") || url.searchParams.get("status") || "";
  const success = result.toLowerCase() === "0" || result.toLowerCase() === "success";

  const page = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
<title>Payment ${success ? "Complete" : "Result"}</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>body{font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;background:#fbf7f4;color:#2e1e1a;text-align:center;padding:20px}
h1{font-size:24px;margin-bottom:8px}p{font-size:14px;color:#80716b}
.card{background:white;border-radius:16px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,.08);max-width:360px}
.check{width:48px;height:48px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:24px}
</style></head><body>
<div class="card">
<div class="check">${success ? "✓" : "!"}</div>
<h1>${success ? "Payment successful" : "Payment " + (result || "processed")}</h1>
<p>You can close this page.</p>
</div></body></html>`;
  return new Response(page, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    // Intercept iVeri payment return before TanStack Start handles it.
    // TanStack Start has no routes under /api/ so it would 404 anyway.
    const paymentResponse = await handlePaymentReturn(request);
    if (paymentResponse) return paymentResponse;

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
