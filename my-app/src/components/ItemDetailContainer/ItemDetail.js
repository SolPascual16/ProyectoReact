import React, {useState} from "react"
import { useHistory} from 'react-router-dom'
import {ItemCount} from "../ItemCount/ItemCount"

export const ItemDetail = ({id,nombre,descripcion,precio,img,category, stock}) => { 

    const [goBack ]= useHistory()

    const [cantidad, setCantidad] = useState(10)          

    const addToCart = () => {

        const newItem = {
            id, 
            nombre, 
            precio, 
            category, 
            cantidad
        }

        console.log("agregado...", newItem)
    }
    
    return (


        <div className = "Container">
            <div>
                <img alt="" variant="top" src={img}/>
            </div>
            <div>
                <h1>{nombre}</h1>
                <p>{descripcion}</p>
                <h4>Precio: ${precio}</h4>
                <ItemCount Cantidad={cantidad} setCantidad={setCantidad} max={stock}/>
                <button className="btn btn-success my-2" variant="primary" onClick={addToCart}>Add to Cart</button>
            </div>         
            <hr/>       
            <button className="btn btn-outline-primary mx-4" variant="primary" onClick={goBack}>Volver al Inicio</button>

        </div>
   )       
}        
  