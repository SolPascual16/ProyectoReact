import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowDown} from 'react-icons/md'
import './CartScreen.scss'

export const CartScreen = () => {
    const {carrito, vaciarCarrito, calcularTotal} = useContext(CartContext)
    return (
        <div className="container my-5">
            {
                carrito.length === 0
                ? 
                <>
                    <h2>No hay productos agregados</h2>
                    <hr/>
                    <Link to="/" className="btnVolver">Volver al Inicio</Link>
                </>
                :
                <>
                    <h2>Resumen de Compra</h2>
                    <hr/>
                    <div className="productosCarrito">
                            <section className="cartScreen" expand="lg">
                                <ul className="col-2">Imagen<MdKeyboardArrowDown/></ul>
                                <ul className="col-2">Descripcion<MdKeyboardArrowDown/></ul>
                                <ul className="col-2">Cantidad<MdKeyboardArrowDown/></ul>
                                <ul className="col-2">Precio Unit<MdKeyboardArrowDown/></ul>
                                <ul className="col-2">Total</ul>
                                <ul className="col-2">X</ul>
                            </section>
                            <hr/>

                            {
                            <CartItem/>
                            }
                    </div>
                    <hr/>
                    <h3 className="my-3">Total: ${calcularTotal()}</h3>
                    <button className="btn btn-danger"
                    onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                    <Link to="/Checkout" className="btn btn-success mx-3">
                            Terminar mi compra
                    </Link>
                </>
            }
        </div>
    )
}
