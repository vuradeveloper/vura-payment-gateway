import { createFileRoute, Link, useNavigate, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { VuraLogo } from "@/components/vura-logo";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign in — Vura" }] }),
  beforeLoad: async () => {
    if (typeof window === "undefined") return;
    const { data } = await supabase.auth.getSession();
    if (data.session) throw redirect({ to: "/dashboard" });
  },
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") navigate({ to: "/dashboard" });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: fullName },
          },
        });
        if (error) throw error;
        toast.success("Account created. You're signed in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      toast.error(err.message ?? "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) toast.error(result.error.message ?? "Google sign-in failed");
  }

  return (
    <div className="min-h-screen bg-white text-[#0B0B0C]">
      <div className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative hidden overflow-hidden bg-[#0B0B0C] lg:block">
          <img
            src="/images/joburg-night.jpg"
            alt="Johannesburg at night"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-[#0B0B0C]/20" />
          <div className="relative flex h-full flex-col justify-between p-10">
            <Link to="/" aria-label="Vura home">
              <VuraLogo size={34} />
            </Link>

            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E1251B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
                Vura / Johannesburg / After dark
              </p>
              <h1 className="font-display mt-4 text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.84] tracking-[-0.05em] text-white">
                Your night
                <br />
                is not
                <br />
                <span className="text-[#E1251B]">over.</span>
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
                Verified pilots. Instant dispatch. Zero surge surprises at 2 AM. Sign in to book,
                track and pay for your next ride.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#E1251B]" /> Verified pilots
                </span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5 text-[#E1251B]" /> Pay Later on Android
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-5 py-10 md:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link to="/" aria-label="Vura home">
                <VuraLogo size={30} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#6B6560] transition hover:text-[#E1251B]"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back
              </Link>
            </div>

            <div className="mb-7">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E1251B]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E1251B]" />
                {mode === "signin" ? "Welcome back" : "Join Vura"}
              </p>
              <h2 className="font-display mt-3 text-[clamp(2.4rem,6vw,3.6rem)] uppercase leading-[0.9] tracking-[-0.04em]">
                {mode === "signin" ? "Sign in." : "Create account."}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6B6560]">
                {mode === "signin"
                  ? "Your rides, wallet and receipts in one place."
                  : "Book rides, track trips and settle at month-end with Pay Later."}
              </p>
            </div>

            <div className="mb-6 flex border-b border-[#E6E1DA]">
              {[
                ["signin", "Sign in"],
                ["signup", "Sign up"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value as "signin" | "signup")}
                  className={`relative flex-1 pb-3 text-[11px] font-black uppercase tracking-[0.14em] transition ${
                    mode === value ? "text-[#0B0B0C]" : "text-[#8A837D] hover:text-[#0B0B0C]"
                  }`}
                >
                  {label}
                  {mode === value && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#E1251B]" />
                  )}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[11px] font-bold text-[#0B0B0C]">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Jane Rider"
                    className="h-11 rounded-none border-[#E6E1DA] bg-white text-[13px] focus-visible:border-[#E1251B] focus-visible:ring-[#E1251B]/20"
                  />
                </div>
              )}
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-[11px] font-bold text-[#0B0B0C]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@vura.app"
                  className="h-11 rounded-none border-[#E6E1DA] bg-white text-[13px] focus-visible:border-[#E1251B] focus-visible:ring-[#E1251B]/20"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-[11px] font-bold text-[#0B0B0C]">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="h-11 rounded-none border-[#E6E1DA] bg-white text-[13px] focus-visible:border-[#E1251B] focus-visible:ring-[#E1251B]/20"
                />
              </div>
              <Button
                type="submit"
                className="h-11 w-full rounded-full bg-[#E1251B] text-[11px] font-black uppercase tracking-[0.14em] text-white hover:bg-[#0B0B0C]"
                disabled={loading}
              >
                {loading ? "Please wait…" : mode === "signup" ? "Create account" : "Sign in"}
              </Button>
            </form>

            <div className="my-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#8A837D]">
              <div className="h-px flex-1 bg-[#E6E1DA]" /> OR{" "}
              <div className="h-px flex-1 bg-[#E6E1DA]" />
            </div>

            <Button
              type="button"
              variant="outline"
              className="h-11 w-full rounded-full border-[#E6E1DA] bg-white text-[11px] font-black uppercase tracking-[0.14em] text-[#0B0B0C] hover:border-[#E1251B] hover:text-[#E1251B]"
              onClick={handleGoogle}
            >
              Continue with Google
            </Button>

            <p className="mt-6 text-center text-[10px] leading-relaxed text-[#8A837D]">
              By continuing you agree to our{" "}
              <Link to="/terms" className="font-semibold text-[#E1251B] underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-semibold text-[#E1251B] underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
