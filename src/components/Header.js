import "../index.css";
import Nav from "react-bootstrap/Nav"; //Navigation from bootstrap
import Navbar from "react-bootstrap/Nav"; //Navigation from bootstrap

const Header = () => {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="dark" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Elearn
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Courses</Nav.Link>
          <Nav.Link href="#pricing">Subscribe Plan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
