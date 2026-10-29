import { getAdminRole } from "@/lib/admin-auth";
import { respond, serveBookingFile } from "@/lib/move-details-server";

// A customer's uploaded photo or document, for the signed-in office only. The
// bucket is private; this route is the only way to read from it.
export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminRole())) return new Response("Not found", { status: 404 });
  const { id } = await params;
  return respond(() => serveBookingFile(id));
}
