import { useState , useEffect } from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { db } from "./Firebase"
import { collection, query, getDocs, where } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams()
    useEffect(() => {
        const itemsCollection = collection(db,"Items")
        const filtro = query(itemsCollection,where("id","==",Number(id)))
        const pedido = getDocs(filtro)
        pedido
        .then(res=>setItem(res.docs.map(doc=>doc.data())[0]))
        .catch(()=>{console.log("Hubo un error")})
        .finally(()=>{setLoading(false)})

    },[id])
    if(loading){
        return <h1>Cargando...</h1>
      }else{
    return(
        <>
        <ItemDetail producto={(item)} />
        </>
    )
      }
}

export default ItemDetailContainer