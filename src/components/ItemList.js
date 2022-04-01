import Item from "./Item"

const ItemList = ({productos}) => {

    return(
        <section className="itemList">
            {productos.map((producto)=>{
                return (            
                <Item key={producto.id} item={producto}>
                </Item>
                    )
        })}
        </section>

    )
}

export default ItemList 