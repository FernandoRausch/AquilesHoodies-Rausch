import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "./CartContext.js";
const ItemDetail = ({producto}) => {
    const { addItem } = useContext(contexto);
    const [seleccionado,setSeleccionado] = useState(0)
    const onAdd = (cant) => {
        setSeleccionado(cant)
        addItem(producto, cant); 
    }
    return(
        <div>  
            <div className="imagenDetail">
                <p>{producto.nombre} </p>
                <img width="600px" src={producto.imagen} alt="" />
                <p>ID:{producto.id}</p>
                <p>Precio: ${producto.precio}</p> 
                {seleccionado === 0 ? 
            <ItemCount stock={producto.stock}onAdd={onAdd}></ItemCount> : <div><Link className="terminar" to="/">Seguir comprando</Link> <Link className="terminar" to="/cart">Terminar compra</Link></div>}  
            </div>
        </div>
         
        )}


    


export default ItemDetail