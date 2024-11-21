import React from 'react';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BootstrapNav() {
    return (
    
            <Navbar  expand="lg" className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Brand href="#">ANGELA RUIZ</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar`}
                  aria-labelledby={`offcanvasNavbarLabel`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                      My Portfolio
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">About</Nav.Link>
                      <Nav.Link href="#action2">Projects</Nav.Link>
                      <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          )
}

export default BootstrapNav;