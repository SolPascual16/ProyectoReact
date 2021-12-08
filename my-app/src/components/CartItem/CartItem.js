import React, {useContext} from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import { CartContext } from '../../context/CartContext'
import '../CartScreen/CartScreen.scss'

export const CartItem = () => {
    const {carrito, removeItem} = useContext(CartContext)
    return (
        carrito.map((prod)=>(
            <section className="productos" expand="lg">
                <ul className="col-2">
                    <img alt="" src={prod.img}></img>
                </ul>
                <ul className="col-2">
                    <h6>{prod.nombre}</h6>
                </ul>
                <ul className="col-2">
                    <p>{prod.cantidad}</p>
                </ul>
                <ul className="col-2">
                    <p>${prod.precio}</p>
                </ul>
                <ul className="col-2">
                    <p>${prod.precio * prod.cantidad}</p>
                </ul>
                <button className="btn btn-danger m-3 mt-0 mb-4" variant="outline-danger" onClick={ () => removeItem(prod.id)}>
                    <MdDeleteOutline className="trash"/>
                </button>
            </section>
        ))
    )
}
