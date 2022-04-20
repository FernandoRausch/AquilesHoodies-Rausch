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
                <div><img width="600px" src={producto.imagen} alt="" /></div>
                <div className="detalles">
                    <p>{producto.nombre} </p>
                    <p>${producto.precio}</p> 
                    <span className="descripcion">{producto.descripcion}</span>
                    <p >ID:{producto.id}</p>
                    <div className="botonesDetail">
                    {seleccionado === 0 ? 
                    <ItemCount stock={producto.stock}onAdd={onAdd}></ItemCount> : <div className="terminar"><Link className="buttonDetail" to="/"><p>Seguir comprando</p></Link> <Link className="buttonDetail" to="/cart"><p>Terminar compra</p></Link></div>}</div>
                </div>                
            </div>
        </div>
        )}


    


export default ItemDetail