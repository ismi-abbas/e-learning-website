import "../index.css";
import Login from "../containers/Login"; //Login containers - abbas
import Nav from "react-bootstrap/Nav"; //Navigation from bootstrap
import Navbar from "react-bootstrap/Nav"; //Navigation from bootstrap
import Routes from "../Routes";

const Header = () => {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Scratch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default Header;
