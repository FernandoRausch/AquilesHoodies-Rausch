import React from "react"

const Item = ({item}) => {
    return(
        <li key={item.id}>{item.nombre}</li>
    )}

export default Item