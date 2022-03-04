import React from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return(
        <>
        <div id="greeting">{props.greeting}</div>
        <ItemCount
            stock={7}
            initial={1}
            onAdd={0} 
        ></ItemCount>
        </>
    )
}

export default ItemListContainer