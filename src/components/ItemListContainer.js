import React from "react"
import { useState , useEffect, } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import { pedidoItems } from "./Items"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    useEffect(() => {
        pedidoItems(categoryId)
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
    if(loading){
        return <h1>Cargando...</h1>
    }else{
    return(
        <>
        <ItemList productos={(items)}/>


        </>
    )
    }
}

export default ItemListContainer