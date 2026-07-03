import { createFileRoute, Link, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const Route = createFileRoute("/_authenticated")({
  ssr: false,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) throw redirect({ to: "/auth" });
    return { user: data.user };
  },
  component: AuthedLayout,
});

function AuthedLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-card px-4 md:hidden">
            <SidebarTrigger />
            <span className="ml-3 font-semibold">Vura</span>
          </header>
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
          <footer className="border-t py-4 px-4 md:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground transition">Terms</Link>
              <Link to="/privacy" className="hover:text-foreground transition">Privacy</Link>
              <Link to="/refunds" className="hover:text-foreground transition">Refunds</Link>
              <Link to="/shipping" className="hover:text-foreground transition">Service</Link>
              <Link to="/contact" className="hover:text-foreground transition">Contact</Link>
            </div>
            <p className="text-center text-xs text-muted-foreground/60 mt-2">
              &copy; {new Date().getFullYear()} Dorfnew (Pty) Ltd
            </p>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
