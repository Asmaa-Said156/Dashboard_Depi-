// import React from 'react'

import { ButtonGroupInput } from "@/components/Omar_components/SearchBar";
import { ComboBox } from "@/components/ui/combobox";
import Table from "@/components/ui/Table";
// import Table from "@/components/ui/Table";

export default function Requests() {
  const header = ["customer", "table", "date", "accept", "reject"]
  const row = [
    {
      customer: "Alice Johnson",
      table: "C2",
      date: "2025-11-22",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
    {
      customer: "Bob Lee",
      table: "D4",
      date: "2025-11-23",
      accept: <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>,
      reject: <button className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
    },
  ];

  // data made by me to test only 

  return (
    <div className="">
      <header className="flex flex-col lg:flex-row  items-center gap-2 justify-center lg:p-3 " >
        <ButtonGroupInput classnameGroup="lg:w-[400px] transition-all duration-300 " />
        <ComboBox classname="w-[150px] lg:w-[200px] transition-all duration-300" placeholder="filter-by" />
      </header>


      <div className="max-h-[calc(100vh-130px)] overflow-y-auto">
        <Table header={header} row={row} />
      </div>



    </div>
  )
}
