import type { Metadata } from "next";
import AdminSidebar, { type NavItem } from "@/components/admin/AdminSidebar";
import { requireAdmin } from "@/lib/admin-auth";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Admin Dashboard | Removals Nationwide",
  robots: { index: false, follow: false },
};

const nav: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Moves", href: "/admin/bookings" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Reports", href: "/admin/reports" },
  { label: "Activity Log", href: "/admin/activity" },
  { label: "Posts", href: "/admin/posts" },
  { label: "Areas", href: "/admin/areas" },
  { label: "Media", href: "/admin/media" },
  { label: "Settings", href: "/admin/settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // The sidebar is a client component (collapse state), so the logo is read
  // here and passed in.
  const [role, { logoUrl }] = await Promise.all([requireAdmin(), getSettings()]);

  return (
    <div className="flex min-h-screen bg-brand-grey">
      <AdminSidebar nav={nav} logoUrl={logoUrl} role={role} />
      <main className="min-w-0 flex-1 overflow-x-hidden p-5 sm:p-8 xl:p-10">{children}</main>
    </div>
  );
}
