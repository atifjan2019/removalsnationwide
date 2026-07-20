"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { saveSettings, type SettingsState } from "@/app/admin/settings/actions";
import type { SiteSettings } from "@/lib/settings";

const SETTINGS_TABS = [
  { id: "branding", label: "Branding" },
  { id: "contact", label: "Contact & WhatsApp" },
  { id: "social", label: "Social profiles" },
  { id: "company", label: "Company" },
] as const;

type SettingsTab = (typeof SETTINGS_TABS)[number]["id"];

function Field({
  label,
  name,
  defaultValue,
  hint,
  type = "text",
}: {
  label: string;
  name: keyof SiteSettings;
  defaultValue: string;
  hint?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand-navy">{label}</span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:border-brand-red"
      />
      {hint && <span className="mt-1 block text-xs text-brand-charcoal/60">{hint}</span>}
    </label>
  );
}

/**
 * File input plus a preview of whatever is currently set. The "remove" checkbox
 * is the only way to clear an image, since an empty file input has to mean
 * "leave it alone" — otherwise saving a phone number would wipe the logo.
 */
function BrandingUpload({
  label,
  field,
  current,
  hint,
}: {
  label: string;
  field: "logo" | "favicon" | "footerLogo";
  current: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-black/10 p-4">
      <span className="text-sm font-semibold text-brand-navy">{label}</span>

      <div className="mt-3 flex h-16 items-center justify-center rounded-lg bg-brand-grey">
        {current ? (
          // Plain <img>: the source is a user-supplied R2 URL, and next/image
          // runs unoptimized here anyway.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={current}
            alt={`Current ${label.toLowerCase()}`}
            className="max-h-14 max-w-full object-contain"
          />
        ) : (
          <span className="text-xs text-brand-charcoal/50">
            Nothing uploaded — using the built-in {label.toLowerCase()}
          </span>
        )}
      </div>

      <input
        type="file"
        name={`${field}File`}
        accept="image/png,image/jpeg,image/svg+xml,image/webp,image/x-icon,.ico"
        className="mt-3 block w-full text-xs file:mr-3 file:rounded-md file:border-0 file:bg-brand-navy file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-black"
      />

      {current && (
        <label className="mt-2 flex items-center gap-2 text-xs text-brand-charcoal/70">
          <input type="checkbox" name={`${field}Clear`} className="rounded" />
          Remove and go back to the built-in {label.toLowerCase()}
        </label>
      )}

      <div className="mt-3 flex gap-2">
        <input readOnly value={current} placeholder="No image uploaded" className="min-w-0 flex-1 rounded-lg border border-black/10 bg-slate-50 px-3 py-2 text-xs text-slate-500" />
        <button type="button" onClick={() => current && navigator.clipboard.writeText(new URL(current, window.location.origin).href)} className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold">Copy</button>
      </div>

      <span className="mt-2 block text-xs text-brand-charcoal/60">{hint}</span>
    </div>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:opacity-60"
    >
      {pending ? "Saving…" : "Save settings"}
    </button>
  );
}

export default function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [activeTab, setActiveTab] = useState<SettingsTab>("branding");
  const [state, formAction] = useActionState<SettingsState, FormData>(saveSettings, {
    ok: false,
    message: "",
  });

  return (
    <form action={formAction} className="mt-8 space-y-10">
      {state.message && (
        <div
          className={`rounded-xl border p-4 text-sm ${
            state.ok
              ? "border-green-300 bg-green-50 text-green-800"
              : "border-red-300 bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <div className="overflow-x-auto border-b border-slate-200" role="tablist" aria-label="Settings sections">
        <div className="flex min-w-max gap-1">
          {SETTINGS_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`settings-tab-${tab.id}`}
              aria-controls={`settings-panel-${tab.id}`}
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${activeTab === tab.id ? "border-brand-red text-brand-red" : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section id="settings-panel-branding" role="tabpanel" aria-labelledby="settings-tab-branding" hidden={activeTab !== "branding"}>
        <h2 className="text-lg font-bold text-brand-navy">Brand Identity</h2>
        <p className="mt-1 text-sm text-brand-charcoal/60">
          Images are stored inside D1 and served through the site asset API. Leave a file empty to
          keep the current image. Max 2&nbsp;MB; PNG, JPEG, SVG, WebP or ICO.
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <BrandingUpload
            label="Logo"
            field="logo"
            current={settings.logoUrl}
            hint="Replaces the built-in RN wordmark in the header and footer."
          />
          <BrandingUpload
            label="Footer Logo"
            field="footerLogo"
            current={settings.footerLogoUrl}
            hint="Optional alternate logo for the dark website footer."
          />
          <BrandingUpload
            label="Favicon"
            field="favicon"
            current={settings.faviconUrl}
            hint="Browser tab icon. A square PNG or ICO works best."
          />
        </div>
      </section>

      <div id="settings-panel-contact" role="tabpanel" aria-labelledby="settings-tab-contact" hidden={activeTab !== "contact"} className="space-y-10">
        <section>
          <h2 className="text-lg font-bold text-brand-navy">Contact</h2>
          <p className="mt-1 text-sm text-brand-charcoal/60">
            Shown in the top bar, footer, contact page and every call-to-action.
          </p>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <Field
              label="Freephone number"
              name="phoneFreephone"
              defaultValue={settings.phoneFreephone}
              hint="The tel: link is generated automatically."
            />
            <Field label="London number" name="phoneLondon" defaultValue={settings.phoneLondon} />
            <Field
              label="Email address"
              name="email"
              defaultValue={settings.email}
              type="email"
              hint="Leave blank to hide the public email link."
            />
            <Field
              label="Address"
              name="addressLine"
              defaultValue={settings.addressLine}
              hint="Single line, as shown in the footer."
            />
          </div>
          <label className="mt-5 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <input type="checkbox" name="showPhone" defaultChecked={settings.showPhone} className="mt-1 h-4 w-4" />
            <span><span className="block text-sm font-semibold text-slate-900">Show phone number on the website</span><span className="mt-1 block text-xs text-slate-500">Turn this off to hide public call links while keeping the numbers saved.</span></span>
          </label>
        </section>

        <section>
          <h2 className="text-lg font-bold text-brand-navy">WhatsApp</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <Field
              label="WhatsApp number"
              name="whatsappNumber"
              defaultValue={settings.whatsappNumber}
              hint="Country code and number, digits only — e.g. 442072052525."
            />
            <Field
              label="Button label"
              name="whatsappLabel"
              defaultValue={settings.whatsappLabel}
            />
          </div>
        </section>
      </div>

      <section id="settings-panel-social" role="tabpanel" aria-labelledby="settings-tab-social" hidden={activeTab !== "social"}>
        <h2 className="text-lg font-bold text-brand-navy">Social profiles</h2>
        <p className="mt-1 text-sm text-brand-charcoal/60">
          Leave a field blank to hide that link. These also feed the
          search-engine structured data, so keep them accurate.
        </p>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <Field label="Facebook URL" name="urlFacebook" defaultValue={settings.urlFacebook} />
          <Field label="X / Twitter URL" name="urlX" defaultValue={settings.urlX} />
          <Field label="LinkedIn URL" name="urlLinkedin" defaultValue={settings.urlLinkedin} />
          <Field label="Trustpilot URL" name="urlTrustpilot" defaultValue={settings.urlTrustpilot} />
          <Field label="Instagram URL" name="urlInstagram" defaultValue={settings.urlInstagram} />
          <Field label="YouTube URL" name="urlYoutube" defaultValue={settings.urlYoutube} />
          <Field label="TikTok URL" name="urlTiktok" defaultValue={settings.urlTiktok} />
        </div>
      </section>

      <section id="settings-panel-company" role="tabpanel" aria-labelledby="settings-tab-company" hidden={activeTab !== "company"}>
        <h2 className="text-lg font-bold text-brand-navy">Company</h2>
        <div className="mt-4 grid gap-5">
          <Field label="Company name" name="companyName" defaultValue={settings.companyName} />
          <Field
            label="Registration line"
            name="companyReg"
            defaultValue={settings.companyReg}
            hint="Shown in the footer's bottom bar."
          />
        </div>
      </section>

      <div className="flex items-center gap-4 border-t border-black/5 pt-6">
        <SaveButton />
        <span className="text-xs text-brand-charcoal/60">
          Required fields fall back to built-in defaults. Email and social links can be left blank.
        </span>
      </div>
    </form>
  );
}
