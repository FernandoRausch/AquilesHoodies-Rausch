import React from "react"
import { useState , useEffect, } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"


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
const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    useEffect(() => {
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(itemsIniciales)
            },2000)
        })
        pedido
        .then((resultado)=>{
            setItems(resultado)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
        .finally(()=>{
            setLoading(false)
        })
    },[categoryId])
    return(
        <>
        <ItemList 
            productos={(items)}
        ></ItemList>
        <ItemCount
            stock={7}

        ></ItemCount>

        </>
    )
}

export default ItemListContainer