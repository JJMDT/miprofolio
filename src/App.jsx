import React from 'react'
import { useEffect } from 'react'
import {Header} from './components/Header'
import { Sobremi } from './components/Sobremi'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Habilidades } from './components/Habilidades'
import { FormacionAcademica } from './components/FormacionAcademica'
import { Proyectos } from './components/Proyectos'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'
import { Hobbies } from './components/Hobbies';
import { cargarAnimaciones } from './animations';





function App() {
  useEffect(() => {
    cargarAnimaciones(); // Llamar a la función para iniciar las animaciones
  }, []);
  return (
    <>
      <Header />
      <Sobremi />
      <Hobbies/>
      <FormacionAcademica />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
