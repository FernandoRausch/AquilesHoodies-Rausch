import { useState , useEffect, } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import { db } from "./Firebase"
import { collection, getDocs, query, where } from "firebase/firestore"



const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)
    useEffect(() => {
        if(!categoryId){
            const itemsCollection = collection(db,"Items")
            const pedido = getDocs(itemsCollection)
            pedido
                .then(res=>setItems(res.docs.map(doc=>doc.data())))
                .catch(()=>{console.log("Hubo un error")})
                .finally(()=>{setLoading(false)})
        }else{
            const itemsCollection = collection(db,"Items")
            const filtro = query(itemsCollection,where("category","==",categoryId))
            const pedido = getDocs(filtro)
            pedido
                .then(res=>setItems(res.docs.map(doc=>doc.data())))
                .catch(()=>{console.log("Hubo un error")})
                .finally(()=>{setLoading(false)})
        }

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