import { Flex } from '@chakra-ui/react'
import { Contenedor } from '../../Atomo/Contenedor'
import { Texto } from '../../Atomo/Texto'

export const SobreMiTitulo = () => {
  return (
    <>
        <Contenedor>
            <Flex gap="2" justify="center"> 
                <div className='text-3xl'>
                    <Texto texto="Soy un apasionado por desarrollar productos y páginas" />
                </div>
            </Flex>
        </Contenedor>
    </>
  )
}
