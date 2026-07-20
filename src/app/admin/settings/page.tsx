import SettingsForm from "@/components/admin/SettingsForm";
import { getSettings } from "@/lib/settings";
import { getDb } from "@/lib/d1";
import { requireAdmin } from "@/lib/admin-auth";
import { PageHeading } from "@/components/admin/AdminPrimitives";
import { getSmtpSettingsSummary } from "@/lib/smtp-settings";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const [settings, smtpSettings, db, role] = await Promise.all([
    getSettings(),
    getSmtpSettingsSummary(),
    getDb(),
    requireAdmin(),
  ]);

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeading title="Settings" subtitle="Brand identity, contact information and social links used site-wide." />

      {!db && (
        <div className="mt-6 rounded-xl border border-brand-red bg-white p-4 text-sm text-black">
          The D1 database is not available, so these values cannot be saved. The
          form below shows the built-in defaults the site is currently using.
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <SettingsForm settings={settings} smtpSettings={smtpSettings} />
        <aside className="mt-8 space-y-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Admin Profile</p>
            <h2 className="mt-3 font-bold text-slate-950">atifjan2019@gmail.com</h2>
            <p className="mt-1 text-sm text-slate-500">PIN administrator</p>
            <span className="mt-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{role === "master-admin" ? "Master Admin" : "Admin"}</span>
            <p className="mt-5 text-xs leading-5 text-slate-500">PINs are encrypted Cloudflare Worker secrets. Change them from Worker settings or Wrangler secrets.</p>
          </section>
          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <h2 className="font-bold text-blue-950">How it works</h2>
            <p className="mt-2 text-sm leading-6 text-blue-800/75">Saved contact details update the public website immediately. Branding files are stored in D1 and served through protected application code.</p>
          </section>
        </aside>
      </div>
    </div>
  );
}
