import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavBarLinks} from './NavbarLinks'
import  {TitleNav}  from './TitleNav';

export const Header = () => {
  const links = [
  {href:"#sobreMi", label:"Sobre mi"},
  {href:"#enlaceFormacion", label:"Formacion"},   
  {href:"#enlaceProyectos", label:"Proyectos"},  
  {href:"#enlaceContacto", label:"Contacto"}   
  ]
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#inicio" id="logoInicio">
            <h1 className="logo">J</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <NavBarLinks links={links}></NavBarLinks>
            
          </Navbar.Collapse>
          <TitleNav text="Desarrollador" />
        </Container>
      </Navbar>
    </header>
  );
};
