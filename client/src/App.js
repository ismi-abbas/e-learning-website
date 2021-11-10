import React from "react";
import "./index.css";
import Header from "./components/Header";
import Navbar from "react-bootstrap/Navbar"; //Navigation from bootstrap
import Nav from "react-bootstrap/Nav"; //Navigation from bootstrap
import Footer from "./components/Footer";


//Parent component
function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted">
          E Learning Website
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link>Subscribe</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
