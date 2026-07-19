import type { Metadata } from "next";
import Link from "next/link";
import { getSettings } from "@/lib/settings";

export const metadata: Metadata = {
  title: "Admin Dashboard | Removals Nationwide",
  robots: { index: false, follow: false },
};

const nav = [
  { label: "Dashboard", href: "/admin" },
  { label: "Posts", href: "/admin/posts" },
  { label: "Areas", href: "/admin/areas" },
  { label: "Media", href: "/admin/media" },
  { label: "Settings", href: "/admin/settings" },
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Shows the uploaded logo once one is set, falling back to the wordmark so a
  // fresh install still has a branded sidebar.
  const { logoUrl } = await getSettings();

  return (
    <div className="flex min-h-screen bg-brand-grey">
      <aside className="flex w-60 shrink-0 flex-col bg-brand-navy text-white">
        <div className="border-b border-white/10 px-6 py-5">
          <Link href="/admin" className="block">
            {logoUrl ? (
              // White plate behind it: uploaded logos are usually dark-on-white
              // and would disappear against the navy sidebar.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoUrl}
                alt="Removals Nationwide"
                className="h-11 w-auto max-w-full rounded-md bg-white object-contain p-1.5"
              />
            ) : (
              <span className="text-lg font-bold">
                Removals <span className="text-brand-red">Nationwide</span>
              </span>
            )}
          </Link>
          <p className="mt-1.5 text-xs uppercase tracking-wide text-white/50">Admin</p>
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
