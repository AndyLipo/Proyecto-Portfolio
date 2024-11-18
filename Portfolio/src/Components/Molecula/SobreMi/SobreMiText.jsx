import { Flex } from '@chakra-ui/react'
import { Contenedor } from '../../Atomo/Contenedor'
import { Texto } from '../../Atomo/Texto'

export const SobreMiText = () => {
  return (
    <>
        <Contenedor>
        <Flex gap="4" justify="center"> 
            <Texto texto="Sobre Mi" />
        </Flex>
        </Contenedor>
    </>
  )
}
