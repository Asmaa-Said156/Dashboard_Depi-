import { ComboBox } from "../ui/combobox";
import { Input } from "../ui/input";
import type { ChangeEvent } from "react";

interface ComboItem {
  value: string;
  label: string;
}

type FilterProps = {
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void; // typed as React event
  onChangeCombo?: (value: string) => void;
  items?: ComboItem[];
};

export default function Filter({
  onChangeInput,
  onChangeCombo,
  items = [],
}: FilterProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-2 justify-center mb-2 lg:p-3">
      <Input
        className="w-[300px] lg:w-[400px] transition-all duration-300"
        placeholder="Search..."
        onChange={onChangeInput} // now it's a proper event
      />
      <ComboBox
        classname="w-[200px] transition-all duration-300"
        placeholder="filter-by"
        items={items}
        onChange={onChangeCombo}
      />
    </div>
  );
}
