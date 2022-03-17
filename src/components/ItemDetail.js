import React from "react"


const ItemDetail = ({producto}) => {

    return(          
        <li class="itemDetail"> {producto.nombre} ID:{producto.id} ${producto.precio}</li>
                    )
        }


    


export default ItemDetail