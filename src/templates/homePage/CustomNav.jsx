import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const CustomNav = () => {
  return (
    <Navbar
      id="navbar"
      data-bs-theme="dark"
      fixed="top"
      expand="lg"
      bg="dark"
      style={{
        backgroundColor: "$blue-600",
      }}
    >
      <Container className="--bs-primary">
        <Navbar.Brand href="#home" className="px-5">
          BeActive
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about-us" className="px-3">
              About us
            </Nav.Link>
            <Nav.Link href="./templates/ContactUs" className="px-3">
              Contact us
            </Nav.Link>
            <NavDropdown title="suppliments" className="px-3">
              <NavDropdown.Item href="#action/3.1">Protein</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Creatine </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PreWorkout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Amino </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Micronutrients
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="px-3">
              Equipments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
