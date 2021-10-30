import React, {useEffect, useContext, useState} from "react"
import { useParams } from "react-router"
import { UIContext } from "../../context/UIContext"
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const [items,setItems] = useState(null)
    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then(res =>{

                if(itemId) {
                    setItems (res.find(prod => prod.id === Number (itemId)))
                } else{
                    setItems(res)
                }
                
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        
    }, [itemId,setLoading])



    return (
        <div>
            {loading ? <h2>Cargando</h2> 
            : <ItemDetail {...items}/>}
        </div>
    )
}
