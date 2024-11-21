import React from "react";
import { Link } from "react-scroll";




import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function NavBar() {

    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="#header">ANGELA RUIZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end" // Offcanvas se desliza desde la derecha
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Welcome to my portfolio
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#header">Home</Nav.Link>
              <Nav.Link href="#about-section">About</Nav.Link>
              <Nav.Link href="#projects-section">Projects</Nav.Link>
              <Nav.Link href="#contact-section">Contact</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  
  </>

/* 
  // return (
  //   <nav id="nav-bar">
  //     <Link to="header" smooth={true} duration={500} offset={-70} id="nav-logo">
  //       ANGELA RUIZ
  //     </Link>
  //     <ul>
  //       <li>
  //         <Link to="header" smooth={true} duration={500} offset={-70}>
  //           Home
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="about-section" smooth={true} duration={500} offset={-70}>
  //           About me
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="projects-section" smooth={true} duration={500} offset={-70}>
  //           Projects
  //         </Link>
  //       </li>
  //       <li>
  //         <Link to="contact-section" smooth={true} duration={500} offset={-70}>
  //           Contact
  //         </Link>
  //       </li>
  //     </ul>
  //   </nav>
  // ); */




    )

}







export default NavBar;









      {/* 
<div>
<Navbar expand="lg" className="bg-body-tertiary mb-3">
  <Container fluid>
    <Navbar.Brand href="#">Portfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">
          Portfolio
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div> */}

      {/* <div>
{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
  <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    <Container fluid>
      <Navbar.Brand href="#">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Portfolioo
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
))} */}
      {/* </div> */}
   