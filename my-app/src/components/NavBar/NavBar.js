import React from 'react';
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';



export const NavBar = () => {


  return (
    <Navbar className="estilos" variant="dark" expand="lg">
          <Container className="estilos">
          <Link to="/" className="estilosNav">Feli-Pet</Link>
          <Nav>
            <Link to="/" className="estilosItems">Inicio</Link>
            <Link to="/Productos/categoria1" className="estilosItems">Categoria 1</Link>
            <Link to="/Productos/categoria2" className="estilosItems">Categoria 2</Link>
            <Link to="/Contacto" className="estilosItems">Contacto</Link>
          </Nav>
          <Link to="/Cart"><CartWidget/></Link>


        

          </Container>

    </Navbar>
  )
}