import React, { Component } from 'react';
import '../index.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Image,
} from 'react-bootstrap'; //Navigation from bootstrap

const Header = () => {
  return (
    <div>
      <Navbar className='' collapseOnSelect expand='lg' sticky='top'>
        <Container fluid>
          <img src='client/public/images/html.png' alt='' />
          <Navbar.Brand href='#home' className='text-white'>
            YLearn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#courses' className='text-white'>
                Courses
              </Nav.Link>
              <Nav.Link href='#subscribePlan' className='text-white'>
                Subsribe Plan
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='#register' className='text-white'>
                Register
              </Nav.Link>
              <Nav.Link eventKey={2} href='#login' className='text-white'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
