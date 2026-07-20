"use client";

import { useActionState } from "react";
import { loginAdmin, type LoginState } from "@/app/admin-login/actions";

const initialState: LoginState = { error: "" };

export default function AdminLoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, initialState);
  return (
    <form action={action} className="mt-8 space-y-5">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Admin PIN</span>
        <input
          name="pin"
          type="password"
          inputMode="numeric"
          autoComplete="current-password"
          required
          autoFocus
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-lg tracking-[0.35em] outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
        />
      </label>
      {state.error && <p className="text-sm font-medium text-red-600">{state.error}</p>}
      <button
        disabled={pending}
        className="w-full rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-brand-red disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
