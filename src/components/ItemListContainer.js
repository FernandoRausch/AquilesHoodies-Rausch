import React from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    return(
        <>
        <div id="greeting">{props.greeting}</div>
        <ItemList></ItemList>
        <ItemCount
            stock={7}
            initial={1}
            onAdd={0} 
        ></ItemCount>
        </>
    )
}

export default ItemListContainer