import { Flex, Box } from "@chakra-ui/react";
import { LinksNav } from "../../Molecula/Navbar/LinksNav";
import { SobreMiControlador } from "../../Atomo/SobreMiInfo/SobreMiControlador";
import { LinkNavIcon } from "../../Molecula/Navbar/LinkNavIcon";
import { useState } from "react";
import { SobreMiSeccion } from "../../Paginas/SobreMi/SobreMiSeccion";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Sobre Mi");

  return (
    <Box bg="#101010" minH="200vh" position="relative">
    {/* Navbar fijo */}
    <Flex
  as="nav"
  position="fixed"
  top="0"
  left="0"
  width="100%"
  bg="rgba(16, 16, 16, 0.54)"
  p={4}
  zIndex="10"
  justify="space-between"
  align="center"
  gap={4}
  sx={{
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(13.3px)',
    WebkitBackdropFilter: 'blur(13.3px)',
    border: '1px solid rgba(16, 16, 16, 0.3)'
  }}
>
  <LinksNav height="10" width="120px" />
  <SobreMiControlador
    activeSection={activeSection}
    setActiveSection={setActiveSection}
  />
  <LinkNavIcon height="10" width="120px" />
</Flex>
  
    {/* Contenido dinámico */}
    <Box
      as="main"
      color="white"
      bg="#101010"
    >
      {activeSection === "Sobre Mi" && (
        <Box className="pt-32">
          <SobreMiSeccion />
        </Box>
      )}
      {activeSection === "Proyectos" && (
        <Box minH="calc(100vh - 80px)"> {/* Garantizar que siempre ocupa al menos el viewport */}
          <h1>Proyectos</h1>
          <p>Aquí está la sección de Proyectos.</p>
          <h1>Proyectos</h1>
          <p>Aquí está la sección de Proyectos.</p>
          <h1>Proyectos</h1>
          <p>Aquí está la sección de Proyectos.</p>
          <h1>Proyectos</h1>
          <p>Aquí está la sección de Proyectos.</p>
          <h1>Proyectos</h1>
          <p>Aquí está la sección de Proyectos.</p>
        </Box>
      )}
    </Box>
  </Box>
  
  );
};