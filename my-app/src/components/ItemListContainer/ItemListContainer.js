import React, {useEffect, useState} from "react",
import { pedirProductos} from "../../helpers/pedirProductos",
import { ItemList } from "./itemList"

export const ItemListContainer = ()=>{

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {  
        setLoading(true)

        pedirProductos()
            .then((res)=> {
                setItems(res)
            }).catch((err)=>console.log(err))

    }, [])


    return ( 
        <section className = "container my-5">
           {
               loading
                    ? <h2>Cargando...</h2>
                    : <itemList productos={items}/>
           }

        </section>
    )
}