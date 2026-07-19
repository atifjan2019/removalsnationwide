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
          <Field label="Email address" name="email" defaultValue={settings.email} type="email" />
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
          Blank fields fall back to the built-in default rather than saving empty.
        </span>
      </div>
    </form>
  );
}
