import React from "react";
import { Card, Button } from "react-bootstrap";

export const item = ({id,nombre,descripcion,precio,img}) => { 

    console.log(item)

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>{precio}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
    )
}