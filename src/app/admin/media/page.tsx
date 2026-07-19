import MediaManager from "@/components/admin/MediaManager";
import { listMedia, getMediaBucket } from "@/lib/r2";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  const [objects, bucket] = await Promise.all([listMedia(), getMediaBucket()]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy">Media</h1>
      <p className="mt-1 text-sm text-brand-charcoal/70">
        Every image in the R2 bucket — cover images, branding and direct
        uploads. Copy a URL to use it in a post or area.
      </p>

      {!bucket && (
        <div className="mt-6 rounded-xl border border-brand-red bg-white p-4 text-sm text-black">
          R2 is not available in this environment, so nothing can be listed or
          uploaded. Check the <code className="font-mono">MEDIA</code> binding
          in <code className="font-mono">wrangler.jsonc</code>.
        </div>
      )}

      <MediaManager objects={objects} />
    </div>
  );
}
