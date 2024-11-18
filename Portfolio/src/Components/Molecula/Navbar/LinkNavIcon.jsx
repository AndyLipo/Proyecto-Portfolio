import { Flex } from "@chakra-ui/react"
import { Contenedor } from "../../Atomo/Contenedor"
import { Texto } from "../../Atomo/Texto"

export const LinkNavIcon = () => {
  return (
    <>
        <Contenedor>
            <Flex gap="2">
                <Texto texto="LinkedIn"/>
                <Texto texto="Resume"/>
            </Flex>
        </Contenedor>
    </>
  )
}
