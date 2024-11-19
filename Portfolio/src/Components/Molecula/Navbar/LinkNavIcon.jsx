import { Flex } from "@chakra-ui/react"
import { Contenedor } from "../../Atomo/Contenedor"
import { Texto } from "../../Atomo/Texto"
import { Link } from 'react-router-dom'

export const LinkNavIcon = () => {
  return (
    <Contenedor>
      <Flex gap="2">
        <Link to="https://www.linkedin.com/in/andres-liporace/" target="_blank">
          <Texto texto="LinkedIn"/>
        </Link>
        <Link to="" target="_blank">
          <Texto texto="Resume"/>
        </Link>
      </Flex>
    </Contenedor>
  )
}