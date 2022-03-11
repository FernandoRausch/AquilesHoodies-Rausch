import {useEffect , useState} from "react"
import Item from "./Item"
let itemsIniciales = [
    {
        id:1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id:2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id:3,
        nombre: "Producto 3",
        precio: 300
    }
]

const ItemList = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                setItems(itemsIniciales)
            },2000)
        })
        pedido
        .then((resultado)=>{
            setItems(resultado)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
    },[])
    return(
        <ul>{items.map((item)=>{
            return (            
                <Item>
                </Item>
                    )
        })}
        </ul>

    )
}

export default ItemList 