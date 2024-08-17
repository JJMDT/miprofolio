import { Nav } from "react-bootstrap";

export const NavBarLinks = ({ links }) => {
  return (
    <Nav
      className="me-auto mb-2 mb-lg-0 d-md-flex justify-content-between"
      id="menunav"
    >
      {links.map((link, index) => (
        <Nav.Link href={link.href} key={index} id="linknav">
          {link.label}
        </Nav.Link>
      ))}
    </Nav>
  );
};
