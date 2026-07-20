"use server";

import { redirect } from "next/navigation";
import { createAdminSession, roleForPin } from "@/lib/admin-auth";

export type LoginState = { error: string };

export async function loginAdmin(_state: LoginState, formData: FormData): Promise<LoginState> {
  const pin = String(formData.get("pin") ?? "").trim();
  const role = await roleForPin(pin);
  if (!role) return { error: "That PIN is not recognised." };
  await createAdminSession(role);
  redirect("/admin");
}
