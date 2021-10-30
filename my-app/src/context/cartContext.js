import React, {createContext, useState, } from "react"

export const CartContext = createContext() 

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const addToCart = (item) => {
        setCarrito( [...carrito, item])
    }
    const calcularCantidad = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0)
    }
    const calcularTotal = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }
    const isInCart = (item) => {
        return carrito.some((prod) => prod.id === item.id)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    const removeItem = (itemId) => {
        const newCart = carrito.filter((prod) => prod.id !== itemId)
        setCarrito(newCart)
    }

    return( 
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito, 
            isInCart, 
            calcularTotal
             }}>
                 {children}
        </CartContext.Provider>
    )
}
