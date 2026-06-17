"use client";

import { useTransition } from "react";

export default function DeleteButton({
  id,
  action,
  label = "Delete",
}: {
  id: string;
  action: (id: string) => Promise<void>;
  label?: string;
}) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (confirm("Delete this item? This cannot be undone.")) {
          startTransition(() => action(id));
        }
      }}
      className="text-sm font-semibold text-red-600 transition hover:text-red-700 disabled:opacity-50"
    >
      {pending ? "Deleting…" : label}
    </button>
  );
}
