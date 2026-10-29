import { getMoveDetails, respond, saveMoveDetails } from "@/lib/move-details-server";

// The customer's own answers, read and saved from their move details page.
// The token in the address is what authorises each call.
export const dynamic = "force-dynamic";

type Context = { params: Promise<{ token: string }> };

export async function GET(_request: Request, { params }: Context) {
  const { token } = await params;
  return respond(() => getMoveDetails(token));
}

export async function PUT(request: Request, { params }: Context) {
  const { token } = await params;
  return respond(() => saveMoveDetails(token, request));
}
