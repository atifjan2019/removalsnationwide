import { notFound } from "next/navigation";
import AreaForm from "@/components/admin/AreaForm";
import { getAreaById } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function EditAreaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const area = await getAreaById(id);
  if (!area) notFound();

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-brand-navy">Edit Area</h1>
      <AreaForm area={area} />
    </div>
  );
}
