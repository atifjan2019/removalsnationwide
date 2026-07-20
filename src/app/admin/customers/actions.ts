"use server";

import { revalidatePath } from "next/cache";
import { assertAdmin } from "@/lib/admin-auth";
import { logActivity } from "@/lib/admin-dashboard";
import { requireDb } from "@/lib/d1";

export async function deleteCustomer(email: string) {
  const role = await assertAdmin();
  if (role !== "master-admin") throw new Error("Only a master admin can delete customers.");
  const db = await requireDb();
  const row = await db
    .prepare("select max(full_name) as name, count(*) as moves from bookings where lower(email)=lower(?)")
    .bind(email)
    .first<{ name: string; moves: number }>();
  await db.prepare("delete from bookings where lower(email)=lower(?)").bind(email).run();
  await logActivity(
    "Customer Deleted",
    `Customer ${row?.name || email} and ${row?.moves || 0} related moves deleted`,
    email,
  );
  revalidatePath("/admin");
  revalidatePath("/admin/bookings");
  revalidatePath("/admin/customers");
  revalidatePath("/admin/reports");
  revalidatePath("/admin/activity");
}
