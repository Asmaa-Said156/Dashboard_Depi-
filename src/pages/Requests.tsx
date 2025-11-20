// import React from 'react'

import { ButtonGroupInput } from "@/components/Omar_components/SearchBar";
import { ComboBox } from "@/components/ui/combobox";

export default function Requests() {
  return (
    <>
      <div className="flex   items-center gap-2 justify-center p-3 " >
        <div className="">
          <ButtonGroupInput />
        </div>
        <div className=""><ComboBox ></ComboBox></div>

      </div>
    </>
  )
}
