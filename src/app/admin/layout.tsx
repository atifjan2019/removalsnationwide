import type { Metadata } from "next";
import AdminSidebar, { type NavItem } from "@/components/admin/AdminSidebar";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Admin Dashboard | Removals Nationwide",
  robots: { index: false, follow: false },
};

const nav: NavItem[] = [
  { label: "Dashboard", href: "/admin" },
  { label: "Bookings", href: "/admin/bookings" },
  { label: "Posts", href: "/admin/posts" },
  { label: "Areas", href: "/admin/areas" },
  { label: "Media", href: "/admin/media" },
  { label: "Settings", href: "/admin/settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // The sidebar is a client component (collapse state), so the logo is read
  // here and passed in.
  const { logoUrl } = await getSettings();

  return (
    <div className="flex min-h-screen bg-brand-grey">
      <AdminSidebar nav={nav} logoUrl={logoUrl} />
      <main className="flex-1 overflow-x-hidden p-6 sm:p-10">{children}</main>
    </div>
  );
}
