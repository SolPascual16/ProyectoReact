import React, {useContext} from 'react'
import {MdShoppingCart} from 'react-icons/md'
import { CartContext } from '../../context/cartContext'
import './NavBar.scss'

export const CartWidget = () => {
    
    const {calcularCantidad} = useContext(CartContext)
    return (
        <div estilos={{
            visibility: calcularCantidad() === 0 ? "hidden" : "visible"
        }}>
            <MdShoppingCart className="widget"/>
            <span className="span">{calcularCantidad()}</span>
        </div>
    )
}