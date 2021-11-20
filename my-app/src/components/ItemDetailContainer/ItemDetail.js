import React, {useContext, useState} from "react"
import { useHistory} from 'react-router-dom'
import { CartContext } from "../../context/cartContext"
import {ItemCount} from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import './itemDetail.scss'
import { Container } from "react-bootstrap"
import {MdShoppingCart} from 'react-icons/md'

export const ItemDetail = ({id,nombre,precio,img,category,stock}) => { 
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
        <Container className="container my-5">
            <h1 className="miH1">Distribuidora Feli-Pet</h1>
            <hr/>
            <div className="producto">
                    <img alt="" variant="top" src={img}/>
                    <section className="detalle">
                        <h1>{nombre}</h1>
                        <h4>${precio}</h4>
                        <hr/>
                    {isInCart(id)
                    ? 
                    <>
                        <Link to="/cart" className="finalizarCompra">Finalizar compra</Link>
                        <Link to="/" className="btnVolver">Volver al Inicio</Link>
                    </>
                    :
                    <>
                        <ItemCount Cantidad={cantidad} setCantidad={setCantidad} max={stock}/>
                        <button className="agregarAlCarrito" variant="primary" onClick={handleAgregar}>Agregar al Carrito <MdShoppingCart/></button>
                    </>

                    }
                    </section>         
            </div>
        </Container>
    )   
}        
  