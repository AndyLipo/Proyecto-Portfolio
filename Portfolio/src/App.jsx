
import './App.css'

import { Navbar } from './Components/Organismos/Navbar/Navbar'
import { SobreMiSeccion } from './Components/Paginas/SobreMi/SobreMiSeccion'

function App() {
  
  return (
    <>
      <div className='bg-[#101010]'>
        <Navbar />
        <SobreMiSeccion  />
      </div>
    </>
  )
}

export default App
