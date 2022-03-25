import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext.js"


const ItemDetail = ({producto}) => {
    const { addItem } = useContext(contexto);

    const [seleccionado,setSeleccionado] = useState(0)
    const onAdd = (cant) => {
        setSeleccionado(cant)
        addItem(producto, cant); 
    }

    return(          
        <div className="itemDetail"><ul>{producto.nombre} <ul></ul><img width="300px" src={producto.imagen} alt="" /></ul><ul>ID:{producto.id}</ul> <ul>Precio: ${producto.precio}</ul> 
          {seleccionado === 0 ? <ItemCount 
            stock={7}
            onAdd={onAdd}
        ></ItemCount> : <Link to="/cart">Terminar compra</Link>}  
        
        </div>
                    )
        }


    


export default ItemDetail