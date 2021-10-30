import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext'
import {BsFillTrashFill} from 'react-icons/bs'

export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal} = useContext(CartContext)
    return (
        <div className="container my-5">
            {
                carrito.length === 0
                ? 
                <>
                    <h2>No hay productos agregados</h2>
                    <link to="/" className="btn btn-success">Volver al Inicio</link>
                </>
                :
                <>
                    <h2>Resumen de Compra</h2>
                    <hr/>

                    {
                        carrito.map((prod)=>(
                            <div>
                                <img src={prod.img}></img>
                                <h4>{prod.nombre}</h4>
                                <p>Cantidad: {prod.cantidad}</p>
                                <p>Precio: {prod.precio * prod.cantidad}</p>
                                <button className="btn btn-danger" onClick={ () => removeItem(prod.id)}>
                                    <BsFillTrashFill/>
                                </button>
                            </div>
                        ))
                    }
                    <hr/>
                    <h3 className="my-3">Total: ${calcularTotal()}</h3>
                    <button className="btn btn-danger"
                    onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                    </button>
                </>
            }
        </div>
    )
}
