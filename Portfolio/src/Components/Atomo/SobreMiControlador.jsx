import { SegmentedControl } from "@/components/ui/segmented-control"
import { useState } from "react"


export const SobreMiControlador = () => {
  const [value, setValue] = useState("Sobre Mi")
  return (
    <SegmentedControl
      value={value}
      onValueChange={(e) => setValue(e.value)}
      items={["Sobre Mi", "Proyectos"]}
      bg="#333"
      rounded="full"
    />
  )
}