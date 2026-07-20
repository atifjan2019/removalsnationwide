"use client";

import { useTransition } from "react";
import { TrashIcon } from "@/components/admin/Icons";

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
      title={label}
      aria-label={label}
      onClick={() => {
        if (confirm("Delete this item? This cannot be undone.")) {
          startTransition(() => action(id));
        }
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-brand-red transition hover:bg-brand-red/10 hover:text-black disabled:opacity-50"
    >
      {pending ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-brand-red/30 border-t-brand-red" />
      ) : (
        <TrashIcon className="h-5 w-5" />
      )}
    </button>
  );
}
