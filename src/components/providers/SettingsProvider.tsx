"use client";

import { createContext, useContext } from "react";
import { DEFAULT_RESOLVED, type ResolvedSettings } from "@/lib/settings-shared";

/**
 * Makes the editable site settings available to client components.
 *
 * Client components cannot read D1, and several of them (the sticky mobile CTA,
 * the floating WhatsApp button) are rendered from ~29 different pages. Threading
 * a prop through every call site would mean every new page has to remember to
 * pass it, and forgetting silently falls back to a stale hardcoded number —
 * which is exactly the bug this replaces.
 *
 * The provider is mounted once in the (site) layout, which already reads the
 * settings for the server-rendered chrome.
 */
const SettingsContext = createContext<ResolvedSettings>(DEFAULT_RESOLVED);

export function SettingsProvider({
  settings,
  children,
}: {
  settings: ResolvedSettings;
  children: React.ReactNode;
}) {
  return <SettingsContext.Provider value={settings}>{children}</SettingsContext.Provider>;
}

/** Falls back to the built-in defaults outside the provider (e.g. the admin). */
export function useSettings(): ResolvedSettings {
  return useContext(SettingsContext);
}
