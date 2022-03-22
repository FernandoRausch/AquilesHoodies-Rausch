import React from "react"


const ItemDetail = ({producto}) => {

    return(          
        <div class="itemDetail"><ul>{producto.nombre}</ul><ul>ID:{producto.id}</ul> <ul>Precio: ${producto.precio}</ul> </div>
                    )
        }


    


export default ItemDetail