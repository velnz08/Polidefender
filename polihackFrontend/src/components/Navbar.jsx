import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavbarPrimary() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" style={{height:'60px'}}>
        <Container>
          <Navbar.Brand href="#home">NumeFirma</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Home2">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="./Razvan">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarPrimary;