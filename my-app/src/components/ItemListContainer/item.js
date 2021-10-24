import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({id,nombre,descripcion,precio,img,category}) => {

    return (

        <Card style={{ width: '18rem' }} className = "m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Categoria: {category}</Card.Text>
                <Link to={`/detail/${id}`}>
                <Button variant="primary">¡Lo quiero!</Button>
                </Link>
            </Card.Body>
        </Card>
        
    )
}