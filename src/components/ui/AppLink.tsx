import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * next/link with viewport prefetch off by default. Every public page renders
 * on the Worker, so prefetching each link in view sent dozens of server
 * requests per page view. A click still navigates normally; pass
 * prefetch={true} for a link that is worth warming.
 */
export default function AppLink({ prefetch = false, ...props }: ComponentProps<typeof Link>) {
  return <Link prefetch={prefetch} {...props} />;
}
