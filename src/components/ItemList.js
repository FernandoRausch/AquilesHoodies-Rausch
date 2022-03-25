import Item from "./Item"

const ItemList = ({productos}) => {

    return(
        <ul className="itemList">
            {productos.map((producto)=>{
                return (            
                <Item key={producto.id} item={producto}>
                </Item>
                    )
        })}
        </ul>

    )
}

export default ItemList 