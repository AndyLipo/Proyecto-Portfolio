import { Flex } from '@chakra-ui/react'
import { Contenedor } from '../../Atomo/Contenedor'
import { Texto } from '../../Atomo/Texto'

export const SobreMiMasText = () => {
  return (
    <>
        <Contenedor>
        <Flex gap="4" justify="right"> 
            <div className='text-3xl'>
                <Texto texto="Soy además apasionado por la naturaleza y las plantas" />
            </div>
        </Flex>
        </Contenedor>
    </>
  )
}
