import React from "react"


export const itemList = ({items}) => {
return ( 
    <section>
        {items.map((item)=>
           <section>
            <main>{item.img}</main>
            <h1>{item.nombre}</h1>
            <h2>{item.descripcion}</h2>
            <h3>{item.precio}</h3>
        </section>
        )}
    </section>
)

}
