import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import {MdKeyboardArrowDown, MdDeleteOutline} from 'react-icons/md'
import './cartScreen.scss'
import { Navbar, Container, Nav, Button} from 'react-bootstrap'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)
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
                                carrito.map((prod)=>(
                                    <section className="productos" expand="lg">
                                        <ul className="col-2">
                                            <img alt="" src={prod.img}/>
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
                            }
                    </div>
                    <hr/>
                    <h3 className="my-3">Total: ${calcularTotal()}</h3>
                    <button className="btn btn-danger"
                    onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                    <Link to="/Compra" className="btn btn-success mx-3" onClick={vaciarCarrito}>
                            Terminar mi compra
                    </Link>
                </>
            }
        </div>
    )
}
