import { getDb } from "@/lib/d1";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ kind: string }> }) {
  const { kind } = await params;
  if (!["logo", "favicon", "footer-logo"].includes(kind)) return new Response("Not found", { status: 404 });
  const db = await getDb();
  const asset = await db?.prepare("select data,mime_type,updated_at from site_assets where kind=?").bind(kind).first<{ data: ArrayBuffer; mime_type: string; updated_at: string }>();
  if (!asset) return new Response("Not found", { status: 404 });
  return new Response(asset.data, { headers: { "Content-Type": asset.mime_type, "Cache-Control": "public, max-age=3600", "Last-Modified": new Date(asset.updated_at).toUTCString() } });
}
