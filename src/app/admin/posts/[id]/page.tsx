import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { getDbPostById } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getDbPostById(id);
  if (!post) notFound();

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-brand-navy">Edit Post</h1>
      <PostForm post={post} />
    </div>
  );
}
