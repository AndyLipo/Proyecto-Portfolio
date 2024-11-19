import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'

import { Navbar } from './Components/Organismos/Navbar/Navbar'
import { Box } from '@chakra-ui/react'

function App() {
  

  return (
    <>
      <Router>
        <Box bg="#101010">
          <Navbar />
        </Box>
      </Router>
    </>
  )
}

export default App
