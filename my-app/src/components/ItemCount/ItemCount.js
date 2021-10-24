import React from 'react'

export const ItemCount = ({Cantidad, setCantidad, max}) => {

    const handleRestart = () => {

        if(Cantidad > 0)
        setCantidad(Cantidad - 1)
    }

    const handleSumar = () => {
        if(Cantidad < max)
        setCantidad(Cantidad + 1)
    }



    return (
        <div>
            <button onClick={handleRestart} className="btn btn-primary">
                -
            </button>

            <span className="mx-3">{Cantidad}</span>

            <button onClick={handleSumar} className="btn btn-primary">
                +
            </button>
        </div>
    )
}
