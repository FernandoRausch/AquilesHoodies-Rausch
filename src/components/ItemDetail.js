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
        <div className="itemDetail">
            <ul>{producto.nombre} <img width="400px" src={producto.imagen} alt="" /></ul><ul>ID:{producto.id}</ul> <ul>Precio: ${producto.precio}</ul> 
          {seleccionado === 0 ? <ItemCount 
            stock={producto.stock}
            onAdd={onAdd}
        ></ItemCount> : <div><Link className="terminar" to="/">Seguir comprando</Link> <Link className="terminar" to="/cart">Terminar compra</Link></div>}  
        
        </div>
                    )
        }


    


export default ItemDetail