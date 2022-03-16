import React from "react"
import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"


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
const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(itemsIniciales[1])
            },2000)
        })
        pedido
        .then((resultado)=>{
            setItem(resultado)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
    },[])
    return(
        <>
        <ItemDetail producto={item}/>
        </>
    )
}

export default ItemDetailContainer