import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard | Removals Nationwide",
  robots: { index: false, follow: false },
};

const nav = [
  { label: "Dashboard", href: "/admin" },
  { label: "Posts", href: "/admin/posts" },
  { label: "Areas", href: "/admin/areas" },
  { label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-brand-grey">
      <aside className="flex w-60 shrink-0 flex-col bg-brand-navy text-white">
        <div className="border-b border-white/10 px-6 py-5">
          <Link href="/admin" className="text-lg font-bold">
            Removals <span className="text-brand-red">Nationwide</span>
          </Link>
          <p className="mt-0.5 text-xs uppercase tracking-wide text-white/50">Admin</p>
        </div>
        <nav className="flex-1 p-3">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-white/10 p-3">
          <Link
            href="/"
            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            ← View site
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden p-6 sm:p-10">{children}</main>
    </div>
  );
}
