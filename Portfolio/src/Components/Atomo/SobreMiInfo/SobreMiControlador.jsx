import  SegmentedControl  from "@/components/ui/segmented-control";

export const SobreMiControlador = ({ activeSection, setActiveSection }) => {
  return (
    <SegmentedControl
    value={activeSection}
    onValueChange={(item) => setActiveSection(item.value)}
    items={["Sobre Mi", "Proyectos"]}
  />
  
  );
};
