import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";

export default async function Suppliers() {
  const suppliers = await getData("suppliers");
  const columns = ["title", "phone", "email"];
  return (
    <div>
      {/* Header */}
      <FixedHeader
        title="Suppliers"
        newLink="/dashboard/inventory/suppliers/new"
      />
      {/* Table */}
      <div className="my-4 p-8">
        <DataTable
          data={suppliers}
          columns={columns}
          resourceTitle="suppliers"
        />
      </div>
    </div>
  );
}
