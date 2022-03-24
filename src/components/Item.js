import React from "react"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
        <article className="items">
            <ul key={item.id}>{item.nombre}</ul>
            <ul >${item.precio}</ul>
            <Link to={"/item/"+item.id}>Ver detalle</Link>
        </article>
    )}

export default Item