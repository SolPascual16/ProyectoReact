import React from 'react'

export const ItemCount = ({Cantidad, setCantidad, max}) => {

    const handleRestar = () => {

        if(Cantidad > 0) {
        setCantidad(Cantidad - 1)
        }
    }

    const handleSumar = () => {
        if(Cantidad < max){
        setCantidad(Cantidad + 1)
        }
    }



    return (
        <div>
            <button 
            onClick={handleRestar} 
            className={`btn ${Cantidad === 0 ? "btn-danger desactivado" : "btn-primary"}`}>
                -
            </button>

            <span className="mx-3">{Cantidad}</span>

            <button 
            onClick={handleSumar} 
            className={`btn ${Cantidad === max ? "btn-danger desactivado" : "btn-primary"}`}>
                +
            </button>
        </div>
    )
}
