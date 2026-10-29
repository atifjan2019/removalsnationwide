import { deleteMoveDetailsFile, respond } from "@/lib/move-details-server";

// The customer removing a photo or document from their move details page.
export const dynamic = "force-dynamic";

export async function DELETE(_request: Request, { params }: { params: Promise<{ token: string; fileId: string }> }) {
  const { token, fileId } = await params;
  return respond(() => deleteMoveDetailsFile(token, fileId));
}
