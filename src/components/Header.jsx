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

  const Logo = ({text}) =>{
    return <h1 className='logo'> {text} </h1>
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Logo text="JJLT" />
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <NavBarLinks links={links}></NavBarLinks>
            
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  );
};
