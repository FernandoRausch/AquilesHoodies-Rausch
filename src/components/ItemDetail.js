import React from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"


const ItemDetail = ({producto}) => {
    const [seleccionado,setSeleccionado] = useState(0)
    const onAdd = (cantidadSeleccionada) => {
        console.log({cantidadSeleccionada})
        setSeleccionado(cantidadSeleccionada)
    }

    return(          
        <div class="itemDetail"><ul>{producto.nombre} <ul></ul><img width="300px" src={producto.imagen} alt="" /></ul><ul>ID:{producto.id}</ul> <ul>Precio: ${producto.precio}</ul> 
          {seleccionado === 0 ? <ItemCount
            stock={7}
            onAdd={onAdd}
        ></ItemCount> : <Link to="/cart">Terminar compra</Link>}  
        
        </div>
                    )
        }


    


export default ItemDetail