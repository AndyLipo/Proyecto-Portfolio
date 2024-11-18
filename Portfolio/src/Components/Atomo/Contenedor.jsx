import { Box } from "@chakra-ui/react"

export const Contenedor = ({children}) => {
  return (
    <Box as="section" color="fg.muted" >
    {children}
    </Box>
  )
}
