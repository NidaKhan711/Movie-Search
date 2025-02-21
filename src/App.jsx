import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const  App = () => {
  return (
    <>
   <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>} />  
  <Route path="/about" element={<About />} /> 
  </Routes>
<Footer/>
  
    </>
  )
}

export default  App