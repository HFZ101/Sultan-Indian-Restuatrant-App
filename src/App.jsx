
import './App.css'

import './assets/styles/Menu.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Naviheader from './components/Link-page'
import Home from './components/Index'
import Gallery from './components/Gallery'
import Menu from './components/Menu'
import Booking from './components/Booking';

            
function App() {


  return (
    <>
    <Naviheader />
      
      <Routes>
          <Route path="/" element={<Home />} />            
      </Routes>
      <Routes>
          <Route path="/gallery" element={<Gallery />} />            
      </Routes>
      <Routes>
          <Route path="/menu" element={<Menu />} />            
      </Routes>
      <Routes>
          <Route path="/booking" element={<Booking />} />            
      </Routes>
    
    </>
  )
}

export default App
