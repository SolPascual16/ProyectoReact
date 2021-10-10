import React, {useEffect, useState} from "react"
import { pedirProductos} from "../../helpers/pedirProductos"
import { itemList } from "./itemList"

export const ItemListContainer = ({greeting})=>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {  

        setLoading(true)

        pedirProductos()
            .then((res)=> 
            setItems(res)
            ).catch((err)=>console.log(err))

    }, [])


    return ( 
        <section className = "container my-5">
           {
               loading
               ? <h2>Cargando...</h2>
               : <itemList items={items}/>
           }

        </section>
    )
}