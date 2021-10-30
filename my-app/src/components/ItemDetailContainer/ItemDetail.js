import React, {useContext, useState} from "react"
import { useHistory} from 'react-router-dom'
import { CartContext } from "../../context/cartContext"
import {ItemCount} from "../ItemCount/ItemCount"


export const ItemDetail = ({id,nombre,descripcion,precio,img,category, stock}) => { 

    const {goBack}= useHistory()
    const {addToCart, isInCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)          
    const handleAgregar = () => {

        const newItem = {
            id, 
            nombre, 
            precio, 
            category, 
            cantidad
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
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
            {isInCart(id)
            ? 
            <>
                <link to="/cart" className="btn btn-success">Finalizar compra</link>
                <link to="/" className="btn btn-success">Volver al inicio</link>
            </>
            :
            <>
                <ItemCount Cantidad={cantidad} setCantidad={setCantidad} max={stock}/>
                <button className="btn btn-success my-2" variant="primary" onClick={handleAgregar}>Add to Cart</button>
            </>

            }
            </div>         
            <hr/>       
            <button className="btn btn-outline-primary mx-4" variant="primary" onClick={goBack}>Volver al Inicio</button>
        </div>
    )   
}        
  