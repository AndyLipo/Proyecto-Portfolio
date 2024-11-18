import { Flex } from "@chakra-ui/react";
import { LinksNav } from "../../Molecula/Navbar/LinksNav";
import { SobreMiControlador } from "../../Atomo/SobreMiControlador";
import { LinkNavIcon } from "../../Molecula/Navbar/LinkNavIcon";

export const Navbar = () => {
  return (
    <Flex
      as="nav"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      bg="#101010" /* Cambia el color según dark/light mode */
      boxShadow="md"
      p={4}
      zIndex="10" /* Asegura que quede por encima del contenido */
      justify="space-between"
      align="center"
      gap={4}
    >
      <LinksNav height="10" width="120px" />
      <SobreMiControlador height="10" width="120px" />
      <LinkNavIcon height="10" width="120px" />
    </Flex>
  );
};
