import React from 'react'
import { Link } from 'react-router-dom'

export const Compra = () => {
    return (
        <div className="container my-5">
            <h1>
                Compra realizada con exito!
            </h1>
            <hr/>
            <Link to="/" className="btnVolver">Volver al Inicio</Link>
        </div>
    )
}
