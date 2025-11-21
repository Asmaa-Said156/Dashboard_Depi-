import Filter from "@/components/Omar_components/Filter";
import Table from "@/components/ui/Table";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // your Radix Select component

export default function Logs() {
  const [tableValue, setTableValue] = useState('');
  const [search, setSearch] = useState('');
  const [statusValue, setStatusValue] = useState('all'); // "all" instead of empty string

  const tableOptions = [
    { value: "A", label: "TABLE CLASS-A" },
    { value: "B", label: "TABLE CLASS-B" },
    { value: "C", label: "TABLE CLASS-C" },
    { value: "D", label: "TABLE CLASS-D" },
  ];

  const statusOptions = [
    { value: "accepted", label: "Accepted" },
    { value: "rejected", label: "Rejected" },
  ];

  const header = ["customer", "table", "date", "from", "to", "status"];

  const row = [
    {
      customer: "Alice Johnson",
      table: "A",
      date: "2025-11-22",
      from: "10:00",
      to: "12:00",
      status: <span className="bg-green-700 py-1 px-2 rounded">accepted</span>
    },
    {
      customer: "Bob Lee",
      table: "D",
      date: "2025-11-23",
      from: "14:00",
      to: "16:00",
      status: <span className="bg-red-700 py-1 px-2 rounded">rejected</span>
    },
  ];

  // Filter rows by table, search, and status
  const filteredRows = row
    .filter((element) => (tableValue === "" ? true : element.table === tableValue))
    .filter((element) =>
      search === "" ? true : element.customer.toLowerCase().includes(search.toLowerCase())
    )
    .filter((element) => {
      if (statusValue === "all") return true;
      const statusText = element.status.props.children.toLowerCase();
      return statusText === statusValue.toLowerCase();
    });

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center   gap-4 mb-4">
        {/* Search input and Table filter */}
        <Filter
          items={tableOptions}
          onChangeCombo={(value) => setTableValue(value)}
          onChangeInput={(e) => setSearch(e.target.value)}
        />

        {/* Status select using Radix UI */}
        <Select value={statusValue} onValueChange={(val) => setStatusValue(val)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            {statusOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="max-h-[calc(100vh-130px)] overflow-y-auto">
        <Table header={header} row={filteredRows} />
      </div>
    </div>
  );
}
