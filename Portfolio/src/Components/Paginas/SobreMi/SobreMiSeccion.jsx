// import { Bleed, Grid, Stack } from '@chakra-ui/react'
// import { SobreMiText } from '../../Molecula/SobreMi/SobreMiText'
// import { SobreMiTitulo } from '../../Molecula/SobreMi/SobreMiTitulo'
// import { Imagen } from '../../Atomo/Imagen'

// export const SobreMiSeccion = () => {
//   return (
//     <>
//     <Grid 
//        templateColumns="repeat(2, 1fr)"
//       templateRows="repeat(6, 1fr)"
//       gap={0}
//     >
//         <Stack>
//             <Bleed inlineStart="80"  gridColumn="1 / 2" gridRow="1 / 2">
//                 <SobreMiText/>
//             </Bleed>
//             <Bleed blockEnd="80">
//                 <SobreMiTitulo gridColumn="1 / 3" gridRow="2 / 3"/>
//             </Bleed>
//             <Bleed>
//                 <Imagen gridColumn="1 / 2" gridRow="3 / 5"/>
//             </Bleed>

//         </Stack>
//     </Grid>
//     </>
//   )
// }

import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { SobreMiText } from "../../Molecula/SobreMi/SobreMiText";
import { SobreMiTitulo } from "../../Molecula/SobreMi/SobreMiTitulo";
import { Imagen } from "../../Atomo/Imagen";

export const SobreMiSeccion = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      {/* Texto principal */}
      <GridItem colSpan={2}>
        <SobreMiText />
      </GridItem>

      {/* Título */}
      <GridItem colSpan={12}>
        <SobreMiTitulo />
      </GridItem>

      {/* Imagen y contenedor lateral */}
      <GridItem colSpan={2}>
        <div className="-mt-96">
            <Imagen />
        </div>
      </GridItem>
      <GridItem colSpan={2}>
            <SobreMiTitulo />
      </GridItem>
      {/* <GridItem colSpan={{ base: 12, md: 6 }}>
        <Box bg="gray.100" p={4} borderRadius="md">
          <Text>Espacio para escribir información</Text>
        </Box>
      </GridItem>

      {/* Contenedor inferior e imagen lateral  
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <Box bg="gray.200" p={4} borderRadius="md">
          <Text>Contenedor inferior</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <Box bg="gray.300" p={4} borderRadius="md">
          <Imagen/>
        </Box>
      </GridItem> */}
    </Grid>
  );
};
