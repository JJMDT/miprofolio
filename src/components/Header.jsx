import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#inicio" id="logoInicio">
            <h1 className="logo">J</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0 d-md-flex justify-content-between" id="menunav">
              <Nav.Link href="#enlace1" id="linknav">
                Sobre mí
              </Nav.Link>
              <Nav.Link href="#enlace2" id="linknav">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#enlace3" id="linknav">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <p id="subtitulo" className="text-white">
            Desarrollador
            <br />
            Full Stack
          </p>
        </Container>
      </Navbar>
    </header>
  );
};
