import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const ItemDetail = ({id,nombre,descripcion,precio,img,category}) => { 

    const {goBack} = useHistory()
    
    return (

        <Card style={{ width: '18rem' }} className = "m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>{precio}</Card.Text>
                <Card.Text>{category}</Card.Text>
                <Button className="btn btn-primary" variant="primary">Agregar al Carrito</Button>
            </Card.Body>
            <Button className="btn btn-primary" variant="primary" onClick={()=>goBack()}>Volver</Button>
        </Card>
        
    )
}