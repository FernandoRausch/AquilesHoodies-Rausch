import React from "react"
import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"


let itemsIniciales = [
    {
        id:1,
        nombre: "Producto 1",
        precio: 100,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg"
    },
    {
        id:2,
        nombre: "Producto 2",
        precio: 200,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg"
    },
    {
        id:3,
        nombre: "Producto 3",
        precio: 300,
        imagen: "https://i.pinimg.com/originals/f5/98/67/f59867a5279ebb9ea1a7d866d0951f20.jpg"
    }
]
const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log(id)
                res(itemsIniciales[0])
            },2000)
        })
        pedido
        .then((resultado)=>{
            setItem(resultado)
        })
        .catch((error)=>{
            console.log("Hubo un error")
        })
    },[id])
    return(
        <>
        <ItemDetail producto={(item)} />
        </>
    )
}

export default ItemDetailContainer