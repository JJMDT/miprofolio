import { Navbar, Nav, Container } from 'react-bootstrap';
import {NavBarLinks} from './NavbarLinks'
import  {TitleNav}  from './TitleNav';

export const Header = () => {
  const links = [
  {href:"#sobreMi", label:"Sobre mi"},
  {href:"#enlaceFormacion", label:"Formacion"},   
  {href:"#misHabilidades", label:"Habilidades"},
  {href:"#enlaceProyectos", label:"Proyectos"},  
  {href:"#contactoFooter", label:"Contacto"}   
  ]

  const Logo = ({text}) =>{
    return <h1 className='logo'> 
    <img src="https://market-assets.strapi.io/logos/2eb4a4c12ead37a2706422500" alt="" /></h1>
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Logo text="JJ" />
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <NavBarLinks links={links}></NavBarLinks>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  );
};
