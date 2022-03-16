import Item from "./Item"
import React from "react"


const ItemList = (productos) => {

    return(
        <ul>{productos.map((producto)=>{
            return (            
                <Item item={producto}>
                </Item>
                    )
        })}
        </ul>

    )
}

export default ItemList 