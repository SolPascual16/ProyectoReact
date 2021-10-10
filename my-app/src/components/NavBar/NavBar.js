import React from 'react';
import { CartWidget } from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';



export const NavBar = () => {


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
          <Navbar.Brand href="#home">Feli-Pet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#quienesSomos">¿Quienes Somos?</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
          </Nav>

          <CartWidget/>
        

          </Container>

    </Navbar>
  )
}