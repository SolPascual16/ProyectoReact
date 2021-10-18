import React from "react"
import {Item} from "./Item"




export const ItemList = ({productos = []}) => {
return ( 

    <div>
            <div className = "row">
                { productos.map((item)=> <Item {...item} key={item.id}/>)}
            </div>
    </div>

)} 
