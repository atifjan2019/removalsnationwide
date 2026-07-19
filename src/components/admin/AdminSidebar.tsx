"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavItem = { label: string; href: string };

/** Simple inline glyphs — one per nav item, so collapsed mode stays readable. */
const ICONS: Record<string, React.ReactNode> = {
  "/admin": (
    <path d="M3 12l9-9 9 9M5 10v10h14V10" />
  ),
  "/admin/posts": (
    <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />
  ),
  "/admin/areas": (
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  ),
  "/admin/media": (
    <path d="M4 5h16v14H4zM4 15l4-4 3 3 3-4 6 6" />
  ),
  "/admin/settings": (
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1L14.5 3h-4l-.4 2.5a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.4 2.5h4l.4-2.5a7 7 0 0 0 1.7-1l2.3 1 2-3.4-2-1.5c.1-.3.1-.7.1-1z" />
  ),
};

const STORAGE_KEY = "admin-sidebar-collapsed";

export default function AdminSidebar({
  nav,
  logoUrl,
}: {
  nav: NavItem[];
  logoUrl: string;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();

  // Read the stored preference after mount. Rendering expanded first and
  // correcting on mount avoids a hydration mismatch against the server HTML.
  useEffect(() => {
    setCollapsed(localStorage.getItem(STORAGE_KEY) === "1");
    setReady(true);
  }, []);

  function toggle() {
    setCollapsed((c) => {
      const next = !c;
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      return next;
    });
  }

  return (
    <aside
      className={`relative flex shrink-0 flex-col bg-brand-navy text-white ${
        ready ? "transition-[width] duration-200" : ""
      } ${collapsed ? "w-20" : "w-60"}`}
    >
      {/* Collapse handle, vertically centred on the outer edge. */}
      <button
        type="button"
        onClick={toggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        aria-expanded={!collapsed}
        className="absolute -right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-brand-navy shadow-md transition hover:bg-brand-red hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className={`border-b border-white/10 ${collapsed ? "px-2 py-3" : "px-4 py-3"}`}>
        <Link href="/admin" className="block">
          {logoUrl ? (
            // White plate: uploaded logos are usually dark-on-white and would
            // disappear against the navy sidebar. Kept tight to the artwork —
            // a taller box just reads as a slab of white.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoUrl}
              alt="Removals Nationwide"
              className={`mx-auto block w-full rounded-md bg-white object-contain transition-all duration-200 ${
                collapsed ? "h-10 p-1" : "h-12 p-1.5"
              }`}
            />
          ) : collapsed ? (
            <span className="flex h-12 items-center justify-center rounded-lg bg-brand-red text-lg font-black">
              RN
            </span>
          ) : (
            <span className="text-xl font-bold">
              Removals <span className="text-brand-red">Nationwide</span>
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {nav.map((item) => {
            const active =
              item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    collapsed ? "justify-center px-0" : "gap-3"
                  } ${
                    active
                      ? "bg-brand-red text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    {ICONS[item.href]}
                  </svg>
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/"
          title={collapsed ? "View site" : undefined}
          className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white ${
            collapsed ? "justify-center px-0" : "gap-3"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
          {!collapsed && <span>View site</span>}
        </Link>
      </div>
    </aside>
  );
}
