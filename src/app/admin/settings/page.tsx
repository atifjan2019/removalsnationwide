import SettingsForm from "@/components/admin/SettingsForm";
import { getSettings } from "@/lib/settings";
import { getDb } from "@/lib/d1";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const [settings, db] = await Promise.all([getSettings(), getDb()]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy">Settings</h1>
      <p className="mt-1 text-sm text-brand-charcoal/70">
        Phone numbers, email, WhatsApp, address and social links used across the
        whole site.
      </p>

      {!db && (
        <div className="mt-6 rounded-xl border border-brand-red bg-white p-4 text-sm text-black">
          The D1 database is not available, so these values cannot be saved. The
          form below shows the built-in defaults the site is currently using.
        </div>
      )}

      <SettingsForm settings={settings} />
    </div>
  );
}
