import React from 'react';
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.scss';



export const NavBar = () => {


  return (
    <Navbar className="estilos" variant="dark" expand="lg">
          <Container className="estilos">
          <Link to="/" className="estilosNav">Feli-Pet</Link>
          <Nav>
            <Link to="/" className="estilosItems">Inicio</Link>
            <Link to="/Productos/Accesorio" className="estilosItems">Accesorios</Link>
            <Link to="/Productos/Comestible" className="estilosItems">Comestibles</Link>
            <Link to="/Productos/Juguete" className="estilosItems">Juguetes</Link>
            <Link to="/Productos/Higiene" className="estilosItems">Higiene</Link>
            <Link to="/Contacto" className="estilosItems">Contacto</Link>
          </Nav>
          <Link to="/Cart"><CartWidget/></Link>
          </Container>

    </Navbar>
  )
}