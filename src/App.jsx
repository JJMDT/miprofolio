import React from 'react'
import {Header} from './components/Header'
import { Sobremi } from './components/Sobremi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Habilidades } from './components/Habilidades'
import { FormacionAcademica } from './components/FormacionAcademica'
import { Proyectos } from './components/Proyectos'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'



function App() {

  return (
    <>
      <Header />
      <Sobremi />
      <Habilidades />
      <FormacionAcademica />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
