import React from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import MisHabilidades from './components/MisHabilidades'; // Importación correcta
import { cargarAnimaciones } from './animations';
import Carousel from './components/Carousel'
import {ListProyect} from './components/ListProyect'
import { DetalleProyecto } from './components/DetalleProyecto'

function App() {
  useEffect(() => {
    cargarAnimaciones(); // Llamar a la función para iniciar las animaciones
  }, []);

  // Componente para la página principal
  const HomePage = () => (
    <>
      <Header />
      <Sobremi />
      <Hobbies/>
      <FormacionAcademica />
      <MisHabilidades />
      <ListProyect />
      {/* <Habilidades /> */}
      {/* <Carousel/> */}
      {/* <Proyectos /> */}
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proyecto/:id" element={<DetalleProyecto />} />
    </Routes>
  )
}

export default App
