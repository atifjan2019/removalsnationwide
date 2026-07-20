import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { getAdminRole } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  if (await getAdminRole()) redirect("/admin");
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red font-black text-white">RN</div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-brand-red">Secure access</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Admin dashboard</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Enter your admin or master admin PIN to continue.</p>
        <AdminLoginForm />
      </section>
    </main>
  );
}
