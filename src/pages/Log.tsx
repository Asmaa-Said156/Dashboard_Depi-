// import React from 'react'


import Filter from "@/components/Omar_components/Filter";



import Table from "@/components/ui/Table";
import {  useState } from "react";

export default function Logs() {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  

  const options = [

    {
      value: "A", label: "TABLE CLASS-A"
    },
    {
      value: "B", label: "TABLE CLASS-B"
    },
    {
      value: "C", label: "TABLE CLASS-C"
    },
    {
      value: "D", label: "TABLE CLASS-D"
    },


  ]
  const header = ["customer", "table", "date", "from", "to", "status"];

const row = [
  {
    customer: "Alice Johnson",
    table: "A",
    date: "2025-11-22",
    from: "10:00",
    to: "12:00",
    status: <span className="bg-green-700 py-1 px-2  rounded">accepted</span>

  },
  {
    customer: "Bob Lee",
    table: "D",
    date: "2025-11-23",
    from: "14:00",
    to: "16:00",
       status:<span className="bg-red-700 py-1 px-2  rounded">rejected</span>

  },
];


const filteredRows = row
  .filter((element) => (value === "" ? true : element.table === value))
  .filter((element) => (search === "" ? true : element.customer.toLowerCase().includes(search.toLowerCase())));



  return (
    <div className="">


      


      <Filter items={options} onChangeCombo={(value) => { setValue(value) }} onChangeInput={(e) => setSearch(e.target.value)} />

      <div className="max-h-[calc(100vh-130px)] overflow-y-auto">
        <Table header={header} row={filteredRows} />
      </div>



    </div>
  )
}
