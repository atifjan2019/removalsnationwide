"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { saveSettings, type SettingsState } from "@/app/admin/settings/actions";
import type { SiteSettings } from "@/lib/settings";

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
  field: "logo" | "favicon";
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

      <section>
        <h2 className="text-lg font-bold text-brand-navy">Branding</h2>
        <p className="mt-1 text-sm text-brand-charcoal/60">
          Uploaded to R2 and served from the media domain. Leave a file empty to
          keep the current image. Max 2&nbsp;MB; PNG, JPEG, SVG, WebP or ICO.
        </p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <BrandingUpload
            label="Logo"
            field="logo"
            current={settings.logoUrl}
            hint="Replaces the built-in RN wordmark in the header and footer."
          />
          <BrandingUpload
            label="Favicon"
            field="favicon"
            current={settings.faviconUrl}
            hint="Browser tab icon. A square PNG or ICO works best."
          />
        </div>
      </section>

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

      <section>
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
        </div>
      </section>

      <section>
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
