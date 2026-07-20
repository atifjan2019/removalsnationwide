import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";
import { PageHeading, shortDate } from "@/components/admin/AdminPrimitives";
import { deleteCustomer } from "@/app/admin/customers/actions";
import { getCustomers } from "@/lib/admin-dashboard";
import { PencilIcon } from "@/components/admin/Icons";

export const dynamic = "force-dynamic";

export default async function CustomersPage() {
  const customers = await getCustomers();
  return <div className="mx-auto max-w-[1400px]"><PageHeading title="Customers" subtitle="Customer profiles derived from booking history." />
    <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[760px] w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-6 py-4">Name</th><th className="px-6 py-4">Contact Details</th><th className="px-6 py-4">Moves</th><th className="px-6 py-4">Date Added</th><th className="px-6 py-4 text-right">Actions</th></tr></thead>
        <tbody className="divide-y divide-slate-100">{customers.map((customer) => <tr key={customer.email}><td className="px-6 py-4"><span className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 font-bold text-white">{customer.name.charAt(0).toUpperCase()}</span><span className="font-semibold text-slate-900">{customer.name}</span></span></td><td className="px-6 py-4"><a href={`tel:${customer.phone}`} className="block text-slate-700 hover:text-brand-red">{customer.phone || "Not provided"}</a><a href={`mailto:${customer.email}`} className="block text-xs text-slate-500 hover:text-brand-red">{customer.email}</a></td><td className="px-6 py-4 font-semibold">{customer.moves} {customer.moves === 1 ? "Move" : "Moves"}</td><td className="px-6 py-4 text-slate-500">{shortDate(customer.created_at.slice(0, 10))}</td><td className="px-6 py-4 text-right"><div className="flex items-center justify-end gap-1"><Link href={`/admin/customers/${encodeURIComponent(customer.email)}`} title="Edit" aria-label="Edit" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-red transition hover:bg-brand-red/10"><PencilIcon className="h-5 w-5" /></Link><DeleteButton id={customer.email} action={deleteCustomer} /></div></td></tr>)}</tbody>
      </table>
      {!customers.length && <p className="p-12 text-center text-sm text-slate-500">No customers yet.</p>}
    </div>
  </div>;
}
