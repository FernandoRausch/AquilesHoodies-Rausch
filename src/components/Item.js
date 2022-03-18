import React from "react"
import { Link } from "react-router-dom"

const Item = ({item}) => {
    return(
   
        <li key={item.id}>{item.nombre}</li>
 
    )}

export default Item