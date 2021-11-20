import React, {useEffect, useContext, useState} from "react"
import { useParams } from "react-router"
import { UIContext } from "../../context/UIContext"
import { ItemDetail } from './ItemDetail'
import { Loader } from "../Loader/Loader"
import {getFirestore} from '../../firebase/firebase'

export const ItemDetailContainer = () => {

    const [items,setItems] = useState(null)
    const {loading, setLoading} = useContext(UIContext)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItems({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [itemId, setLoading])



    return (
        <div>
            {loading 
            ? <Loader/> 
            : <ItemDetail {...items}/>}
        </div>
    )
}
