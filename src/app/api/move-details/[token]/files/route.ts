import { respond, uploadMoveDetailsFile } from "@/lib/move-details-server";

// One photo or document from the customer's move details page.
export const dynamic = "force-dynamic";

export async function POST(request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return respond(() => uploadMoveDetailsFile(token, request));
}
