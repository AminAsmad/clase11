import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detalles from './pages/Detalles'
import Productos from './pages/Productos'
import Tienda from './pages/Tienda'
import Busquedas from './pages/Busquedas'

const App = () => {
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Inicio/>}/>
    <Route path='inicio' element={<Inicio/>}/>
    <Route path='detalles' element={<Detalles/>}/>
    <Route path='productos/:id' element={<Productos/>}/>
    <Route path='tienda' element={<Tienda/>}/>
    <Route path='busquedas' element={<Busquedas/>}/>
    <Route path='*' element={<Inicio/>}/>

    </Routes>
    <Footer/>
   </BrowserRouter>
    
    
    
  )
}

export default App
