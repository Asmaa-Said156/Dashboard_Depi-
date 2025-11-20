import { SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export function ButtonGroupInput() {
  return (
    <ButtonGroup className="w-full">
      <Input placeholder="Search..." className="" />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
