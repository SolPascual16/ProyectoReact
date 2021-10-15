import React from "react",
import { item } from "./item"




export const ItemList = ({productos = []}) => {
return ( 

    <div>
            <div className= "container">
                <h1>Nuestors productos</h1>                
            </div>
            <div className = "row">
                {productos.map((item)=> <item {...item} key={item.id}/>)}
            </div>
    </div>

)

}
